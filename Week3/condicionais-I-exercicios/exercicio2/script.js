"use strict";
// Escreva uma função que receba três valores. Uma idade, um booleano que responde se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.
// Crie um `if` para cada variável, checando as seguintes afirmacões:
// - Se a pessoa tem 18 anos ou mais;
// - Se a pessoa terminou o ensino médio;
// - Se a pessoa NÃO está cursando alguma faculdade;

// Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

// <details>

// <summary>Exemplo</summary>

// Caso a primeira pessoa tenha idade >= 18:

// <b>"A pessoa é maior de idade"</b>

// e caso não seja:

// <b>"A pessoa é menor de idade"</b>

// </details>

function checkEducationLevel() {
  let result1, result2, result3;

  const askAge = Number(prompt("Insira sua idade:"));
  const askHasHighSchool = prompt(
    "Tem Ensino Médio Completo?\nResponda sim ou não:"
  ).toLowerCase();
  const askHasCollege = prompt(
    "Não tem faculdade?\nResponda sim ou não:"
  ).toLowerCase();

  const userAge = askAge;
  const hasHighSchool = askHasHighSchool;
  const hasCollege = askHasCollege;

  if (userAge >= 18) {
    result1 = "A pessoa é maior de idade";
  } else {
    result1 = "A pessoa é menor de idade";
  }

  if (hasHighSchool === "sim") {
    result2 = "A pessoa tem ensino médio";
  } else {
    result2 = "A pessoa não tem ensino médio";
  }

  if (hasCollege !== "sim") {
    result3 = "A pessoa não tem faculdade";
  } else {
    result3 = "A pessoa tem faculdade";
  }

  console.log(result1);
  console.log(result2);
  console.log(result3);
}

checkEducationLevel();
