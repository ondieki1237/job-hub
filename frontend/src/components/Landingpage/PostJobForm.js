import React, { useState } from 'react';
import './PostJobForm.css';

const PostJobForm = () => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    description: '',
    category: '',
    budget: '',
    deadline: '',
    experienceLevel: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job Details Submitted:', jobDetails);
    alert('Job posted successfully!');
  };

  return (
    <div className="job-form-container">
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Job Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={jobDetails.title}
            onChange={handleChange}
            placeholder="Enter job title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Job Description</label>
          <textarea
            id="description"
            name="description"
            value={jobDetails.description}
            onChange={handleChange}
            placeholder="Describe the job"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={jobDetails.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a category</option>
            <option value="webDevelopment">Web Development</option>
            <option value="design">Design</option>
            <option value="writing">Writing</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="budget">Budget ($)</label>
          <input
            type="number"
            id="budget"
            name="budget"
            value={jobDetails.budget}
            onChange={handleChange}
            placeholder="Enter budget"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="deadline">Deadline</label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={jobDetails.deadline}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="experienceLevel">Experience Level</label>
          <select
            id="experienceLevel"
            name="experienceLevel"
            value={jobDetails.experienceLevel}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select experience level</option>
            <option value="entry">Entry Level</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Post Job</button>
      </form>
    </div>
  );
};

export default PostJobForm;
