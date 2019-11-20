import React, { useState } from 'react';


function AddTodo(props) {
  const [title, setTitle] = useState ("")

  return (
    <div>
      <input type="text" placeholder="Tittle" onChange={e => {
          setTitle(e.target.value)
        }} />
      <button onClick={e => props.letmeknow(title)} >Add</button>
    </div>
  );

}

export default AddTodo;
