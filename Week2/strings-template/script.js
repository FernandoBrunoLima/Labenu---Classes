/*
const nomeUsuario = prompt("Qual é o seu nome?");
const corFavorita = prompt("Qual é sua cor favorita?");
const citacaoFavorita = prompt("Insira sua citação favorita");

const fraseContatenada =
  "a cor favorita de " + nomeUsuario + " é " + corFavorita;
const fraseTemplateString = `a cor favorita de ${nomeUsuario} é ${corFavorita}`;

console.log("fraseContatenada", fraseContatenada);
console.log("fraseTemplateString", fraseTemplateString);

const novaFrase = fraseContatenada + '"' + citacaoFavorita + '"';

console.log("nova frase", novaFrase);

const dadosUsuario = `Nome: ${nomeUsuario},\nCor favorita: ${corFavorita},\nCitação favorita: ${citacaoFavorita}"`;

console.log(dadosUsuario);
*/

// Exercício de fixação

const name = prompt("Insira é o seu nome:");
const email = prompt("Insira o seu e-mail");

let stringInformed = `O e-mail ${email} foi cadastrado com sucesso. Boas vindas, ${name}`;

console.log(stringInformed);

stringInformed = `${stringInformed}.\nQuantidadede de caracteres: ${stringInformed.length}.`;
console.log(stringInformed);

stringInformed = stringInformed.replaceAll("r", "x");
console.log(stringInformed);

console.log(`A frase tem "@"? ${stringInformed.includes("@")}`);
