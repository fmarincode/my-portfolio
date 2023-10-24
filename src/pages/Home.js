import React from "react";
import { Link } from "react-router-dom";
/* import "../styles/home.css"; */
import carbonProject from "../assets/carbon_project/carbonProject.png"
import quizProject from "../assets/quiz/quiz-home.png"
import exchangeProject from "../assets/hackathon/homexchange.png"
import inovinProject from "../assets/inovin/bigPrezTablette2.png"
import nookProject from "../assets/nook/nook1.png"



function Home() {

  const pdfUrl = "https://drive.google.com/file/d/1Dt5mLl6rW6jA7uItno5AK7EEPStq2pGM/view?usp=share_link"

  return (
    <section className="flex flex-col justify-center w-full mb-16 text-[--firstColor] px-3 md:mt-16 md:flex-row md:px-16 md:justify-center md:space-x-56 md:h-auto md:items-start">
      <article className="text-center mt-5 flex flex-col items-center md:mt-52">
        <h1 className="text-2xl font-semibold md:text-6xl"> Hi, My Name is Florent</h1>
          <p className="font-medium text-xl md:text-2xl md:pt-5">A web developer with a passion for learning.</p>
          <hr className="mt-2 w-1/2 bg-gradient-to-r from-[--thirdColor] via-[--firstColor] to-[--thirdColor] h-1" />
            <div className="mt-5 md:mt-0 md:pt-2">
              <h2 className="text-xl font-medium">Welcome to my portfolio, where I share my passion with you.</h2>  
            </div>
            <section className="text-[--secondColor] flex flex-col mt-3 md:flex-row md:justify-around md:w-full">
              <a href={pdfUrl} download target="blank">&gt; <span className="hover:underline">Download my Resume</span> </a>
              <Link to={"/projects"} className="">&gt; <span className="hover:underline">View my projects</span></Link>
            </section>
      </article>

      <section className="flex flex-col items-center mt-5 w-full md:w-80 md:mt-10" >
        <article className="bg-gradient-to-b from-[--secondColor] to-[--firstColor] flex justify-center py-5 rounded-2xl">
          <ul className="w-10/12 space-y-5 md:h-[60vh] md:carousel md:carousel-vertical">
            <li className="md:carousel-item"><img src={quizProject} alt="quiz project thumbnails" /></li>
            <li className="md:carousel-item"><img src={nookProject} alt="animal crossing project thumbnails" /></li>
            <li className="md:carousel-item"><img src={inovinProject} alt="inovin project thumbnails" /></li>
            <li className="md:carousel-item"><img src={exchangeProject} alt=" hackathon project thumbnails" /></li>
            <li className="md:carousel-item"><img src={carbonProject} alt="carbon project thumbnails" /></li>
          </ul>
        </article>
      </section>    
    </section>
  );
}

export default Home;