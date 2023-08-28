import "./App.css";
import AboutMe from "./components/pages/aboutMe/AboutMe";
/* import Shape from "./components/common/shape/Shape"; */
import Home from "./components/pages/home/Home";
/* import MyProjects from "./components/pages/myProjects/MyProjects";
 */ import MyProjects2 from "./components/pages/myProjects/MyProjects2";
/* import ProjectsSlides from "./components/pages/myProjectSlides/ProjectsSlides";
 */ import Navbar from "./components/pages/navbar/Navbar";
import Skills from "./components/pages/skills/Skills";
import SkillsSwiper from "./components/pages/skills/SkillsSwiper";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <Shape /> */}
      <AboutMe />
      {/*  <MyProjects /> */}
      <MyProjects2 />
      <SkillsSwiper />
      <Skills />

      {/* <ProjectsSlides /> */}
    </>
  );
}

export default App;
