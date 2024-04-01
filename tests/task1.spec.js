'use strict'
var o = require('ospec')

o.spec('first variable declarations', function() {
    let taskName = require('path').basename(__filename, '.spec.js'),
        code = require('../.test-common')(taskName)
    o('name variable is declared (exactly once)', function() {
        o(code.match(/\s*let\s+ingredientName\s*=\s*"water"\s*;\s*$/m)?.length).equals(1)
    })
    o('quantity variable is declared (exactly once)', function() {
        o(code.match(/\s*let\s+ingredientQuantity\s*=\s*"1 cup"\s*;\s*$/m)?.length).equals(1)
    })
})