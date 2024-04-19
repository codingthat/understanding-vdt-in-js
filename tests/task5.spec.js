'use strict'
var o = require('ospec')

o.spec('first map declaration', function() {
    let taskName = require('path').basename(__filename, '.spec.js'),
        code = require('../.test-common')(taskName)
    o('ingredients map is declared (exactly once)', function() {
        o(code.match(/\s*let\s+ingredients\s*=\s*new\s+Map\s*\(\s*\[\s*\[\s*"water"\s*,\s*"1 cup"\s*\]\s*,\s*\[\s*"lemon juice concentrate"\s*,\s*"1\.5 tbsp"\s*\]\s*,\s*\]\s*\)\s*;\s*$/m)?.length).equals(1)
    })
})