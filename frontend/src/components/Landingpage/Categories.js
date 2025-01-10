// src/components/CategoriesSection.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBaby,
  faCar,
  faShieldAlt,
  faToolbox,
  faHome,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import "./CategoriesSection.css";

const CategoriesSection = () => {
  const navigate = useNavigate();

  const handlePostJobClick = () => {
    navigate("/post-job");
  };

  return (
    <div className="categories-section">
      <h2 className="categories-title">Select by category</h2>
      <div className="categories-container">
        <div className="category-card popular">
          <div className="ribbon">Popular</div>
          <FontAwesomeIcon icon={faBaby} className="category-icon" />
          <h3>Babysitting</h3>
          <p>High-class, high-quality care for your kids.</p>
        </div>
        <div className="category-card">
          <FontAwesomeIcon icon={faCar} className="category-icon" />
          <h3>Driver</h3>
          <p>Find reliable drivers for your needs.</p>
        </div>
        <div className="category-card new">
          <div className="ribbon">New</div>
          <FontAwesomeIcon icon={faShieldAlt} className="category-icon" />
          <h3>Security Personnel</h3>
          <p>Hire trained professionals for your security needs.</p>
        </div>
        <div className="category-card">
          <FontAwesomeIcon icon={faToolbox} className="category-icon" />
          <h3>Technician</h3>
          <p>Skilled experts for quick fixes and repairs.</p>
        </div>
        <div className="category-card">
          <FontAwesomeIcon icon={faHome} className="category-icon" />
          <h3>House Cleaning</h3>
          <p>Keep your home spotless and fresh.</p>
        </div>
        <div className="category-card recommended">
          <div className="ribbon">Recommended</div>
          <FontAwesomeIcon icon={faLaptopCode} className="category-icon" />
          <h3>Programmer</h3>
          <p>Hire expert programmers for your tech projects.</p>
        </div>
      </div>
      <button className="post-job-btn" onClick={handlePostJobClick}>
        Post a Job
      </button>
    </div>
  );
};

export default CategoriesSection;
