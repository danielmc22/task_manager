import React, { useEffect, useState } from "react";
import axios from "axios";
import { GLOBAL } from "../../Global";
import "./TaskList.css";
import { TaskItem } from "../TaskItem/TaskItem";


const TaskList = () => {
  
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState({
    description: null,
    creator:null,
    completed: false

  })

  console.log(completed)

  const url = GLOBAL.url

  useEffect(() => {

      getTasks();
}, [tasks.length]);
  

//obtener todas las tareas
  const getTasks = () => {
      axios.get(url + "tasks").then(res =>{
        setTasks(res.data.tasks)
      })
  };

//borrar una tarea
  const deleteTask = (id) =>{
      const idTask = tasks[id]._id;
      axios.delete(url + "delete/" + idTask).then(res=>{
        getTasks();
      }); 
  };

//editar una tarea
  const changeState = (id) =>{
    setCompleted({
      description: tasks[id].description,
      creator:tasks[id].creator,
      completed: true,
    })
  }

  const editTask = (id) =>{
    changeState(id)
    const idTask = tasks[id]._id;
    axios.put(url + "update/" + idTask, completed ).then(res=>{
      getTasks();
    }); 
};

  return (

    <section className='container-TaskList'>
        <ul>
          {
            tasks.length > 0 ? ( 
              
              tasks.map((task, i) =>{

                return (

                  <TaskItem
                      key={i}
                      id={i}
                      taskData={task}
                      delTask={deleteTask}
                      edTask={editTask}
                  />
                )
              })

            ) : (

              <h1 className="no-tasks">No tasks yet, click on "Add"</h1>

              )
          }

        </ul>
    </section>
  )
}

export {TaskList}