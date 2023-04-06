// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const newArray = array.filter((value) => value % 2 === 0);
  return newArray;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let newArray = array.filter((value) => value % 2 === 0);
  newArray = newArray.map((value) => value ** 2);
  return newArray;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let higher = -9999999;
  for (let number of array) {
    if (number > higher) {
      higher = number;
    }
  }
  return higher;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  const higher = Math.max(num1, num2);
  const smaller = Math.min(num1, num2);
  const higherDivisibleBySmaller = higher % smaller === 0;
  const higherLessSmaller = higher - smaller;

  const newObject = {
    maiorNumero: higher,
    maiorDivisivelPorMenor: higherDivisibleBySmaller,
    diferenca: higherLessSmaller,
  };
  return newObject;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  const evenNumbers = [];

  for (let i = 0; evenNumbers.length < n; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoA === ladoC) {
    return `Equilátero`;
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    return `Isósceles`;
  } else {
    return `Escaleno`;
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  const arrayOrdenado = array.sort((a, b) => a - b).reverse();
  //arrayOrdenado = arrayOrdenado.reverse();
  return [arrayOrdenado[1], arrayOrdenado[arrayOrdenado.length - 2]];
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  const nome = filme.nome;
  const ano = filme.ano;
  const diretor = filme.diretor;
  const atores = filme.atores.join(", ");
  return `Venha assistir ao filme ${nome}, de ${ano}, dirigido por ${diretor} e estrelado por ${atores}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const newObject = {
    ...pessoa,
    nome: "ANÔNIMO",
  };

  return newObject;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
