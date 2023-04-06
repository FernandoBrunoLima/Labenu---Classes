// Exercicios do Video Complementar de Callback
// https://labenu.notion.site/Callbacks-b54eaf1b2e084258bdd06c0ad060d33d

function retornarNome() {
  return "Bruno";
}

function retornarNomeCompleto(callback, sobrenome) {
  return `${callback()} ${sobrenome}`;
}

console.log(retornarNomeCompleto(retornarNome, "Lima"));

function retornarIdade(idade) {
  return idade;
}

function retornarIdadeCompleta(callback, idade, anoNasc) {
  return `A pessoa tem ${callback(idade)} anos e nasceu em ${anoNasc}`;
}

console.log(retornarIdadeCompleta(retornarIdade, 36, 1986));
