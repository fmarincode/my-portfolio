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
import showInovin from "../assets/inovin/showInovin.png";
import inovinDemo from "../assets/inovin/inovin.mp4";
import inovinFigma from "../assets/inovin/figma.jpg";
import inovinPrez from "../assets/inovin/inovinPrez.jpg"
import carbonDraw from "../assets/carbon_project/frameCarbon.png"
import showCarbon from "../assets/carbon_project/showCarbon.png"
import carbonVideo from "../assets/carbon_project/carbon_video.mp4"
import carbonThumb from "../assets/carbon_project/carbonProject.png"
import hokaThumb from "../assets/hoka/wishesDesk.png"
import hokaWireframe from "../assets/hoka/hokaWireframe.png"
import showHoka from "../assets/hoka/showHoka.png"
import hokaVideo from "../assets/hoka/hoka_capture.mp4"
import figmaMemo from "../assets/memocard/figmaMemo.png"
import showMemo from "../assets/memocard/prez_projet.png"
import memoThumb from "../assets/memocard/memocardThumb.webp"
import memoVideo from "../assets/memocard/memoVideo.mp4"

export const ProjectList = [
    {
      name: "Quiz Time ! An Odyssey Adventure",
      images: [quizThumb, figmaQuiz, demoQuiz],
      video: quizVideo,
      introduction: 'This is the first web project I ever made. I worked in a group with 3 others students. The theme was suggested by our instructor and we started the project two weeks after our first class lesson. Our subject from this quiz game was to stay in web development learning and offer the possibility to review our knowledges with questions on javascript, css and git.',
      storyTelling: 'We created different pages with a lot of CSS because we were very inspired by the space environment. Then we made it work with some javascript code and here you can see the three pages. As for questions, the subjects revolved around our weekly lessons. ',
      conclusion: 'I am particularly proud of this project! It was the first one and I had a lot of fun working with my team. We had a lot of fun while respecting the expectations placed on us. It was after this project that I said to myself “ok I love css” !',
      skills: "For this project we started on Figma, then we used HTML, CSS & JavaScript.",
      githubLink: "https://github.com/fmarincode/Quiz-game-project",
    },
    {
      name: "The Nook Shop",
      images: [nookShop, figmaNook, demoNook, nookTeam],
      video: nookVideo,
      introduction: 'Here you can find my second project. I worked with 4 others students and our principal goal was to use an API. We have chosen an Animal Crossing API which contains a lot of information from the video game world. After looking at the API and discussing, we decided to create an online shop.',
      storyTelling: "The idea is that we are on a virgin island and we have access to Tom Nook's shop which does everything to make us spend our money.",
      conclusion: "This project was a really good exercice for us because we have been confronted with problems & it was hard to deal with. But we finally respected the delay and presented our website with success. To me, it was a new communication experience with Agile method and I appreciated to be a scrum master, but it wasn't easy !",
      skills: "For this project we started on Figma, then we used HTML, CSS & ReactJS. Our workflow was made easy by Git, Github and the Agile method.",
      githubLink: "https://github.com/WildCodeSchool/2023-02-JS-Lille-project-2-groupe1",
    },
    {
      name: "HomeChange",
      images: [homeXchange, figmaHackathon, demoHackathon],
      video: hackathonVideo,
      introduction: 'Here is a special project because it was created during the hackathon, an event where we have to code a website within a time limit. With my group, we had a day and a half to do it. The assigned theme was "Holidays".',
      storyTelling: "We took the time to write down all the ideas we had regarding this theme. There were plenty of options, so we brainstormed to choose the project that seemed most feasible within the time constraint, as well as the most relevant and original. The website we created offers people who wish to travel the opportunity to stay with a host, on the condition that they take care of the host's pets while they are away. To accomplish this, we utilized two APIs to generate random users and dogs.",
      conclusion: "It was challenging, and we would have liked to have more time to achieve a visually appealing and cohesive design that aligned with our idea. However, we were able to leverage our technical knowledge and present a functional website. Prior to starting this hackathon, I wasn't a fan of such tight time constraints, but I eventually adapted and learned to work and cooperate effectively with my team.",
      skills: "We built this website using HTML & CSS, of course, but also with the help of the ReactJS library and Figma for our mockup.",
      githubLink: "https://github.com/hugocoding21/Hackathon",
    },
    {
      name: "Inovin",
      images: [inovinPrez, inovinFigma, showInovin ],
      video: inovinDemo,
      introduction: 'Inovin is the last project. There is Cédric who working on an idea of wine tasting with a recipe creation in various unusual locations. Then, with my group we talked with him and the ideas came to us. For this workshop, the goal was to create a tablet application.',
      storyTelling: "For this project we are in fullstack positions, from draw the database to the presentation with front and backend situations. To respect the request and deadline we did choice and we did the admin work for the wine management system but we were focus on the user experience. When you are at the workshop, you sign in then you taste some wine propositions and you let your advice about it. After that, your 3 favorite wine are ready for the creation workshop. Here you choose the percentage of each grape variety to create your wine.",

      conclusion: "It was the project where I've made the most progress because there are a lot of functions to do to link the front with the back. But as it was a group project, with the help of my friends we managed to do what we wanted.",
      skills: "We built this app using JavaScript language with React, Node, Express, MySql and Figma for the model.",
      githubLink: "https://github.com/WildCodeSchool/2023-02-JS-Lille-project-3-groupe3-inovin",
    },
    {
      name: "The Carbon Project",
      images: [carbonThumb, carbonDraw, showCarbon],
      video: carbonVideo,
      introduction: "The Carbon Project is a personal project that I presented to my trainees and fellow students. This is the first one I've done by building the front and backend.It has not yen been completed, I need to make some features and fix some problems. I wanted to create a simple tool to calculate your CO2 emissions. I challenged myself on the style of the application. I still have work to do.",
      storyTelling: "The idea is to indicate the city of departure and arrival, choose your means of transport (plane or car) and use this information to calculate your carbon print. For this project I started by looking for APIs. I found 'Carbon Interface' and 'Map Quest Developer' which are limited for free use and which complement each other well. They are easy to use but processing the data in my project was a big deal.",

      conclusion: "I still have a lot to do on this project but I'm really excited by the idea, and the APIs are really good! I've been working on a mobile version, but it's not ready for release yet. ",
      skills: "To built this app I used JavaScript language with React, Node, Express, MySql, JsonWebToken with argon2, Tailwind and Excalidraw for the model.",
      githubLink: "https://github.com/fmarincode/theCarbonProject",
    },
    {
      name: "The Hok-a-like",
      images: [hokaThumb, hokaWireframe, showHoka],
      video: hokaVideo,
      introduction: "This is a personal project that I needed to convince myself that I can do things. The first time I did an e-commerce site was as part of a group and it was The Nook Shop, when I was just starting out as a developer. The aim was technical, so I took a lot of inspiration from the design of the Hoka online sports equipment store.",
      storyTelling: "I wanted to make a site that would allow me to use everything I know how to do as I speak. So I did the front and back end of the project, created a database, a means of authentication and some very common commerce site features. So on the site, you can browse through the items on sale, filter them and add them to your wish list or shopping basket. You can register and finish shopping. It was the moment that allowed me to pinpoint a few things I needed to revise. And as with every project, I learnt new things, such as how to use new libraries. ",

      conclusion: "I really enjoyed making this site and I'm pleased with the time I spent on it. Using tailwind is very pleasant and I discovered Yup & Formik for form management. We're making progress. ",
      skills: "To built this app I used React, Node, Express, MySql, JsonWebToken with argon2, Tailwind, Yup & Formik.",
      githubLink: "https://github.com/fmarincode/e-comReact",
    },
    {
      name: "Memo Card Game",
      images: [memoThumb, figmaMemo, showMemo],
      video: memoVideo,
      introduction: "This project was inspired by a youtube tutorial. I wanted to practise with mongoDB, so I followed some tutorials on MERN projects and on this card game where you have to find the pairs. Then I personnalised the project with my own ideas.",
      storyTelling: "This game enabled me to learn how to use mongo and its NoSQL method for databases, in particular to store my images and map data. But I wanted to go further and personalise the user experience by allowing players to add their own themes. You can add a theme, your images and find them the next time you log in. That was my goal. Another new challenge was to put the application online so that my friends could test it and give me feedback, after which I was able to make adjustments. In fact, I don't think I've finished with this project yet. ",

      conclusion: "I loved doing this project. I've had my difficulties, it's not perfect, but I'm happy with myself and I think that's important.",
      skills: "As I said, it's a MERN by. Mongodb, Express, React, Node, Yup & Formik, Bcrypt, JsonWebToken, Axios, React-Cookies, Tailwind...And I used Render.com to put it online.",
      githubLink: "https://github.com/fmarincode/memory-game",
    }
  ];