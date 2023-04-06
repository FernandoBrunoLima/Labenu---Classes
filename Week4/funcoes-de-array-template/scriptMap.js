// a função map() serve para transformar cada elemento do array em outro elemento

const frutas = [
  {
    nome: "Maçã",
    preco: 0.5,
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

function mudarValores(item) {
  const novoValor = {
    nome: item.nome,
    preco: item.preco * 2,
  };

  return novoValor;
}

//console.log(mudarValores(frutas[0]));

const novasFrutas = frutas.map(mudarValores);

console.log(novasFrutas);

// criando a função diretamente dentro do map
const novasFrutas2 = frutas.map((item) => {
  const novoItem = {
    nome: item.nome,
    preco: item.preco * 4,
    estoque: true,
  };

  return novoItem;
});

console.log(novasFrutas2);
