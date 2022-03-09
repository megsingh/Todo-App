import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const [indexToBeUpdated,setIndexToBeUpdated] = useState(null)

  const addTodo = () => {
    setList((prevArray)=>[...prevArray,todo]);
    setTodo("");
  };

  const deleteTodo = (idx) => {
    setList(list.filter((item,index )=> index!==idx))
  };


  const updateTodo = () => {
    if (todo !== "" && indexToBeUpdated !== null) {
      let temp = [...list]
      temp[indexToBeUpdated] = todo;
      setList(temp);
      setIndexToBeUpdated(null);
      setTodo("");
  }

  }
  
  const editTodo = (todo,idx) => {
    setTodo(todo)
    setIndexToBeUpdated(idx)
  }



  return (
    <div className="Todo">
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={addTodo}> Add </button>
      <button onClick={updateTodo}> Update </button>
      <ul>
        {list.map((item, index) => (
          <li id = {index} key={index}>
            <span>{item}</span>
            <button onClick = {()=>editTodo(item,index)} >Edit</button>
           
              <button onClick={() => deleteTodo(index)}>Delete</button>
            
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
