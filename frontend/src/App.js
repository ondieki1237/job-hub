// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Landingpage/Navbar";
import LandingPage from "./components/Landingpage/LandingPage";
import Login from "./components/Account/Login";
import Signup from "./components/Account/Signup";
import Home from "./components/Home/Home";
import PostJobForm from "./components/Landingpage/PostJobForm";
import Talent from "./components/Talents/Talent"; // Import the Talent component

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/post-job" element={<PostJobForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/talent" element={<Talent />} /> {/* New route for Talent */}
      </Routes>
    </Router>
  );
}

export default App;
