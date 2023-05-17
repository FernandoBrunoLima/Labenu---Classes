import styled, { createGlobalStyle } from "styled-components";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value);
    console.log(setTitle);
  };

  const handlePicture = (event) => {
    setPicture(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  return (
    <>
      <GlobalStyle />

      <Container>
        <FormularioPostagem
          title={title}
          picture={picture}
          description={description}
          handleTitle={handleTitle}
          handlePicture={handlePicture}
          handleDescription={handleDescription}
        />

        <TelaDaPostagem
          title={title}
          picture={picture}
          description={description}
        />
      </Container>
    </>
  );
}

export default App;
