let ingredients = {
    "water": "1 cup",
    "lemon juice concentrate": "1.5 tbsp",
};

// write all your code above this line

let ingredientList = '';
for (let ingredientName in ingredients) {
    let ingredientQuantity = ingredients[ingredientName];
    ingredientList += `- ${ingredientQuantity} ${ingredientName}\n`;    
}

console.log(`
My Recipe
---------

Ingredients (for 1 serving):

${ingredientList}
`);