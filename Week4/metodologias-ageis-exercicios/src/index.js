// EXERCÍCIO 01
export function anoBissexto(parameter) {
  if (parameter < 0) {
    return `INVALID`;
  } else {
    if (
      (parameter % 4 === 0 || parameter % 400 === 0) &&
      parameter % 100 !== 0
    ) {
      return "TRUE";
    } else {
      return "FALSE";
    }
  }
}

// EXERCÍCIO 02
export function pedraPapelTesoura() {}

// EXERCÍCIO 03
export function checkNumeroPrimo(parameter) {}
