// Crie uma função que receba uma const numérica qualquer. Crie um `if` para verificar se o número guardado na const é **par**. Caso seja, a função deve retornar a mensagem: "o número é par". Depois disso, imprima o retorno no console.

function checkIsEven() {
  const number = Number(prompt(`Digite um número:`));
  let result;

  if (number % 2 === 0) {
    result = `O número é par`;
  } else {
    result = `O número não é par`;
  }

  return result;
}
console.log(checkIsEven());
