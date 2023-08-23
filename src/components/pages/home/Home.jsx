import "./homeStyles.css";
/* import img_avatar from "../../../assets/avatar1.png"; */
import { Box } from "@mui/material";
const Home = () => {
  return (
    <section id="home" className="section_home">
      <Box className="container_front_welcome">
        <div className="frontend-box">
          <h1 className="h1-name">AXEL RIVERO CORONEL</h1>
        </div>
        <div className="box-welcome">
          <span>F</span>
          <span>R</span>
          <span>O</span>
          <span>N</span>
          <span>T</span>
          <span>E</span>
          <span>N</span>
          <span style={{ paddingRight: "5px" }}>D</span>
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
