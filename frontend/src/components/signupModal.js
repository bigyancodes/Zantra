import React, { useState } from 'react';
import axios from 'axios';
import './signupModal.css';

const Signup = ({ closeModal }) => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const generateOtp = () => {
    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    return otp;
  };

  const handleSendOtp = async () => {
    const otp = generateOtp();

    try {
      console.log('Sending OTP to:', phone);
      const response = await axios.post('https://sms.aakashsms.com/sms/v3/send', {
        auth_token: 'f6e7cbca95b302dd81f2e4b2c471c386c5e72cab02d1f89e50c80c8178bc2a3d', // Your active auth token
        to: phone,
        text: `Your OTP code is: ${otp}`
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.error) {
        console.error('Error response from Aakash SMS:', response.data);
        alert('Failed to send OTP. Please try again.');
      } else {
        setOtpSent(true);
        console.log('OTP sent successfully:', response.data);
        alert('OTP sent successfully!');
      }
    } catch (error) {
      console.error('Request to Aakash SMS failed:', error.response ? error.response.data : error.message);
      alert('Failed to send OTP. Please try again.');
    }
  };

  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
      alert('Phone number verified!');
      closeModal();
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const handleGoogleSignup = async () => {
    alert('Google signup clicked');
    // Handle Google signup
  };

  const handleFacebookSignup = async () => {
    alert('Facebook signup clicked');
    // Handle Facebook signup
  };

  const handleAppleSignup = async () => {
    alert('Apple signup clicked');
    // Handle Apple signup
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Welcome to Zantra</h2>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
          </div>
          <div className="form-group">
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="phone-input"
            />
            <button onClick={handleSendOtp} className="primary-button">
              {otpSent ? 'Resend OTP' : 'Send OTP'}
            </button>
          </div>
          {otpSent && (
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="otp-input"
              />
              <button onClick={handleVerifyOtp} className="primary-button">
                Verify OTP
              </button>
            </div>
          )}
          <div className="divider">or</div>
          <div className="form-group">
            <button onClick={handleGoogleSignup} className="social-button google-button">
              Continue with Google
            </button>
          </div>
          <div className="form-group">
            <button onClick={handleFacebookSignup} className="social-button facebook-button">
              Continue with Facebook
            </button>
          </div>
          <div className="form-group">
            <button onClick={handleAppleSignup} className="social-button apple-button">
              Continue with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
