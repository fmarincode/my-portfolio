import React from 'react';
import "../styles/footer.css"
import {CiLinkedin} from 'react-icons/ci';
import {BsGithub} from 'react-icons/bs';

const footer = () => {
    return (
        <div className='footer'>
            <p> &copy; All Rights Reserved. </p>
            <div className="externLinks externLinksWrapper">
            <a href="https://www.linkedin.com/in/florent-marin2/" rel="noreferrer" target="_blank"><CiLinkedin /></a>
            <a href="https://github.com/fmarincode" rel="noreferrer" target="_blank"><BsGithub /></a>

          </div>
        </div>
    );
};

export default footer;