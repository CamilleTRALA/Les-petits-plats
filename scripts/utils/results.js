const resultsDOM = document.querySelector(".search-results");



function displayResults() {
  console.log("displayResults");
  console.log(results);

  while (resultsDOM.firstChild) {
    resultsDOM.removeChild(resultsDOM.firstChild);
  }

  results.forEach((element) => {
    const colDOM = document.createElement("div");
    const row1DOM = document.createElement("div");
    const row2DOM = document.createElement("div");
    const cardDOM = document.createElement("div");
    const imgDOM = document.createElement("img");
    const cardBodyDOM = document.createElement("div");
    const cardTitleDOM = document.createElement("div");
    const cardTimeDOM = document.createElement("strong");
    const cardIngredientsDOM = ingredientsDOM(element.ingredients);
    const cardDescriptionDOM = descriptionDOM(element.description);

    colDOM.setAttribute("class", "col");
    row1DOM.setAttribute("class", "row mb-2");
    row2DOM.setAttribute("class", "row");
    cardDOM.setAttribute("class", "card");
    imgDOM.setAttribute("class", "card-img-top");
    imgDOM.setAttribute("alt", "");
    cardBodyDOM.setAttribute("class", "card-body");
    cardTitleDOM.setAttribute("class", "card-title col");
    cardTitleDOM.textContent = element.name;
    cardTimeDOM.setAttribute("class", "card-text card-time col-auto");
    cardTimeDOM.textContent = element.time + " min";
    cardIngredientsDOM.setAttribute("class", "card-text card-ingredients col");
    cardDescriptionDOM.setAttribute("class", "card-text card-description col");

    row1DOM.appendChild(cardTitleDOM);
    row1DOM.appendChild(cardTimeDOM);
    row2DOM.appendChild(cardIngredientsDOM);
    row2DOM.appendChild(cardDescriptionDOM);

    cardBodyDOM.appendChild(row1DOM);
    cardBodyDOM.appendChild(row2DOM);

    cardDOM.appendChild(imgDOM);
    cardDOM.appendChild(cardBodyDOM);
    colDOM.appendChild(cardDOM);
    resultsDOM.appendChild(colDOM);
  });
}

function ingredientsDOM(ingredients) {
  const ingredientsDOM = document.createElement("div");

  ingredients.forEach((element) => {
    const ingredientDOM = document.createElement("p");

    if (element.ingredient) {
      const ingredient = document.createElement("strong");
      ingredient.textContent = element.ingredient;
      ingredientDOM.appendChild(ingredient);
    }
    if (element.quantity) {
      const quantity = document.createElement("span");
      quantity.textContent = ": " + element.quantity;
      ingredientDOM.appendChild(quantity);
    }
    if (element.unit) {
      const unit = document.createElement("span");
      unit.textContent = element.unit;
      ingredientDOM.appendChild(unit);
    }

    ingredientDOM.setAttribute("class", "mb-0");
    ingredientsDOM.appendChild(ingredientDOM);
  });
  return ingredientsDOM;
}

function descriptionDOM(description) {
  const descriptionDOM = document.createElement("div");
  const descriptionLength = 170;

  if (description.length > descriptionLength) {
    descriptionDOM.textContent =
      CropString(description, descriptionLength) + "...";
  } else {
    descriptionDOM.textContent = description;
  }

  return descriptionDOM;

  function CropString(string, maxLength) {
    string = string.substring(0, maxLength);
    const lastIndexOfSpace = string.lastIndexOf(" ");
    if (lastIndexOfSpace === -1) {
      return string;
    }
    return string.substring(0, lastIndexOfSpace);
  }
}




