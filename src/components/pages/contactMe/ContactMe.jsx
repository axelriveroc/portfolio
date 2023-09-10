import {
	Box,
	Button,
	Container,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import "./contactMe.css";

const ContactMe = () => {
	const form = useRef();
	const [alertVisible, setAlertVisible] = useState(false);
	const [nameError, setNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [messageError, setMessageError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setNameError("");
		setEmailError("");
		setMessageError("");

		// Validación del campo "name"
		if (form.current.user_name.value.length < 3) {
			setNameError("El nombre debe tener al menos 3 letras.");
			return;
		}

		// Validación del campo "user_email" como correo electrónico válido
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailPattern.test(form.current.user_email.value)) {
			setEmailError("Ingrese un correo electrónico válido.");
			return;
		}

		// Validación del campo "message" con al menos 15 caracteres
		if (form.current.message.value.length < 15) {
			setMessageError("El mensaje debe tener al menos 15 caracteres.");
			return;
		}

		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
					setAlertVisible(true);
					setTimeout(() => {
						setAlertVisible(false);
					}, 3000); //
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<Container sx={{ width: "80%" }} id="Contact">
			<Box textAlign={"center"} my={4}>
				<Typography variant="h4" sx={{ m: 5 }} color="secondary" gutterBottom>
					CONTACT ME
				</Typography>
				<form onSubmit={(e) => handleSubmit(e)} ref={form} method="POST">
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label="Your Name"
								variant="outlined"
								required
								color="secondary"
								className="inputForm"
								name="user_name"
								error={nameError !== ""}
								helperText={nameError}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label="Your Email"
								variant="outlined"
								required
								color="secondary"
								className="inputForm"
								name="user_email"
								error={emailError !== ""}
								helperText={emailError}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								fullWidth
								label="Message"
								variant="outlined"
								multiline
								rows={4}
								required
								color="secondary"
								className="inputForm"
								name="message"
								error={messageError !== ""}
								helperText={messageError}
							/>
						</Grid>
						<Grid item xs={12}>
							<Button
								variant="contained"
								color="secondary"
								type="submit"
								fullWidth
							>
								Send
							</Button>
						</Grid>
					</Grid>
				</form>
			</Box>

			{alertVisible && (
				<Stack
					spacing={2}
					sx={{
						width: "45%",
						position: "fixed",
						top: "10px",
						right: "10px",
						zIndex: 9999,
						animation: "slideIn 0.5s forwards",
					}}
				>
					<Alert severity="success" onClose={() => setAlertVisible(false)}>
						Email recibido ! Gracias :)
					</Alert>
				</Stack>
			)}
		</Container>
	);
};

export default ContactMe;
