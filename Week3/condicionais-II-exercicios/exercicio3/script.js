//Reescreva os códigos do arquivo `script.js` utilizando o **if ternário**.
//códigos a serem reescritos

// a)
// if(nome === "José"){
// 	console.log("Oi, Zé!")
// } else {
// 	console.log("Olá, " + nome)
// }
const nome = prompt("Insira seu primeiro nome: ");

nome === "José" ? console.log("Oi, Zé!") : console.log("Olá, " + nome);

// b)
// if(idade >= 18){
// 	console.log("Pode tirar carteira de motorista!")
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista!")
// }
const idade = prompt("Insira sua idade: ");

idade >= 18
  ? console.log("Pode tirar carteira de motorista!")
  : console.log("Ainda não pode tirar carteira de motorista!");
