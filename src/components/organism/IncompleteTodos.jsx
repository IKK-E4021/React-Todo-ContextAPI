import { useContext } from "react";
import { IncompleteTodoContext } from "../../providers/IncompleteTodoProvider";
import { PrimaryButton } from "../atom/PrimaryButton";

import classes from "./IncompleteTodos.module.scss";

export const IncompleteTodos = (props) => {
  const { incompleteTodo } = useContext(IncompleteTodoContext);
  const { onClickComplete, onClickDelete } = props;
  return (
    <div className={classes.container}>
      <p className={classes.title}>未完了のTodo</p>
      <ul>
        {incompleteTodo.map((todo, index) => {
          return (
            <div key={todo} className={classes.listRow}>
              <li className={classes.list}>{todo}</li>
              <PrimaryButton
                name="完了"
                onClick={() => onClickComplete(index)}
              />
              <PrimaryButton name="削除" onClick={() => onClickDelete(index)} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};
