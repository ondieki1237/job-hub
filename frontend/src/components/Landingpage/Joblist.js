import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHammer,
  faTruck,
  faBroom,
  faBolt,
  faPaintRoller,
} from "@fortawesome/free-solid-svg-icons";
import "./JobList.css"; // Ensure styling is imported

const JobList = () => {
  return (
    <div className="job-container">
      {/* Carpenter Jobs */}
      <div className="job-item">
        <h3>Carpenter Jobs</h3>
        <p>
          We have 50+ carpenter jobs available. <br />
          <button className="job-btn">Search Jobs</button> <br />
          <FontAwesomeIcon icon={faHammer} />
        </p>
      </div>

      {/* Truck Driver Jobs */}
      <div className="job-item">
        <h3>Truck Driver Jobs</h3>
        <p>
          We have 75+ truck driver jobs available. <br />
          <button className="job-btn">Search Jobs</button> <br />
          <FontAwesomeIcon icon={faTruck} />
        </p>
      </div>

      {/* Cleaner Jobs */}
      <div className="job-item">
        <h3>Cleaner Jobs</h3>
        <p>
          We have 100+ cleaning jobs available. <br />
          <button className="job-btn">Search Jobs</button> <br />
          <FontAwesomeIcon icon={faBroom} />
        </p>
      </div>

      {/* Electrician Jobs */}
      <div className="job-item">
        <h3>Electrician Jobs</h3>
        <p>
          We have 80+ electrician jobs available. <br />
          <button className="job-btn">Search Jobs</button> <br />
          <FontAwesomeIcon icon={faBolt} />
        </p>
      </div>

      {/* Painter Jobs */}
      <div className="job-item">
        <h3>Painter Jobs</h3>
        <p>
          We have 40+ painter jobs available. <br />
          <button className="job-btn">Search Jobs</button> <br />
          <FontAwesomeIcon icon={faPaintRoller} />
        </p>
      </div>
    </div>
  );
};

export default JobList;
