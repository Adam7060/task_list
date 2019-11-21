import React, { useState } from 'react';
import './AddTodo.css';

function AddTodo(props) {
  const [title, setTitle] = useState ("")

  return (
  <div className="flexbox">

      <input className="title-field" type="text" placeholder="Title..." onChange={e => {
          setTitle(e.target.value)
        }} />
      <button className="btn-add" onClick={e => props.letmeknow(title)} >Add</button>

  </div>
  );

}

export default AddTodo;
