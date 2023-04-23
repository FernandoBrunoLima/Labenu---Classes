function submitValues() {
  const inputName = document.getElementById("nome").value;
  const inputEndereco = document.getElementById("endereco").value;
  const inputEmail = document.getElementById("email").value;

  console.log("Nome:", inputName);
  console.log("Endereço:", inputEndereco);
  console.log("E-mail:", inputEmail);

  document.getElementById("nome").value = "";
  document.getElementById("endereco").value = "";
  document.getElementById("email").value = "";
}
