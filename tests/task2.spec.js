'use strict'

var o = require('ospec'),
    fs = require('fs'),
    path = require('path'),
    taskName = path.basename(__filename, '.spec.js')

o.spec('first array declarations', function() {
    let code,
        start = fs.readFileSync(`${__dirname}/../.start/${taskName}.js`).toString().trim()
    o.before(function getDirAndLoadCode() {
        code = fs.readFileSync(`${__dirname}/../${process.env.TEST_TARGET_DIR ?? '.solution'}/${taskName}.js`).toString()
    })
    o('names array is declared (exactly once)', function() {
        o(code.match(/let\s+ingredientNames\s*=\s*\["water",\s*"lemon juice concentrate"\s*\]\s*;\s*$/m)?.length).equals(1)
    })
    o('quantity variable is declared (exactly once)', function() {
        o(code.match(/let\s+ingredientQuantities\s*=\s*\["1 cup",\s*"1 tbsp"\s*\]\s*;\s*$/m)?.length).equals(1)
    })
    o('code is written above comment line as required (original code is left untouched)', function() {
        o(code.includes(start)).equals(true)
    })
})