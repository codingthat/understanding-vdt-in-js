let templates = require('../.output-templates');

let ingredientsMap = new Map([
    ["water", "1 cup"],
    ["lemon juice concentrate", "1.5 tbsp"],
]);

templates.displayIngredientsSimpleMap(ingredientsMap);