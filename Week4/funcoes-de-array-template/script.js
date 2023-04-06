const pokemons = [
  { nome: "Bulbasaur", tipo: "grama", vida: 40 },
  { nome: "Bellsprout", tipo: "grama", vida: 20 },
  { nome: "Charmander", tipo: "fogo", vida: 35 },
  { nome: "Vulpix", tipo: "fogo", vida: 25 },
  { nome: "Squirtle", tipo: "água", vida: 45 },
  { nome: "Psyduck", tipo: "água", vida: 25 },
];

// Com o array de pokémons disponibilizado, faça o que se pede:
// Declare uma função que receba como parâmetro o objeto poke, e que defina a propriedade vida como 100.

const fillLife = (poke) => {
  const pokeUpdated = {
    ...poke,
    vida: 100,
  };

  return pokeUpdated;
};

// Utilize o map() e a função criada no item 1 para alterar a propriedade vida de todos os objetos do array pokemons. Guarde o novo array numa variável pokemonsVidaCheia.
const pokemonsVidaCheia = pokemons.map(fillLife);
console.log(pokemonsVidaCheia);

// Utilize o filter() e uma função não-nomeada para retornar apenas os pokémons de fogo. Guarde o novo array numa variável pokemonsDeFogo.

const pokemonsDeFogo = pokemonsVidaCheia.filter((poke) => {
  return poke.tipo === "fogo";
});

//console.log(pokemons);
console.log(pokemonsDeFogo);
