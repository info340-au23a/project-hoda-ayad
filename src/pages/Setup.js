import React, { useState } from 'react';
import '../css/setup.css';

function Setup() {
  let views = [<SetupBasic />, <SetupEducation />, <SetupPassword/>, <SetupSkill/>];
  let [currView, updateView] = useState(0);

  let nextView = function() {
    updateView(currView+1);
  }

  return (
    <div className="set-up">
      <h2>Get Connected</h2>
      {views[currView]}
      <button onClick={nextView}>Continue</button>
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