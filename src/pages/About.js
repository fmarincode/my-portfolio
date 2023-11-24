import React from 'react';
/* import "../styles/about.css" */
import cvVideo from "../assets/CV_2.mp4";
import runningPic from "../assets/illus/jakob-owens-A4579vLezz8-unsplash.jpg"
import koreeda from "../assets/illus/koreeda.jpg"

const About = () => {

    return (
        <main className="flex flex-col items-center w-full px-5 mb-16 text-[--firstColor] md:mt-16">
                <section className='mt-5 md:flex md:justify-center'> 
                    <video controls controlsList="nodownload" className=' md:w-[40%]'>
                        <source src={cvVideo} type="video/mp4" />
                    Sorry, your browser doesn't support videos.
                    </video>
                </section>
                
                <section className='mt-5 flex flex-col items-center'>
                    <h1 className='text-2xl font-semibold'>What about me ?</h1>
                    <article className='mt-5 flex flex-col items-center md:flex-row md:w-[50%] md:flex-wrap'>
                        <div className='md:flex md:flex-row-reverse md:w-full md:space-x-10 md:items-center'>

                            <p className="text-justify md:pt-5 md:ml-10">I have been a web developer since February 2023, learning every day to do more and better. But you'll discover that by visiting this site. Today I want to develop my technical skills with new projects.
                            Before, I worked in audiovisual post-production in Paris and decided to change job and my lifestyle. To tell you about myself, I love the cinema (in the dark room), I like running a lot, it clears my mind and I'm getting better every year. 
                            If you want to talk for hours, talk to me about arts from cartoons to your favourite music of shame with the films you like to watch over and over again.
                            For example, in music I love Silver Pozzoli's italo disco and in cinema, the closer you get to reality, the more I like it, like the films of Hirokazu Kore-eda. If you want, I also have an account on <span className='text-[--secondColor] font-semibold'>&gt; </span><a href='https://www.senscritique.com/Brav-Pitt' target='blank' className='underline hover:cursor-pointer text-[--secondColor] tracking-wider font-semibold'>SensCritique</a> where you can find out all about my preferences.
                            </p> 
                            
                                <img src={koreeda} alt='movie poster of "After the storm" by Hirokazu Kore-eda' className='pt-5 md:w-80'/> 
                                
                        </div>

                        
                        <div className='md:flex md:flex-row md:w-full md:space-x-10 md:items-center'>

                            <p className="pt-5 text-justify">I approach life as an endurance race. I think that we need time to do a lot of things and well. This is the case for developing hard skills, but also for getting to know yourself. Then It's easier to talk about yourself and discover who you are and your soft skills.

                            Sometimes the rythm of life changes and we experience a slump, we change according to our emotional states and it's the same when we doing sport activity. The most important thing is to find the motivation to keep going. That's why you can write, talk and get your thoughts out.
                            When I'm running, I think about everything that's going well and everything that's not. When I've finished running, I get new ideas and I'm off on the right foot again. It's like my spare wheel.</p>
        
                            <img src={runningPic} alt='a runner' className='pt-5 md:w-80'/>
                            
                        </div>

                            <div className='md:flex md:w-full md:justify-center'>
                                <p className="pt-5">That's why I've set myself the goal of doing a tour of Europe's half-marathons.</p>
                            </div>
                        
                    </article>
                </section>
        <br />
        <p className='pt-5'>You need to contact me ? You can send me an email by clicking <span className='text-[--secondColor] font-semibold'>&gt; <a href="mailto:florent.marin59@gmail.com" className='underline tracking-wide font-semibold'>here</a></span>.</p>
      
      </main>
    );
};

export default About;