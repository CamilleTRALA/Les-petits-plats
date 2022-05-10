let ingredientKeywords = [];
let applianceKeywords = [];
let ustensilsKeywords = [];

const ingredientDropdownDOM = document.querySelector(".ingredient");
const applianceDropdownDOM = document.querySelector(".appliance");
const ustensilsDropdownDOM = document.querySelector(".ustensils");

ingredientSearch.addEventListener("input", ingredientDropdown);
applianceSearch.addEventListener("input", applianceDropdown);
ustensilsSearch.addEventListener("input", ustensilsDropdown);

const applianceKeywordsDOM = document.querySelector(".appliance-keywords");

function ingredientDropdown() {
  ingredientKeywordsSearch();
  displayKeywords(ingredientDropdownDOM);
}
function applianceDropdown() {
  applianceKeywordsSearch();
  displayKeywords(applianceDropdownDOM);
}
function ustensilsDropdown() {
  ustensilsKeywordsSearch();
  displayKeywords(ustensilsDropdownDOM);
}

function ingredientKeywordsSearch() {
  ingredientKeywords = [];

  results.forEach((element) => {
    element.ingredients.forEach((element) => {
      if (
        element.ingredient
          .toLocaleLowerCase()
          .includes(ingredientSearch.value.toLocaleLowerCase())
      ) {
        ingredientKeywords.push(element.ingredient);
      }
    });
  });

  ingredientKeywords = new Set(ingredientKeywords);
  ingredientKeywords = [...ingredientKeywords];
}

function applianceKeywordsSearch() {
  applianceKeywords = [];

  results.forEach((element) => {
    if (
      element.appliance
        .toLocaleLowerCase()
        .includes(applianceSearch.value.toLocaleLowerCase())
    ) {
      applianceKeywords.push(element.appliance);
      console.log(element.appliance);
    }
  });

  applianceKeywords = new Set(applianceKeywords);
  applianceKeywords = [...applianceKeywords];
}

function ustensilsKeywordsSearch() {
  ustensilsKeywords = [];

  results.forEach((element) => {
    element.ustensils.forEach((element) => {
      if (
        element
          .toLocaleLowerCase()
          .includes(ustensilsSearch.value.toLocaleLowerCase())
      ) {
        ustensilsKeywords.push(element);
      }
    });
  });

  ustensilsKeywords = new Set(ustensilsKeywords);
  ustensilsKeywords = [...ustensilsKeywords];
}

function displayKeywords(dropdown) {
  console.log("displayKeywords");
  console.log(dropdown.querySelector(".keywords"));

  KeywordsDOM = dropdown.querySelector(".keywords");

  while (KeywordsDOM.firstChild) {
    KeywordsDOM.removeChild(KeywordsDOM.firstChild);
  }

  if (KeywordsDOM.dataset.keywords === "ingredient") {
    keywords = ingredientKeywords;
  } else if (KeywordsDOM.dataset.keywords === "appliance") {
    keywords = applianceKeywords;
  } else if (KeywordsDOM.dataset.keywords === "ustensils") {
    keywords = ustensilsKeywords;
  }

  keywords.forEach((element) => {
    const keyword = document.createElement("div");
    keyword.addEventListener("click", function () {
      applianceSearch.value = element;
    });
    keyword.textContent = element;
    KeywordsDOM.appendChild(keyword);
  });
}
