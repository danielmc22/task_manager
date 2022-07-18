import React from 'react';
import {NavLink} from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/task.png";

const NavBar = () => {
  return (

    <nav className='Container-Navbar'>

        <div className="Navbar-left">
            <NavLink to="/" className="link-logo">
                <img className='logoNav' src={logo} alt="logo" />
            </NavLink>
            <p>Add</p>
        </div>

        <div className="Navbar-right">
            <NavLink to="tasks" > 
            TASK LIST
            </NavLink>
        </div>

        
    </nav>

  )
}

export {NavBar}