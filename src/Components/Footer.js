import React from 'react';
/* import "../styles/footer.css" */
import {CiLinkedin} from 'react-icons/ci';
import {BsGithub} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const footer = () => {
    return (
        <div className='hidden md:bg-[#16425B] md:relative md:bottom-0 md:flex md:items-center md:text-[--thirdColor] md:mt-auto md:h-12 md:w-full md:pr-5'>
            <section className='w-full flex justify-center text-xl pl-5'>
                <Link to={"/"} className=''> Florent Marin's Portfolio </Link>
            </section>
            <section className="flex space-x-3 text-2xl">
            <a href="https://www.linkedin.com/in/florent-marin2/" rel="noreferrer" target="_blank"><CiLinkedin /></a>
            <a href="https://github.com/fmarincode" rel="noreferrer" target="_blank"><BsGithub /></a>

          </section>
        </div>
    );
};

export default footer;