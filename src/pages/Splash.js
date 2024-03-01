

import React from 'react';
import { Link } from 'react-router-dom';

function Splash(props) {
  let handleSubmit = function(event) {
    event.preventDefault();
    props.signInCB();
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
        <Link to='set-up'>Register Now</Link>
      </form>
    </div>
  );
}

export default Splash;