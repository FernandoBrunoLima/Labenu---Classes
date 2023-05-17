import React from "react";

export default function InfosUsuario() {
  const name = "Fulano";
  const imageUser = `https://picsum.photos/400/400?a=${Math.floor(
    Math.random() * 99
  )} + 1`;

  return (
    <div className="user-image">
      <img src={imageUser} />
      <p>{name}</p>
    </div>
  );
}
