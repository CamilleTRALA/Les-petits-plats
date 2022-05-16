mainSearch.addEventListener("input", mainSearchInputEvent);
ingredientSearch.addEventListener("input", ingredientSearchInputEvent);
applianceSearch.addEventListener("input", applianceSearchInputEvent);
ustensilsSearch.addEventListener("input", ustensilsSearchInputEvent);

function mainSearchInputEvent() {
  inputSearch();
  ingredientDropdown();
  applianceDropdown();
  ustensilsDropdown();
  displayResults();
}

function ingredientSearchInputEvent() {
  inputSearch();
  ingredientDropdown();
  applianceDropdown();
  ustensilsDropdown();
  displayResults();
}

function applianceSearchInputEvent() {
  inputSearch();
  ingredientDropdown();
  applianceDropdown();
  ustensilsDropdown();
  displayResults();
}

function ustensilsSearchInputEvent() {
  inputSearch();
  ingredientDropdown();
  applianceDropdown();
  ustensilsDropdown();
  displayResults();
}

async function init() {
  displayResults();
  ingredientKeywordsSearch();
  displayKeywords(ingredientDropdownDOM);
  applianceKeywordsSearch();
  displayKeywords(applianceDropdownDOM);
  ustensilsKeywordsSearch();
  displayKeywords(ustensilsDropdownDOM);
}

init();
