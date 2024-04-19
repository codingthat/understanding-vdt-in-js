
// write all your code above this line

let ingredientList = '';
for (let i = 0; i < ingredientNames.length; i++) {
    let ingredientName = ingredientNames[i];
    let ingredientQuantity = ingredientQuantities[i];
    ingredientList += `- ${ingredientQuantity} ${ingredientName}\n`;
}

console.log(`
My Recipe
---------

Ingredients (for 1 serving):

${ingredientList}
`);