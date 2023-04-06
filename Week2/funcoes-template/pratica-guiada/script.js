// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!
/*
const greeting = function (name) {
  console.log(`Olá, ${name}`);
};

greeting("Bruno");
greeting("Fernando");
greeting("João");
*/
/*
function operations(number) {
  const checkOddOrEven = number % 2 === 0;
  const sum = number + 10;
  const multiplyByItself = number * number;

  return `O número ${number} é par? Resultado ${checkOddOrEven}\nA soma de ${number} por 10: ${sum}\nO número multiplicado por ele mesmo ${multiplyByItself}`;
}

let operationsReturn = operations(10);
console.log(operationsReturn);
*/
/*
const operation function (number) {
  const checkOddOrEven = number % 2 === 0;
  const sum = number + 10;
  const multiplyByItself = number * number;

  return `O número ${number} é par? Resultado ${checkOddOrEven}\nA soma de ${number} por 10: ${sum}\nO número multiplicado por ele mesmo ${multiplyByItself}`;
}

let operationsReturn = operations(10);
console.log(operationsReturn);
*/

const askCredentials = function (login, password) {
  const savedLogin = "BrunoLima";
  const savedPassword = "bruno1234";

  //const askedLogin = prompt("Digite seu nome de usuário/login");
  //const askedPassword = prompt("Digite sua senha:");

  const answer = askedLogin === savedLogin && askedPassword === savedPassword;

  return answer;
};

const tentativaLogin = askCredentials();
