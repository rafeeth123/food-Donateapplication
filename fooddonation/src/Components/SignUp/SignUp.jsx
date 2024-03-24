import React, { useState } from 'react';
import './SignUp.css';

import { useNavigate } from 'react-router-dom';
import LoadingPage from '../LoadingPage/LoadingPage';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    mobileno: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = async () => {
    const { username, email, password, mobileno } = formData;

    
    if (!username || !email || !password || !mobileno) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    
    if (password.length < 6) {
      setErrorMessage('Password should be at least 6 characters long.');
      return;
    }

    // Email validation
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Mobile number validation
    if (!validateMobileNumber(mobileno)) {
      setErrorMessage('Please enter a valid mobile number (e.g., 1234567890).');
      return;
    }

    try {
      await axios.post('http://localhost:8080/auth/register', {
        username,
        emailid: email,
        password,
        mobileno,
      });

      navigate('/newlogin');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  
  const validateMobileNumber = (mobileno) => {
    const re = /^\d{10}$/;
    return re.test(mobileno);
  };

  return (
    <div className="signup-page">
      <div className="signup-image-container">
        <img
          src={
            'https://images.pexels.com/photos/6995212/pexels-photo-6995212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          }
          alt="Signup"
        />
      </div>
      <div className="signup-main-box">
        <div className="signup-container">
          <h1>SIGN UP</h1>
          <div className="signup-box">
            <div className="signup-username-box">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
              <label>User Name</label>
            </div>

            <div className="signup-username-box">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label>Email</label>
            </div>
            <div className="signup-username-box">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <label>Password</label>
            </div>
            <div className="signup-username-box">
              <input
                type="text"
                name="mobileno"
                value={formData.mobileno}
                onChange={handleInputChange}
                required
              />
              <label>Mobile Number</label>
            </div>
            <p className="error-message">{errorMessage}</p>
            <div className="signup-button-box-outer">
              <div className="signup-button-box">
                <input onClick={handleSignUp} type="button" value="Sign Up"></input>
              </div>
              <div className="already">
                <p>Already have an account?</p>
                <p >
                  Log in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage(SignUp);
