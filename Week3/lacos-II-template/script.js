// --------------- PRÁTICA GUIADA ---------------

const bimestre1 = [7, 8, 10, 5];
const bimestre2 = [8, 10, 5, 7];
const bimestre3 = [4, 7, 3, 2];
const bimestre4 = [3, 8, 10, 9];

const notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4];

// Como saída, o programa deve exibir os valores da média e da soma em uma mensagem parecida com essa:

// "A soma das notas do bimestre 1 é: 40
// A média do bimestre 1 é: 10"

// Exiba a mensagem acima para cada um dos bimestres.

// Dica:  para percorrer arrays dentro de arrays, utilize dois laços!

console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("~~~~~~~~~~~~~~~~~~ Prática guiada ~~~~~~~~~~~~~~~~~~~~~");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");

// com for aninhado
/*
for (let i = 0; i < notasDoAno.length; i++) {
  let soma = 0;
  for (let j = 0; j < notasDoAno[i].length; j++) {
    soma += notasDoAno[i][j];
  }
  console.log(
    `- A soma das notas do bimestre ${i + 1} é ${soma}\n- A media do bimestre ${
      i + 1
    } é ${soma / notasDoAno[i].length}`
  );
}
*/

// com for in e for of

for (let i in notasDoAno) {
  const valorBimestre = Number(i) + 1;
  let soma = 0;
  for (let nota of notasDoAno[i]) {
    soma += nota;
  }
  console.log(
    `- A soma das notas do bimestre ${valorBimestre} é ${soma}\n- A media do bimestre ${valorBimestre} é ${
      soma / notasDoAno[i].length
    }`
  );
}

// --------------- EXERCÍCIO DE FIXAÇÃO ---------------

// Utilizando o array de filmes que está no template, complete os exercícios abaixo:

// Crie um laço for para exibir o título, o ano e a pessoa diretora dos filmes como uma string:
// Exemplo de saída: “O Homem que copiava, de 2003, dirigido por Jorge Furtado”
// b. Crie um laço for dentro do primeiro, para concatenar o elenco numa string:
// 	Exemplo de saída:
// “O Homem que copiava, de 2003, dirigido por Jorge Furtado”
// “Ator/Atriz 1: Lázaro Ramos"
// "Ator/Atriz 2: Leandra Leal"
// "Ator/Atriz 3: Pedro Cardoso”

const filmes = [
  {
    titulo: "O Auto da Compadecida",
    ano: 2000,
    diretor: "Guel Arraes",
    elenco: [
      "Selton Mello",
      "Mateus Nachtergaele",
      "Marco Nanini",
      "Fernanda Montenegro",
    ],
  },
  {
    titulo: "Carandiru",
    ano: 2001,
    diretor: "Hector Babenco",
    elenco: [
      "Wagner Moura",
      "José Carlos Vasconcelos",
      "Ailton Graça",
      "Caio Blat",
    ],
  },
  {
    titulo: "Aquarius",
    ano: 2012,
    diretor: "Kléber Mendonça Filho",
    elenco: [
      "Sônia Braga",
      "Humberto Carrão",
      "Maeve Jinkings",
      "Bárbara Colen",
    ],
  },
];

// escreva seu código abaixo 👇🏻
console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("~~~~~~~~~~~~~~~~ Exercicio Fixação ~~~~~~~~~~~~~~~~~~~~");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
for (let i = 0; i < filmes.length; i++) {
  console.log(
    `${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`
  );
  for (let j = 0; j < filmes[i].elenco.length; j++) {
    console.log(filmes[i].elenco[j]);
  }
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}

// for (let i in filmes) {
//   let filme, ano, diretor;
//   filme = filmes[i][j];
//   ano = ano[i][j];
//   diretor = diretor[i][j];
//   for (let j in filmes[i])
//     console.log(`${filme}, de ${ano}, dirigido por ${diretor}`);
// }
