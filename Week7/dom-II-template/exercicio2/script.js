const escondeSenha = (event) => {
  event.preventDefault();

  const inputPassword = document.getElementById("password");
  inputPassword.setAttribute("type", "password");

  const myClass = document.querySelector(".light");
  myClass.classList.remove("light");
  myClass.classList.add("dark");
};
