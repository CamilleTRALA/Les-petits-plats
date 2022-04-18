const mainSearch = document.querySelector("#main-search");
const ingredientSearch = document.querySelector("#ingredient-search");
const applianceSearch = document.querySelector("#appliance-search");
const ustensilsSearch = document.querySelector("#ustensils-search");
const searchResults = document.querySelector("#search-results");

mainSearch.addEventListener("input", function (e) {
  console.log(mainSearch.value);
});
ustensilsSearch.addEventListener("input", displayResults);

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

  let results = recipes.filter(function (element, index, array) {
    if (
      searchMain(mainValue, array[index]) &&
      searchUstensils(ustensilsValue, array[index]) &&
      searchAppliance(applianceValue, array[index]) &&
      searchIngredients(ingredientsValue, array[index])
    ) {
      return true;
    } else {
      return false;
    }
  });

  return results;
}

function searchTitle(searchString, recipe) {
  return recipe.name.toLowerCase().includes(searchString);
}

function searchDescription(searchString, recipe) {
  return recipe.description.toLowerCase().includes(searchString);
}

function searchMain(searchString, recipe) {
  return (
    searchTitle(searchString, recipe) ||
    searchIngredients(searchString, recipe) ||
    searchDescription(searchString, recipe)
  );
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

function displayResults() {
  let results = {};

  mainSearch.value = "0 minutes, ajoute";
  ingredientSearch.value = "Tomate";
  applianceSearch.value = "Saladier";
  ustensilsSearch.value = "presse citron";

  // mainSearch.value = "";
  ingredientSearch.value = "";
  applianceSearch.value = "";
  ustensilsSearch.value = "";

  results = search(
    recipes,
    mainSearch.value.toLowerCase(),
    ingredientSearch.value.toLowerCase(),
    applianceSearch.value.toLowerCase(),
    ustensilsSearch.value.toLowerCase()
  );

  console.log(results);
}

async function init() {
  displayResults();
}

init();
