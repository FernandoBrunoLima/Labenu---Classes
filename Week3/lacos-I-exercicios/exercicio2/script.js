// Crie um programa que peça um número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

// Exemplo com entrada **`7`**:
// ```jsx
// 7
// 14
// 21
// 28
// 35
// 42
// 49
// 56
// 63
// 70
// ```

let number = Number(
  prompt("Digite um número para gerar sua tabuada de multiplicação:")
);

for (let i = 1; i <= 10; i++) {
  let multiply = number * i;
  console.log(`${number} X ${i} = ${multiply}`);
}
