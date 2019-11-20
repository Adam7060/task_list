import React from 'react';


function TodoList(props) {

  return (
    <div>
      <ul>
      {props.todolist.map( (todotitle, key) => {
        console.log("key", key)
        return  <li key={key}>{todotitle}</li>

       })}
      </ul>
    </div>
  );

}

export default TodoList;
