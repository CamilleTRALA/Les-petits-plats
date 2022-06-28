let ingredientKeywords = [];
let applianceKeywords = [];
let ustensilsKeywords = [];

const applianceKeywordsDOM = document.querySelector(".appliance-keywords");
const expandArrowsDOM = document.querySelectorAll(".expand-arrow ");

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
  KeywordsDOM = dropdown.querySelector(".keywords");

  while (KeywordsDOM.firstChild) {
    KeywordsDOM.removeChild(KeywordsDOM.firstChild);
  }

  ingredientKeywordsSearch();
  applianceKeywordsSearch();
  ustensilsKeywordsSearch();

  switch (KeywordsDOM.dataset.keywords) {
    case "ingredient":
      keywords = ingredientKeywords;

      break;
    case "appliance":
      keywords = applianceKeywords;

      break;
    case "ustensils":
      keywords = ustensilsKeywords;

      break;
  }

  console.log("KeywordsDOM", KeywordsDOM.dataset.keywords);

  const input = dropdown.querySelector("input");

  if (keywords.length < 11) {
    KeywordsDOM.dataset.cols = "1";
    KeywordsDOM.classList.remove("row", "row-cols-1", "row-cols-md-3", "g-2");

    keywords.forEach((element) => {
      const keyword = document.createElement("div");
      keyword.addEventListener("click", function () {
        tagAdd(keyword.textContent, keyword.parentNode.dataset.keywords);
        keyword.parentNode.parentNode.input.value = element;
      });
      keyword.textContent = element;
      KeywordsDOM.appendChild(keyword);
    });
  } else {
    KeywordsDOM.dataset.cols = "3";
    KeywordsDOM.classList.add("row", "row-cols-1", "row-cols-md-3", "g-2");

    keywords.forEach((element) => {
      const keyword = document.createElement("div");
      keyword.addEventListener("click", function () {
        tagAdd(keyword.textContent, keyword.parentNode.dataset.keywords);
        console.log("TEST", input);

        input.value = element;
      });
      keyword.textContent = element;
      KeywordsDOM.appendChild(keyword);
    });
  }
}

function expandDropdown() {}

function dropdownFocusIn(event) {
  target = event.target;
  while (!target.classList.contains("ingredient-dropdown")) {
    target = target.parentNode;
  }

  console.log("target", target);

  keywords = target.querySelector(".keywords");

  if (keywords.dataset.cols === "3") {
    parentNode = target.parentNode;
    parentNode.classList.remove("col-2");
    parentNode.classList.add("col-8");
  }
}

function dropdownFocusOut(event) {
  target = event.target;
  while (!target.classList.contains("ingredient-dropdown")) {
    target = target.parentNode;
  }

  keywords = target.querySelector(".keywords");

  if (keywords.dataset.cols === "3") {
    parentNode = target.parentNode;
    parentNode.classList.remove("col-8");
    parentNode.classList.add("col-2");
  }
}
