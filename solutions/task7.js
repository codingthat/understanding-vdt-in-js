let templates = require('../.output-templates');

let ingredientsMap = new Map([
    ["water", { quantity: 1, unitOfMeasurement: "cup(s)"}],
    ["lemon juice concentrate", { quantity: 1.5, unitOfMeasurement: "tbsp"}],
]);

for (let [ingredientName, ingredientQuantityObject] of ingredientsMap) {
    ingredientsMap.set(ingredientName, {
        quantity: ingredientQuantityObject.quantity * 3,
        unitOfMeasurement: ingredientQuantityObject.unitOfMeasurement,
    });
}

// or using intermediate variables:
/*

for (let [ingredientName, ingredientQuantityObject] of ingredientsMap) {
    let newQuantity = ingredientQuantityObject.quantity * 3,
        unitOfMeasurement = ingredientQuantityObject.unitOfMeasurement; 
    ingredientsMap.set(ingredientName, {
        quantity: newQuantity,
        unitOfMeasurement: unitOfMeasurement,
    });
}

*/

// or using both array _and_ object destructuring:
/*

for (let [ingredientName, {quantity, unitOfMeasurement}] of ingredientsMap) {
    ingredientsMap.set(ingredientName, {
        quantity: quantity * 3,
        unitOfMeasurement: unitOfMeasurement,
    });
}

*/

templates.displayIngredientsMap(ingredientsMap, 3);