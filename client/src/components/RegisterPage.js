import React, { useState } from "react";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup, getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Container, Typography, TextField, Button, Link } from "@mui/material";
import { setDoc, doc } from 'firebase/firestore';
import { db, auth } from "../config/firebase";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/mygainz_logo.png";

const RegisterPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();
	
	const handleRegister = async (e) => {
		e.preventDefault();
		
		if (!email || !password || !firstName || !lastName) {
		setErrorMessage('Please fill out all the fields!');
		return;
		}
		
		const auth = getAuth();
		
	};
	
	const handleGoogleSignIn = async () => {
		
	};
	
	const logoContainerStyle = {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: "2rem"
	};
	
	const logoStyle = {
		height: "125px",
		marginBottom: "0rem",
		marginTop: "1rem",
		width: "auto"
	};
	
	return (
		<Container maxWidth="sm">
			<div style={logoContainerStyle}>
				<Link component={RouterLink} to="/login" >
					<img src={logo} alt="logo" style={logoStyle} />
				</Link>
			</div>
			<Typography variant="h4" gutterBottom sx={logoContainerStyle}>
				Welcome new users!
			</Typography>
			<form onSubmit={handleRegister}>
			<TextField
			  label="Email"
			  type="email"
			  value={email}
			  onChange={(e) => setEmail(e.target.value)}
			  fullWidth
			  margin="normal"
			/>
			<TextField
			  label="Password"
			  type="password"
			  value={password}
			  onChange={(e) => setPassword(e.target.value)}
			  fullWidth
			  margin="normal"
			/>
			<TextField
			  label="First Name"
			  type="text"
			  value={firstName}
			  onChange={(e) => setFirstName(e.target.value)}
			  fullWidth
			  margin="normal"
			/>
			<TextField
			  label="Last Name"
			  type="text"
			  value={lastName}
			  onChange={(e) => setLastName(e.target.value)}
			  fullWidth
			  margin="normal"
			/>
			
			{errorMessage && (
			  <Typography
				variant="body2"
				color="error"
				align="center"
				sx={{ mt: 2 }}
			  >
				{errorMessage}
			  </Typography>
			)}
			<Button variant="contained" onClick={handleRegister} fullWidth style={{ marginTop: '1rem' }}>
				Register
			</Button>
			<Button variant="contained" onClick={handleGoogleSignIn} fullWidth style={{ marginTop: '1rem' }}>
				Register with Google
			</Button>
			<Button variant="contained" onClick={() => navigate('/login')} fullWidth style={{ marginTop: '1rem' }}>
				Return to Login Page
			</Button>
			</form>
		</Container>
	);
};

export default RegisterPage;