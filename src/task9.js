
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