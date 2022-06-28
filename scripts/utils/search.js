let results = recipes;
const mainSearch = document.querySelector("#main-search");
const ingredientSearch = document.querySelector("#ingredient-search");
const applianceSearch = document.querySelector("#appliance-search");
const ustensilsSearch = document.querySelector("#ustensils-search");
const searchResults = document.querySelector("#search-results");

function inputSearch() {
  let [ingredientsValue, appliances, ustensils] = readTags();
  search(
    recipes,
    mainSearch.value,
    ingredientsValue,
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

  let ingredientFound = true;

  ingredientsValue.forEach((e) => {
    if (!searchIngredients(e.toLowerCase(), element)) {
      ingredientFound = false;
    }
  });

  results = recipes.filter(function (element, index, array) {
    if (
      searchMain(mainValue.toLowerCase(), element) &&
      searchUstensils(ustensilsValue.toLowerCase(), element) &&
      searchAppliance(applianceValue.toLowerCase(), element) &&
      ingredientFound
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

function readTags() {
  let ingredientsValue = [];
  let applianceValue = [];
  let ustensilsValue = [];
  const tagsDOM = document.querySelectorAll(".tag");

  tagsDOM.forEach((e) => {
    if ((e.dataset.category = "ingredient")) {
      ingredientsValue.push(e.textContent);
    }
    if ((e.dataset.category = "appliance")) {
      applianceValue.push(e.textContent);
    }
    if ((e.dataset.category = "ustensil")) {
      ustensilsValue.push(e.textContent);
    }
  });

  return [ingredientsValue, applianceValue, ustensilsValue];
}


