// Crie uma função que recebe do usuário sua nacionalidade, utilizando um **prompt** com a seguinte mensagem: "Escreva aqui sua nacionalidade." e guarde o valor da resposta em uma const `nacionalidade`.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

// Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhuma das possibilidades acima.

// > 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas.

const askNationality = function () {
  let result;

  const nationalityAsked = prompt("Escreva aqui sua nacionalidade");
  const nationality = nationalityAsked.toLowerCase();

  if (
    nationality == "brasileira" ||
    nationality === "argentina" ||
    nationality === "uruguaia" ||
    nationality === "chilena" ||
    nationality === "colombiana"
  ) {
    result = `nacionalidade: ${nationality}`;
  } else {
    result = `nacionalidade não encontrada`;
  }
  console.log(nationality);
  return result;
};

console.log(askNationality());
