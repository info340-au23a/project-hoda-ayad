'use strict'

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/splash.css';

function Splash(props) {
  let navigate = useNavigate();
  let handleSubmit = function(event) {
    event.preventDefault();
    props.toggleLoggedIn(true);
    navigate("/");
  }
  return (
    <div className="page splash" id="splash">
      <h2>Welcome to<br></br>Campus Cloud</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" id="email" placeholder="Email"></input>
        <input type="password" id="password" placeholder="Password"></input>
        <button type="submit" id="log-in-button">Log In</button>
        <a id="forgot-password">Forgot Password?</a>
        <label id="dont-have-account" for="register">Don't have an account?</label>
        <a id="register">Register Now</a>
      </form>
    </div>
  );
}

export default Splash;