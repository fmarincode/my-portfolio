import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import projectsMin from "../assets/portfolio-p1-2-hack.png";


function Home() {

  const pdfUrl = "https://drive.google.com/file/d/1Dt5mLl6rW6jA7uItno5AK7EEPStq2pGM/view?usp=share_link"

  return (
    <div className="home">
      <div className="about">
        <h2 className="hello"> Hi, My Name is Florent</h2>
          <p>A web developer with a passion for learning.</p>
          <hr></hr>
            <div className="welcomeTo">
              <h2 >Welcome to my portfolio, where I share my passion with you.</h2>  
            </div>
            <section className="linkSection">
              <a href={pdfUrl} download target="blank" className="homeLinks">Download my Resume &gt;</a>
              <Link to={"/projects"} className="homeLinks">View my projects &gt; </Link>

            </section>
          

     
      </div>
      <div className="presentationImg">
        <img src={projectsMin} alt="all project thumbnails"></img>
      </div>
      
      
      
    </div>
  );
}

export default Home;