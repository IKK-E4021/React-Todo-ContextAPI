import { useState, useContext } from "react";
import { IncompleteTodoContext } from "./providers/IncompleteTodoProvider";
import { CompleteTodoContext } from "./providers/CompleteTodoProvider";
import "./styles.css";

export default function App() {
  const [todoText, setTodoText] = useState("");
  const { incompleteTodo, setIncompleteTodo } = useContext(
    IncompleteTodoContext
  );
  const { completeTodo, setCompleteTodo } = useContext(CompleteTodoContext);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
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
      <div>
        <input placeholder="Todoを入力" onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div>
        <p>未完了のTODO</p>
        <ul>
          {incompleteTodo.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div>
        <p>完了済みのTODO</p>
        <ul>
          {completeTodo.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
