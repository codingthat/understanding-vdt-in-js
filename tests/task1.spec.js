'use strict'

var o = require('ospec'),
    fs = require('fs'),
    path = require('path'),
    taskName = path.basename(__filename, '.spec.js')

o.spec('first variable declarations', function() {
    let code,
        start = fs.readFileSync(`${__dirname}/../.start/${taskName}.js`).toString().trim()
    o.before(function getDirAndLoadCode() {
        code = fs.readFileSync(`${__dirname}/../${process.env.TEST_TARGET_DIR ?? '.solution'}/${taskName}.js`).toString()
    })
    o('name variable is declared (exactly once)', function() {
        o(code.match(/\s*let\s+ingredientName\s*=\s*"water"\s*;\s*$/m)?.length).equals(1)
    })
    o('quantity variable is declared (exactly once)', function() {
        o(code.match(/\s*let\s+ingredientQuantity\s*=\s*"1 cup"\s*;\s*$/m)?.length).equals(1)
    })
    o('code is written above comment line as required (original code is left untouched)', function() {
        o(code.includes(start)).equals(true)
    })
})