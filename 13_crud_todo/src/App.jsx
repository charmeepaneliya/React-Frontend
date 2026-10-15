import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";
import Status from "./components/Status";

const App = () => {
  const initialTodos = [
    {
      id: 1,
      task: "learn react",
      description: "you have to learn daily react concept",
      completed: true,
    },
    {
      id: 2,
      task: "practice react code",
      description: "you have to practice daily react code",
      completed: false,
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const [editVal, setEditval] = useState(null);

  const handleAdd = (input) => {
    if (!input.task || !input.description) {
      alert("enter task & description");
    } else if (editVal) {
      setTodos((t) =>
        t.map((t) =>
          t.id === editVal.id
            ? { ...t, task: input.task, description: input.description }
            : t,
        ),
      );
      setEditval(null);
    }else{
      const newTodo = {
          id: new Date().getTime(),
        task: input.task,
        description: input.description,
        completed: false, 
      }
      setTodos((prev) => [...prev, newTodo]);
    }
  };

 const handleDelete =(id) =>{
    const remainItem = todos.find((t)=>t.id === id);

    setTodos(remainItem);
 }

 const handleEdit = (id) =>{
  const editValue = todos.find((t)=>t.id === id);

  setEditval(editValue);
 }

  console.log("edit val", editVal);

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const totalTask = todos.length

  const completedTask = todos.filter((t) => t.completed === true).length

  const pendingTask = totalTask - completedTask

  return( 
  <>
    <AddTodo handleAdd={handleAdd} editVal={editVal}/>
    <br/><br/>
    <Status totalTask={totalTask} completedTask={completedTask} pendingTask={pendingTask}/>
    <br/><br/>
    <ListTodo todos={todos} handleDelete={handleDelete} handleEdit={handleEdit} handleToggle={handleToggle}/>
  </>
  )
};

export default App;
