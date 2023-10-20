import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from "./components/SplashPage";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import RegisterPage from "./components/RegisterPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
		<Route path="/login" element={<LoginPage />} />
		<Route path="/home" element={<HomePage />} />
		<Route path="/register" element={<RegisterPage/>} />
      </Routes>
    </Router>
  );
};

export default App;