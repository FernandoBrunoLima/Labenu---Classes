/*const nome = "Bruno Lima";

console.log("Olá, mundo!");
console.log("Turma Faruqi no console"); 

const nome = "Bruno";
const sobrenome = "Lima";
const cidade = "Fortaleza";
const ddd = "85";

console.log(`Nome: ${nome} ${sobrenome}`);
console.log(`Cidade: ${cidade}`);
console.log(`DDD: ${ddd}`);

const question = "Você tem pet?";
const petCheck = confirm(question);
console.log(petCheck);

if (petCheck == true) {
  const nomeDoPet = prompt("Qual o nome do pet?");
  alert(`${nomeDoPet}. Fofin!!!`);
} else {
  alert("Adote um");
}*/
let nome = prompt("Qual é o seu nome?");
let valorDoSaque = Number(prompt("Insira o valor do saque: "));
let perguntarPorComprovante = "Deseja comprovante?";
let comprovante = confirm(perguntarPorComprovante);

console.log(comprovante);
console.log(typeof valorDoSaque);
