import React, { useState } from 'react';

const Password = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (sending recovery email)
    console.log('Email:', email);
    // You can add logic to send a recovery email using the entered email
  };

  return (
    <div className="password-container">
      <div className="header">
        <h2>Forgot Password</h2>
        <p>Enter the email address you used when you joined and we will send you instructions to reset your password.</p>
      </div>

      <form className="form" onSubmit={handleFormSubmit}>
        <label>Email</label>
        <input
          className="input-field"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />

        <button className="login-button" type="submit">Send Recovery Email</button>
      </form>
      
      <div className="signin-link">
        <p>Already have an account? <a href="#">Back to sign in</a></p>
      </div>
      {/* Image on the right side */}
      <div className="right-section">
        <img src="your-image-path.jpg" alt="Your Image" />
      </div>
    </div>
  );
};

export default Password;