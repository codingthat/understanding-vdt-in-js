let templates = require('../.output-templates');

let ingredientNamesDeduped = new Set(["water", "lemon juice concentrate", "lemon juice concentrate"]);
let ingredientQuantitiesDeduped = new Set(["1 cup", "1.5 tbsp", "1.5 tbsp"]);

templates.displaySiloedSets(ingredientNamesDeduped, ingredientQuantitiesDeduped);