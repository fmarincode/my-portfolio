import React from 'react';
import ProjectItem from '../Components/ProjectItem';
import {ProjectList} from "../services/ProjectList";

const Projects = () => {
    return (
        <section className='flex flex-col justify-center w-full text-[--firstColor] px-3 md:mt-16 md:px-16'>
            <article className='text-center mt-5 flex flex-col items-center'>
                <h1 className='text-2xl font-semibold'>Here, you can find the projects I worked on</h1>
                <hr className="mt-3 w-1/2 bg-gradient-to-r from-[--thirdColor] via-[--firstColor] to-[--thirdColor] h-1 md:w-1/4" />
            </article>
            <article className='mt-5 flex flex-col items-center md:flex-row md:flex-wrap md:w-full md:justify-center md:space-x-16'>
                {ProjectList.map((project, index) => {
                    return( 
                    <ul className='flex flex-col'>
                        <li className=''>
                            <ProjectItem id={index} name={project.name} image={project.images}/>
                        </li>
                    </ul>
                    )
                })}
            </article>
        </section>
    );
};

export default Projects;