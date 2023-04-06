/* Parte 1

let nome;
let idade;

console.log(typeof nome); //undefined
console.log(typeof idade); // undefined

nome = prompt("Insira o seu nome:");
idade = Number(prompt("Insira a sua idade"));

console.log(nome);
console.log(idade);

console.log(typeof nome); //string
console.log(typeof idade); //number

console.log(`Olá, ${nome}, você tem ${idade} anos.`);
*/

// Parte 2

const pergunta1 = "Você gosta de chocolate?";
const pergunta2 = "Você tomou banho hoje?";
const pergunta3 = "Você tem pets?";

const resposta1 = prompt(pergunta1);
const resposta2 = prompt(pergunta2);
const resposta3 = prompt(pergunta3);

console.log(`${pergunta1}: ${resposta1}`);
console.log(`${pergunta2}: ${resposta2}`);
console.log(`${pergunta3}: ${resposta3}`);
