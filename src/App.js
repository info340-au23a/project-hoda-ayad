'use strict'

import React, { useState } from 'react';
import './css/style.css';
import {
  Routes,
  Route,
  Outlet,
  BrowserRouter
} from "react-router-dom";

import NavBar from './components/NavBar';
import Splash from './pages/Splash';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import SAMPLE_POSTS from './sample-data.json';
import SAMPLE_CHATS from './chat-sample-data.json';

function Authenticator({ signedIn, setSignInCB, children}) {

  function toggleSignIn(toggle) {
    setSignInCB(toggle);
  }

  return (
    <div className="App full-height">
      <NavBar setSignInCB={toggleSignIn}/>
      <Routes>
        <Route path='/' element={<RequireAuth signedIn={signedIn} setSignedIn={toggleSignIn}/>} >
          {children}
        </Route>
      </Routes>
    </div>
  )

}

function RequireAuth({ signedIn, setSignedIn }) {
  function signIn() {
    setSignedIn(true);
  }
  

  if(!signedIn) { 
    return <Splash signInCB={signIn} />
  }
  else { 
    return <Outlet />
  }
}


function App() {
  const samplePosts = SAMPLE_POSTS;
  const sampleChats = SAMPLE_CHATS;

  const [signedIn, setSignedIn] = useState(false);
  console.log(signedIn)

  function toggleSignIn(toggle) {
    setSignedIn(toggle);
  }

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
        <Footer />
      </footer>
    </div>
  );
}

export default App;
