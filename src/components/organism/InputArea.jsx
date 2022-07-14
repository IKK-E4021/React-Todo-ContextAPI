import { PrimaryButton } from "../atom/PrimaryButton";
import classes from "./InputArea.module.scss";

export const InputArea = (props) => {
  const { onChange, onClick, todoText } = props;
  return (
    <div className={classes.container}>
      <input
        className={classes.todoInput}
        placeholder="Todoを入力"
        value={todoText}
        onChange={onChange}
      />
      <PrimaryButton name="追加" onClick={onClick} />
    </div>
  );
};
