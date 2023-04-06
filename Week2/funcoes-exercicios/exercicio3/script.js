console.log("# Exercício 3\n");

//a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).\n"

const calcSum = function (number1, number2) {
  const result = number1 + number2;

  return `${number1} + ${number2} = ${result}`;
};

const calcMinus = function (number1, number2) {
  const result = number1 - number2;

  return `${number1} - ${number2} = ${result}`;
};

const calcMultiply = function (number1, number2) {
  const result = number1 * number2;

  return `${number1} x ${number2} = ${result}`;
};

const calcDivide = function (number1, number2) {
  const result = number1 / number2;

  return `${number1} / ${number2} = ${result.toFixed(2)}`;
};
/*
let number1 = 5;
let number2 = 2;
console.log(calcSum(number1, number2));
console.log(calcMinus(number1, number2));
console.log(calcMultiply(number1, number2));
console.log(calcDivide(number1, number2)); */

//b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.\n"

console.log("Insira dois números:");
const number1 = Number(prompt("Insira o primeiro número:"));
const number2 = Number(prompt("Insira o segundo número:"));
console.log(`Primeiro número inserido: ${number1}`);
console.log(`Segundo número inserido: ${number2}`);
console.log();

//c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.\n"

const resultSum = calcSum(number1, number2);
const resultMinus = calcMinus(number1, number2);
const resultMultiply = calcMultiply(number1, number2);
const resultDivide = calcDivide(number1, number2);

//d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.\n"
console.log(resultSum);
console.log(resultMinus);
console.log(resultMultiply);
console.log(resultDivide);
