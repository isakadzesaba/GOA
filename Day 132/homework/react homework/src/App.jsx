import React, { useState } from 'react';

function App() {
  // Counter App Logic
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Todo List Logic
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addTodo = () => {
    setTodoList([...todoList, inputValue]);
    setInputValue("");  // Clear the input after adding
  };

  return (
    <div>
      <h1>Counter App</h1>
      {/* Counter App */}
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>

      <hr />

      <h1>Todo List App</h1>
      {/* Todo List App */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
