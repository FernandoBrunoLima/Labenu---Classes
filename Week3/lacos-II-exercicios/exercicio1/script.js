const array = [
  [27, 4, 20, 13, 14],
  [11, 15, 12, 8, 9],
  [5, 5, 12, 16, 4],
  [20, 33, 11, 12, 19],
  [3, 3, 4, 5, 10],
];

for (let i = 0; i < array.length; i++) {
  //let result = `Jogador ${i + 1}: ${array[i][0]}`;
  // for (let j = 1; j < array[i].length; j++) {
  //   result += `, ${array[i][j]}`;
  // }
  console.log(`Jogador ${i + 1}: ${array[i].join(", ")}`);
}

/*

const atacantes = [
  ["Atacante A", [10, 5, 8, 12, 15]],
  ["Atacante B", [20, 17, 21, 19, 23]],
  ["Atacante C", [7, 8, 6, 10, 12]],
  ["Atacante D", [14, 15, 16, 13, 11]],
  ["Atacante E", [9, 11, 13, 8, 10]],
];
for (let i = 0; i < atacantes.length; i++) {
  const nomeAtacante = atacantes[i][0];
  const golsPorTemporada = atacantes[i][1];

  console.log(`\n${nomeAtacante}:`);
  for (let j = 0; j < golsPorTemporada.length; j++) {
    const temporada = j + 1;
    const gols = golsPorTemporada[j];
    console.log(`Temporada ${temporada}: ${gols} gols`);
  }
}
*/
