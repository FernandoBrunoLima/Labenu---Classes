const infosPessoa = {
  nome: "astrodev",
  profissao: "Dev das estrelas",
  username: "astrodev_labenu",
  senha: "melhorDeTodos",
};

const toCapitalizeValues = (object) => {
  for (let prop in object) {
    object[prop] = object[prop].toUpperCase();
  }
  return object;
};

const printMessage = (object) => {
  let result = [];

  for (let prop in object) {
    let message = `O valor da propriedade ${prop} é ${object[prop]}.`;
    result.push(message);
  }

  for (let itens of result) {
    console.log(itens);
  }
};

const testCallbalk = (object, callback) => {
  const result = callback(object);

  return result;
};

console.log(testCallbalk(infosPessoa, toCapitalizeValues));
testCallbalk(infosPessoa, printMessage);
