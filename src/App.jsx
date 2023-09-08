import "./App.css";
import AboutMe from "./components/pages/aboutMe/AboutMe";
import ContactMe from "./components/pages/contactMe/ContactMe";
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
			<ContactMe />

			{/* <ProjectsSlides /> */}
		</>
	);
}

export default App;
