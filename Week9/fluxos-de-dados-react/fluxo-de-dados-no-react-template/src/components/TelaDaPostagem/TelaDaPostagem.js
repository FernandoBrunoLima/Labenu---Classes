import React from "react";
import {
  ContainerPostagem,
  Title,
  Image,
  Description,
} from "./TelaDaPostagem.styled";

const TelaDaPostagem = ({ title, picture, description }) => {
  return (
    <ContainerPostagem>
      <Title>{title}</Title>
      <Image src={picture} />
      <Description>{description}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
