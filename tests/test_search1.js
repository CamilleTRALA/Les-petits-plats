let results = recipes;
const mainValue = "citron saladier cuillère";
const ingredientsValue = "";
const applianceValue = "";
const ustensilsValue = "";

function search(
  recipes,
  mainValue,
  ingredientsValue,
  applianceValue,
  ustensilsValue
) {
  console.log(
    "Search => main = '",
    mainValue,
    "' | ingredients = '",
    ingredientsValue,
    "' | appliance = '",
    applianceValue,
    "' | ustensils = '",
    ustensilsValue,
    "'"
  );

  results = recipes.filter(function (element, index, array) {
    if (
      searchMain(mainValue, element) &&
      searchUstensils(ustensilsValue, element) &&
      searchAppliance(applianceValue, element) &&
      searchIngredients(ingredientsValue, element)
    ) {
      return true;
    } else {
      return false;
    }
  });
}

function stringMinLength(string, minLength) {
  if (string.length < minLength) {
    string = "";
  }
  console.log(string.length, minLength, string);
  return string;
}

function searchTitle(searchString, recipe) {
  return recipe.name.toLowerCase().includes(searchString);
}

function searchDescription(searchString, recipe) {
  return recipe.description.toLowerCase().includes(searchString);
}

function searchMain(searchString, recipe) {
  searchString = stringMinLength(searchString, 3);

  let result = true;
  const subStrings = searchString.split(/[, ]+/);
  subStrings.forEach((element) => {
    result =
      result &&
      (searchTitle(element, recipe) ||
        searchIngredients(element, recipe) ||
        searchDescription(element, recipe));
  });

  return result;
}

function searchUstensils(searchString, recipe) {
  return recipe.ustensils.find(
    (element) =>
      element.toLowerCase().includes(searchString) || searchString === ""
  );
}

function searchAppliance(searchString, recipe) {
  return recipe.appliance.toLowerCase().includes(searchString);
}

function searchIngredients(searchString, recipe) {
  return (
    recipe.ingredients.find((element) =>
      element.ingredient.toLowerCase().includes(searchString)
    ) || searchString === ""
  );
}

search(recipes, mainValue, ingredientsValue, applianceValue, ustensilsValue);
console.log(results);

