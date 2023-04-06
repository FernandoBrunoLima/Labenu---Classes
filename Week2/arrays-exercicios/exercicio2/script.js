"use strict";
// # Exercício 2

// Com os arrays criados no exercício 1, vamos fazer algumas observações. Faça o que se pede abaixo, utilizando `console.log()`:

const numbersArray = [125, 5, 48, 50, 100, 2];
const stringsArray = ["maçã", "uva", "banana", "laranja"];
const mixedArray = [4.9, "arroz", false];

// a) Imprima a **quantidade de itens** de cada array (utilize um `console.log()` para cada impressão).
console.log(numbersArray.length);
console.log(stringsArray.length);
console.log(mixedArray.length);
console.log();
// b) Imprima o **primeiro item** do primeiro array, o **segundo item** do segundo array, e o **terceiro item** do terceiro array.
console.log(numbersArray[0], stringsArray[1], mixedArray[2]);
console.log();
// c) **Verifique** se um item está incluído no primeiro array e depois no terceiro array. Imprima o resultado dessas verificações no `console.log()`. A primeira impressão deve retornar um booleano **true** e a segunda deve retornar um booleano **false**.

console.log(numbersArray.includes(5));
console.log(mixedArray.includes(5));

// **Obs:** copie os arrays criados no exercício 1 para dentro do arquivo *script.js* do exercício 2.
