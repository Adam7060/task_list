import React from 'react';
import './TodoList.css';

function TodoList(props) {

  return (
    <div>

      <ul className="todolist">
      {props.todolist.map( (title, key) => {
        return(
          <React.Fragment>
            <li key={key}>{title}</li><hr />
          </React.Fragment>
        )})}
      </ul>

    </div>

  );

}

export default TodoList;
