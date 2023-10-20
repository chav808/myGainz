import React, { useState } from "react";
import { TextField, Button, Box, Typography, Link } from '@mui/material';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../config/firebase';
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/mygainz_logo.png";

const ResetPassword = () => {
	const [email, setEmail] = useState('');
	const [isEmailSent, setIsEmailSent] = useState(false);
	
	const handleResetPassword = async () => {
		try {
			await sendPasswordResetEmail(auth, email);
			setIsEmailSent(true);
		} catch (error) {
			console.error("Error sending reset email! Error code: ", error);
		}
	};
	
	const logoContainerStyle = {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: "2rem",
	};

	const logoStyle = {
		height: "350px",
		marginBottom: "-2.5rem",
		marginTop: "-2rem",
		width: "auto",
	 };
	
	return (
		<Box
		  sx={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			height: '100vh',
		  }}
		>
		  <Box sx={{ width: '300px', mb: 4 }}>
		  <div style={logoContainerStyle}>
			<Link component={RouterLink} to="/login" underline="none">
			  <img src={logo} alt="logo" style={logoStyle} />
			</Link>
		  </div>
			{isEmailSent ? (
			  <Typography variant="body1" align="center" mb={2}>
				Password reset email sent. Please check your inbox for instructions!
			  </Typography>
			) : null}
			<TextField
			  label="Email"
			  type="email"
			  value={email}
			  onChange={(e) => setEmail(e.target.value)}
			  placeholder="Enter your email"
			  fullWidth
			  margin="normal"
			  size="small"
			/>
			<Button variant="contained" onClick={handleResetPassword} fullWidth>
			  Reset Password
			</Button>
		  </Box>
		</Box>
	);
};

export default ResetPassword;