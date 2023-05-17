import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal,
} from "./ListaTarefasStyles";
import bin from "../../../assets/bin.png";
import { ListaFinalizadas } from "../../ListaFinalizadas/ListaFinalizadas";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [novaLista, setNovaLista] = useState([]);

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) => item !== tarefa);
    const listaFinalizada = lista.filter((item) => item === tarefa);
    setLista(listaFiltrada);
    setNovaLista(...novaLista, listaFinalizada);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      adicionaTarefa();
    }
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyDown={handleKeyDown}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal />
      <ListaContainer>
        <ul>
          {novaLista.map((tarefa, index) => {
            return <ListaFinalizadas tarefa={tarefa} index={index} />;
          })}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
