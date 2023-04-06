//Construa um programa que:

//a) Peça ao usuário que insira um número **par**
const askEvenNumber = "Insira um número par:";
const answerEvenNumber = Number(prompt(askEvenNumber));
//b) Imprima no console **o resto da divisão** desse número por 2.
const modNumberByTwo = answerEvenNumber % 2;
console.log(modNumberByTwo);
//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// Todos os resultados são 0 (zero)
//d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código.
//O resultado será 1
//>💡  **Dica**:   não se esqueça de **converter** as respostas para o tipo número
