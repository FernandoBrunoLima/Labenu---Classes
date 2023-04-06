// Crie um array. Ele deve possuir apenas números, e estes números não devem seguir nenhuma ordem específica. Por enquanto, não vamos imprimir o array.
const myArray = [100, 45, 8, 97, 48, 56];
// Depois disso, crie uma cópia deste array utilizando o método slice().
const myArrayCopy = myArray.slice();
// No array copiado:
// Remova o último item
myArrayCopy.pop();
// Adicione o número 6 no fim do array
myArray.push(6);
// Remova o número que está no índice 2 do array
myArray.splice(2, 1);
// Por fim, imprima os dois arrays
console.log(myArray);
console.log(myArrayCopy);
