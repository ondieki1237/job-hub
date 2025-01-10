import React from "react";
import { FaMapMarkerAlt, FaHeart, FaClipboardCheck, FaLightbulb, FaDollarSign, FaClock, FaTasks } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <span className="logo">SkillsNav</span>
    </div>
    <ul className="navbar-links">
      <li>
        <a href="#find-talent">Find a Talent</a>
      </li>
      <li className="dropdown">
        <a href="#available-jobs">Available Jobs</a>
        <div className="dropdown-menu">
          <div className="dropdown-section">
            <FaMapMarkerAlt className="dropdown-icon" />
            <div>
              <h4>Jobs Near You</h4>
              <p>Find work opportunities in your local area.</p>
            </div>
          </div>
          <div className="dropdown-section">
            <FaHeart className="dropdown-icon" />
            <div>
              <h4>Jobs You Might Be Interested In</h4>
              <p>Discover jobs tailored to your preferences.</p>
            </div>
          </div>
          <div className="dropdown-section">
            <FaClipboardCheck className="dropdown-icon" />
            <div>
              <h4>Jobs You Can Qualify For</h4>
              <p>View opportunities matching your qualifications.</p>
            </div>
          </div>
          <div className="dropdown-section">
            <FaLightbulb className="dropdown-icon" />
            <div>
              <h4>Job Suggestions</h4>
              <p>Get AI-powered job recommendations.</p>
            </div>
          </div>
          <div className="dropdown-section">
            <FaDollarSign className="dropdown-icon" />
            <div>
              <h4>Top Paying Jobs</h4>
              <p>Explore the highest-paying opportunities.</p>
            </div>
          </div>
          <div className="dropdown-section">
            <FaClock className="dropdown-icon" />
            <div>
              <h4>Most Recent Posted Jobs</h4>
              <p>Check out newly posted jobs near you.</p>
            </div>
          </div>
          <div className="dropdown-section">
            <FaTasks className="dropdown-icon" />
            <div>
              <h4>Jobs You Have Recently Done</h4>
              <p>Keep track of your recent job history.</p>
            </div>
          </div>
        </div>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <div className="navbar-buttons">
      <a href="/signup">
        <button className="btn-signup">Sign Up</button>
      </a>
      <a href="/login">
        <button className="btn-login">Log In</button>
      </a>
    </div>
  </nav>
);

export default Navbar;
