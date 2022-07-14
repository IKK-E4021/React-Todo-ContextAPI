import { useContext } from "react";
import { CompleteTodoContext } from "../../providers/CompleteTodoProvider";
import { PrimaryButton } from "../atom/PrimaryButton";
import classes from "./CompleteTodos.module.scss";

export const CompleteTodos = (props) => {
  const { completeTodo } = useContext(CompleteTodoContext);
  const { onClickBack } = props;
  return (
    <div className={classes.container}>
      <p className={classes.title}>完了済みのTodo</p>
      <ul>
        {completeTodo.map((todo, index) => {
          return (
            <div key={todo} className={classes.listRow}>
              <li className={classes.list}>{todo}</li>
              <PrimaryButton name="戻す" onClick={() => onClickBack(index)} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};
