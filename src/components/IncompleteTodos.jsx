import { useContext } from "react";
import { IncompleteTodoContext } from "../providers/IncompleteTodoProvider";

export const IncompleteTodos = (props) => {
  const { incompleteTodo } = useContext(IncompleteTodoContext);
  const { onClickComplete, onClickDelete } = props;
  return (
    <div>
      <p>未完了のTodo</p>
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
  );
};
