import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHouse, 
  faBriefcase, 
  faHandshake, 
  faWrench, 
  faLaptopCode, 
  faUserShield 
} from '@fortawesome/free-solid-svg-icons';
import './TrendingJobs.css';

const TrendingJobs = () => {
  const jobs = [
    { 
      title: 'Juakali', 
      pay: '2000 - 3000 per project', 
      rating: 4, 
      icon: faWrench 
    },
    { 
      title: 'Technician', 
      pay: '2500 - 3500 per project', 
      rating: 5, 
      icon: faLaptopCode 
    },
    { 
      title: 'Mamafua', 
      pay: '250 - 500 per project', 
      rating: 3.5, 
      icon: faUserShield 
    },
  ];

  return (
    <div className="landing-page">
      {/* Left Side: Company Introduction */}
      <div className="company-intro">
        <h2>Welcome to Our Platform</h2>
        <p>
          We connect skilled professionals with clients who need their expertise. 
          From technicians to cleaners, our platform offers a wide range of services.
        </p>
        <p>
          Our mission is to empower workers and provide clients with trusted solutions. 
          Join us today and experience seamless hiring and service delivery!
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>
      <div class="middle-section">
  <div class="features-container">
    <div class="feature-card">
      <i class="fas fa-user-check"></i>
      <h3>Verified Professionals</h3>
      <p>We ensure every professional is verified and trustworthy.</p>
    </div>
    <div class="feature-card">
      <i class="fas fa-clock"></i>
      <h3>Quick Hiring</h3>
      <p>Hire skilled workers instantly without any hassle.</p>
    </div>
    <div class="feature-card">
      <i class="fas fa-wallet"></i>
      <h3>Affordable Pricing</h3>
      <p>Choose from a range of services that suit your budget.</p>
    </div>
  </div>
</div>



      {/* Right Side: Trending Jobs */}
      <div className="trending-jobs">
        <h2>Trending Jobs</h2>
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <FontAwesomeIcon icon={job.icon} className="job-icon" />
            <div>
              <h3>{job.title}</h3>
              <p>{job.pay}</p>
              <p>
                {'★'.repeat(Math.floor(job.rating))}{'☆'.repeat(5 - Math.floor(job.rating))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingJobs;
