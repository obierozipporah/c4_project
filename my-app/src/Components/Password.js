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
      <svg xmlns="http://www.w3.org/2000/svg" width="237" height="128"><path fill="#4B3F6B" fill-rule="evenodd" d="M0-.924C0 51.8 15.5 89.562 73 113.953c57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552C693.095 234.626 733.884 114.796 707 44.141 680.115-26.515 628.593-91 380-91 131.407-91 0-53.647 0-.924z"/></svg>
      </div>
    </div>
  );
};

export default Password;