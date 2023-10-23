import React from 'react';
import "../styles/footer.css"
import {CiLinkedin} from 'react-icons/ci';
import {BsGithub} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const footer = () => {
    return (
        <div className='footer'>
            <Link to={"/"} className='footerContent'> Florent Marin's Portfolio </Link>
            <div className="externLinks externLinksWrapper">
            <a href="https://www.linkedin.com/in/florent-marin2/" rel="noreferrer" target="_blank"><CiLinkedin /></a>
            <a href="https://github.com/fmarincode" rel="noreferrer" target="_blank"><BsGithub /></a>

          </div>
        </div>
    );
};

export default footer;