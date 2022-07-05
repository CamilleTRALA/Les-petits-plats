let ingredientKeywords = [];
let applianceKeywords = [];
let ustensilsKeywords = [];

const appliancekeywordsDOM = document.querySelector(".appliance-keywords");
const expandArrowsDOM = document.querySelectorAll(".expand-arrow ");

function ingredientDropdown() {
  displayKeywords(ingredientDropdownDOM);
}
function applianceDropdown() {
  displayKeywords(applianceDropdownDOM);
}
function ustensilsDropdown() {
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
  const keywordsDOM = dropdown.querySelector(".keywords");
  const input = dropdown.querySelector("input");

  while (keywordsDOM.firstChild) {
    keywordsDOM.removeChild(keywordsDOM.firstChild);
  }

  ingredientKeywordsSearch();
  applianceKeywordsSearch();
  ustensilsKeywordsSearch();

  switch (keywordsDOM.dataset.keywords) {
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

  keywords.forEach((element) => {
    const keyword = document.createElement("div");
  });

  if (keywords.length < 11) {
    keywordsDOM.dataset.cols = "1";
    keywordsDOM.classList.remove("row", "row-cols-1", "row-cols-md-3", "g-2");
    keywordsDOM.classList.add("row", "row-cols-1", "row-cols-md-1", "g-2");
    keywordsDOM.parentNode.parentNode.classList.remove("col-8");
    keywordsDOM.parentNode.parentNode.classList.add("col-2");
  } else {
    keywordsDOM.dataset.cols = "3";
    keywordsDOM.classList.remove("row", "row-cols-1", "row-cols-md-1", "g-2");
    keywordsDOM.classList.add("row", "row-cols-1", "row-cols-md-3", "g-2");
  }

  keywords.forEach((element) => {
    const keyword = document.createElement("div");
    keyword.classList.add("col");
    keyword.addEventListener("click", function () {
      tagAdd(keyword.textContent, keyword.parentNode.dataset.keywords);
      search();
      update();
      input.value = "";
    });
    keyword.textContent = element;
    keywordsDOM.appendChild(keyword);
  });
}

function dropdownFocusIn(event) {
  target = event.target;
  while (!target.classList.contains("dropdown")) {
    target = target.parentNode;
  }

  keywords = target.querySelector(".keywords");

  if (keywords.dataset.cols === "3") {
    parentNode = target.parentNode;
    parentNode.classList.remove("col-2");
    parentNode.classList.add("col-8");
  }

  // Placeholder
  const input = target.querySelector("input");
  input.placeholder = input.dataset.placeholderFocus;

  // Arrow icon
  const arrow = target.querySelector(".material-symbols-outlined");
  arrow.textContent = "expand_less";
}

function dropdownFocusOut(event) {
  target = event.target;
  while (!target.classList.contains("dropdown")) {
    target = target.parentNode;
  }

  keywords = target.querySelector(".keywords");

  parentNode = target.parentNode;
  parentNode.classList.remove("col-8");
  parentNode.classList.add("col-2");

  // Placeholder
  const input = target.querySelector("input");
  input.placeholder = input.dataset.placeholder;

  // Arrow icon
  const arrow = target.querySelector(".material-symbols-outlined");
  arrow.textContent = "expand_more";
}

function dropdownInputEvent() {
  const dropdownAll = document.querySelectorAll(".dropdown");

  dropdownAll.forEach((e) =>
    e.querySelector(".input").addEventListener("input", function () {
      displayKeywords(e);
    })
  );
}
function dropdownFocusEvent() {
  ingredientDropdownDOM.addEventListener("focusin", dropdownFocusIn);
  ingredientDropdownDOM.addEventListener("focusout", dropdownFocusOut);
  applianceDropdownDOM.addEventListener("focusin", dropdownFocusIn);
  applianceDropdownDOM.addEventListener("focusout", dropdownFocusOut);
  ustensilsDropdownDOM.addEventListener("focusin", dropdownFocusIn);
  ustensilsDropdownDOM.addEventListener("focusout", dropdownFocusOut);
}
