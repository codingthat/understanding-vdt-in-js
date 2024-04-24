'use strict'
var o = require('ospec')

o.spec('first function declaration', function() {
    let taskName = require('path').basename(__filename, '.spec.js'),
        { code, templates } = require('../.test-common')(taskName)
    eval(code)
    let spy = templates.displayRecipeObject;
    o('map variable declared with let', function() {
        o(code.match(/\s*let\s+\S+\s*=\s*new\s+Map\s*\(\s*\[\s*\[/m)?.length).equals(1)
    })
    o('multiplier function is declared taking two parameters and inside it, new map is declared (exactly once)', function() {
        o(code.match(/\s*function\s+\S+\s*\(\s*\S+\s*,\s*\S+\s*\)\s*{\s*let\s+\S+\s*=\s*new\s+Map\s*\(\s*\)\s*;\s*$/m)?.length).equals(1)
    })
    o('for loop is declared (exactly once) and contains exactly one set() call that replaces objects', function() {
        o(code.match(/\s*for\s+\(\s*let\s+\[\s*\S+\s*,\s*\S+\s*\]\s*of\s+\S+\s*\)\s*{\s*\S+\.set\s*\(\s*\S+\s*,\s*{/m)?.length).equals(1)
    })
    o('return statement happens inside the function (exactly once)', function() {
        o(code.match(/\s*function\s+\S+\s*\(\s*\S+\s*,\s*\S+\s*\)\s*{.*return\s*{\s*/ms)?.length).equals(1)
    })
    o('multiplier function is called exactly once with exactly two parameters', function() {
        let functionName = code.match(/\s*function\s+(\S+)\s*\(\s*\S+\s*,\s*\S+\s*\)\s*{\s*let\s+\S+\s*=\s*new\s+Map\s*\(\s*\)\s*;\s*$/m)[1]
        o(code.match(new RegExp(`${functionName}\\s*\\(\\s*\\S+\\s*,\\s*\\S+\\s*\\)`))?.length).equals(1)
    })
    o('correct display function called exactly once', function() {
        o(spy.callCount).equals(1)
    })
    o('correct display function called with exactly one parameter', function() {
        o(spy.calls[0]?.args.length).equals(1)
    })
    o('parameter passed has required keys (and no more)', function() {
        o(spy.calls[0]?.args[0].hasOwnProperty('servingCount')).equals(true)
        o(spy.calls[0]?.args[0].hasOwnProperty('ingredientsForXServings')).equals(true)
        o(Object.keys(spy.calls[0]?.args[0]).length).equals(2)
    })
    o('parameter passed has correct values associated with required keys', function() {
        o(spy.calls[0]?.args[0].servingCount).equals(3)
        o(spy.calls[0]?.args[0].ingredientsForXServings.constructor.name).equals('Map')
        o(Array.from(spy.calls[0]?.args[0].ingredientsForXServings)).deepEquals([
            ["water", { quantity: 3, unitOfMeasurement: "cup(s)"}],
            ["lemon juice concentrate", { quantity: 4.5, unitOfMeasurement: "tbsp"}],
        ])
    })
})