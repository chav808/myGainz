import React, { useState } from "react";
import {
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Header from "./Header";
import "../scss/HomePage.scss";

const HomePage = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <Header />
      <Box>
        {/* Responsive Navbar */}
		<AppBar position="static" style={{ background: 'linear-gradient(90deg, #ffd700 0%, #ffac00 33%, #e07c00 68%)' }}>
  <Toolbar>
    <IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={handleDrawerOpen}
    >
      <MenuIcon />
    </IconButton>
    <Typography variant="h6">
     
    </Typography>
  </Toolbar>
</AppBar>


        {/* Drawer */}
        <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
          <List>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Drawer>

        {/* Main Content */}
        <Container>
          <h1>MyGainz Dashboard</h1>
          <p>
            View your weekly workout plan, make adjustments and browse our list
            of exercises
          </p>
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
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
