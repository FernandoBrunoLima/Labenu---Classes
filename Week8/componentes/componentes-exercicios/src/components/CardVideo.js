import React from "react";
import InfosUsuario from "./InfosUsuario";

export default function CardVideo() {
  const titulo = "Título do vídeo";
  const imagemVideo = `https://picsum.photos/400/400?a=${
    Math.floor(Math.random() * 99) + 1
  }`;

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div className="box-pagina-principal" onClick={reproduzVideo}>
      <img src={imagemVideo} alt="" />
      <h4>{titulo}</h4>
      <InfosUsuario />
    </div>
  );
}
