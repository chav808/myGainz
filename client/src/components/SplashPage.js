import React from "react";
import { Button, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/mygainz_logo.png";

const SplashPage = () => {

	return (

	<div>
		<Typography variant="body2" align="center" sx={{ mt: 2 }}>
			I'm a member already!{" "}
			<Link component={RouterLink} to="/login" underline="hover">
			  Sign in.
			</Link>
		</Typography>
	</div>

	);
};

export default SplashPage;