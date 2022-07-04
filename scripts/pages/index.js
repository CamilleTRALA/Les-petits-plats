const ingredientDropdownDOM = document.querySelector(".ingredient.dropdown");
const applianceDropdownDOM = document.querySelector(".appliance.dropdown");
const ustensilsDropdownDOM = document.querySelector(".ustensils.dropdown");

mainSearch.addEventListener("input", mainSearchInputEvent);

function mainSearchInputEvent() {
  search();
  ingredientDropdown();
  applianceDropdown();
  ustensilsDropdown();
  displayResults();
}

function update() {
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

  dropdownFocusEvent();

  dropdownInputEvent();
}

init();
