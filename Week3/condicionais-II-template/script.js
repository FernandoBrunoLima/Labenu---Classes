/*
// Vocês foram contratades para criar um programa para o Labank. Vamos verificar se o dependente do usuário tem entre 13 e 17 anos para aprovar a solicitação de cartão de crédito vinculado.
// Faremos de duas formas:
//     a. Utilizando ifs aninhados

const idadeDependente = prompt(`Idade da pessoa dependente:`);
if (idadeDependente >= 13) {
  console.log(`Entrou no if de 13`);
  if (idadeDependente <= 17) {
    console.log(`A pessoa dependente pode ter o cartão vinculado ao seu`);
  } else {
    console.log(
      `A pessoa dependente tem idade maior que 17, consulte opções do Labank`
    );
  }
} else {
  console.log(
    `A pessoa dependente tem menos de 13 anos de idade e ainda não pode ter o cartão`
  );
}

// Caso a idade esteja entre 13 e 17, imprima:
// “A pessoa dependente já pode ter um cartão de crédito vinculado ao seu!”
// Caso a idade não esteja entre 13 e 17, imprima:
// “Consulte outras possibilidades do Labank.”
// b. Utilizando um operador lógico para unir duas operações relacionais

if (idadeDependente >= 13 && idadeDependente <= 17) {
  console.log(
    `A pessoa dependente já pode ter um cartão de crédito vinculado ao seu!`
  );
} else {
  console.log(`Consulte outras possibilidades do Labank.`);
}

// Agora o Labank pediu para que seja criada uma nova funcionalidade:
// Pergunte ao usuário se ele possui conta
// Caso a resposta seja “sim”, imprima uma mensagem de boas vindas
// Caso seja diferente de “sim”, solicite que o usuário faça um cadastro
// Utilize um if ternário para resolver.

const resposta = prompt(`Você já possui uma conta do Labank?`);

resposta.toLowerCase() === "sim"
  ? console.log("Boas vindas!")
  : console.log(`Abra já sua conta`);

