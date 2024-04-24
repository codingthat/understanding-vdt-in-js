'use strict'
var o = require('ospec')

o.spec('first map declaration with objects as values', function() {
    let taskName = require('path').basename(__filename, '.spec.js'),
        { code, templates } = require('../.test-common')(taskName)
    eval(code)
    let spy = templates.displayIngredientsMap;
    o('variable declared with let', function() {
        o(code.match(/\s*let\s+\S+\s*=\s*new\s+Map\s*\(\s*\[\s*\[/m)?.length).equals(1)
    })
    o('correct display function called exactly once', function() {
        o(spy.callCount).equals(1)
    })
    o('correct display function called with exactly one parameter', function() {
        o(spy.calls[0]?.args.length).equals(1)
    })
    o('correct parameter passed', function() {
        o(spy.calls[0]?.args[0].constructor.name).equals('Map')
        o(Array.from(spy.calls[0]?.args[0])).deepEquals([
            ["water", { quantity: 1, unitOfMeasurement: "cup(s)"}],
            ["lemon juice concentrate", { quantity: 1.5, unitOfMeasurement: "tbsp"}],
        ])
    })
})