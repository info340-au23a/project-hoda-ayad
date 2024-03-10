import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import { Routes, Route, Outlet,useLocation } from "react-router-dom";

import NavBar from './components/NavBar';
import Splash from './pages/Splash';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import {ResetPassword, SetupBasic, SetupEducation, SetupPassword, SetupSkill} from './pages/Setup';


import SAMPLE_POSTS from './sample-data.json';
import SAMPLE_CHATS from './chat-sample-data.json';


function Authenticator({ signedIn, setSignInCB, children}) {
  function toggleSignIn(toggle) {
    setSignInCB(toggle);
  }

  // use states to keep track of user email and password for firebase sign up
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="App full-height">
      <NavBar setSignInCB={toggleSignIn} />
      <Routes>
        <Route path='/' element={<RequireAuth signedIn={signedIn} setSignedIn={toggleSignIn} email={email} password={password} />} >
          {children}
        </Route>
        <Route path="set-up-basic" element={<SetupBasic setEmail={setEmail} />} />
        <Route path="set-up-college" element={<SetupEducation />} />
        <Route path="set-up-password" element={<SetupPassword setPassword={setPassword} />} />
        <Route path="set-up-skills" element={<SetupSkill email={email} password={password} />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  )

}

function RequireAuth({ signedIn, setSignedIn, email, password }) {
  function signIn() {
    setSignedIn(true);
  }

  if(!signedIn) {
    return <Splash signInCB={signIn} email={email} password={password} />
  }
  else {
    return <Outlet />
  }
}


function App() {
  const samplePosts = SAMPLE_POSTS;
  const sampleChats = SAMPLE_CHATS;

  const [signedIn, setSignedIn] = useState(false);

  function toggleSignIn(toggle) {
    setSignedIn(toggle);
  }

  const location = useLocation();
  const isFooterVisible = location.pathname !== '/set-up-college' && location.pathname !== '/set-up-password' &&
    location.pathname !== '/set-up-skills' && location.pathname !== '/set-up-basic' && location.pathname !== '/' &&
    location.pathname !== '/reset-password';;

  return (
    <div>
      <div className="App full-height">

              <Authenticator signedIn={signedIn} setSignInCB={toggleSignIn} >

                  <Route index element={<Home postings={samplePosts} />} />
                  <Route path="chat" element={<Chat chats={sampleChats} />} />
                  <Route path="profile" element={<Profile />} />

              </Authenticator>


      </div>
      <footer>
        {isFooterVisible && <footer><Footer /></footer>}
      </footer>
    </div>
  );
}

export default App;