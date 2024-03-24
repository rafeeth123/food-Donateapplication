import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './NewLogin.css';
import { login } from './UserSlice';

export default function NewLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const details = { username, password };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authenticate = async (e) => {
    e.preventDefault();
    try {
      if (username.length === 0 && password.length === 0) {
        alert('Enter email and password');
      } else if (username.length === 0) {
        alert('Enter Email');
      } else if (password.length === 0) {
        alert('Enter Password');
      } else if (username && password) {
        const response = await axios.post('http://localhost:8080/auth/authenticate', details);
        const token = response.data.token;
        localStorage.setItem("auth", token);
        dispatch(login(username));
        navigate('/');
      }
    } catch (error) {
      alert('Incorrect UserName and Password');
    }
  };

  return (
    <div className="unique-login-container">
      <div className="login-main-box">
        <div className="form5">
          <h1>LOG IN</h1>
          <div className="login-username-box">
            <input type="text" value={username} autoComplete placeholder="Email" onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="login-password-box">
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="login-bottom">
            <div className="login-inner-bottom-1">
            
              <div className="login-button-box">
                <button type="button" onClick={authenticate}>LOGIN</button>
              </div>
              
            </div>
            <div className="login-inner-bottom-2">
              <div className="login-Dont">Don't have an account?</div>
              <div className="login-button-box-reg">
                <Link to="/signup">Register Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="login-image-container">
        <img src="https://images.pexels.com/photos/6591154/pexels-photo-6591154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Login" />
      </div>
    </div>
  );
}
