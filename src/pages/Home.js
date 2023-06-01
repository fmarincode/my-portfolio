import React from "react";
import "../styles/home.css";
import projectsMin from "../assets/portfolio-p1-2-hack.png";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2 className="hello"> Hi, My Name is Florent</h2>
          <p>A web developer with a passion for learning.</p>
          <hr></hr>
            <div className="welcomeTo">
              <h2 >Welcome to my portfolio, where I'll be showing you the projects I'm working on.</h2>  
            </div>
          

     
      </div>
      <div className="presentationImg">
        <img src={projectsMin} alt="all project thumbnails"></img>
      </div>
      
      
      
    </div>
  );
}

export default Home;