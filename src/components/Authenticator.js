import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

import NavBar from './NavBar';
import {ResetPassword, SetupBasic, SetupEducation, SetupPassword, SetupSkill} from '../pages/Setup';
import { RequireAuth } from '../App';

function Authenticator({ signedIn, setSignInCB, children, setUser}) {
  function toggleSignIn(toggle) {
    setSignInCB(toggle);
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [college, setCollege] = useState('');
  const [major, setMajor] = useState('');
  const [gradDate, setGradDate] = useState(null);
  const [skills, setSkills] = useState([]);

  return (
    <div className="App full-height">
      <NavBar signedIn={signedIn} setSignInCB={toggleSignIn} setUser={setUser} />
      <Routes>
        <Route path='/' element={<RequireAuth signedIn={signedIn} setSignedIn={toggleSignIn} email={email}
          password={password} setUser={setUser} setEmail={setEmail} setPassword={setPassword}
        />} >
          {children}
        </Route>
        <Route path="set-up-basic" element={<SetupBasic setEmail={setEmail} setName={setName} setUsername={setUsername} />} />
        <Route path="set-up-college" element={<SetupEducation setCollege={setCollege} setMajor={setMajor} setGradDate={setGradDate} />} />
        <Route path="set-up-password" element={<SetupPassword password={password} setPassword={setPassword} />} />
        <Route path="set-up-skills" element={<SetupSkill setSkills={setSkills} email={email} password={password} name={name}
          username={username} college={college} major={major} gradDate={gradDate} skills={skills} />} />
        <Route path="reset-password" element={<ResetPassword password={password} setPassword={setPassword} />} />
        {children}
      </Routes>
    </div>
  )
}

export default Authenticator;