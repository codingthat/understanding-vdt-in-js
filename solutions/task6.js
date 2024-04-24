let templates = require('../.output-templates');

let ingredientsMap = new Map([
    ["water", { quantity: 1, unitOfMeasurement: "cup(s)"}],
    ["lemon juice concentrate", { quantity: 1.5, unitOfMeasurement: "tbsp"}],
]);

templates.displayIngredientsMap(ingredientsMap);