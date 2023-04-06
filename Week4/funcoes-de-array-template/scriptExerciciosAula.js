// A primeira deve receber um array de números, e retornar um novo array com todos os números do array original  multiplicados por 3.

// A segunda deve receber um array de números, e retornar um novo array apenas com os números pares do array original.

const myArray = [4, 5, 7, 8, 9, 25, 100];

// com callback

const multiplyBy3 = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const numberMultiplied = array[i] * 3;
    newArray.push(numberMultiplied);
  }
  return newArray;
};

console.log(`myArray = ${myArray.join(", ")}`);
console.log(`myArrayBy3 = ${multiplyBy3(myArray).join(", ")}`);

// // com função sendo criada diretamente no map

// const myNewArray = myArray.map((item) => {
//   const newItem = item * 3;
//   return newItem;
// });
// console.log(myNewArray);

// // com map chamando função criada antes

// const multiplyBy3 = function (item) {
//   const newItem = {};

//   return newItem;
// };

// const myNewArray = myArray.map(multiplyBy3);
// console.log(myNewArray);

const fetchEven = (array) => {
  const newArray = [];
  for (let item of array) {
    if (item % 2 === 0) {
      newArray.push(item);
    }
  }
  return newArray;
};

console.log(`Retorna pares: ${fetchEven(myArray).join(", ")}`);

// // com filter chamando função criada antes

// const fetchEven = function (item) {
//   if (item % 2 === 0) {
//     let newItem = item;
//     return newItem;
//   }
// };

// const arrayWithEven = myArray.filter(fetchEven);
// console.log(arrayWithEven);

// // com função sendo criada diretamente no filter
// const arrayWithEven = myArray.filter((item) => {
//   if (item % 2 === 0) {
//     let newItem = item;
//     return newItem;
//   }
// });

// console.log(arrayWithEven);

const doCallback = (callback, array) => {
  const newArray = callback(array);

  return newArray;
};

console.log("\n-----------------------------");
console.log(" usando callback");
console.log("-----------------------------\n");
console.log(doCallback(multiplyBy3, myArray));
console.log(doCallback(fetchEven, myArray));

// feitos com map e filter na aula

const arrayMultiplicadoPor3 = myArray.map((elemento, indice, arrayInteiro) => {
  return elemento * 3;
});
console.log(arrayMultiplicadoPor3);

const arrayPares = myArray.filter((elemento) => {
  if (elemento % 2 === 0) {
    return true;
  }
});

console.log(arrayPares);
