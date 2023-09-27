import React, { useState } from "react";
import axios from "axios";
import {
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { Container, Typography, TextField, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/mygainz_logo.png";

const LoginPage = () => {

	const logoStyle = {
		height: "500px",
		width: "auto",
		marginBottom: "-8rem",
		marginTop: "-10rem"
		
	};
	
	return (
		<div>
			Hello World!
			<img src={logo} alt="logo" style={logoStyle} />
			
			
		</div>
	);
};

export default LoginPage;