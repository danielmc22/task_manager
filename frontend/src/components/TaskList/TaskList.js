import React from 'react';
import "./TaskList.css";

const TaskList = (props) => {
  return (

    <section className='container-TaskList'>
        <ul>
            {props.children} 
        </ul>
    </section>
  )
}

export {TaskList}