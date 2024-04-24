let templates = require('../.output-templates');

let ingredientsMap = new Map([
    ["water", { quantity: 1, unitOfMeasurement: "cup(s)"}],
    ["lemon juice concentrate", { quantity: 1.5, unitOfMeasurement: "tbsp"}],
]);

for (let [ingredientName, ingredientQuantityObject] of ingredientsMap) {
    ingredientsMap.set(ingredientName, {
        quantity: ingredientQuantityObject.quantity * 3,
        unitOfMeasurement: ingredientQuantityObject.unitOfMeasurement,
    });
}

templates.displayIngredientsMap(ingredientsMap, 3);