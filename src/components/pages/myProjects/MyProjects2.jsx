import ProjectArticle from "./ProjectArticle";
import tarot_mockups from "../../../assets/projects/mockups/tarot_mockups.png";
import todo_mockups from "../../../assets/projects/mockups/todo_mockups.png";
import hallowen_mockups from "../../../assets/projects/mockups/halloween-mockups.png";
import culmen_mockups from "../../../assets/projects/mockups/culmen_mockups.png";
import audio_mockups from "../../../assets/projects/mockups/audiophile-mockups.png";

import "./MyProjects.css";

const MyProjects2 = () => {
	return (
		<section id="myProjects" className="section_myProjects">
			<ProjectArticle
				title="AudioPhile - Ecommerce "
				image={audio_mockups}
				technologies={[
					"FullStack",
					"React",
					"Firebase",
					"MercadoPago",
					"Redux",
					"MaterialUI",
				]}
				description="Lorem ipsum, dolor sit amet consectetur adipisicing elit..."
				github="#"
				demo="#"
			/>
			<ProjectArticle
				title="Culmen - Ecommerce"
				image={culmen_mockups}
				technologies={[
					"FullStack",
					"Javascript",
					"NodeJS",
					"MySQL",
					"Express",
					"Sequelize",
					"EJS",
				]}
				description="Lorem ipsum, dolor sit amet consectetur adipisicing elit..."
				github="#"
				demo="#"
			/>
			<ProjectArticle
				title="Encanto Halloween - Shop"
				image={hallowen_mockups}
				technologies={[
					"FrontEnd",
					"Javascript",
					"Swiper",
					"AnimatedOnScroll",
					"Css",
				]}
				description="Lorem ipsum, dolor sit amet consectetur adipisicing elit..."
				github="#"
				demo="#"
			/>
			<ProjectArticle
				title="Tarot - Oráculo Mágico"
				image={tarot_mockups}
				technologies={["FrontEnd", "Javascript", "Css"]}
				description="Lorem ipsum, dolor sit amet consectetur adipisicing elit..."
				github="#"
				demo="#"
			/>
			<ProjectArticle
				title="To Do List - DH"
				image={todo_mockups}
				technologies={["FrontEnd", "Javascript", "FetchAPI", "SweetAlert"]}
				description="Lorem ipsum, dolor sit amet consectetur adipisicing elit..."
				github="#"
				demo="#"
			/>
		</section>
	);
};

export default MyProjects2;
