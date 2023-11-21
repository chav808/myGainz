import React from "react";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../splashPage.css"; // Relative path to your CSS file

const SplashPage = () => {
  const navigate = useNavigate();

  return (
    <div className="splash-page">
      <div className="bg-gradient"></div>
      <div className="body">
        <div className="hero-title">
          <h1 className="hero-text">
            It's about stability, endurance, and steady growth.
          </h1>
          <p className="hero-description">
            My Gainz is used by millions of fitness enthusiasts of all levels to power their workouts, maximize strength, streamline progress tracking, and ultimately elevate fitness achievements.
          </p>
          <div className="hero-interact">
            <Link component={RouterLink} to="/register" underline="hover" className="sign-up-link">
              <button className="sign-up" onClick={() => navigate("/signup")}>
                <span>Sign up <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="button-svg">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg></span>
              </button>
            </Link>
            <a className="about-link" onClick={() => navigate("/login")}>
              Sign in <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="link-svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </a>
          </div>
        </div>
        <div className="hero-side">
          <div className="hero-img"></div>
          <p className="user-quote">
            Using My Gainz has completely transformed how I approach fitness. It's not just an app; it's my personal trainer, my progress tracker, and my motivation, all in one place. It's like having a gym buddy in my pocket, pushing me towards my goals every step of the way.
          </p>
          <p className="user-signature">- Shannon Sharpe</p>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
