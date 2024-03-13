import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";


export function SetupBasic({ setEmail, setName, setUsername }) {
  const nextView = useCustomNavigate();
  return (
    <div className="page set-up">
      <h2>Get Connected</h2>
      <form onSubmit={nextView('/set-up-college')}>
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}

export function SetupEducation({ setCollege, setMajor, setGradDate }) {
  const nextView = useCustomNavigate();
  return (
    <div className="page set-up">
      <h2>Get Connected</h2>
      <form onSubmit={nextView('/set-up-password')}>
        <input type="text" placeholder="College" onChange={(e) => setCollege(e.target.value)}></input>
        <input type="text" placeholder="Major" onChange={(e) => setMajor(e.target.value)}></input>
        <input type="date" placeholder="Expected Graduation Date" onChange={(e) => setGradDate(e.target.value)}></input>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}

export function SetupPassword({ password, setPassword }) {
  const [confirmPw, setConfirmPw] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const handleSubmit = function(event) {
    event.preventDefault();
    if (password !== confirmPw) {
      setErrorMsg('Passwords do not match');
    } else {
      navigate('/set-up-skills');
    }
  }
  return (
    <div className="page set-up">
      <h2>Get Connected</h2>
      {errorMsg && <p className="error-message">{errorMsg}</p>} {/* Display error message if exists */}
      <form onSubmitCapture={handleSubmit}>
        <input type="password" placeholder="Create Password" onChange={(e) => setPassword(e.target.value)}></input>
        <input type="password" placeholder="Re-enter Password" onChange={(e) => setConfirmPw(e.target.value)}></input>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}

export function SetupSkill({ setSkills, email, password, name, username, college, major, gradDate, skills }) {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState('');
  const handleSubmit = function(event) {
    event.preventDefault();
    const auth = getAuth();
    if (email == '' || password == '') {
      setErrorMsg('Missing email and/or password');
    } else {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        let uid = user.uid;
        writeUserData(name, username, college, major, gradDate, skills, uid)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });

      console.log(email);
      console.log(password);
      navigate('/');
    }
  };
  return (
    <div className="page set-up">
      <h2>Get Connected</h2>
      {errorMsg && <p className="error-message">{errorMsg}</p>} {/* Display error message if exists */}
      <form onSubmit={handleSubmit}>
        <p>Campus Cloud is all about finding and working with other students with varying
              skills and knowledge.
        </p>
        <p>In order to showcase your abilities and have the best experience, create a list
            of skillsets for others to see!
        </p>
        <input id="inputSkills" type="text" placeholder="What are your skills?" onChange={(e) => setSkills(e.target.value)}></input>
        <button type="submit">Complete Registration</button>
      </form>
    </div>
  );
}

export function ResetPassword() {
  const [confirmEmail, setConfirmEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const handleClick = function(event) {
    event.preventDefault();
    sendPasswordResetEmail(getAuth(), confirmEmail)
      .then(() => {
        setErrorMsg("")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        setErrorMsg(errorMessage);
      });
  }

  const handleSubmit = function(event) {
    event.preventDefault();
    navigate('/');
  }

  return (
    <div className="page set-up">
      <h2>Reset Password</h2>
      {errorMsg && <p className="error-message">{errorMsg}</p>} {/* Display error message if exists */}
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Account's Email" onChange={(e) => setConfirmEmail(e.target.value)}></input>
        <button onClick={handleClick}>Submit</button>
        <button type="submit">Return to Login</button>
      </form>
    </div>
  );
}

function useCustomNavigate() {
  const navigate = useNavigate();

  const nextView = (path) => (event) => {
    event.preventDefault();
    navigate(path);
  };

  return nextView;
}

function writeUserData(name, username, college, major, gradDate, skills, uid) {
  const db = getDatabase();
  set(ref(db, 'users/' + uid), {
    name: name,
    username: username,
    college: college,
    major: major,
    gradDate: gradDate,
    skills: skills,
  });
}
