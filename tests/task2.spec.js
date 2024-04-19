'use strict'
var o = require('ospec')

o.spec('first array declarations', function() {
    let taskName = require('path').basename(__filename, '.spec.js'),
        code = require('../.test-common')(taskName)
    o('names array is declared (exactly once)', function() {
        o(code.match(/\s*let\s+ingredientNames\s*=\s*\[\s*"water"\s*,\s*"lemon juice concentrate"\s*\]\s*;\s*$/m)?.length).equals(1)
    })
    o('quantities array is declared (exactly once)', function() {
        o(code.match(/\s*let\s+ingredientQuantities\s*=\s*\[\s*"1 cup"\s*,\s*"1\.5 tbsp"\s*\]\s*;\s*$/m)?.length).equals(1)
    })
})