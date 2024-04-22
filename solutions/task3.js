let ingredientNames = new Set(["water", "lemon juice concentrate", "lemon juice concentrate"]);
let ingredientQuantities = new Set(["1 cup", "1.5 tbsp", "1.5 tbsp"]);

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