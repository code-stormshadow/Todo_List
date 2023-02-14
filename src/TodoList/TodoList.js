import React from 'react'
import {useState} from "react"


 function TodoList() {
    const [list, setList] = useState([]);
    const [input, setInput] = useState("");
    const addTodo = (todo) =>{
    const newTodo ={
      id: Math.random(),
      todo: todo
    };


    // add the todo to the list
    setList([...list, newTodo]);


    // clear inputBox
    setInput("");
  };

  const deleteTodo = (id) =>{
    // filter out todo with id.
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  }
  return (
    <div>
        <div id="myDIV" className="header" style={{backgroundColor: 'red'}}>
        <h2 style={{margin:'5px', display: 'flex',justifyContent: 'center' }}>My To Do List</h2>
        <input value={input} onChange={(e)=> setInput(e.target.value)} type="text" id="myInput" placeholder="Title..."/>
        <button onClick ={() => addTodo(input)} className="addBtn">Add</button>
      </div>

       <ul id="myUL">
       {list.map((todo)=>(
        <li key={todo.id}> {todo.todo} 
        <button onClick = {() => deleteTodo(todo.id)} id="close">&times;</button>
        </li>
       ))}
        
        {/* <li class="checked">Pay bills</li>
        <li>Meet George</li>
        <li>Buy eggs</li>
        <li>Read a book</li>
        <li>Organize office</li> */}
      </ul> 
    
    </div>
  )
}
export default TodoList

