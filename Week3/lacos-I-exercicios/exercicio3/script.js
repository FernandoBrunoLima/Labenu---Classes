// # Exercício 3

// Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:

// ```jsx
// //entrada
// const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]

// //saída
// "1 - Rússia"
// "2 - Canadá"
// "3 - China"
// "4 - EUA"
// "5 - Brasil"
// ```

let movies2023 = [
  "Tudo em Todo Lugar ao Mesmo Tempo",
  "Nada de Novo no Front",
  "Avatar: O Caminho da Água",
  "Os Banshees de Inisherin",
  "Elvis",
];

for (let i = 0; i < movies2023.length; i++) {
  console.log(`${i + 1} - ${movies2023[i]}`);
}
