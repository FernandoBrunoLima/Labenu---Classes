import React from "react";
import { Form, Input } from "../MainPage/styles";

const NameForm = (
  nome,
  idade,
  email,
  onChangeNome,
  onChangeIdade,
  onChangeEmail,
  sendData
) => {
  const [confirmacao, setConfirmacao] = useState("");

  const onChangeConfirmacao = (event) => {
    setConfirmacao(event.target.value);
  };

  function confirmEmail() {
    if (confirmacao === email) {
      sendData();
    } else {
      alert("Verifique o email");
    }
  }

  return (
    <Form>
      <label>
        Nome:
        <Input placeholder="Nome" value={nome} onChange={onChangeNome} />
      </label>
      <label>
        Idade:
        <Input placeholder="Idade" value={idade} onChange={onChangeIdade} />
      </label>
      <label>
        E-mail:
        <Input
          placeholder="usuario@usuario.com"
          value={email}
          onChange={onChangeEmail}
        />
      </label>
      <label>
        Confirmação de e-mail:
        <Input
          placeholder="usuario@usuario.com"
          value={confirmacao}
          onChange={onChangeConfirmacao}
        />
      </label>
      <button onClick={confirmEmail}>Enviar dados</button>
    </Form>
  );
};

export default NameForm;

//           nome={nome}
//           idade={idade}
//           email={email}
//           onChangeNome={onChangeNome}
//           onChangeIdade={onChangeIdade}
//           onChangeEmail={onChangeEmail}
//           sendData={sendData}
