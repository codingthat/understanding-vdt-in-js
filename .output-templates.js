module.exports = {
    // helpers
    formatIngredient(ingredientName, ingredientQuantity) {
        return `- ${ingredientQuantity} ${ingredientName}\n`;
    },
    displayIngredientList(ingredientList, servingCount = 1) {
        let maybePlural = (servingCount === 1) ? '' : 's';
        console.log(`
My Recipe
---------

Ingredients (for ${servingCount} serving${maybePlural}):

${ingredientList}
`
        );
    },
    // tasks
    displayFirstIngredient(ingredientName, ingredientQuantity) {
        this.displayIngredientList(this.formatIngredient(ingredientName, ingredientQuantity));
    },
    displaySiloedArrays(ingredientNamesArray, ingredientQuantitiesArray) {
        let ingredientList = '';
        for (let i = 0; i < ingredientNamesArray.length; i++) {
            ingredientList += this.formatIngredient(ingredientNamesArray[i], ingredientQuantitiesArray[i]);
        }
        this.displayIngredientList(ingredientList);
    },
    displaySiloedSets(ingredientNamesSet, ingredientQuantitiesSet) {
        this.displaySiloedArrays(Array.from(ingredientNamesSet), Array.from(ingredientQuantitiesSet));
    },
    displayIngredientsObject(ingredientsObject) {
        let ingredientList = '';
        for (let ingredientName in ingredientsObject) {
            let ingredientQuantity = ingredientsObject[ingredientName];
            ingredientList += this.formatIngredient(ingredientName, ingredientQuantity);
        }
        this.displayIngredientList(ingredientList);
    },
    displayIngredientsSimpleMap(ingredientsMap) {
        let ingredientList = '';
        for (let [ingredientName, ingredientQuantity] of ingredientsMap) {
            ingredientList += this.formatIngredient(ingredientName, ingredientQuantity);
        }
        this.displayIngredientList(ingredientList);
    },
    displayIngredientsMap(ingredientsMap, servingCount) {
        let ingredientList = '';
        for (let [ingredientName, ingredientQuantityObject] of ingredientsMap) {
            let ingredientQuantity = `${ingredientQuantityObject.quantity} ${ingredientQuantityObject.unitOfMeasurement}`;
            ingredientList += this.formatIngredient(ingredientName, ingredientQuantity);
        }
        this.displayIngredientList(ingredientList, servingCount);
    },
    displayRecipeObject(recipe) {
        let ingredientList = '';
        for (let [ingredientName, ingredientQuantityObject] of recipe.ingredientsForXServings) {
            let ingredientQuantity = `${ingredientQuantityObject.quantity} ${ingredientQuantityObject.unitOfMeasurement}`;
            ingredientList += this.formatIngredient(ingredientName, ingredientQuantity);    
        }
        this.displayIngredientList(ingredientList, recipe.servingCount);
    },
}