import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // add code to handle form submission here
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          required
        /><br /><br />

        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        /><br /><br />

        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        /><br /><br />

        <button type="submit">Sign Up</button>
      </form>
      <hr />
      <h3>Sign up with:</h3>
      <a href="#">Sign up with Google</a><br />
      <a href="#">Sign up with Facebook</a><br />
      <a href="#">Sign up with Twitter</a>
    </div>
  );
};

export default SignUp;