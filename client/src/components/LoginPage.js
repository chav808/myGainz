import React, { useState } from "react";
import { signInWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Container, Typography, TextField, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/mygainz_logo.png";
import "../loginPage.css";


const LoginPage = () => {
	const auth = getAuth();
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
		  await signInWithEmailAndPassword(auth, email, password);

		  navigate("/home");
		} catch (error) {
		  console.error("Error logging in:", error);
		  setErrorMessage("Invalid email or password");
		}
	};

	const handleGoogleSignIn = async () => {
		const auth = getAuth();
		const provider = new GoogleAuthProvider();

		try {
		  const result = await signInWithPopup(auth, provider);
		  const user = result.user;

		  navigate("/home");
		} catch (error) {
		  console.error("Error signing in with Google: ", error);
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
		width: "auto",
		marginBottom: "-2.5rem",
		marginTop: "-2rem"
	};
	
	return (
		<Container maxWidth="sm" sx={{ mt: 8 }}>
			<div style={logoContainerStyle}>
				<Link component={RouterLink} to="/" underline="none">
				<img src={logo} alt="logo" style={logoStyle} />
				</Link>
			</div>
		<form onSubmit={handleLogin}>
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
			  <Button className="button bg-gradient-yellow" variant="contained" type="submit" fullWidth>
          Login
        </Button>

        {errorMessage && (
          <Typography variant="body2" color="error" align="center" sx={{ mt: 2 }}>
            {errorMessage}
          </Typography>
        )}
      </form>

      <Button
        className="button bg-gradient-yellow"
        variant="contained"
        onClick={handleGoogleSignIn}
        fullWidth
        style={{ marginTop: "2rem" }}
      >
				Login with Google
			</Button>
			<Typography variant="body2" align="center" sx={{ mt: 2 }}>
				Don't have an account?{" "}
				<Link component={RouterLink} to="/register" underline="hover">
				Register here.
				</Link>
			</Typography>
			<Typography variant="body2" align="center" sx={{ mt: 2 }}>
				Forgot password?{" "}
				<Link component={RouterLink} to="/resetpassword" underline="hover">
				Reset it.
				</Link>
			</Typography>
		</Container>
	);
};

export default LoginPage;