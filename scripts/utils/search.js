let results = recipes;
const mainSearch = document.querySelector("#main-search");
const ingredientSearch = document.querySelector("#ingredient-search");
const applianceSearch = document.querySelector("#appliance-search");
const ustensilsSearch = document.querySelector("#ustensils-search");
const searchResults = document.querySelector("#search-results");

let ingredientsValue = [];
let applianceValue = [];
let ustensilsValue = [];

function search() {
  results = [];
  for (let i = 0; i < recipes.length; i++) {
    if (searchMain(recipes[i]) && searchTags(recipes[i])) {
      results.push(recipes[i]);
    }
  }
}

function stringMinLength(string, minLength) {
  if (string.length < minLength) {
    string = "";
  }

  return string;
}

function searchTitle(searchString, recipe) {
  return recipe.name.toLowerCase().includes(searchString);
}

function searchDescription(searchString, recipe) {
  return recipe.description.toLowerCase().includes(searchString);
}

function searchMain(recipe) {
  let searchString = mainSearch.value.toLocaleLowerCase();
  searchString = stringMinLength(searchString, 3);

  let result = true;
  const subStrings = searchString.split(/[, ]+/);

  for (let i = 0; i < subStrings.length; i++) {
    result =
      result &&
      (searchTitle(subStrings[i], recipe) ||
        searchIngredients(subStrings[i], recipe) ||
        searchDescription(subStrings[i], recipe));
  }

  return result;
}

function searchIngredients(searchString, recipe) {
  bool = false;
  for (let i = 0; i < recipe.ingredients.length; i++) {
    bool =
      bool ||
      recipe.ingredients[i].ingredient.toLowerCase().includes(searchString) ||
      searchString === "";
  }
  return bool;
}

function searchAppliance(searchString, recipe) {
  return (
    recipe.appliance.toLowerCase().includes(searchString) || searchString === ""
  );
}

function searchUstensils(searchString, recipe) {
  return (
    recipe.ustensils.find((element) =>
      element.toLowerCase().includes(searchString)
    ) || searchString === ""
  );
}

function searchTags(recipe) {
  [ingredientsValue, applianceValue, ustensilsValue] = readTags();

  if (
    ingredientsValue.every((elem) => searchIngredients(elem, recipe)) &&
    applianceValue.every((elem) => searchAppliance(elem, recipe)) &&
    ustensilsValue.every((elem) => searchUstensils(elem, recipe))
  ) {
    return true;
  } else {
    return false;
  }

  return true;
}
