import React from "react";
import { TaskCounter } from "./components/TaskCounter/TaskCounter";
import { TaskSearch } from "./components/TaskSearch/TaskSearch";
import { TaskList } from "./components/TaskList/TaskList";
import { TaskItem } from "./components/TaskItem/TaskItem";
import { CreateTaskButton } from "./components/CreateTaskButton/CreateTaskButton";
/* import { BrowserRouter, Routes, Route } from 'react-router-dom'; */
import './App.css';

const tasks = [
  {text: "debo estudiar hola y despues salir a correr y despues lorem ipsum  espues salir a correr por lo", finished: true},
  {text: "ir al gym", finished: false},
  {text: "hacer la comida", finished: false}, 
]

function App() {
  return (

    <React.Fragment className="App">

      <TaskCounter />
      <TaskSearch />
      <TaskList>
          {tasks.map(task => (
          <TaskItem 
          key={task.text} 
          text={task.text} 
          finished={task.finished}
          />
          ))}
      </TaskList>
      <CreateTaskButton/>
      
    </React.Fragment>
  );
}

export default App;
