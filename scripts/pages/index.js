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
