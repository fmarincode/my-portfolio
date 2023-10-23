import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from 'react-icons/md'
import { MdWorkOutline } from 'react-icons/md'


function Experiences() {
  return (
    <section className="mt-5 flex flex-col items-center text-[--firstColor] px-5">
      <h1 className='text-2xl font-semibold text-center'>My educational background and professional experiences</h1>
      
      <article className="">
      <VerticalTimeline lineColor="#E94F37">
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - Today"
          iconStyle={{ background: "#E94F37", color: "#fff" }}
          icon={<MdSchool />}
        >
          
          <h3 className="vertical-timeline-element-title" >
          Wild Code School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <em>Lille</em>
          </h4>
          <p>
          Web Developer Bootcamp
          </p>
          <br/>
          <em>Learning languages, workflow. Group projects, workshops. <br/>
          HTML, CSS, JavaScript, ReactJS, ExpressJS, NodeJS, MySQL, Git </em>

        </VerticalTimelineElement>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          iconStyle={{ background: "#E94F37", color: "#fff" }}
          icon={<MdWorkOutline />}
        >
          
          <h3 className="vertical-timeline-element-title" >
          Assistant film editor - Enibas Productions
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <em>Boulogne-Billancourt</em>
          </h4>
          <p>
          I managed the input and output of projects to ensure their daily broadcast on television. I worked in collaboration with a post-production and editorial team to intervene throughout the production chain of the shows.
          </p>
          <p>The programs were intended for France Télévisions, TF1, and C8.</p>
          <br/>
          <em>"Météo à la Carte", "Au bout de l'enquête", "Stéréo Club", "1h30 Max", "Camille & Images", & more...</em>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2021"
          iconStyle={{ background: "#E94F37", color: "#fff" }}
          icon={<MdWorkOutline />}
        >
          <h3 className="vertical-timeline-element-title">
          Assistant film editor - LF Prod
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <em>Montreuil</em>
          </h4>
          <p>
          Under the responsibility of the technical director and in accordance with the requests, I was tasked with blurring the investigative shows.
          </p>
          <p>The programs are broadcasted on multiple channels like M6 & TF1.</p>
          <br/>
          <em>"Appels d'Urgence", "Enquête d'action", "Zone Interdite", "66 minutes" & more...</em>
        </VerticalTimelineElement>
        
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2020"
          iconStyle={{ background: "#E94F37", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
          Free Conservatory of French Cinema
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <em>Paris</em>
          </h4>

          <p>Title of Film and Audiovisual Editor</p>
          <br />
          <em>Editing on Premiere Pro, Avid Media Composer & Da Vinci Resolve, several short film projects and workshops.</em>
        </VerticalTimelineElement>

       
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
          iconStyle={{ background: "#E94F37", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
          National Institute for Higher Education
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <em>Valenciennes</em>
          </h4>

          <p> Master in primary education</p>
          <br />
          <em>"Learning to learn, teaching methods, internships, disciplinary and didactic teachings."</em>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2017"
          iconStyle={{ background: "#E94F37", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
          Lille 3 Charles-de-Gaulle University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <em>Lille</em>
          </h4>
          <p> Bachelor of Film Studies</p>
          <br/>
          <em>History of Cinema, Theories, Script workshop, Animation workshop...</em>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </article>
    </section>
  );
}

export default Experiences;