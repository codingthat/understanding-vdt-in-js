'use strict'
var o = require('ospec')

o.spec('first map declaration with objects as values', function() {
    let taskName = require('path').basename(__filename, '.spec.js'),
        code = require('../.test-common')(taskName)
    o('ingredients map with object values is declared (exactly once)', function() {
        o(code.match(/\s*let\s+ingredients\s*=\s*new\s+Map\s*\(\s*\[\s*\[\s*"water"\s*,\s*{\s*quantity\s*:\s*1\s*,\s*unitOfMeasurement\s*:\s*"cup\s*\(\s*s\s*\)\s*"\s*}\s*\]\s*,\s*\[\s*"lemon juice concentrate"\s*,\s*{\s*quantity\s*:\s*1\.5\s*,\s*unitOfMeasurement\s*:\s*"tbsp"\s*}\s*\]\s*,\s*\]\s*\)\s*;\s*$/m)?.length).equals(1)
    })
})