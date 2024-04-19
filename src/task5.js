
// write all your code above this line

let ingredientList = '';
for (let [ingredientName, ingredientQuantity] of ingredients) {
    ingredientList += `- ${ingredientQuantity} ${ingredientName}\n`;    
}

console.log(`
My Recipe
---------

Ingredients (for 1 serving):

${ingredientList}
`);