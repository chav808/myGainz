import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from "./components/SplashPage";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import RegisterPage from "./components/RegisterPage";
import ResetPasswordForm from "./components/ResetPassword";
import AboutUsPage from "./components/AboutUs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
		<Route path="/login" element={<LoginPage />} />
		<Route path="/home" element={<HomePage />} />
		<Route path="/register" element={<RegisterPage />} />
		<Route path="/resetpassword" element={<ResetPasswordForm />} />
		<Route path="/aboutus" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
};

export default App;