

// write all your code above this line

let ingredientList = '';
for (let i = 0; i < ingredientNames.length; i++) {
    ingredientList += '- '
        + ingredientQuantities[i]
        + ' '
        + ingredientNames[i]
        + '\n';
}

console.log(`
My Recipe
---------

Ingredients (for 1 serving):

${ingredientList}
`);