import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import { FormNewTask } from "./components/FormNewTask/FormNewTask";
import { NavBar } from "./components/NavBar/NavBar";
import ListView  from "./components/ListView/ListView";
/* import { BrowserRouter, Routes, Route } from 'react-router-dom'; */
import './App.css';



function App() {
  return (

    <React.Fragment className="App">

    <BrowserRouter>

        <NavBar />

        <Routes>

            <Route exact path="/" element={<FormNewTask />} />
            <Route exact path="tasks" element={<ListView />} />
      
        </Routes>
        
    </BrowserRouter>

    </React.Fragment>
  );
}
export default App;
