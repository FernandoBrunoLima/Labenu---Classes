import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaPrincipal from "./components/TelaPrincipal/TelaPrincipal.js";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  html {
    font-family: sans-serif9;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
const MainContainer = styled.main`
  height: 100vh;
`;

function App() {
  const [tela, setTela] = useState("login");

  const mudarTela = (novaTela) => {
    setTela(novaTela);
  };
  console.log(tela);
  const renderizaTela = () => {
    if (tela === "login") {
      return <TelaLogin mudarTela={mudarTela} />;
    } else if (tela === "cadastro") {
      return <TelaCadastro mudarTela={mudarTela} />;
    } else {
      console.log("deu ruim", tela);
    }
  };
  return (
    <MainContainer>
      <GlobalStyled />
      {renderizaTela()}
      {/* Exemplo com o uso do ternário */}
      {/* {tela === "login" ? (
        <TelaLogin mudarTela={mudarTela} />
      ) : (
        <TelaCadastro mudarTela={mudarTela} />
      )} */}
      <TelaPrincipal />
    </MainContainer>
  );
}

export default App;
