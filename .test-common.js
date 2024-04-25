'use strict'

var o = require('ospec'),
    fs = require('fs')

module.exports = function getCode(taskName) {
    let start = "let templates = require('../.output-templates');\n",
        filename = process.env.TEST_TARGET_DIR
            ? `${process.env.TEST_TARGET_DIR}/main.js`
            : `solutions/${taskName}.js`,
        code = fs.readFileSync(`${__dirname}/${filename}`).toString()
    o('code is written below require line as required (original code is left untouched)', function checkStart() {
        o(code.startsWith(start)).equals(true)
    })
    delete require.cache[require.resolve('./.output-templates')]; // otherwise dev-test reuses the spies
    let templates = require('./.output-templates')
    for (let f in templates) {
        templates[f] = o.spy(templates[f]);
    }    
    return {
        code: code.substring(start.length),
        templates
    }
}