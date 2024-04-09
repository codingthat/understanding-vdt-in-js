

// write all your code above this line

let ingredientList = '';
for (let ingredientNamesArray = Array.from(ingredientNames),
         ingredientQuantitiesArray = Array.from(ingredientQuantities),
         i = 0; i < ingredientNamesArray.length; i++) {
    let ingredientName = ingredientNamesArray[i];
    let ingredientQuantity = ingredientQuantitiesArray[i];
    ingredientList += `- ${ingredientQuantity} ${ingredientName}\n`;
}

console.log(`
My Recipe
---------

Ingredients (for 1 serving):

${ingredientList}
`);