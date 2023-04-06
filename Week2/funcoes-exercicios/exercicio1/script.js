//# Exercício 1

//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
console.log("*********************************");
console.log("-------- Exercício 1 - a) -------");
console.log("*********************************");
console.log();
function sayHi(name) {
  console.log(`Olá, ${name}!`);
}

const askName = "Qual é o seu nome?";
const userName = prompt(askName);
sayHi(userName);
console.log();

//b) Declare uma função que receba um número como parâmetro e imprima no console a tabuada de 1 a 10 dele. Chame esta função várias vezes com números diferentes.
console.log("*********************************");
console.log("-------- Exercício 1 - b) -------");
console.log("*********************************");
console.log();

const askNumber = "Digite um número para gerar sua tabuada:";
const numberTyped = Number(prompt(askNumber));
const askOperator =
  'Digite o operador desejado:\n somar: "+"\nsubtrair: "-"\nmultiplicar: "*"\ndividir: "/"';
console.log();
const operatorTyped = prompt(askOperator);
/*
function calculateTable(number, operator) {
  let result;
  console.log(`------- Tabuada do ${number} de ${operator} -------`);

  if (operator === "+" || operator === "*") {
    for (let i = 1; i <= 10; i++) {
      switch (operator) {
        case "+":
          result = number + 1;
          break;
        case "*":
          result = number * 1;
          break;
        default:
          console.log("Operador inválido, tente novamente");
      }
      console.log(`${i} ${operator} ${number} = ${result} `);
    }
  }

  if (operator === "-") {
    for (let i = 1, j = number + 1; i <= 10; i++, j++) {
      result = j - number;
      console.log(`${j} ${operator} ${number} = ${i} `);
    }
  }

  if (operator === "/") {
    for (let i = 1, j = number; i <= 10; i++, j = j + number) {
      result = j / number;
      console.log(`${j} ${operator} ${number} = ${i} `);
    }
  }
}

calculateTable(5, "/");*/
//c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__
let calculateTable = function (number, operator) {
  let result;
  console.log(`------- Tabuada do ${number} de ${operator} -------`);

  if (operator === "+" || operator === "*") {
    for (let i = 1; i <= 10; i++) {
      switch (operator) {
        case "+":
          result = number + i;
          break;
        case "*":
          result = number * i;
          break;
        default:
          console.log("Operador inválido, tente novamente");
      }
      if (operator === "*")
        console.log(`${i} ${operator} ${number} = ${result} `);
      if (operator === "+")
        console.log(`${number} ${operator} ${i} = ${result} `);
    }
  }

  if (operator === "-") {
    for (let i = 1, j = number + 1; i <= 10; i++, j++) {
      result = j - number;
      console.log(`${j} ${operator} ${number} = ${i} `);
    }
  }

  if (operator === "/") {
    for (let i = 1, j = number; i <= 10; i++, j = j + number) {
      result = j / number;
      console.log(`${j} ${operator} ${number} = ${i} `);
    }
  }
};

calculateTable(numberTyped, operatorTyped);
/*
calculateTable = (number, operator) => {
  let result;
  console.log(`------- Tabuada do ${number} de ${operator} -------`);

  if (operator === "+" || operator === "*") {
    for (let i = 1; i <= 10; i++) {
      switch (operator) {
        case "+":
          result = number + i;
          break;
        case "*":
          result = number * i;
          break;
        default:
          console.log("Operador inválido, tente novamente");
      }
      if (operator === "*")
        console.log(`${i} ${operator} ${number} = ${result} `);
      if (operator === "+")
        console.log(`${number} ${operator} ${i} = ${result} `);
    }
  }

  if (operator === "-") {
    for (let i = 1, j = number + 1; i <= 10; i++, j++) {
      result = j - number;
      console.log(`${j} ${operator} ${number} = ${i} `);
    }
  }

  if (operator === "/") {
    for (let i = 1, j = number; i <= 10; i++, j = j + number) {
      result = j / number;
      console.log(`${j} ${operator} ${number} = ${i} `);
    }
  }
};

console.log(calculateTable(numberTyped, operatorTyped));
*/
