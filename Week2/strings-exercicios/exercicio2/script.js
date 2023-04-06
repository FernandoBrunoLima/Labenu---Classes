const minhaString =
  "Eu não sou supersticioso, mas sou um pouco ________.      ";

const stringWithoutSpaces = minhaString.trim();

console.log(minhaString.length);
console.log(stringWithoutSpaces.length);

const stringWithReplace = stringWithoutSpaces.replace("________", "sticioso");

console.log(stringWithReplace);
