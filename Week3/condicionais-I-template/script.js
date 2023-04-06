/*
// Crie duas variáveis booleanas, booleano1 e booleano2, e atribua respectivamente os valores true e false
// Crie um if para verificar se booleano1 é true e exiba um alert caso positivo.
// Crie um else que exiba um alert caso não seja true.

const booleano1 = true;
const booleano2 = false;

// if (booleano1) {
//   alert(`booleano1 é igual a true`);
// } else {
//   alert(`booleano1 é igual a false`);
// }

// if (!booleano2) {
//   alert(`booleano2 é igual a false`);
// } else {
//   alert(`booleano2 é igual a true`);
// }

// Comente as condicionais anteriores
// Crie uma terceira variável chamada booleano3, com valor true
// Crie um if que verifica se booleano1 e booleano2 são iguais e exiba um alert caso positivo
// Crie um else if que verifica se booleano2 e booleano3 são iguais e exiba um alert caso positivo
// Crie mais um else if que verifica se booleano1 e booleano3 são iguais e exiba um alert.
// Crie um else que exiba um alert caso não existam valores iguais.

const booleano3 = true;

if (booleano1 === booleano2) {
  alert("Booleano1 é igual a booleano2");
} else if (booleano2 === booleano3) {
  alert("Booleano1 é igual a booleano2");
} else if (booleano1 === booleano3) {
  alert("Booleano1 é igual a booleano3");
} else {
  alert("Não existem valores iguais");
}
*/

// Crie uma variável idade e atribua um valor a ela.
// Agora crie uma lógica com os requisitos abaixo:
// Pode votar: pessoas com 18 anos ou mais
// Não pode votar: pessoas menores de 18 anos
// Casos facultativos:
// Pessoas com idade entre 16 e 17 anos
// Pessoas com 70 anos ou mais

const idade = 15;
/*
if (idade >= 18) {
  if (idade >= 70) {
    console.log(`Voto facultativo`);
  } else {
    console.log(`Voto obrigatório`);
  }
} else if (idade < 18) {
  if (idade >= 16) {
    console.log(`Voto facultativo`);
  } else {
    console.log(`Não pode votar`);
  }
}
*/
/*
if (idade >= 18 && idade < 70) {
  console.log(`Voto obrigatório`);
} else if (idade >= 16 || idade > 70) {
  console.log(`Voto facultativo`);
} else {
  console.log(`Não pode votar`);
}
*/

// Crie uma variável chamada média, e atribua a ela um valor numérico entre 0 e 10
// Crie um if que verifica se a média é maior ou igual a 5. Caso seja, imprima que a pessoa foi aprovada
// Adicione um else que imprime que a pessoa foi reprovada se a condição não for atendida
// Adicione um else if antes de reprovar, que verifica se a média é maior ou igual a 3. Caso seja, imprima “Recuperação”.
// Altere o último else para que ele também seja um else if que verifica se a nota é menor que três para exibir “Estudante reprovade”.
// Adicione um último else, que imprima “dado inválido” caso nenhuma das condições anteriores seja atendida.

const media = -5;

if (media >= 5 && media <= 10) {
  console.log("Aprovado");
} else if (media >= 3 && media < 5) {
  console.log("Recuperação");
} else if (media >= 0 && media < 3) {
  console.log("Reprovado");
} else {
  console.log("Dado inválido");
}
