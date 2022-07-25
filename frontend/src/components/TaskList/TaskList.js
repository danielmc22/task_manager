import React, { useEffect, useState } from "react";
import axios from "axios";
import { GLOBAL } from "../../Global";
import "./TaskList.css";
import { TaskItem } from "../TaskItem/TaskItem";


const TaskList = () => {
  
  const [tasks, setTasks] = useState([]);
  const url = GLOBAL.url

  useEffect(() => {

      getTasks();

}, [tasks.length]);

  
  const getTasks = () => {
      axios.get(url + "tasks").then(res =>{
        setTasks(res.data.tasks)
      })
  };

  const deleteTask = (id) =>{
      const idTask = tasks[id]._id;
      axios.delete(url + "delete/" + idTask).then(res=>{
        getTasks();
      }); 
  };

  const editTask = (id, state) =>{
    const idTask = tasks[id]._id;
    axios.put(url + "update/" + idTask, {completed:state} ).then(res=>{
      getTasks();
      console.log(idTask)
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