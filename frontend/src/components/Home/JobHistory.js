import React from "react";
import { FaBroom, FaWrench, FaStar, FaQuoteLeft } from "react-icons/fa";
import "./JobHistory.css";


const jobHistory = [
  { 
    id: 1, 
    title: "Cleaning", 
    date: "01/01/2025", 
    payment: 400, 
    icon: <FaBroom />, 
    rating: 4.5,
    recommendation: "Great work, highly recommended for future cleaning jobs!" 
  },
  { 
    id: 2, 
    title: "Plumbing", 
    date: "02/01/2025", 
    payment: 800, 
    icon: <FaWrench />, 
    rating: 4.0,
    recommendation: "Completed on time, but could have been more thorough." 
  }
];

function JobHistory() {
  return (
    <section className="history">
      <h2>Job History</h2>
      <div className="history-list">
        {jobHistory.map((job) => (
          <div key={job.id} className="history-item">
            <div className="job-header">
              <div className="job-icon">{job.icon}</div>
              <div className="job-info">
                <h3>{job.title}</h3>
                <p>Completed on: {job.date}</p>
              </div>
            </div>
            <div className="rating">
              <FaStar color="#FFD700" />
              <span>{job.rating}</span>
            </div>
            <p>Payment: Ksh {job.payment}</p>
            <div className="recommendation">
              <FaQuoteLeft color="#888" />
              <p>{job.recommendation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default JobHistory;
