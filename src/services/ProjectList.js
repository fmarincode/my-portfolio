import quizThumb from "../assets/quiz/quiz-home.png";
import figmaQuiz from "../assets/quiz/figma2-quiz.png";
import demoQuiz from "../assets/quiz/demo-3-pages-qui-time-game.png"
import quizVideo from "../assets/quiz/quiz-game-project.mp4"
import nookShop from "../assets/nook/nook1.png";
import figmaNook from "../assets/nook/Nook-destkToMob.png";
import demoNook from "../assets/nook/demo-3-pages-nook.png";
import nookVideo from "../assets/nook/nook-shop.mp4";
import nookTeam from "../assets/nook/teamates-nook.png";
import homeXchange from "../assets/hackathon/homexchange.png";
import figmaHackathon from "../assets/hackathon/figma-hackathon.png";
import demoHackathon from "../assets/hackathon/hackathon-demo-2.png";
import hackathonVideo from "../assets/hackathon/hackathon.mp4";

export const ProjectList = [
    {
      name: "Quiz Time ! An Odyssey Adventure",
      images: [quizThumb, figmaQuiz, demoQuiz],
      video: quizVideo,
      introduction: 'This is my first web project I ever made. I worked in group with 3 others students. The theme was suggest by our instructor and we started the project two weeks after our first class lesson. Our subject from this quiz game was to stay in web development learning and offer the possibility to review our knowledges with questions on javascript, css and git.',
      storyTelling: 'We created the different pages with a lot of CSS because we were very inspired by the space environment. Then we made it work with some javascript code and here you can see the three pages. For questions we used our weekly lessons and we choose freely.',
      conclusion: 'I am particularly proud of this project! It was the first one and I had a lot of fun working with my team. We had a lot of fun while respecting the expectations placed on us. It was after this project that I said to myself “ok I love css” !',
      skills: "For this project we started on Figma, then we used HTML, CSS & JavaScript.",
    },
    {
      name: "The Nook Shop",
      images: [nookShop, figmaNook, demoNook, nookTeam],
      video: nookVideo,
      introduction: 'Here you can find my second project. I made it with 4 others students and our principal goal was to use an API. We have chosen an Animal Crossing API which contains a lot of information from the video game world. After looking at the API and discussing, we decided to create an online shop.',
      storyTelling: "The idea is that we are on a virgin island and we have access to Tom Nook's shop which does everything to make us spend our money.",
      conclusion: "This project was a really good exercice for us because we have been confronted with problems & it was hard to deal with. But we finally respected the delay and presented our website with success. To me, it was a new communication experience with Agile method and I appreciated to be a scrum master, but it wasn't easy !",
      skills: "For this project we started on Figma, then we used HTML, CSS & ReactJS. Our workflow was help by Git, Github and the Agile method.",
    },
    {
      name: "HomeChange",
      images: [homeXchange, figmaHackathon, demoHackathon],
      video: hackathonVideo,
      introduction: 'Here is a special project because it was created during the hackathon, an event where we have to code a website within a time limit. With my group, we had a day and a half to do it. The assigned theme was "Holidays".',
      storyTelling: "We took the time to write down all the ideas we had regarding this theme. There were plenty of options, so we brainstormed to choose the project that seemed most feasible within the time constraint, as well as the most relevant and original. The website we created offers people who wish to travel the opportunity to stay with a host, on the condition that they take care of the host's pets while they are away. To accomplish this, we utilized two APIs to generate random users and dogs.",

      conclusion: "It was challenging, and we would have liked to have more time to achieve a visually appealing and cohesive design that aligned with our idea. However, we were able to leverage our technical knowledge and present a functional website. Prior to starting this hackathon, I wasn't a fan of such tight time constraints, but I eventually adapted and learned to work and cooperate effectively with my team.",
      skills: "We built this website using HTML & CSS, of course, but also with the help of the ReactJS library and Figma for our mockup.",
    }
  ];