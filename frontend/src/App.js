// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Landingpage/Navbar";
import LandingPage from "./components/Landingpage/LandingPage";
import Login from "./components/Account/Login";
import Signup from "./components/Account/Signup";
import Home from "./components/Home/Home"; // Import the Home component
import PostJobForm from "./components/Landingpage/PostJobForm";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
    
        <Route path="/" element={<LandingPage />} />
        {/* Log In page route */}
        <Route path="/login" element={<Login />} />
        {/* Sign Up page route */}
        <Route path="/signup" element={<Signup />} />
        {/* Post a Job page route */}
        <Route path="/post-job" element={<PostJobForm />} />
        {/* Home page route */}
        <Route path="/home" element={<Home />} /> {/* New route for Home */}
      </Routes>
    </Router>
  );
}

export default App;
