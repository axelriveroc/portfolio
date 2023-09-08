import {
	Box,
	Button,
	Container,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import "./contactMe.css";

const ContactMe = () => {
	return (
		<Container sx={{ width: "80%" }} id="Contact">
			<Box textAlign={"center"} my={4}>
				<Typography variant="h4" sx={{ m: 5 }} color="secondary" gutterBottom>
					CONTACT ME
				</Typography>
				<form>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label="Your Name"
								variant="outlined"
								required
								color="secondary"
								className="inputForm"
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
		</Container>
	);
};

export default ContactMe;
