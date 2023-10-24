import React, { useState} from 'react';
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';

function Navbar() {
  const [selectedPage, setSelectedPage] = useState('')

  return (
    <nav className="bg-[--firstColor] bottom-0 fixed w-full h-10 flex items-center text-[--thirdColor] z-50 md:top-0 md:bg-inherit md:text-[--secondColor] md:h-16 md:text-lg">
      <ul className="flex w-full justify-around md:justify-center md:space-x-10">
        <li>
          <NavLink to="/" className="md:hidden">
            <AiOutlineHome className='text-2xl' />
          </NavLink>
          <NavLink
            to="/"
            className={`hidden md:inline ${selectedPage === 'home' ? 'md:border-b-2 md:border-[--secondColor] md:pb-1 md:ease-in md:duration-300' : ''}`}
            onClick={() => setSelectedPage('home')}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={selectedPage === 'projects' ? 'md:border-b-2 md:border-[--secondColor] md:pb-1 md:ease-in md:duration-300' : ''}
            onClick={() => setSelectedPage('projects')}
          >
            PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experience"
            className={selectedPage === 'experience' ? 'md:border-b-2 md:border-[--secondColor] md:pb-1 md:ease-in md:duration-300' : ''}
            onClick={() => setSelectedPage('experience')}
          >
            EXPERIENCES
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={selectedPage === 'about' ? 'md:border-b-2 md:border-[--secondColor] md:pb-1 md:ease-in md:duration-300' : ''}
            onClick={() => setSelectedPage('about')}
          >
            ABOUT ME
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
