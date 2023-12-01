import React, { useState } from 'react';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="sign-in-container">
      <div className="header">
        <h2>Login</h2>
        <p>Get started with shortly</p>
      </div>

      <form className="form" onSubmit={handleFormSubmit}>
        <label>Email</label>
        <input
          className="input-field"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label>Password</label>
        <input
          className="input-field"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />

      <div className="forgot-password">
        <a href="#">Forgot Password?</a>
      </div>

        <button className="login-button" type="submit">Login</button>
      </form>

      <div className="signup-link"> 
        <p>Don't have an account yet? <a href="#">Sign Up</a></p>
      </div>

      <div className="right-section">
      <img scr="kook.JP" alt="your image"></img>
      </div>
    </div>
  );
};

export default SignInPage;