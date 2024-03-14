import "./App.css";
import Footer from "./components/pages/Footer/Footer";
import AboutMe from "./components/pages/aboutMe/AboutMe";
import Aviso_legal from "./components/pages/aviso_legal/Aviso_legal";
import ContactMe from "./components/pages/contactMe/ContactMe";
/* import Shape from "./components/common/shape/Shape"; */
import Home from "./components/pages/home/Home";
/* import MyProjects from "./components/pages/myProjects/MyProjects";
 */ import MyProjects2 from "./components/pages/myProjects/MyProjects2";
/* import ProjectsSlides from "./components/pages/myProjectSlides/ProjectsSlides";
 */ import Navbar from "./components/pages/navbar/Navbar";
import Privacy_policy from "./components/pages/privacy_policy/Privacy_policy";
import Skills from "./components/pages/skills/Skills";
import SkillsSwiper from "./components/pages/skills/SkillsSwiper";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <AboutMe />
                <MyProjects2 />
                <SkillsSwiper />
                <Skills />
                <ContactMe />
                <Footer />
              </>
            }
          />
          <Route
            path="/privacy_policy"
            element={<Privacy_policy />}
          />
          <Route
            path="/aviso_legal"
            element={<Aviso_legal />}
          />
        </Routes>

        {/*  <Home />
        <AboutMe />
        <MyProjects2 />

        <SkillsSwiper />
        <Skills />
        <ContactMe /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
