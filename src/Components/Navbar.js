import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import React, { useEffect, useState } from 'react';

function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

    const toggleNavMobileScreen = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setWidth(window.innerWidth)
            if(window.innerWidth > 500){
                setToggleMenu(false)
            }
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

  return (
    <div className="navbar" >
      {(toggleMenu || width > 500) && (

      <ul className="links">
          <li className="items" onClick={toggleNavMobileScreen}>
          <NavLink to="/"> Home </NavLink>
          </li>
          <li className="items" onClick={toggleNavMobileScreen}>
          <NavLink to="/projects"> Projects </NavLink>
          </li>
          <li className="items" onClick={toggleNavMobileScreen}>
          <NavLink to="/experience"> Experiences </NavLink>
          </li>
          <li className="items" onClick={toggleNavMobileScreen}>
          <NavLink to="/about"> About Me </NavLink>
          </li>
          
          
          
      </ul>
      )}
      
      <button className='navbarBtn' onClick={toggleNavMobileScreen}>Menu</button>   

      
    </div>
  );
}

export default Navbar;
