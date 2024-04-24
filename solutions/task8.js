let templates = require('../.output-templates');

let ingredientsMap = new Map([
    ["water", { quantity: 1, unitOfMeasurement: "cup(s)"}],
    ["lemon juice concentrate", { quantity: 1.5, unitOfMeasurement: "tbsp"}],
]);

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

let recipeForThree = multipliedRecipe(3, ingredientsMap);

templates.displayRecipeObject(recipeForThree);