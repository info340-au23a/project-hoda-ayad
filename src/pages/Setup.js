import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

export function SetupBasic({setEmail, setName, setUsername}) {
  const nextView = useCustomNavigate();
  return (
    <div className="page set-up">
      <h2>Get Connected</h2>
      <form>
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
      </form>
      <button onClick={nextView('/set-up-college')}>Continue</button>
    </div>

  )
}

export function SetupEducation({ setCollege, setMajor, setGradDate}) {
  const nextView = useCustomNavigate();
  return (
    <div className="page set-up">
      <h2>Get Connected</h2>
      <form>
        <input type="text" placeholder="College" onChange={(e) => setCollege(e.target.value)}></input>
        <input type="text" placeholder="Major" onChange={(e) => setMajor(e.target.value)}></input>
        <input type="date" placeholder="Expected Graduation Date" onChange={(e) => setGradDate(e.target.value)}></input>
      </form>
      <button onClick={nextView('/set-up-password')}>Continue</button>
    </div>

  )
}

export function SetupPassword({setPassword}) {
  const nextView = useCustomNavigate();
  return (
    <div className="page set-up">
      <h2>Get Connected</h2>
      <form>
        <input type="password" placeholder="Create Password" onChange={(e) => setPassword(e.target.value)}></input>
        <input type="password" placeholder="Re-enter Password"></input>
      </form>
      <button onClick={nextView('/set-up-skills')}>Continue</button>
    </div>

  )
}

export function SetupSkill({ setSkills, email, password, name, username, college, major, gradDate, skills }) {
  const navigate = useNavigate();
  const handleSubmit = function() {
    // create user using firebase
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        let uid = user.uid;
        writeUserData(name, username, college, major, gradDate, skills, uid)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    // navigate to splash
      console.log(email);
      console.log(password);
      navigate('/');
  };
  return (
    <div className="page set-up">
      <h2>Get Connected</h2>
      <form>
        <p>Campus Cloud is all about finding and working with other sutdents with varying
              skills and knowledge.
        </p>
        <p>In order to showcase your abilities and have the best experience, create a list
            of skillsets for others to see!
        </p>
        <input id="inputSkills" type="text" placeholder="What are your skills?"></input>
      </form>
      <button onClick={handleSubmit}>Complete Registration</button>
    </div>

  )
}

export function ResetPassword() {
  const nextView = useCustomNavigate();
  return (
    <div className="page set-up">
      <h2>Reset Password</h2>
      <form>
        <input type="text" placeholder="Email"></input>
        <input type="password" placeholder="New Password"></input>
        <input type="password" placeholder="Re-enter Password"></input>
      </form>
      <button onClick={nextView('/')}>Return to Login</button>
    </div>
  )
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