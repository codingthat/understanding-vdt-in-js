let ingredientNames = new Set(["water", "lemon juice concentrate", "lemon juice concentrate"]);
let ingredientQuantities = new Set(["1 cup", "1 tbsp", "1 tbsp"]);

// write all your code above this line

let ingredientList = '';
for (let ingredientNamesArray = new Array(ingredientNames),
         ingredientQuantitiesArray = new Array(ingredientQuantities),
         i = 0; i < ingredientNamesArray.length; i++) {
    ingredientList += '- '
        + ingredientQuantitiesArray[i]
        + ' '
        + ingredientNamesArray[i]
        + '\n';
}

console.log(`
My Recipe
---------

Ingredients (for 1 serving):

${ingredientList}
`);