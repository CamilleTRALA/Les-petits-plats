function tagAdd(str, category) {
  tagsDOM = document.querySelector(".tags");

  const tag = document.createElement("div");
  const text = document.createElement("span");
  const cancel = document.createElement("span");

  tag.setAttribute("class", "tag");
  tag.dataset.category = category;
  text.setAttribute("class", "text");
  cancel.setAttribute("class", "cancel material-symbols-outlined");

  text.textContent = str;
  cancel.textContent = "cancel";

  cancel.addEventListener("click", tagRemove);

  tag.appendChild(text);
  tag.appendChild(cancel);
  tagsDOM.appendChild(tag);
}

function tagRemove(event) {
  target = event.target.parentNode;
  target.remove();
  search();
  update();
}

function readTags() {
  ingredientsValue = [];
  applianceValue = [];
  ustensilsValue = [];

  const tagsDOM = document.querySelectorAll(".tag");

  tagsDOM.forEach((e) => {
    if (e.dataset.category === "ingredient") {
      ingredientsValue.push(
        e.querySelector(".text").textContent.toLocaleLowerCase()
      );
    }
    if (e.dataset.category === "appliance") {
      applianceValue.push(
        e.querySelector(".text").textContent.toLocaleLowerCase()
      );
    }
    if (e.dataset.category === "ustensils") {
      ustensilsValue.push(
        e.querySelector(".text").textContent.toLocaleLowerCase()
      );
    }
  });

  return [ingredientsValue, applianceValue, ustensilsValue];
}
