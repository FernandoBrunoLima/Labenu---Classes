let paragrafoP = document.getElementById("paragrafo").innerHTML;
console.log(paragrafoP);

const showCharTyped = () => {
  console.log(document.getElementById("texto").value);
};

const changeValue = () => {
  const newValue = document.getElementById("paragrafo");
  newValue.innerHTML = `Olá, ${document.getElementById("texto").value}!`;
};
