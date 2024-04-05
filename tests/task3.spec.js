'use strict'
var o = require('ospec')

o.spec('first set declarations with a duplicate ingredient', function() {
    let taskName = require('path').basename(__filename, '.spec.js'),
        code = require('../.test-common')(taskName)
    o('names set is declared (exactly once)', function() {
        o(code.match(/let\s+ingredientNames\s*=\s*new\s+Set\(\s*\["water",\s*"lemon juice concentrate"\s*,\s*"lemon juice concentrate"\s*\]\s*\)\s*;\s*$/m)?.length).equals(1)
    })
    o('quantities set is declared (exactly once)', function() {
        o(code.match(/let\s+ingredientQuantities\s*=\s*new\s+Set\(\s*\["1 cup",\s*"1 tbsp"\s*,\s*"1 tbsp"\s*\]\s*\)\s*;\s*$/m)?.length).equals(1)
    })
})