import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./pages/About"
import Projects from "./pages/Projects";
import ProjectDisplay from "./pages/ProjectDisplay";
import Experiences from "./pages/Experiences";



function App() {
  return (
    <div className="App">
      

         <Navbar />
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects/>} />
           
            <Route path="/experience" element={<Experiences/>} />
            <Route path="/project/:id" element={<ProjectDisplay />} />
            
          </Routes>
        <Footer /> 

      
    </div>
  );
}

export default App;
