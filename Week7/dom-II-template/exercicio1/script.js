const addNewItemAtTheBeginning = () => {
  const newItem = document.createElement("li");

  const newContent = document.createTextNode("Item 0");

  newItem.appendChild(newContent);

  const currentUl = document.getElementById("lista");

  currentUl.insertAdjacentElement("afterbegin", newItem);
};

addNewItemAtTheBeginning();

const addNewItemAtTheEnd = () => {
  const newItem = document.createElement("li");

  const newContent = document.createTextNode("Item 5");

  newItem.appendChild(newContent);

  const currentUl = document.getElementById("lista");

  currentUl.insertAdjacentElement("beforeend", newItem);
};

addNewItemAtTheEnd();
