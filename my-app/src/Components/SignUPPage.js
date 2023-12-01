import React, { useState } from 'react';

const SignUpPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div className="sign-up-container">
    <div className="header">
      <h2>Sign Up</h2>
      <p>Get started with shortly</p>
    </div>

    <form className="form" onSubmit={handleFormSubmit}>
      <label>First Name</label>
      <input
        className="input-field"
        type="text"
        value={firstName}
        onChange={handleFirstNameChange}
      />

      <label>Last Name</label>
      <input
        className="input-field"
        type="text"
        value={lastName}
        onChange={handleLastNameChange}
      />

      <label>Password</label>
      <input
        className="input-field"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />

      <label>Confirm Password</label>
      <input
        className="input-field"
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />

      <button className="login-button" type="submit">Sign Up</button>
    </form>

    <div className="signin-link">
      <p>Already have an account? <a href="#">Sign In</a></p>
    </div>

    <div className="right-section">
      <img src="your-image-path.jpg" alt="Your Image" />
    </div>
  </div>
  );
};

export default SignUpPage;