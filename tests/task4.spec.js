'use strict'
var o = require('ospec')

o.spec('first object declaration', function() {
    let taskName = require('path').basename(__filename, '.spec.js'),
        { code, templates } = require('../.test-common')(taskName)
    eval(code)
    let spy = templates.displayIngredientsObject;
    o('variable declared with let', function() {
        o(code.match(/\s*let\s+\S+\s*=\s*\{/m)?.length).equals(1)
    })
    o('correct display function called exactly once', function() {
        o(spy.callCount).equals(1)
    })
    o('correct display function called with exactly one parameter', function() {
        o(spy.calls[0]?.args.length).equals(1)
    })
    o('correct parameter passed', function() {
        o(spy.calls[0]?.args[0].constructor.name).equals('Object')
        o(spy.calls[0]?.args[0]).deepEquals({
            "water": "1 cup",
            "lemon juice concentrate": "1.5 tbsp",
        })
    })
})