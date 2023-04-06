const numbersArray = [125, 5, 48];
const stringsArray = ["maçã", "uva", "banana"];
const mixedArray = [4.9, "arroz", false];

const numbersArrayCopia = numbersArray.slice();
const stringsArrayCopia = stringsArray.slice();
const mixedArrayCopia = mixedArray.slice();

numbersArrayCopia.unshift(1000);
console.log(numbersArray);
console.log(numbersArrayCopia);

stringsArrayCopia.pop();
console.log(stringsArray);
console.log(stringsArrayCopia);

mixedArrayCopia.splice(1, 1);
console.log(mixedArray);
console.log(mixedArrayCopia);
