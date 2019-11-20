import React, { useState } from 'react';
import './App.css';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';

function App() {

 const [todo, settodo] = useState([])

  return (
    <div>
      <header>
        <h1>Todo App</h1>
        <AddTodo letmeknow={e => settodo([...todo, e])} />
        <TodoList todolist={todo} />
      </header>
    </div>
  );
}

export default App;
