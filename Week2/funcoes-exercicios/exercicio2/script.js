console.log("****************************");
console.log("------- # Exercício 2 ------");
console.log("Declare e invoque as funções abaixo:\n");

let number1;
let number2;
const askNumber1 = "Insira o primeiro número:";
const askNumber2 = "Insira o segundo número:";

console.log(
  "a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função e verifique o resultado no console.\n"
);
const calcSum = function (number1, number2) {
  return `${number1} + ${number2} = ${number1 + number2}`;
};

number1 = Number(prompt(askNumber1));
number2 = Number(prompt(askNumber2));
console.log(calcSum(number1, number2));
console.log();

console.log(
  `b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.\n`
);
const checkTrueOrFalse = function (number1, number2) {
  return `${number1} > ${number2} = ${number1 > number2}`;
};

number1 = Number(prompt(askNumber1));
number2 = Number(prompt(askNumber2));
console.log(checkTrueOrFalse(number1, number2));
console.log();

console.log(
  `c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.\n`
);

const isEven = function (number) {
  return `O número "${number}" é par? ${number % 2 === 0}`;
};

const askNumber = "Digite um número para verificar se é par:";
let number = Number(prompt(askNumber));
console.log(isEven(number));
console.log();

console.log(
  `d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.\n`
);

const calcNetWage = function (grossWage) {
  return `Salário líquido: ${grossWage - grossWage * 0.1}`;
};

const askGrossSalary = "Qual é o salário bruto do funcionário?";
const grossSalaryTyped = Number(prompt(askGrossSalary));

console.log(calcNetWage(grossSalaryTyped));
console.log();
