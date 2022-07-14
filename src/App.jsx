import { useState, useContext } from "react";
import { IncompleteTodoContext } from "./providers/IncompleteTodoProvider";
import { CompleteTodoContext } from "./providers/CompleteTodoProvider";
import "./styles.css";
import { InputArea } from "./components/InputArea";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export default function App() {
  const [todoText, setTodoText] = useState("");
  const { incompleteTodo, setIncompleteTodo } = useContext(
    IncompleteTodoContext
  );
  const { completeTodo, setCompleteTodo } = useContext(CompleteTodoContext);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    setIncompleteTodo((todo) => [...todo, todoText]);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    setIncompleteTodo(incompleteTodo.filter((todo, i) => i !== index));
  };

  const onClickComplete = (index) => {
    setIncompleteTodo(incompleteTodo.filter((todo, i) => i !== index));
    setCompleteTodo((todo) => [...todo, incompleteTodo[index]]);
  };

  const onClickBack = (index) => {
    setCompleteTodo(completeTodo.filter((todo, i) => i !== index));
    setIncompleteTodo((todo) => [...todo, completeTodo[index]]);
  };

  return (
    <>
      <h1>Todo List</h1>
      <InputArea
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        todoText={todoText}
      />
      <IncompleteTodos
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />
      <CompleteTodos onClickBack={onClickBack} />
    </>
  );
}
