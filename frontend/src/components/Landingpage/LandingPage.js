// src/components/Landingpage/LandingPage.js
import React from "react";
import Search from "./Search";
import TrendingJobs from "./TrendingJobs";
import Categories from "./Categories";
import JobList from "./Joblist";
import TestimonialSection from "./Testimonials";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <TrendingJobs />
      <Categories />
      <JobList />
      <TestimonialSection />
    </div>
  );
};

export default LandingPage;
