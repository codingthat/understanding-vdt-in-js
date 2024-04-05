function multipliedRecipe(servingCount, ingredientsForOneServing) {
    let ingredientsForXServings = new Map();
    for (let [ingredientName, ingredientQuantityObject] of ingredientsForOneServing) {
        ingredientsForXServings.set(ingredientName, {
            quantity: ingredientQuantityObject.quantity * servingCount,
            unitOfMeasurement: ingredientQuantityObject.unitOfMeasurement
        });
    }
    return {
        ingredients: ingredientsForXServings,
        servingCount,
    };
}

let recipe = multipliedRecipe(3, new Map([
    ["water", { quantity: 1, unitOfMeasurement: "cup(s)"}],
    ["lemon juice concentrate", { quantity: 1.5, unitOfMeasurement: "tbsp"}],
]));

// write all your code above this line

let ingredientList = '';
for (let [ingredientName, ingredientQuantityObject] of recipe.ingredients) {
    let ingredientQuantity = `${ingredientQuantityObject.quantity} ${ingredientQuantityObject.unitOfMeasurement}`;
    ingredientList += `- ${ingredientQuantity} ${ingredientName}\n`;    
}

console.log(`
My Recipe
---------

Ingredients (for ${recipe.servingCount} serving(s)):

${ingredientList}
`);