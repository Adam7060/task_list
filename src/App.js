import React, { useState } from 'react';
import './App.css';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';

function App() {

 const [todo, settodo] = useState([])

  return (
    <div className="main">
      <header>
        <h1>Todo App</h1>
      </header>
      <AddTodo letmeknow={e => settodo([...todo, e])} />
      <hr />
      <TodoList todolist={todo} />
    </div>
  );
}

export default App;
