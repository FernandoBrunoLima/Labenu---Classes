import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState([
    "aula listas",
    "colocar cropped e react",
    "feedback Faruqi",
  ]);

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    /*
    const novaLista = [...lista];
    novaLista.push(novaTarefa);
    setLista(novaLista);
    */
    setLista([...lista, novaTarefa]);
    setNovaTarefa("");
  };

  const removeTarefa = (tarefaRemover) => {
    console.log("remover", tarefaRemover);
    // Crie uma função que remova da lista a tarefa quando o botão for clicado. Para isso, use uma função filter.
    const novaLista = lista.filter((tarefa) => {
      console.log(tarefa, tarefaRemover);
      if (tarefa !== tarefaRemover) {
        return tarefa;
      } else {
        console.log("tarefa removida", tarefa);
      }
    });
    setLista(novaLista);
    // mesma coisa
    // setLista(lista.filter((tarefa) => tarefa !== tarefaRemover));
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
          {lista.map((tarefa, indice) => {
            return (
              <Tarefa key={indice}>
                <p>{tarefa}</p>
                <RemoveButton
                  // Chame a função no onClick do botão “Remover”
                  // Passe a tarefa clicada por parâmetros até a função remover, onde irá acontecer o filter.
                  onClick={() => removeTarefa(tarefa)}
                >
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
