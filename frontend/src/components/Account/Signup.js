import React from "react";
import "./Account.css";

const Signup = () => {
  return (
    <div className="auth-container">
      <h1>Sign Up</h1>
      <form>
        <label>Name</label>
        <input type="text" placeholder="Enter your name" required />
        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />
        <label>Password</label>
        <input type="password" placeholder="Create a password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

