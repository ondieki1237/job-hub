import React from "react";
import Navbar from "./Navbar";
import AvailableJobs from "./AvailableJobs";
import NearestJobs from "./NearestJobs";
import JobHistory from "./JobHistory";
import Earnings from "./Earnings";
import Balance from "./Balance";
import "./Home.css";

function Home() {
  return (
    <div className="app">
      <Navbar />
      <div className="dashboard">
        <h1>Welcome back!</h1>

        <AvailableJobs />
        <NearestJobs />
        <JobHistory />
        <Earnings />
        <Balance />
      </div>
    </div>
  );
}

export default Home;
