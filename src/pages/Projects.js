import React from 'react';
import ProjectItem from '../Components/ProjectItem';
import "../styles/project.css";
import {ProjectList} from "../services/ProjectList";

const Projects = () => {
    return (
        <div className='projects'>
            <h3 className='titleProjectPage'>Here, you can find the projects I worked on</h3>
            <hr></hr>
            <div className='projectList'>
                {ProjectList.map((project, index) => {
                    return <ProjectItem id={index} name={project.name} image={project.images} />
                })}
            </div>
        </div>
    );
};

export default Projects;