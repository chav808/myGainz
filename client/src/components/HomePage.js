import React, { useState, useEffect } from "react";
import {
  Typography,
  TextField,
  Button,
  Container,
  Tab,
  Tabs,
  Grid,
  Card,
  CardMedia,
  CardContent,
  InputAdornment,
  IconButton,
  Box
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { storage } from "../config/firebase";
import { minHeight } from "@mui/system";
import Header from "./Header";

const HomePage = () => {
	
	return (
	<>
		<Header />
		<div>
			Hello World!
		</div>
	</>
	);
};

export default HomePage;