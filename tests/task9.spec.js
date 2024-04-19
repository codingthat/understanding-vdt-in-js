'use strict'
var o = require('ospec')

o.spec('wrapper function declaration', function() {
    let taskName = require('path').basename(__filename, '.spec.js'),
        code = require('../.test-common')(taskName)
    o('ingredients map with object values is declared (exactly once)', function() {
        o(code.match(/\s*let\s+ingredients\s*=\s*new\s+Map\s*\(\s*\[\s*\[\s*"water"\s*,\s*{\s*quantity\s*:\s*1\s*,\s*unitOfMeasurement\s*:\s*"cup\s*\(\s*s\s*\)\s*"\s*}\s*\]\s*,\s*\[\s*"lemon juice concentrate"\s*,\s*{\s*quantity\s*:\s*1\.5\s*,\s*unitOfMeasurement\s*:\s*"tbsp"\s*}\s*\]\s*,\s*\]\s*\)\s*;\s*$/m)?.length).equals(1)
    })
    o('multiplier function is declared and inside it, new map is declared (exactly once)', function() {
        o(code.match(/\s*function\s+multipliedRecipe\s*\(\s*servingCount\s*,\s*ingredientsForOneServing\s*\)\s*{\s*let\s+ingredientsForXServings\s*=\s*new\s+Map\s*\(\s*\)\s*;\s*$/m)?.length).equals(1)
    })
    o('for loop is declared (exactly once) and contains exactly one set() call that associates objects in the new map as required', function() {
        o(code.match(/\s*for\s+\(\s*let\s+\[\s*ingredientName\s*,\s*ingredientQuantityObject\s*\]\s*of\s+ingredientsForOneServing\s*\)\s*{\s*ingredientsForXServings\.set\s*\(\s*ingredientName\s*,\s*{\s*quantity\s*:\s*ingredientQuantityObject\.quantity\s*\*\s*servingCount\s*,\s*unitOfMeasurement\s*:\s*ingredientQuantityObject\.unitOfMeasurement\s*,\s*}\s*\)\s*;\s*$/m)?.length).equals(1)
    })
    o('return statement happens inside the function (exactly once)', function() {
        o(code.match(/\s*function\s+multipliedRecipe\s*\(\s*servingCount\s*,\s*ingredientsForOneServing\s*\)\s*{.*return\s*{\s*ingredients\s*:\s*ingredientsForXServings\s*,\s*servingCount\s*,\s*}\s*;\s*$/ms)?.length).equals(1)
    })
    o('wrapper function is declared and accomplishes nested calls as required (exactly once)', function() {
        o(code.match(/\s*}\s*function\s+multiplyAndDisplayRecipe\s*\(\s*servingCount\s*\)\s*{\s*displayRecipe\s*\(\s*multipliedRecipe\s*\(\s*servingCount\s*,\s*ingredients\s*\)\s*\)\s*;\s*}\s*$/m)?.length).equals(1)
    })
    o('wrapper function is called as required (exactly thrice)', function() {
        o(code.match(/\s*multiplyAndDisplayRecipe\s*\(\s*1\s*\)\s*;\s*$/m)?.length).equals(1)
        o(code.match(/\s*multiplyAndDisplayRecipe\s*\(\s*3\s*\)\s*;\s*$/m)?.length).equals(1)
        o(code.match(/\s*multiplyAndDisplayRecipe\s*\(\s*12\s*\)\s*;\s*$/m)?.length).equals(1)
    })
})