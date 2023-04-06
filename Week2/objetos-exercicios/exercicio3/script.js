//Observe o objeto abaixo e, utilizando o **espalhamento** (ou **spread**), resolva os exercícios a seguir:

const pokemon1 = {
  nome: "Bulbasaur",
  tipo: "Grama",
  nivel: 5,
};

//a) Crie uma **cópia** do objeto acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”.
const pokemon2 = {
  ...pokemon1,
  nome: "Squirtle",
  tipo: "Água",
};
console.log(pokemon2);
//b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** que deve começar vazio.
pokemon1.ataques = [];
console.log(pokemon1);
//c) Crie um objeto de `ataque` com a estrutura abaixo e **o adicione no array `ataques`**, utilizando `**push()**`:

// ```
// nome: "Investida",
// dano: 40,
// tipo: "Normal",
// precisao: 100
// ```

const ataque = {
  nome: "Investida",
  dano: 40,
  tipo: "Normal",
  precisao: 100,
};

pokemon1.ataques.push(ataque);
console.log(pokemon1);
//d) Na cópia do objeto original, ou seja, no objeto que representa o **Squirtle**, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade de mesmo nome criada para o objeto original.

pokemon2.ataques = [...pokemon1.ataques];

console.log(pokemon2);
//e) Para o objeto original, adicione no array de `ataques` o seguinte ataque: **“Folha Navalha”**, com **45 de dano**, **100 de precisão**, e do tipo **“Grama”**.
pokemon1.ataques = [
  ...pokemon1.ataques,
  { nome: "Folha Navalha", dano: 45, tipo: "Grama", precisão: 100 },
];

//f) Para a cópia, crie o `ataque` **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**; e adicione no array de `ataques`.
pokemon2.ataques = [
  ...pokemon2.ataques,
  { nome: "Jato de Água", dano: 40, tipo: "Água", precisão: 100 },
];

//g) Imprima ambos os objetos no console e verifique se todas as informações adicionadas aparecem na impressão.
console.log(pokemon1);
console.log(pokemon2);
