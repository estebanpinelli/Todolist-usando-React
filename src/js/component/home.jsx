import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [data, setData] = useState("");

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const addTodo = () => {
    if (data) {
      setTodo([...todo, { data }]);
      setData("");
    }
  };

  const handleDelete = (index) => {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo);
  };

  return (
     <div className=" row-4 container d-flex justify-content-center p-5">
    <div className="  col text-center  " >
    <div className="  m-3 " >
      <input type="text" name="text" value={data} onChange={handleChange} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todo.map((todoItem, index) => (
        <div className="form-check text-start border-bottom border-3" key={index}>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label  d-flex justify-content-between mt-5" htmlFor="flexCheckDefault">
{todoItem.data}
          <button className="fas fa-trash-alt " onClick={() => handleDelete(index)}></button> 
        </label>
        </div>
        ))}
      </ul>
    </div>
    </div>
    </div>
  );
};

export default TodoList;

