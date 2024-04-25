'use strict'
var o = require('ospec')

o.spec('wrapper function declaration', function() {
    let taskName = require('path').basename(__filename, '.spec.js'),
        { code, templates } = require('../.test-common')(taskName),
        expectedCallValues = [1, 3, 12]
    eval(code)
    let spy = templates.displayRecipeObject;
    o('multiplier function is declared taking two parameters and inside it, new map is declared (exactly once)', function() {
        o(code.match(/\s*function\s+\S+\s*\(\s*\S+\s*,\s*\S+\s*\)\s*{\s*let\s+\S+\s*=\s*new\s+Map\s*\(\s*\)\s*;\s*$/m)?.length).equals(1)
    })
    o('for loop is declared (exactly once) and contains exactly one set() call that replaces objects', function() {
        o(code.match(/\s*for\s+\(\s*let\s+\[\s*\S+\s*,\s*[^\]]+\s*\]\s*of\s+\S+\s*\)\s*{[^\}]*\S+\.set\s*\(\s*\S+\s*,\s*{/m)?.length).equals(1)
    })
    o('return statement happens inside the function (exactly once)', function() {
        o(code.match(/\s*function\s+\S+\s*\(\s*\S+\s*,\s*\S+\s*\)\s*{.*return\s*{\s*/ms)?.length).equals(1)
    })
    o('multiplier function is called exactly once with exactly two parameters', function() {
        let functionName = code.match(/\s*function\s+(\S+)\s*\(\s*\S+\s*,\s*\S+\s*\)\s*{\s*let\s+\S+\s*=\s*new\s+Map\s*\(\s*\)\s*;\s*$/m)[1]
        o(code.match(new RegExp(`${functionName}\\s*\\(\\s*\\S+\\s*,\\s*\\S+\\s*\\)`))?.length).equals(1)
    })
    o('wrapper function is declared taking one parameter', function() {
        o(code.match(/\s*function\s+\S+\s*\(\s*\S+\s*\)\s*{\s*/m)?.length).equals(1)
    })
    o('map variable declared with let within wrapper function', function() {
        o(code.match(/\s*function\s+\S+\s*\(\s*\S+\s*\)\s*{\s*let\s+\S+\s*=\s*new\s+Map\s*\(\s*\[\s*\[/m)?.length).equals(1)
    })
    o('wrapper function is called exactly three times with correct parameter each time', function() {
        let functionName = code.match(/\s*function\s+(\S+)\s*\(\s*\S+\s*\)\s*{\s*/m)[1]
        for (let value of expectedCallValues) {
            o(code.match(new RegExp(`${functionName}\\s*\\(\\s*${value}\\s*\\)`))?.length).equals(1)
        }
    })
    o('correct display function indirectly called exactly thrice', function() {
        o(spy.callCount).equals(3)
    })
    o.spec('call checks', function() {
        for (let i in expectedCallValues ) {
            o(`correct display function called time #${i} with exactly one parameter`, function() {
                o(spy.calls[i]?.args.length).equals(1)
            })
            o(`parameter passed time #${i} has required keys (and no more)`, function() {
                o(spy.calls[i]?.args[0].hasOwnProperty('servingCount')).equals(true)
                o(spy.calls[i]?.args[0].hasOwnProperty('ingredientsForXServings')).equals(true)
                o(Object.keys(spy.calls[i]?.args[0]).length).equals(2)
            })
            o(`parameter passed time #${i} has correct values associated with required keys`, function() {
                o(spy.calls[i]?.args[0].servingCount).equals(expectedCallValues[i])
                o(spy.calls[i]?.args[0].ingredientsForXServings.constructor.name).equals('Map')
                o(Array.from(spy.calls[i]?.args[0].ingredientsForXServings)).deepEquals([
                    ["water", { quantity: expectedCallValues[i], unitOfMeasurement: "cup(s)"}],
                    ["lemon juice concentrate", { quantity: 1.5 * expectedCallValues[i], unitOfMeasurement: "tbsp"}],
                ])
            })
        }
    })
})