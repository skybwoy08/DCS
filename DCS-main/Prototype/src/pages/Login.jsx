import React, { useState, useEffect } from 'react';
import '../styles/login.css';
import introImage from '../assets/intro.png';
const Login = () => {
  const [deliveryId, setDeliveryId] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  // Update time every minute
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format as HH:MM
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime(); // Initial call
    const timer = setInterval(updateTime, 60000); // Update every 60 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const handleSendOTP = (e) => {
    e.preventDefault();
    console.log("Sending OTP to:", deliveryId);
  };

  return (
    <div className="login-container">
      <div className="status-bar">
        <span>{currentTime}</span>
        <div className="status-icons">
          <i className="fas fa-signal"></i>
          <i className="fas fa-wifi"></i>
          <i className="fas fa-battery-full"></i>
        </div>
      </div>

      <div className="illustration-section">
        <div className="circle-bg">
          <img 
            src={introImage} 
            alt="User Illustration" 
            className="user-illustration"
          />
        </div>
      </div>

      <div className="form-card">
        <form onSubmit={handleSendOTP}>
          <div className="input-group">
            <span className="country-code">+91</span>
            <input 
              type="text" 
              placeholder="Enter your delivery ID" 
              value={deliveryId}
              onChange={(e) => setDeliveryId(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="otp-button">
            Send OTP
          </button>
        </form>

        <p className="signup-text">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>

        <div className="footer-links">
          <p>By continuing, you agree to the</p>
          <p>
            <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a>
          </p>
        </div>
      </div>
      
      <div className="home-indicator"></div>
    </div>
  );
};

export default Login;