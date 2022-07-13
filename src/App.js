import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input placeholder="Todoを入力" />
        <button>追加</button>
      </div>

      <div>
        <p>未完了のTODO</p>
        <ul>
          <div>
            <li>Todo1</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
        <ul>
          <div>
            <li>Todo2</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>

      <div>
        <p>完了済みのTODO</p>
        <ul>
          <div>
            <li>Todo1</li>
            <button>戻す</button>
          </div>
        </ul>
        <ul>
          <div>
            <li>Todo2</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </div>
  );
}
