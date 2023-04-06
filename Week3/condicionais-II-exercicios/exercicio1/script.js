// # Exercício 1

// Crie um código que receba um número por **prompt** e verifique se esse número é divisível por 2 **ou** por 3.

// Faça isso:

// **a)** Utilizando ifs aninhados
// ```jsx
//     if(expressao){
//         if(expressao){

//         }
//     }

const number = Number(
  prompt("Digite um número para verificar se é divisível por 2 e 3:")
);

console.log("------- Usando if aninhados -------");

if (number % 2 === 0) {
  if (number % 3 === 0) {
    console.log("O número é divisível por 2 e 3");
  } else {
    console.log("O número é divisível por 2");
  }
} else if (number % 3 === 0) {
  console.log("O número é divisível por 3");
} else {
  console.log("O número não é divisível nem por 2 e nem por 3");
}

console.log("");
// ```
// **b)** Utilizando um operador lógico para unir duas operações relacionais
// ```jsx
//     if(expressao && expressao){
//         // utilizamos && para E

//     }

console.log("---- Usando operador lógico && ----");

if (number % 2 === 0 && number % 3 === 0) {
  console.log("O número é divisível por 2 e 3");
} else {
  console.log("O número não é divisível por 2 e 3");
}

console.log("");

//     if(expressao || expressao){
//         // utilizamos o II para OU
//     }
// ```
// //

console.log("---- Usando operador lógico || ----");

if (number % 2 === 0 || number % 3 === 0) {
  console.log("O número é divisível por 2 ou 3");
} else {
  console.log("O número não é divisível por 2 ou 3");
}

console.log("");
