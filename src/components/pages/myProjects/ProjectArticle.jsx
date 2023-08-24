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
			<div>
				<Accordion
					expanded={expanded}
					onChange={handleChange}
					sx={{
						backgroundColor: "rgba(1, 1, 1, 0.5)",
						color: "rgb(241, 191, 199)",
						borderRadius: "15px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-around",
					}}
				>
					<AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
						{expanded ? <KeyboardArrowRightIcon /> : <KeyboardArrowDownIcon />}
						{!expanded ? (
							<Typography sx={{ fontStyle: "italic", pl: 2 }}>
								Description
							</Typography>
						) : (
							""
						)}
					</AccordionSummary>
					<AccordionDetails>
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
			</div>
			<div className="container_buttons">
				<a href={github}>
					{" "}
					<GitHubIcon /> GitHub
				</a>
				<a href={demo}>
					<LaunchIcon />
					See Project
				</a>
			</div>
		</article>
	);
};

export default ProjectArticle;
