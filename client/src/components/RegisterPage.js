import React, { useState } from "react";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { Container, Typography, TextField, Button, Link } from "@mui/material";
import { doc, setDoc } from 'firebase/firestore';
import { db, auth } from "../config/firebase";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/mygainz_logo.png";

const RegisterPage = () => {
	
	
	return (
		<div>
			Hello World
		
		</div>
	);
};

export default RegisterPage;