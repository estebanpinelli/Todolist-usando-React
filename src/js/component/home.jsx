import React, {useState} from "react";



//create your first component

const Home = () => {
	
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
  
	return (
	<div className="col-12 d-flex justify-content-center">
	  <div className="row text-center">
		<h1>todos</h1>
				<input
		  type="text"
		  onChange={(e) => setInputValue(e.target.value)}
		  value={inputValue}
		  onKeyPress={(e) => {
			if (e.key === "Enter") {
			  setTodos(todos.concat([inputValue]));
			  setInputValue("");
			}
		  }}
		  placeholder="What needs to be done?"
		/>
		{todos.map((item, index) => (
  <div key={index} className="card mb-3">
    <div className="card-body p-1 m-1 d-flex justify-content-between">
      {item}
 
    <button type="button" className="btn-close " aria-label="Close" onClick={() =>
      setTodos(todos.slice(0, -1))
    }></button>
	   </div>
  </div>
		))}
	  </div>
	  </div>
	);
  };
  

export default Home;
