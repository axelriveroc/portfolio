import "./homeStyles.css";
/* import img_avatar from "../../../assets/avatar1.png"; */
import { Box } from "@mui/material";
const Home = () => {
	return (
		<section id="Home" className="section_home">
			<Box className="container_front_welcome">
				<div className="frontend-box">
					<h1 className="h1-name">AXEL RIVERO CORONEL</h1>
				</div>
				<div className="box-welcome">
					<span>F</span>
					<span>U</span>
					<span>L</span>
					<span>L</span>
					<span>S</span>
					<span>T</span>
					<span>A</span>
					<span>C</span>
					<span style={{ paddingRight: "5px" }}>K</span>
					<span>D</span>
					<span>E</span>
					<span>V</span>
					<span>E</span>
					<span>L</span>
					<span>O</span>
					<span>P</span>
					<span>E</span>
					<span>R</span>
				</div>
			</Box>
			{/* <div>
        <img src={img_avatar} alt="s" className={`img_avatar`} />
      </div> */}
		</section>
	);
};

export default Home;
