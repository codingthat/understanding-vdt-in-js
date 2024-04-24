let templates = require('../.output-templates');

function multipliedRecipe(servingCount, ingredientsForOneServing) {
    let ingredientsForXServings = new Map();
    for (let [ingredientName, ingredientQuantityObject] of ingredientsForOneServing) {
        ingredientsForXServings.set(ingredientName, {
            quantity: ingredientQuantityObject.quantity * servingCount,
            unitOfMeasurement: ingredientQuantityObject.unitOfMeasurement,
        });
    }
    return { servingCount, ingredientsForXServings };
}

function multiplyAndDisplayLemonWaterRecipe(servingCount) {
    let ingredientsMap = new Map([
        ["water", { quantity: 1, unitOfMeasurement: "cup(s)"}],
        ["lemon juice concentrate", { quantity: 1.5, unitOfMeasurement: "tbsp"}],
    ]);
    templates.displayRecipeObject(multipliedRecipe(servingCount, ingredientsMap));
}

multiplyAndDisplayLemonWaterRecipe(1);
multiplyAndDisplayLemonWaterRecipe(3);
multiplyAndDisplayLemonWaterRecipe(12);