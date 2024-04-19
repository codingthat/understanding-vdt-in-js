
// write all your code above this line

let ingredientList = '';
for (let [ingredientName, ingredientQuantityObject] of ingredients) {
    let ingredientQuantity = `${ingredientQuantityObject.quantity} ${ingredientQuantityObject.unitOfMeasurement}`;
    ingredientList += `- ${ingredientQuantity} ${ingredientName}\n`;    
}

console.log(`
My Recipe
---------

Ingredients (for 1 serving):

${ingredientList}
`);