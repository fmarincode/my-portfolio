import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../services/ProjectList';
/* import "../styles/projectDisplay.css"; */
import { BsGithub } from 'react-icons/bs';

const ProjectDisplay = () => {
    const { id } = useParams()
    const project = ProjectList[id]

    return (
        <main className='flex flex-col items-center w-full px-5 text-[--firstColor] mb-16 md:mt-16'>
            <section className='mt-5 text-justify flex flex-col items-center'>
                <h1 className="font-medium text-xl md:text-2xl"> {project.name}</h1>
                <hr className="mt-2 w-1/2 bg-gradient-to-r from-[--thirdColor] via-[--firstColor] to-[--thirdColor] h-1 md:w-1/6" />

                <article className='mt-5 space-y-5 flex flex-col items-center md:w-10/12 md:mt-20 md:grid md:grid-template-rows: repeat(3, minmax(0, 1fr)) md:grid-cols-2 md:gap-x-32 md:gap-y-10'>
                    <img src={project.images[1]} alt={project.name} />
                    <p>
                        {project.introduction}
                    </p>

                    <p >
                        {project.storyTelling}
                    <span>
                        {project.skills}
                    </span>
                    </p>

                    <img src={project.images[2]} alt={project.name} className='md:max-w-[70%]'/>
                    
                    


                    <video controls width="80%" controlsList="nodownload">
                        <source src={project.video} type="video/mp4" />
                        Sorry, your browser doesn't support videos.
                    </video>

                    <p >
                        {project.conclusion}
                    <div className=' flex justify-start items-center mt-5 '>
                    <BsGithub className='mr-2 text-xl'/>
                        <a href={project.githubLink} rel="noreferrer" target="_blank" > {project.name} Github </a>
                    </div>
                    </p>
                    

                </article>
            </section>
        </main>
    );
};

export default ProjectDisplay;