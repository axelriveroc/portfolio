import "./AboutMe.css";
import yo from "../../../assets/yo1.png";

const AboutMe = () => {
	return (
		<section id="AboutMe" className="section_aboutMe">
			<div className="box_aboutMe">
				<div className="box_img_aboutMe">
					<img src={yo} alt="yo" className="foto_aboutMe" />
				</div>
				<div className="box_h2_description_aboutMe">
					<h2>About Me</h2>
					<div className="text_description_aboutMe">
						<p>
							I am a full-stack web developer specializing in frontend
							development. Coming from a background in psychology and education
						</p>
						<p>
							Collaborating within a team, we have worked to brainstorm
							improvement solutions for a product and create consistent
							websites. My dedication to research and continuous pursuit of
							skill enhancement is relentless.
						</p>
						<p>
							My focus revolves around strengthening my ability for effective
							communication, agility in learning, and a constant capacity for
							creatively solving problems.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
