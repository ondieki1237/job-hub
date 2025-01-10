import React from "react";
import { FaBroom, FaWrench, FaBolt, FaBabyCarriage, FaTree } from "react-icons/fa";
import "./AvailableJobs.css";

const availableJobs = [
  { id: 1, title: "Cleaning", description: "House cleaning", location: "Nairobi", payment: 500, icon: <FaBroom /> },
  { id: 2, title: "Plumbing", description: "Fix leaking pipes", location: "Mombasa", payment: 1000, icon: <FaWrench /> },
  { id: 3, title: "Electrical Work", description: "Install and repair electrical systems", location: "Kisumu", payment: 2000, icon: <FaBolt /> },
  { id: 4, title: "Babysitting", description: "Take care of children", location: "Nakuru", payment: 700, icon: <FaBabyCarriage /> },
  { id: 5, title: "Landscaping", description: "Gardening and yard work", location: "Eldoret", payment: 1200, icon: <FaTree /> },
];

function AvailableJobs() {
  return (
    <section className="available-jobs">
      <h2>Available Jobs</h2>
      <div className="job-list">
        {availableJobs.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-icon">{job.icon}</div>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Payment:</strong> Ksh {job.payment}</p>
            <button className="apply-btn">Apply Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AvailableJobs;
