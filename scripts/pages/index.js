const ingredientDropdownDOM = document.querySelector(".ingredient.dropdown");
const applianceDropdownDOM = document.querySelector(".appliance.dropdown");
const ustensilsDropdownDOM = document.querySelector(".ustensils.dropdown");

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
  displayKeywords(ingredientDropdownDOM);
  displayKeywords(applianceDropdownDOM);
  displayKeywords(ustensilsDropdownDOM);

  ingredientDropdownDOM.addEventListener("focusin", dropdownFocusIn);
  ingredientDropdownDOM.addEventListener("blur", dropdownFocusOut);
  
}

init();
