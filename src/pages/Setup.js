import React, { useState } from 'react';

import { Routes, Route, useNavigate, Link } from 'react-router-dom';

function Setup(props) {
  let [email, setEmail] = useState('');
  let [pw, setPw] = useState('');

  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="set-up-basic" element={<SetupBasic setEmail={setEmail} />} />
      <Route path="set-up-college" element={<SetupEducation />} />
      <Route path="set-up-password" element={<SetupPassword />} />
      <Route path="set-up-skills" element={<SetupSkill />} />
    </Routes>
  )

  /**

  let views = [<SetupBasic setEmail={setEmail} />, <SetupEducation />, <SetupPassword setPw={setPw}/>, <SetupSkill/>];
  let [currView, updateView] = useState(0);

  let nextView = function() {
    updateView(currView+1);
  }

  let handleSubmit = function(event) {
    event.preventDefault();
    props.setSignInCB(true);
    navigate('/');
  }

  return (
    <div className="page set-up">
      <h2>Get Connected</h2>
      {views[currView]}
      {currView < views.length ? <button onClick={nextView}>Continue</button> : <button onClick={handleSubmit}>Complete Registration</button>}
    </div>
  )
  */
}

export function SetupBasic({setEmail}) {
  const navigate = useNavigate();
  let nextView = function(event) {
    event.preventDefault();
    navigate('/set-up-college');
  }
  return (
    <div className="page set-up">
      <h2>Get Connected</h2>
      <form>
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Username"></input>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
      </form>
      <button onClick={nextView}>Continue</button>
    </div>

  )
}

export function SetupEducation() {
  const navigate = useNavigate();
  let nextView = function(event) {
    event.preventDefault();
    navigate('/set-up-password');
  }
  return (
    <div className="page set-up">
      <h2>Get Connected</h2>
      <form>
        <input type="text" placeholder="College"></input>
        <input type="text" placeholder="Major"></input>
        <input type="number" placeholder="Expected Graduation Date"></input>
      </form>
      <button onClick={nextView}>Continue</button>
    </div>

  )
}

export function SetupPassword() {
  const navigate = useNavigate();
  let nextView = function(event) {
    event.preventDefault();
    navigate('/set-up-skills');
  }
  return (
    <div className="page set-up">
      <h2>Get Connected</h2>
      <form>
        <input type="password" placeholder="Create Password"></input>
        <input type="password" placeholder="Re-enter Password"></input>
      </form>
      <button onClick={nextView}>Continue</button>
    </div>

  )
}

export function SetupSkill() {
  const navigate = useNavigate();
  let handleSubmit = function(event) {
    event.preventDefault();
    navigate('/');
  }
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

export default Setup;