import "./App.css";
import AboutMe from "./components/pages/aboutMe/AboutMe";
/* import Shape from "./components/common/shape/Shape"; */
import Home from "./components/pages/home/Home";
/* import MyProjects from "./components/pages/myProjects/MyProjects";
 */import MyProjects2 from "./components/pages/myProjects/MyProjects2";
/* import ProjectsSlides from "./components/pages/myProjectSlides/ProjectsSlides";
 */ import Navbar from "./components/pages/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
     {/*  <MyProjects /> */}
     <MyProjects2 />
      {/* <Shape /> */}
      {/* <ProjectsSlides /> */}
    </>
  );
}

export default App;
