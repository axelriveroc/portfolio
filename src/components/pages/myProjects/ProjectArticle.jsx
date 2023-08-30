import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import "./MyProjects.css";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectArticle = ({
  title,
  image,
  technologies,
  description,
  github,
  demo,
  iconsAudio,
  iconsCulmen,
  iconsTodo,
  iconsHalloween,
  iconsTarot,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  console.log(iconsAudio);

  return (
    <article className="card_project">
      <h2>{title}</h2>
      <img src={image} alt="" className="img_project" />
      <div className="container_tecn_project">
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
      <Accordion
        expanded={expanded}
        onChange={handleChange}
        className={` ${
          expanded
            ? "acordion_container_expanded"
            : "acordion_container_noexpanded"
        }`}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          className="acordion_container_description"
        >
          {expanded ? <KeyboardArrowRightIcon /> : <KeyboardArrowDownIcon />}
          {!expanded ? (
            <Typography sx={{ fontStyle: "italic", pl: 1 }}>
              Description
            </Typography>
          ) : (
            ""
          )}
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, sm: expanded ? 4 : 2 },
            mt: { xs: 0, sm: expanded ? 2 : 0 },
          }}
        >
          <p className="text_description_project">{description}</p>
          <div className="tecnologies_icons">
            {title === "AudioPhile - Ecommerce" &&
              iconsAudio?.map((icon, index) => (
                <figure key={index}>{icon}</figure>
              ))}
            {title === "Culmen - Ecommerce" &&
              iconsCulmen?.map((icon, index) => (
                <figure key={index}>{icon}</figure>
              ))}
            {title === "To Do List - DH" &&
              iconsTodo?.map((icon, index) => (
                <figure key={index}>{icon}</figure>
              ))}
            {title === "Encanto Halloween - Shop" &&
              iconsHalloween?.map((icon, index) => (
                <figure key={index}>{icon}</figure>
              ))}
            {title === "Tarot - Oráculo Mágico" &&
              iconsTarot?.map((icon, index) => (
                <figure key={index}>{icon}</figure>
              ))}
          </div>
        </AccordionDetails>
      </Accordion>
      <div className="container_buttons">
        {github !== "" && (
          <a href={github}>
            {" "}
            <GitHubIcon /> GitHub
          </a>
        )}

        {demo !== "" && (
          <a href={demo}>
            <LaunchIcon />
            See Project
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectArticle;
