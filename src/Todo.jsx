import React, { useEffect, useState } from 'react'
import './App.css'
const Todo = () => {

    const [todos,setTodos]=useState([])
    const [newtask,setTask]=useState("");
    let stored
    function getinfo(){
        stored=JSON.parse(localStorage.getItem('todos'));
        
        console.log(stored);
    }
    
    useEffect(()=>{
        getinfo()  
    },[])
    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos));
       
    },[todos])
    function addtask(){
        if(newtask!==""){
            setTodos([...todos,{Text:newtask, checked:false}])
            setTask("");
        }
        
    }
    function deltask(index){
       const newtodos=[...todos];
       newtodos.splice(index,1);
       setTodos(newtodos)
    }
    function check(index){
        const newtodos=[...todos];
        newtodos[index].checked=!newtodos[index].checked;
        setTodos(newtodos);
    }
    if(stored){setTodos(stored);}
  return (
    <>
        <div className='app'>
            <h2>Tasks to do</h2>
            <div className="input">
                <input type="text"  onChange={(e)=>{setTask(e.target.value)}}/>
                <button onClick={()=>{addtask()}}>Add</button>
            </div>
            <ul>
                {todos.map((todo,index)=>{
                   return( 
                   <li key={index}>
                        <input type="checkbox" checked={todos[index].checked} onChange={()=>check(index)} value={newtask} />
                        <span style={{textDecoration:todo.checked? "line-through":"none"}}>{todo.Text}</span>
                        <button onClick={()=>deltask(index)}>delete</button>
                   </li>
                   )
                })}
            </ul>
        </div>
    </>
    
  )
}

export default Todo
