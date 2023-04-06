// # Exercício 1

// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.

let wantCoxinha = prompt(
  'Você quer coxinha? Digite "S" para sim e "N" para não'
).toLowerCase();

let conta = 0;

while (wantCoxinha == "s") {
  conta = conta + 2.5;
  wantCoxinha = prompt(
    'Você quer coxinha? Digite "S" para sim e "N" para não'
  ).toLowerCase();
}
console.log(conta.toFixed(2));
