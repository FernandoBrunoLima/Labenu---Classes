const checaCaps = (event) => {
  const message = document.getElementById("mensagem");
  if (event.shiftKey) {
    message.textContent = "ATENÇÃO: SEGURANDO SHIFT";
  } else {
    message.textContent = "";
  }
};
