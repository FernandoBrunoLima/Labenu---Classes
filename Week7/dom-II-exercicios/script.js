const adicionaItem = () => {
  const newItem = document.createElement("article");

  const currentContainer = document.getElementById("container");
  currentContainer.insertAdjacentElement("beforeend", newItem);

  newItem.classList.add("item");
  newItem.setAttribute("onclick", "removeItem(event)");
};

const removeItem = (event) => {
  event.target.remove();
};
