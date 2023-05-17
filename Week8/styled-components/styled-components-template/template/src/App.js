import { Garagem } from "./Componentes/Garagem/Garagem";
import styled from "styled-components";

const AppStyled = styled.div`


`


export default function App() {
  const nome = "Labenu";

  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <div className="App">
      <Garagem nome={nome} mensagemAprentacao={apresentaGaragem} />
    </div>
  );
}