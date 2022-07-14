export const InputArea = (props) => {
  const { onChange, onClick, todoText } = props;
  return (
    <div>
      <input placeholder="Todoを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
