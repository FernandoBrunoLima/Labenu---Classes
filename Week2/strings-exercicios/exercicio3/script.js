//Crie a const para a frase aqui
const myString =
  'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"';

let newString = myString.replace("verde", "rosa").replace("azul", "laranja");
console.log(newString);

console.log(`Possui a cor verde na string? ${newString.includes("verde")}`);
console.log(`Possui a cor laranja na string? ${newString.includes("laranja")}`);

const partAllUpper = '"BOAS VINDAS, mas não deixe o gato sair"'.toUpperCase();

newString = newString.replace(
  '"BOAS VINDAS, mas não deixe o gato sair"',
  partAllUpper
);
console.log(newString);
