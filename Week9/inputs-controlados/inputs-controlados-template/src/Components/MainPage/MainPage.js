import React, { useState } from "react";
import { MainContainer, Form, Input } from "./styles";

function MainPage() {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [inputCivilStatus, setInputCivilStatus] = useState("");

  function onChangeName(event) {
    setInputName(event.target.value);
  }

  function printInputValues(event) {
    event.prevenDefault();
  }
  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form onSubmit={printInputValues}>
        <label>
          Nome:
          <Input value={inputName} onChange={onChangeName} />
        </label>
        <label>
          Idade:
          <Input
            value={inputAge}
            onChange={(event) => setInputAge(event.target.value)}
          />
        </label>
        <label>
          Estado civil:
          <select
            value={inputCivilStatus}
            onChange={(event) => setInputCivilStatus(event.target.value)}
          >
            <option value="" disabled>
              Selecione
            </option>
            <option value="Nenhum">Nenhum</option>
            <option value="Solteira(o)">Solteira(o)</option>
            <option value="Casada(o)">Casada(o)</option>
            <option value="Viúva(o)">Viúva(o)</option>
            <option value="Divorciada(0)">Divorciada(o)</option>
          </select>
        </label>
        <button>Enviar dados</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
