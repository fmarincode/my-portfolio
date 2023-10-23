import React from 'react';
import { NavLink } from "react-router-dom";
/* import "../styles/navbar.css"; */
import {AiOutlineHome} from 'react-icons/ai'

function Navbar() {

  return (
    <nav className="bg-[--firstColor] bottom-0 fixed w-full h-10 flex items-center text-[--thirdColor] z-50">
      <ul className="flex w-full justify-around">
          <li className="" >
          <NavLink to="/"> <AiOutlineHome className='text-2xl'/> </NavLink>
          </li>
          <li className="" >
          <NavLink to="/projects"> PROJECTS </NavLink>
          </li>
          <li className="" >
          <NavLink to="/experience"> EXPERIENCES </NavLink>
          </li>
          <li className="" >
          <NavLink to="/about"> ABOUT ME </NavLink>
          </li>
      </ul>      
    </nav>
  );
}

export default Navbar;
