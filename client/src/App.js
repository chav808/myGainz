import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from "./components/SplashPage";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import RegisterPage from "./components/RegisterPage";
import ResetPasswordForm from "./components/ResetPassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
		<Route path="/login" element={<LoginPage />} />
		<Route path="/home" element={<HomePage />} />
		<Route path="/register" element={<RegisterPage />} />
		<Route path="/resetpassword" element={<ResetPasswordForm />} />
      </Routes>
    </Router>
  );
};

export default App;