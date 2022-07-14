import { useContext } from "react";
import { CompleteTodoContext } from "../providers/CompleteTodoProvider";

export const CompleteTodos = (props) => {
  const { completeTodo } = useContext(CompleteTodoContext);
  const { onClickBack } = props;
  return (
    <div>
      <p>完了済みのTodo</p>
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
  );
};
