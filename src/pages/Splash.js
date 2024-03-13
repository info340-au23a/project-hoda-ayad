import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function Splash(props) {

  const [errorMsg, setErrorMsg] = useState('');
  let handleSubmit = function(event) {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, props.email, props.password)
      .then((userCredential) => {
        const user = userCredential.user;
        props.setUser(user.uid);
        props.signInCB();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setErrorMsg(errorMessage);
      });

  }
  return (
    <div className="page splash">
      <h2>Welcome to<br></br>Campus Cloud</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" className="email" placeholder="Email" onChange={(e) => props.setEmail(e.target.value)}></input>
        <input type="password" className="password" placeholder="Password" onChange={(e) => props.setPassword(e.target.value)}></input>
        {errorMsg && <div className="error-message">{errorMsg}</div>} {/* Display error message if exists */}
        <button type="submit" className="log-in-button">Log In</button>
        <Link to="reset-password" className="forgot-password">Forgot Password?</Link>
        <label className="dont-have-account" htmlFor="register">Don't have an account?</label>
        <Link to='set-up-basic'>Register Now</Link>
      </form>
    </div>
  );
}

export default Splash;