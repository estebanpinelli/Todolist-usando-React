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

    <div className="row justify-content-center">
				<div className="col-6  text-center display-4 ">
					<h1>To do List</h1>
				</div>
     <div className=" container d-flex justify-content-center p-5">
    <div className="  col text-center col-6  " >
    <div className="  m-3 " >
    <div class="input-group  ">
      <input type="text" class="form-control" value={data} onChange={handleChange} placeholder="New Task" aria-label="Recipient's username" aria-describedby="button-addon2"/>
      <button className="btn btn-primary"  type="button" id="button-addon2" onClick={addTodo}><i className="fas fa-plus-circle"></i></button>
      </div>
      <ul>
        {todo.map((todoItem, index) => (
        <div className="form-check text-start " key={index}>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />

        <label className="form-check-label d-flex shadow-sm p-3 mb-5 bg-body rounded d-flex justify-content-between" htmlFor="flexCheckDefault">
           <h3>{todoItem.data}</h3>
          <button className= "btn btn-danger " onClick={() => handleDelete(index)}><i className= "fas fa-trash-alt "></i></button> 
        </label>
        </div>
        ))}
      </ul>
    </div>
    </div>
    </div>
    </div>
  );
};
export default TodoList;

