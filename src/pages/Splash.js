

import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function Splash(props) {

  let handleSubmit = function(event) {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, props.email, props.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        props.setUser(user.uid);
        console.log(user.uid);
        props.signInCB();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  }
  return (
    <div className="page splash" id="splash">
      <h2>Welcome to<br></br>Campus Cloud</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" id="email" placeholder="Email" onChange={(e) => props.setEmail(e.target.value)}></input>
        <input type="password" id="password" placeholder="Password" onChange={(e) => props.setPassword(e.target.value)}></input>
        <button type="submit" id="log-in-button">Log In</button>
        <Link to="reset-password" id="forgot-password">Forgot Password?</Link>
        <label id="dont-have-account" for="register">Don't have an account?</label>
        <Link to='set-up-basic'>Register Now</Link>
      </form>
    </div>
  );
}

export default Splash;