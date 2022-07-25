import React from 'react';
import "./TaskItem.css";


const TaskItem = ({id, taskData, delTask, edTask}) => {

    const {description, creator, date, completed} = taskData

    const formatDate = (date) => {
      return date.substring(8,10) + date.substring(4,8) + date.substring(0,4);
    }

    const fxDelete = () =>{
        delTask(id)
    };

    const fxUpdate = (event) =>{
        let state = event.target.checked
        edTask(id,state) 

    };


    return (

    <div className='Container-TaskItem'>
      
        <div className='TaskItem-left'>
            <input type="checkbox" className="checkbox" onClick={fxUpdate} />
        </div>

        <div className="TaskItem-center">
              <div className='TaskItem-center-a'>
                  <p  className={`no-completed ${completed && 'ok-completed' } `}> {description} </p>
              </div>
              <div className='TaskItem-center-b'>
                  <p> Create: {formatDate(date)} </p>
              </div>
              <div className='TaskItem-center-c'>
                  <p> By: {creator} </p>
              </div>
        </div>

        <div className='TaskItem-right'>
            <button className='btn-delete' onClick={fxDelete} type="button">X</button>
        </div>
        
    </div>
  )
}

export {TaskItem}