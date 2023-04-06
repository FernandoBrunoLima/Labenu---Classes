// Resolva o Exercício de Fixação!
const isOver18 = function (name, birthYear, currentYear) {
  name = prompt("Digite o nome");
  birthYear = Number(prompt("Digite o ano de nascimento"));
  currentYear = Number(prompt("Digite o ano atual"));

  const over18 = currentYear - birthYear >= 18;

  return `${name} é maior de idade? ${over18}`;
};

console.log(isOver18()); // Bruno - 1986 - 2023 (true)
console.log(isOver18()); // Alice - 2022 - 2023 (false)
