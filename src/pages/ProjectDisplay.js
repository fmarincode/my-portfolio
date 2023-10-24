import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../services/ProjectList';
/* import "../styles/projectDisplay.css"; */
import { BsGithub } from 'react-icons/bs';

const ProjectDisplay = () => {
    const { id } = useParams()
    const project = ProjectList[id]

    return (
        <main className='flex flex-col items-center w-full px-5 text-[--firstColor]'>
            <section className='mt-5 text-justify flex flex-col items-center'>
                <h1 className="font-medium text-xl"> {project.name}</h1>
                <hr className="mt-2 w-1/2 bg-gradient-to-r from-[--thirdColor] via-[--firstColor] to-[--thirdColor] h-1" />

                <article className='mt-5 space-y-5 flex flex-col items-center'>
                    <img src={project.images[1]} alt={project.name} className='order-1'/>
                    <p className='order-2'>
                        {project.introduction}
                    </p>

                    <p className='order-3'>
                        {project.storyTelling}
                    </p>
                    <p className='order-5'>
                        {project.skills}
                    </p>

                    <img src={project.images[2]} alt={project.name} className='order-4'/>


                    <video controls width="80%" controlsList="nodownload" className='order-6'>
                        <source src={project.video} type="video/mp4" />
                        Sorry, your browser doesn't support videos.
                    </video>

                    <p className='order-7'>
                        {project.conclusion}
                    </p>
                    
                    <div className='order-8 flex justify-start items-center'>
                    <BsGithub className='mr-2 text-xl'/>
                        <a href={project.githubLink} rel="noreferrer" target="_blank" > {project.name} Github </a>
                    </div>



                </article>
            </section>
        </main>
    );
};

export default ProjectDisplay;