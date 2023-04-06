//Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
const askFirstNumber = "Insira o primeiro número";
const askSecondNumber = "Insira o segundo número";

const answerFirstNumber = Number(prompt(askFirstNumber));
const answerSecondNumber = Number(prompt(askSecondNumber));

//```
//O primeiro numero é maior que o segundo? true
console.log(answerFirstNumber > answerSecondNumber);
//O primeiro numero é igual ao segundo? false
console.log(answerFirstNumber === answerSecondNumber);
//O primeiro numero é divisível pelo segundo? true
console.log(answerFirstNumber % answerSecondNumber === 0);
//O segundo numero é divisível pelo primeiro? true
console.log(answerSecondNumber % answerFirstNumber === 0);
//divisível = com resto zero

//Obs: A resposta (true ou false) vai depender dos números inseridos e do resultado das operações. As respostas colocadas acima são apenas exemplos!
