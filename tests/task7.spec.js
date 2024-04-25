'use strict'
var o = require('ospec')

o.spec('tripling the ingredients', function() {
    let taskName = require('path').basename(__filename, '.spec.js'),
        { code, templates } = require('../.test-common')(taskName)
    eval(code)
    let spy = templates.displayIngredientsMap;
    o('variable declared with let', function() {
        o(code.match(/\s*let\s+\S+\s*=\s*new\s+Map\s*\(\s*\[\s*\[/m)?.length).equals(1)
    })
    o('for loop is declared (exactly once) and contains exactly one set() call that replaces objects', function() {
        o(code.match(/\s*for\s+\(\s*let\s+\[\s*\S+\s*,\s*[^\]]+\s*\]\s*of\s+\S+\s*\)\s*{\s*\S+\.set\s*\(\s*\S+\s*,\s*{/m)?.length).equals(1)
    })
    o('correct display function called exactly once', function() {
        o(spy.callCount).equals(1)
    })
    o('correct display function called with exactly two parameters', function() {
        o(spy.calls[0]?.args.length).equals(2)
    })
    o('first parameter passed correctly', function() {
        o(spy.calls[0]?.args[0].constructor.name).equals('Map')
        o(Array.from(spy.calls[0]?.args[0])).deepEquals([
            ["water", { quantity: 3, unitOfMeasurement: "cup(s)"}],
            ["lemon juice concentrate", { quantity: 4.5, unitOfMeasurement: "tbsp"}],
        ])
    })
    o('second parameter passed correctly', function() {
        o(spy.calls[0]?.args[1]).equals(3)
    })
})