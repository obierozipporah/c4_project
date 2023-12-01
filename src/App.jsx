import React from 'react';
import LoginPage from './Components/login.js';
import SignInPage from './Components/signin.js';
import SignUpPage from './Components/signup.js';
import Password from './Components/pass.js';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
    <div className="login-section">
      <LoginPage />
    </div>
    <div className="signin-section">
      <SignInPage />
    </div>
    <div className="signup-section">
      <SignUpPage />
    </div>
    <div className="password-section">
      <Password />
    </div>
  </div>

  );
};

export default App;

