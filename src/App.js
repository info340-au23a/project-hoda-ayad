'use strict'

import React, { useState } from 'react';
import './css/style.css';
import {
  Routes,
  Route,
  Outlet
} from "react-router-dom";

import NavBar from './components/NavBar';
import Splash from './pages/Splash';
import Home from './pages/Home';
import About from './pages/About';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import SAMPLE_POSTS from './sample-data.json';
import SAMPLE_CHATS from './chat-sample-data.json';


function RequireAuth({ signedIn, setSignedIn }) {
  function signIn() {
    setSignedIn(true);
  }
  

  if(!signedIn) { //if no user, say so
    return <Splash signInCB={signIn} />
  }
  else { //otherwise, show the child route content
    return <Outlet />
  }
}


function App() {
  const samplePosts = SAMPLE_POSTS;
  const sampleChats = SAMPLE_CHATS;

  const [signedIn, setSignedIn] = useState(false);

  return (
    <div>
      <div className="App full-height">
              <NavBar setSignInCB={setSignedIn}/>
              <Routes>
                <Route path='/' element={<RequireAuth signedIn={signedIn} setSignedIn={setSignedIn}/>} >
                  <Route index element={<Home postings={samplePosts} />} />
                  <Route path="chat" element={<Chat chats={sampleChats} />} />
                  <Route path="profile" element={<Profile />} />
                </Route>
              </Routes>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
