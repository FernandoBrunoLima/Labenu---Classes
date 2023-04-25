const insereItem = (event) => {
  // Impede que o formulário seja enviado e a página seja atualizada
  event.preventDefault();

  const newContent = document.getElementById("meu-input").value;

  const newLi = document.createElement("li");
  newLi.textContent = newContent;

  const currentUl = document.getElementById("lista");
  currentUl.appendChild(newLi);

  document.getElementById("meu-input").value = "";
};

// const insereItem = (event) => {
//   const input = document.getElementById("meu-input");
//   const conteudoInput = input.value;
//   const lista = document.getElementById("lista");

//   let novoItem = document.createElement("li");
//   novoItem.innerHTML = conteudoInput;

//   lista.insertAdjacentElement("beforeend", novoItem);
// };
