import React from 'react';
import LoginPage from './Components/LoginPage.js';
import SignInPage from './Components/SignInPage.js';
import SignUpPage from './Components/SignUPPage.js';
import Password from './Components/Password.js';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="left-section">
        <div className="login-section">
        <LoginPage />
        </div>
      </div>

      <div className="center-section">
        <div className="center-section-top">
            <div className="signin-section">
          <SignInPage />
          </div>
        </div>

        <div className="center-section-bottom">
            <div className="signup-section">
          <SignUpPage />
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="password-section">
        <Password />
        </div>
      </div>
    </div>

  );
};

export default App;