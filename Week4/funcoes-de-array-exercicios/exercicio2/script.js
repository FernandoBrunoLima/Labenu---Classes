const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const quintuplos = numbers.map((value) => {
  const newValue = value * 5;
  return newValue;
});

console.log(quintuplos);

const metades = numbers.map((value) => {
  const newValue = value / 2;
  return newValue;
});

console.log(metades);
