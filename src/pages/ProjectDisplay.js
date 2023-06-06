import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../services/ProjectList';
import "../styles/projectDisplay.css";
import {BsGithub} from 'react-icons/bs';

const ProjectDisplay = () => {
    const { id } = useParams()
    const project = ProjectList[id]

    return (
        <>        
        <div className='projectPage'>
            <h2 className='projectName'> {project.name}</h2>
            
            <div className='project'>
                <div className='showFigma'> 
                    <img src={project.images[1]} alt={project.name}></img> 
                </div>
                <p className='projectIntroduction'>
                    {project.introduction}
                </p>

                <p className='projectStoryTelling'>
                    {project.storyTelling}
                </p>
                <p className='projectSkills'>
                    {project.skills}
                    </p>
                <div className='showDemo'> 
                    <img src={project.images[2]} alt={project.name}></img> 
                </div> 
                <div className='showVideo'> 
                    <video controls width="80%" controlsList="nodownload">
                        <source src={project.video} type="video/mp4" />
                    Sorry, your browser doesn't support videos.
                    </video>
                </div>
                <p className='projectConclusion'>
                    {project.conclusion}
                </p>
                <div className='githubLink'>
                    <a href={project.githubLink} rel="noreferrer" target="_blank">{project.name} Github <BsGithub /></a>
                </div>
            
            
        </div>
        </div>
        </>
    );
};

export default ProjectDisplay;