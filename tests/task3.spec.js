'use strict'
var o = require('ospec')

o.spec('first set declarations with a duplicate ingredient', function() {
    let taskName = require('path').basename(__filename, '.spec.js'),
        { code, templates } = require('../.test-common')(taskName)
    eval(code)
    let spy = templates.displaySiloedSets;
    o('variables declared with let', function() {
        var letCount = code.match(/\s*let\s+\S+\s*=\s*new\s+Set\s*\(\s*\[/m)?.length
        o(letCount === 1 || letCount === 2).equals(true)
    })
    o('names set is declared (exactly once) with duplicated lemon juice concentrate', function() {
        o(code.match(/\s+\S+\s*=\s*new\s+Set\s*\(\s*\[\s*"water"\s*,\s*"lemon juice concentrate"\s*,\s*"lemon juice concentrate"\s*\]\s*\)\s*;\s*$/m)?.length).equals(1)
    })
    o('quantities set is declared (exactly once) with duplicated 1.5 tbsp', function() {
        o(code.match(/\s*\S+\s*=\s*new\s+Set\s*\(\s*\[\s*"1 cup"\s*,\s*"1\.5 tbsp"\s*,\s*"1\.5 tbsp"\s*\]\s*\)\s*;\s*$/m)?.length).equals(1)
    })
    o('correct display function called exactly once', function() {
        o(spy.callCount).equals(1)
    })
    o('correct display function called with exactly two parameters', function() {
        o(spy.calls[0]?.args.length).equals(2)
    })
    o('correct parameters passed', function() {
        o(spy.calls[0]?.args[0].constructor.name).equals('Set')
        o(spy.calls[0]?.args[1].constructor.name).equals('Set')
        o(Array.from(spy.calls[0]?.args[0])).deepEquals(["water", "lemon juice concentrate"])
        o(Array.from(spy.calls[0]?.args[1])).deepEquals(["1 cup", "1.5 tbsp"])
    })
})