let nome;
let dataNascimento;
let endereco;
let cpf;
let escolaridade;
let temCNH;
let qtdeFilhes;
let cargoAtual;
let salario;
let recebeComissao; // Se sim, informe a porcentagem, caso não, responda com zero
let anoAdmissao;
let porcentagemComissão;

nome = prompt("Insira o nome do funcionário:");
dataNascimento = prompt("Data de nascimento (utilize as / )");
endereco = prompt("Endereço:");
cpf = prompt("CPF:"); // melhor armazenar cpf como string
escolaridade = prompt("Escolaridade:");
temCNH = confirm('Possui CNH? confirme se "sim"; cancele se "não"');
qtdeFilhes = Number(prompt("Quantidade de filhes:"));
cargoAtual = prompt("Cargo atual:");
salario = Number(prompt("Salário:"));
recebeComissao = confirm(
  'Recebe comissão? confirme se "sim"; cancele se "não"'
);

if (recebeComissao === true) {
  porcentagemComissão = 0.1;
} else {
  porcentagemComissão = 0;
}

anoAdmissao = Number(prompt("Ano de admissão:"));

// Tipos das variáveis

console.log("***************************************");
console.log("Tipos das variáveis usadas no programa:");
console.log("***************************************");
console.log();
console.log(`Tipo da variável "nome": ${typeof nome}`);
console.log(`Tipo da variável "dataNascimento": ${typeof dataNascimento}`);
console.log(`Tipo da variável "endereco": ${typeof endereco}`);
console.log(`Tipo da variável "cpf": ${typeof cpf}`);
console.log(`Tipo da variável "escolaridade": ${typeof escolaridade}`);
console.log(`Tipo da variável "temCNH": ${typeof temCNH}`);
console.log(`Tipo da variável "qtdeFilhes": ${typeof qtdeFilhes}`);
console.log(`Tipo da variável "cargoAtual": ${typeof cargoAtual}`);
console.log(`Tipo da variável "salario": ${typeof salario}`);
console.log(`Tipo da variável "recebeComissao": ${typeof recebeComissao}`);
console.log(
  `Tipo da variável "porcentagemComissao": ${typeof porcentagemComissão}`
);
console.log();
console.log("***************************************");
console.log();

console.log("***************************************");
console.log("Relatório da pessoa trabalhadora:");
console.log("***************************************");
console.log();
console.log(`Nome da pessoa trabalhadora: ${nome}`);
console.log(`Data de nascimento: ${dataNascimento}`);
console.log(`Endereço: ${endereco}`);
console.log(`CPF: ${cpf}`);
console.log(`Escolaridade: ${escolaridade}`);
console.log(`Possui CNH: ${temCNH}`);
console.log(`Quantidade de filhes: ${qtdeFilhes}`);
console.log(`Cargo atual: ${cargoAtual}`);
console.log(`Salário: R$ ${salario}`);
console.log(`PorcentagemComissao": ${porcentagemComissão}`);
