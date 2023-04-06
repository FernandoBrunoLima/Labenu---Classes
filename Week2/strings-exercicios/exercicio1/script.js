function nameAndThreefoods() {
  const userName = prompt("Qual é o seu nome?");
  const favoriteFood1 = prompt("Qual sua primeira comida favorita?");
  const favoriteFood2 = prompt("Qual sua segunda comida favorita?");
  const favoriteFood3 = prompt("Qual sua terceira comida favorita?");

  console.log(
    `Estas são as comidas favoritas de ${userName}:\n- ${favoriteFood1}\n- ${favoriteFood2}\n- ${favoriteFood3}`
  );
}

nameAndThreefoods();
