let results = recipes;
const mainSearch = document.querySelector("#main-search");
const ingredientSearch = document.querySelector("#ingredient-search");
const applianceSearch = document.querySelector("#appliance-search");
const ustensilsSearch = document.querySelector("#ustensils-search");
const searchResults = document.querySelector("#search-results");

mainSearch.addEventListener("input", function (e) {
  console.log(mainSearch.value);
});
mainSearch.addEventListener("input", inputSearch);
ingredientSearch.addEventListener("input", inputSearch);
applianceSearch.addEventListener("input", inputSearch);
ustensilsSearch.addEventListener("input", inputSearch);

function inputSearch() {
  search(
    recipes,
    mainSearch.value,
    ingredientSearch.value,
    applianceSearch.value,
    ustensilsSearch.value
  );
}

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
