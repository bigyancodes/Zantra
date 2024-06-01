// signupModal.js
import React, { useState } from 'react';
import { auth } from './firebaseConfig';
import { RecaptchaVerifier, signInWithPhoneNumber, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider, signInWithPopup } from "firebase/auth";
import './signupModal.css';

const Signup = ({ closeModal }) => {
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+977'); // Default country code for Nepal

  const handlePhoneSignup = async () => {
    const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', { size: 'invisible' }, auth);

    try {
      const result = await signInWithPhoneNumber(auth, `${countryCode}${phone}`, recaptchaVerifier);
      // Handle the confirmation result here
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert('Signup successful with Google!');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleFacebookSignup = async () => {
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert('Signup successful with Facebook!');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleAppleSignup = async () => {
    const provider = new OAuthProvider('apple.com');
    try {
      await signInWithPopup(auth, provider);
      alert('Signup successful with Apple!');
    } catch (error) {
      alert(error.message);
    }
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
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="country-code-select"
            >
              <option value="+977">Nepal (+977)</option>
              {/* Add more country code options as needed */}
            </select>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="phone-input"
            />
          </div>
          <div className="form-group">
            <button onClick={handlePhoneSignup} className="primary-button">
              Continue
            </button>
          </div>
          <div className="divider">or</div>
          <div className="form-group">
            <button onClick={handleFacebookSignup} className="social-button facebook-button">
              Continue with Facebook
            </button>
          </div>
          <div className="form-group">
            <button onClick={handleGoogleSignup} className="social-button google-button">
              Continue with Google
            </button>
          </div>
          <div className="form-group">
            <button onClick={handleAppleSignup} className="social-button apple-button">
              Continue with Apple
            </button>
          </div>
          {/* <div className="form-group">
            <button onClick={handleEmailSignup} className="email-button">
              Continue with email
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;