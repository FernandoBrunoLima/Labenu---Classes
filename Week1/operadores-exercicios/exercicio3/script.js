//# Exercício 3

//### Parte 1
//Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeiro ou falso:

//a) 5 é maior que 20 e também é menor que 2;
const operation1 = 5 > 20 && 5 < 2;
console.log(operation1);
//b) 5 é igual a 5 ou é igual a “5”;
const operation2 = 5 === 5 || 5 === "5";
console.log(operation2);
//c) negação de (vinte é maior que cinquenta)
const operation3 = 20 > 50;
console.log(!operation3);

//d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
const operation4 = 20 > 50 || 50 > 60;
console.log(!operation4);
//Exemplo:

//```jsx
//const operacao1 = 20 < 50 && 50 > 90;
//console.log(operacao1);
/*false, porque 50 não é maior que 90, consequentemente temos true && false,
que devolve false*/
//```

//### Parte 2

//Na aula passada começamos a implementar um sistema para o RH de uma empresa.

//Vamos continuar? Suponhamos que o exercício da aula passada tenha como resultado o relatório abaixo:

//**O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.**

//Levando em consideração os dados abaixo, calcule o salário de Fulano da Silva (itens 1 a 5):
const name = "Fulano da Silva";
const cpf = "000.000.000-00";
const dataNascimento = "10/02/1990";
const endereco = "Rua dos bobos nº 0";
const qtdeFilhes = 2;
const temHabilitacao = true;
const cargo = "vendedor";
const salario = 2000;
//const porcentagemComissao = 0.1;
const dataAdmissao = 2019;
//a) Auxílio creche por filho:  R$45,50
const auxilioCreche = 45.5 * qtdeFilhes;
//b) Comissão de 10% sobre o total de vendas mensal
const porcentagemComissao = 0.1;
//c) Total de vendas dos meses de janeiro a junho:
console.log("***********************************************************");
console.log("--- Comissões mensais ---");
console.log();
let totalVendasDoMes;
//    - Janeiro: R$ 5.784,50
totalVendasDoMes = 5784.5;
let valorComissaoJan = totalVendasDoMes * porcentagemComissao;
console.log(`Comissão de janeiro: ${valorComissaoJan.toFixed(2)}`);
//    - Fevereiro: R$ 3.418,41
totalVendasDoMes = 3418.41;
let valorComissaoFev = totalVendasDoMes * porcentagemComissao;
console.log(`Comissão de fevereiro: ${valorComissaoFev.toFixed(2)}`);
//    - Março: R$ 4.124,10
totalVendasDoMes = 4124.1;
let valorComissaoMar = totalVendasDoMes * porcentagemComissao;
console.log(`Comissão de março: ${valorComissaoMar.toFixed(2)}`);
//    - Abril: R$ 1.874,00
totalVendasDoMes = 1874;
let valorComissaoAbr = totalVendasDoMes * porcentagemComissao;
console.log(`Comissão de abril: ${valorComissaoAbr.toFixed(2)}`);
//    - Maio: R$ 7.000,00
totalVendasDoMes = 7000;
let valorComissaoMai = totalVendasDoMes * porcentagemComissao;
console.log(`Comissão de maio: ${valorComissaoMai.toFixed(2)}`);
//    - Junho: R$ 9.450,00
totalVendasDoMes = 9450;
let valorComissaoJun = totalVendasDoMes * porcentagemComissao;
console.log(`Comissão de junho: ${valorComissaoJun.toFixed(2)}`);
console.log();
//d)  Desconto do INSS 5% do salário
const descontoINSS = 0.05;
//Calcule:

//1) O salário fixo mais o auxílio creche
console.log("***********************************************************");
console.log("--- 1 - Valor do salário + Auxílio creche ---");
console.log();
const salarioMaisAuxilioCreche = salario + auxilioCreche;
console.log(`Salário + auxílio creche: ${salarioMaisAuxilioCreche.toFixed(2)}`);
console.log();
//2) Quanto Fulano de Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)
console.log("***********************************************************");
console.log("--- 2 - Comissão de janeiro ---");
console.log();
console.log(`Comissão de janeiro: ${valorComissaoJan.toFixed(2)}`);
console.log();
//3) Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)
console.log("***********************************************************");
console.log("--- 3 - Valor do INSS em janeiro ---");
console.log();
let descontoINSSJan = (salario + valorComissaoJan) * descontoINSS;
console.log(
  `Valor de desconto do INSS em janeiro: ${descontoINSSJan.toFixed(2)}`
);
console.log();
let descontoINSSFev = (salario + valorComissaoFev) * descontoINSS;
let descontoINSSMar = (salario + valorComissaoMar) * descontoINSS;
let descontoINSSAbr = (salario + valorComissaoAbr) * descontoINSS;
let descontoINSSMai = (salario + valorComissaoMai) * descontoINSS;
let descontoINSSJun = (salario + valorComissaoJun) * descontoINSS;

//4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
console.log("***********************************************************");
console.log("--- 4 - Cálculo dos salários com acréscimos e descontos ---");
console.log();

const salarioJan = salario + valorComissaoJan - descontoINSSJan;
console.log(`salário de janeiro com acréscimos: ${salarioJan.toFixed(2)}`);
const salarioFev = salario + valorComissaoFev - descontoINSSFev;
console.log(`salário de janeiro com acréscimos: ${salarioFev.toFixed(2)}`);
const salarioMar = salario + valorComissaoMar - descontoINSSMar;
console.log(`salário de janeiro com acréscimos: ${salarioMar.toFixed(2)}`);
const salarioAbr = salario + valorComissaoAbr - descontoINSSAbr;
console.log(`salário de janeiro com acréscimos: ${salarioAbr.toFixed(2)}`);
const salarioMai = salario + valorComissaoMai - descontoINSSMai;
console.log(`salário de janeiro com acréscimos: ${salarioMai.toFixed(2)}`);
const salarioJun = salario + valorComissaoJun - descontoINSSJun;
console.log(`salário de janeiro com acréscimos: ${salarioJun.toFixed(2)}`);
console.log();
//5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio.
//  (Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)
console.log("***********************************************************");
console.log("--- 5 - Média salarial do 1° semestre ---");
console.log();
const mediaSalarial =
  (salarioJan +
    salarioFev +
    salarioMar +
    salarioAbr +
    salarioMai +
    salarioJun) /
  6;
console.log(`Média salarial dos 1° semestre: ${mediaSalarial.toFixed(2)}`);
console.log();
console.log("***********************************************************");
