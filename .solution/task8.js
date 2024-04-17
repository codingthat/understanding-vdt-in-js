let ingredients = new Map([
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
    return {
        ingredients: ingredientsForXServings,
        servingCount,
    };
}

let recipeForThree = multipliedRecipe(3, ingredients);

displayRecipe(recipeForThree);

// write all your code above this line

function displayRecipe(recipe) {
    let ingredientList = '';
    for (let [ingredientName, ingredientQuantityObject] of recipe.ingredients) {
        let ingredientQuantity = `${ingredientQuantityObject.quantity} ${ingredientQuantityObject.unitOfMeasurement}`;
        ingredientList += `- ${ingredientQuantity} ${ingredientName}\n`;    
    }
    
    let maybePlural = (recipe.servingCount === 1) ? '' : 's';
    console.log(`
My Recipe
---------

Ingredients (for ${recipe.servingCount} serving${maybePlural}):

${ingredientList}
`
    );
}