const number = Number(prompt("Digite um número"));

arrayTabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i in arrayTabuada) {
  console.log(`${number} x ${arrayTabuada[i]} = ${arrayTabuada[i] * number}`);
}
