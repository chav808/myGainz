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
import '../scss/HomePage.scss';

const HomePage = () => {
	
	return (
	<>
		<Header />
			<body>
		<h1>MyGainz Dashboard</h1>
		<p>View your weekly workout plan, make adjustments and browse our list of exercises</p>
		<div class="dashboard"> 
			
			<h2>My Weekly Workouts</h2>
			<a href="generateWorkout.html">
			<button type="workoutGenerator">Generate New Workout</button>
			</a>
			<a href="workoutList.html">
				<button type="workoutList">View all Exercises</button>
			</a>
			<div class="workout_list">
				<div class="weekday">
					<h3>Monday</h3>
					<p>Exercises for today:</p>
					<li>Squats</li> 
					<li>Leg extensions</li>
					<li>Bulgarian Split Squats</li>
				</div>
				<div class="weekday">
					<h3>Tuesday</h3>
					<p>Exercises for today:</p>
					<li>Bench Press</li>
					<li>Cable Flies</li>
					<li>Shoulder Press</li>    
				</div>
				<div class="weekday">
					<h3>Wednesday</h3>
					<p>Exercises for today:</p>
					<li>Rest Day</li>
				</div>
				<div class="weekday">
					<h3>Thursday</h3>
					<p>Exercises for today:</p>
					<li>Lat Pulldowns</li>
					<li>Hammer Curls</li>
					<li>Seated Row</li>
				</div>
				<div class="weekday">
					<h3>Friday</h3>
					<p>Exercises for today:</p>
					<li>Full body workout</li>
				</div>
				<div class="weekday">
					<h3>Saturday</h3>
					<p>Exercises for today:</p>
					<li>Rest Day</li>
				</div>
				<div class="weekday">
					<h3>Sunday</h3>
					<p>Exercises for today:</p>
					<li>Rest Day</li>
				</div>
			</div>
		</div>
	
	</body>
	</>
	);
};

export default HomePage;