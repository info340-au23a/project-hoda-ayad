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
      {errorMsg && <p className="error-message">{errorMsg}</p>} {/* Display error message if exists */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email-login" className='visually-hidden'>Email</label>
        <input id='email-login' type="email" className="email" placeholder="Email" onChange={(e) => props.setEmail(e.target.value)}></input>
        <label htmlFor="password-login" className='visually-hidden'>Name</label>
        <input id='password-login' type="password" className="password" placeholder="Password" onChange={(e) => props.setPassword(e.target.value)}></input>

        <button type="submit" className="log-in-button">Log In</button>
        <Link to="reset-password" className="forgot-password">Forgot Password?</Link>
        <span className="dont-have-account">Don't have an account?</span>
        <Link to='set-up-basic'>Register Now</Link>
      </form>
    </div>
  );
}

export default Splash;