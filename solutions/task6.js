let ingredients = new Map([
    ["water", { quantity: 1, unitOfMeasurement: "cup(s)"}],
    ["lemon juice concentrate", { quantity: 1.5, unitOfMeasurement: "tbsp"}],
]);

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