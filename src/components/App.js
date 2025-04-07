
import React, {useMemo, useState} from "react";
import './../styles/App.css';
import Todos from "./Todos";

function generateTodos(){
  let arr = []
  for(let i=1; i<=50; i++){
    let obj = {}
    obj.name = `Todo ${i}`
    obj.status = i % 2 !== 0 ? "completed" : "active"
    arr.push(obj)
  }
  return arr
}

const App = () => {
  const [todos, setTodos] = useState(() => generateTodos())

  let allTodos = useMemo(() => {
    return todos
  }, [])

  let activeTodos = useMemo(() => {
    return todos.filter(todo => todo.status === "active")
  }, [])
  
  let completedTodos = useMemo(() => {
    return todos.filter(todo => todo.status === "completed")
  }, [])

  function handleClick(e){
    if(e.target.name === "all"){
      setTodos(allTodos)
    }
    if(e.target.name === "active"){
      setTodos(activeTodos)
    }
    if(e.target.name === "completed"){
      setTodos(completedTodos)
    }
  }

  return (
    <div>
      <div style={{width: "300px", borderBottom: "2px solid black", paddingBottom: "10px"}}>
        <button name="all" onClick={handleClick}>All</button>&nbsp;
        <button name="active" onClick={handleClick}>Active</button>&nbsp;
        <button name="completed" onClick={handleClick}>Completed</button>&nbsp;
      </div>
      <p>List of Todos: </p>
      <Todos todos={todos} />
    </div>
  )
}

export default App
