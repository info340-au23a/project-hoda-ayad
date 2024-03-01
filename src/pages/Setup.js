import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

function Setup(props) {
  const navigate = useNavigate();

  let views = [<SetupBasic />, <SetupEducation />, <SetupPassword/>, <SetupSkill/>];
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
}

function SetupBasic() {
  return (
    <form>
      <input type="text" placeholder="Name"></input>
      <input type="text" placeholder="Username"></input>
      <input type="email" placeholder="Email"></input>
    </form>
  )
}

function SetupEducation() {
  return (
    <form>
      <input type="text" placeholder="College"></input>
      <input type="text" placeholder="Major"></input>
      <input type="number" placeholder="Expected Graduation Date"></input>
    </form>
  )
}

function SetupPassword() {
  return (
    <form>
      <input type="password" placeholder="Create Password"></input>
      <input type="password" placeholder="Re-enter Password"></input>
    </form>
  )
}

function SetupSkill() {
  return (
    <form>
      <p>Campus Cloud is all about finding and working with other sutdents with varying
            skills and knowledge.
      </p>
      <p>In order to showcase your abilities and have the best experience, create a list
          of skillsets for others to see!
      </p>
      <input id="inputSkills" type="text" placeholder="What are your skills?"></input>
    </form>
  )
}

export default Setup;