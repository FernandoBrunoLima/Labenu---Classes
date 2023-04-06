// Vamos criar um sistema em que a pessoa será solicitada a inserir vários números, um após o outro.

// Quando a pessoa digitar o número '0', devemos parar de solicitar novos inputs (entradas) e imprimir no console a soma de todos os números inseridos.

// Exemplo: A pessoa usuária colocou os números:  10, 3, 50, 7, 0
// O resultado deve ser: 70

let number,
  sum = 0;

while (number != 0) {
  number = Number(prompt(`Digite um número:`));
  sum += number;
}

console.log(sum);
console.log("");

// Vamos escrever um programa que recebe um número do usuário.
// Esse programa deve escrever os números de 0 até o valor que foi digitado pela pessoa.
// Para isso, vamos utilizar um laço for que roda por X vezes, onde X é o número digitado.

let userNumber = Number(prompt(`Digite um número para contar de 0 até ele:`));

for (let i = 0; i <= userNumber; i++) {
  console.log(i);
}
