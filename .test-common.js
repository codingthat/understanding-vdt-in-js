'use strict'

var o = require('ospec'),
    fs = require('fs')

module.exports = function getCode(taskName) {
    let start = fs.readFileSync(`${__dirname}/.solution/${taskName}.js`).toString().match(/\/\/ write all your code above this line.*/m)[0],
        code = fs.readFileSync(`${__dirname}/${process.env.TEST_TARGET_DIR ?? '.solution'}/${taskName}.js`).toString()
    o('code is written above comment line as required (original code is left untouched)', function checkStart() {
        o(code.includes(start)).equals(true)
    })
    return code
}