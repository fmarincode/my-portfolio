import React from 'react';
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';

function Navbar() {
  
  return (
    <nav className="bg-[--firstColor] bottom-0 fixed w-full h-10 flex items-center text-[--thirdColor] z-50 md:top-0 md:bg-inherit md:text-[--firstColor] md:h-16 md:text-2xl md:font-semibold">
      <ul className="flex w-full justify-around md:justify-center md:space-x-10">
        <li>
          <NavLink to="/" className="md:hidden">
            <AiOutlineHome className='text-2xl' />
          </NavLink>
          <NavLink
            to="/"
            className='hidden md:inline md:hover:border-b-2 md:border-[--secondColor] md:pb-1'
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className='md:hover:border-b-2 md:border-[--secondColor] md:pb-1'
            
          >
            PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experience"
            className='md:hover:border-b-2 md:border-[--secondColor] md:pb-1'
          >
            EXPERIENCES
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className='md:hover:border-b-2 md:border-[--secondColor] md:pb-1'
          >
            ABOUT ME
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
