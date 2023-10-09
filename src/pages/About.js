import React, { useState } from 'react';
import "../styles/about.css"
import cvVideo from "../assets/CV_2.mp4";

const About = () => {
    const [moreInfos, setMoreInfos] = useState(false)


    const handleClickForMore= () => {
        setMoreInfos(!moreInfos)

    }

    return (
        <div className="whoAmI">
                <div> 
                    <video controls width="40%" controlsList="nodownload">
                        <source src={cvVideo} type="video/mp4" />
                    Sorry, your browser doesn't support videos.
                    </video>
                </div>
            <h2>What about me ?</h2>
                <p className="presentation">I have been a web developer since February 2023, learning every day to do more and better. But you'll discover that by visiting this site. Before, I worked in audiovisual post-production in Paris and decided to change job. To tell you about myself, I love the cinema (the dark room is better by far than the computer screen, right ?), I like running a lot, it clears my mind and I'm getting better every year. 
                If you want to talk for hours, talk to me about arts from cartoons to your favourite music of shame with the films you like to watch over and over again.</p> <p className="moreClicking" onClick={handleClickForMore}>More about me </p>

                {moreInfos && (
                    <>
                <p className="presentation">I approach life as an endurance race. I think that we need time to do a lot of things and well. This is the case for developing hard skills, but also for getting to know yourself. Then It's easier to talk about yourself and discover who you are and your soft skills.</p>

                <p className="presentation">Sometimes the rythm of life changes and we experience a slump, we change according to our emotional states and it's the same when we doing sport activity. The most important thing is to find the motivation to keep going. That's why you can write, talk and get your thoughts out.
                When I'm running, I think about everything that's going well and everything that's not. When I've finished running, I get new ideas and I'm off on the right foot again. It's like my spare wheel.</p>

                <p className="presentation">All this to say that it was a lot of reflections and personal work that enabled me to start on a career change.</p>
                    </>)
                }
        <br />
        <p>You need to contact me ? You can send me an email by clicking <a href="mailto:florent.marin59@gmail.com">here</a>.</p>
      
      </div>
    );
};

export default About;