import React from "react";
import { Link } from "react-router-dom";
import carbonProject from "../assets/carbon_project/carbonProject.png"
import quizProject from "../assets/quiz/quiz-home.png"
import exchangeProject from "../assets/hackathon/homexchange.png"
import inovinProject from "../assets/inovin/bigPrezTablette2.png"
import nookProject from "../assets/nook/nook1.png"
import hokaProject from "../assets/hoka/homeDesk.png"


function Home() {

  const pdfUrl = "https://drive.google.com/file/d/1Dt5mLl6rW6jA7uItno5AK7EEPStq2pGM/view?usp=share_link"

  return (
    <section className="flex flex-col justify-center w-full mb-16 text-[--firstColor] px-3 md:mt-16 md:flex-row md:px-16 md:justify-center md:space-x-56 md:h-auto md:items-start">
      <article className="text-center mt-5 mb-5 flex flex-col items-center md:mt-24">
        <h1 className="text-2xl font-semibold md:text-6xl"> Hi, My Name is Florent</h1>
          <p className="font-medium text-xl md:text-2xl md:pt-5">A web developer with a passion for learning.</p>
          <hr className="mt-2 w-1/2 bg-gradient-to-r from-[--thirdColor] via-[--firstColor] to-[--thirdColor] h-1" />
            <div className="mt-5 md:mt-0 md:pt-2">
              <h2 className="text-xl font-medium">Welcome to my portfolio, where I share my passion with you.</h2>  
            </div>
            <section className="text-[--secondColor] text-xl flex flex-col mt-3 mb-5 md:flex-row md:justify-around md:w-full">
              <a href={pdfUrl} download target="blank" className="font-semibold">&gt; <span className="hover:underline tracking-widest">Download my Resume</span> </a>
              <Link to={"/projects"} className="font-semibold">&gt; <span className="hover:underline tracking-widest">View my projects</span></Link>
            </section>
          <article className="bg-[#f5f6f488] rounded-lg shadow-lg hover:shadow-xl flex flex-col items-center py-2 md:mt-5">
            <header className="w-full text-center my-5">
              <h2 className="underline decoration-wavy font-bold">What's news ?</h2>
            </header>
            <article className="px-3 py-3 text-left">
              <p> <span className="text-[--secondColor] font-bold">&gt; </span> October the 25th 2023</p>
              <hr className="bg-[--firstColor] h-0.5"/>
                <h3 className="text-center py-2">Update :</h3> 
              <ul className="list-disc pl-3 space-y-2">
                <li>Addition of this update log.</li>
                <li>Addition of <Link to={"/project/5"} className="hover:underline text-[--secondColor] font-semibold tracking-wide">The Hok-a-like</Link> project.</li>
                <li>Colour change & font-style to find a better contrast.</li>
                <li>Addition of photos and details for the <Link to={"/about"} className="hover:underline text-[--secondColor] font-semibold tracking-wide">About Me</Link> page to make the portfolio more personal.</li>          
              </ul>
            </article>
          </article>
      </article>


      <section className="flex flex-col items-center mt-5 w-full md:w-80 md:mt-10" >
        <article className="bg-gradient-to-b from-[--secondColor] to-[--firstColor] flex justify-center py-5 rounded-2xl">
          <ul className="w-10/12 space-y-5 md:h-[60vh] md:carousel md:carousel-vertical">
            <li className="md:carousel-item"><img src={quizProject} alt="quiz project thumbnails" /></li>
            <li className="md:carousel-item"><img src={nookProject} alt="animal crossing project thumbnails" /></li>
            <li className="md:carousel-item"><img src={inovinProject} alt="inovin project thumbnails" /></li>
            <li className="md:carousel-item"><img src={exchangeProject} alt=" hackathon project thumbnails" /></li>
            <li className="md:carousel-item"><img src={carbonProject} alt="carbon project thumbnails" /></li>
            <li className="md:carousel-item"><img src={hokaProject} alt="hoka project thumbnails" /></li>
          </ul>
        </article>
      </section>    
    </section>
  );
}

export default Home;