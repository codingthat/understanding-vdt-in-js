'use strict'
var o = require('ospec')

o.spec('first array declarations', function() {
    let taskName = require('path').basename(__filename, '.spec.js'),
        { code, templates } = require('../.test-common')(taskName)
    eval(code)
    let spy = templates.displaySiloedArrays;
    o('variables declared with let', function() {
        var letCount = code.match(/\s*let\s+\S+\s*=\s*\[/m)?.length
        o(letCount === 1 || letCount === 2).equals(true)
    })
    o('correct display function called exactly once', function() {
        o(spy.callCount).equals(1)
    })
    o('correct display function called with exactly two parameters', function() {
        o(spy.calls[0]?.args.length).equals(2)
    })
    o('correct parameters passed', function() {
        o(spy.calls[0]?.args).deepEquals([["water", "lemon juice concentrate"], ["1 cup", "1.5 tbsp"]])
    })
})