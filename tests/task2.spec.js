'use strict'
var o = require('ospec')

o.spec('first array declarations', function() {
    let taskName = require('path').basename(__filename, '.spec.js'),
        code = require('../.test-common')(taskName)
    o('names array is declared (exactly once)', function() {
        o(code.match(/let\s+ingredientNames\s*=\s*\["water",\s*"lemon juice concentrate"\s*\]\s*;\s*$/m)?.length).equals(1)
    })
    o('quantities array is declared (exactly once)', function() {
        o(code.match(/let\s+ingredientQuantities\s*=\s*\["1 cup",\s*"1 tbsp"\s*\]\s*;\s*$/m)?.length).equals(1)
    })
})