// a função filter() serve para filtrar apenas os elementos que atendem a determinada condição.

const frutas = [
  {
    nome: "Maçã",
    preco: 1,
  },
  {
    nome: "Melancia",
    preco: 1,
  },
  {
    nome: "Manga",
    preco: 0.8,
  },
];

function procurarItem(item) {
  if (item.nome === "Melancia") {
    return item;
  }
}

// console.log(procurarItem(frutas[0]));
// console.log(procurarItem(frutas[1]));
// console.log(procurarItem(frutas[2]));

const itemFiltrado = frutas.filter(procurarItem);

console.log(itemFiltrado);

const itemFiltradoPorValor = frutas.filter((fruta) => {
  if (fruta.preco === 1) return fruta;
});

console.log(itemFiltradoPorValor);
