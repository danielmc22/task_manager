import React from 'react';
import "./TaskItem.css";

const TaskItem = (props) => {
  return (

    <div className='Container-TaskItem' >
      
        <span className={`icon icon-check ${props.finished && 'icon-check--active'}`}>V</span>
        
        <p className={`TaskItem-p ${props.finished && 'TaskItem-p--complete'}`}> {props.text} </p>
        
        <span className='icon icon-delete'>X</span>
      
    </div>
  )
}

export {TaskItem}