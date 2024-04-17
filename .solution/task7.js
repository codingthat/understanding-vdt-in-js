let ingredients = new Map([
    ["water", { quantity: 1, unitOfMeasurement: "cup(s)"}],
    ["lemon juice concentrate", { quantity: 1.5, unitOfMeasurement: "tbsp"}],
]);

for (let [ingredientName, ingredientQuantityObject] of ingredients) {
    ingredients.set(ingredientName, {
        quantity: ingredientQuantityObject.quantity * 3,
        unitOfMeasurement: ingredientQuantityObject.unitOfMeasurement,
    });
}

// write all your code above this line

let ingredientList = '';
for (let [ingredientName, ingredientQuantityObject] of ingredients) {
    let ingredientQuantity = `${ingredientQuantityObject.quantity} ${ingredientQuantityObject.unitOfMeasurement}`;
    ingredientList += `- ${ingredientQuantity} ${ingredientName}\n`;    
}

console.log(`
My Recipe
---------

Ingredients (for 3 servings):

${ingredientList}
`);