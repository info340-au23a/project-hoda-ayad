import React from 'react';

import { useNavigate } from 'react-router-dom';


export function SetupBasic({setEmail}) {
  const nextView = useCustomNavigate();
  return (
    <div className="page set-up">
      <h2>Get Connected</h2>
      <form>
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Username"></input>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
      </form>
      <button onClick={nextView('/set-up-college')}>Continue</button>
    </div>

  )
}

export function SetupEducation() {
  const nextView = useCustomNavigate();
  return (
    <div className="page set-up">
      <h2>Get Connected</h2>
      <form>
        <input type="text" placeholder="College"></input>
        <input type="text" placeholder="Major"></input>
        <input type="number" placeholder="Expected Graduation Date"></input>
      </form>
      <button onClick={nextView('/set-up-password')}>Continue</button>
    </div>

  )
}

export function SetupPassword() {
  const nextView = useCustomNavigate();
  return (
    <div className="page set-up">
      <h2>Get Connected</h2>
      <form>
        <input type="password" placeholder="Create Password"></input>
        <input type="password" placeholder="Re-enter Password"></input>
      </form>
      <button onClick={nextView('/set-up-skills')}>Continue</button>
    </div>

  )
}

export function SetupSkill() {
  const nextView = useCustomNavigate();
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
      <button onClick={nextView('/')}>Complete Registration</button>
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
