// src/components/SearchBar.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faProjectDiagram,
  faUserTie,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("Talent");
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownVisible(false); // Auto-collapse dropdown
  };

  return (
    <div className="optimized-search-bar-container">
      <div className="optimized-search-bar">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          placeholder={`Search ${selectedOption.toLowerCase()}...`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="optimized-search-input"
        />
        <div
          className="dropdown-filter"
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <button
            className="dropdown-button"
            onClick={() => setDropdownVisible(!isDropdownVisible)}
          >
            {selectedOption} <span className="dropdown-arrow">▼</span>
          </button>
          {isDropdownVisible && (
            <div className="optimized-dropdown-options">
              <div
                className="optimized-dropdown-option"
                onClick={() => handleOptionClick("Talent")}
              >
                <FontAwesomeIcon icon={faUserTie} />
                <div>
                  <p className="option-title">Talent</p>
                  <p className="option-subtitle">Hire professionals and agencies</p>
                </div>
              </div>
              <div
                className="optimized-dropdown-option"
                onClick={() => handleOptionClick("Projects")}
              >
                <FontAwesomeIcon icon={faProjectDiagram} />
                <div>
                  <p className="option-title">Projects</p>
                  <p className="option-subtitle">Buy ready-to-start services</p>
                </div>
              </div>
              <div
                className="optimized-dropdown-option"
                onClick={() => handleOptionClick("Jobs")}
              >
                <FontAwesomeIcon icon={faBriefcase} />
                <div>
                  <p className="option-title">Jobs</p>
                  <p className="option-subtitle">Apply to jobs posted by clients</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
