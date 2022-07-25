import React, {useState} from 'react';
import "./FormNewTask.css"
import { GLOBAL } from '../../Global';
import axios from "axios";
import { Navigate } from 'react-router-dom';

const FormNewTask = () => {

  const url = GLOBAL.url

  const [task, setTask] = useState({
    description: null,
    creator: null,
  });

  const [redirect, setRedirect] = useState(false);

  // referencia de los datos del formulario
  let descRef = React.createRef();
  let creatorRef = React.createRef();

  const changeState = () => {
    setTask({
      description: descRef.current.value,
      creator: creatorRef.current.value
    });
   
  };

  const sendData = (event) => {
    event.preventDefault();
    changeState(); 
    axios.post(url + "save", task).then(res =>{
        setRedirect(true);
        console.log(res.data)})
  }

  if(redirect){
    return <Navigate to="tasks" />;
  }


  return (

    <div className='Container-FormNewTask'>

        <div id='formulario' className="container-form">
            <div className='container-title'>
                <h4>New Task</h4>
            </div>

                <form className='card-body' onSubmit={sendData}>
                    <div className='mb-3'>
                        <textarea ref={descRef} onChange={changeState} type="text" classname="textArea-descr" id="desc" name="desc" placeholder="Type your task..." required />
                    </div>
                    <div className='mb-3'>
                        <input ref={creatorRef} onChange={changeState} type="text" classname="form-control" id="creator" name="creator" placeholder="Creator Name" required />
                    </div>
                    <div className='mb-3'>
                        <input className="btn-submit" type="submit" id="publish" value="Add" />
                    </div>
                </form>

        </div>

    </div>
  )
}

export {FormNewTask};