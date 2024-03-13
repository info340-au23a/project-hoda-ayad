import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import { Route, Outlet,useLocation } from "react-router-dom";

import Splash from './pages/Splash';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Footer from './components/Footer';
import Authenticator from './components/Authenticator';


export function RequireAuth({ signedIn, setSignedIn, email, password, setUser, setEmail, setPassword }) {
  function signIn() {
    setSignedIn(true);
  }

  if(!signedIn) {
    return <Splash signInCB={signIn} email={email} password={password} setUser={setUser} setEmail={setEmail} setPassword={setPassword}  />
  }
  else {
    return <Outlet />
  }
}


function App() {

  const [signedIn, setSignedIn] = useState(false);
  const [uid, setUser] = useState('');

  function toggleSignIn(toggle) {
    setSignedIn(toggle);
  }

  const location = useLocation();
  const isFooterVisible = location.pathname !== '/set-up-college' && location.pathname !== '/set-up-password' &&
    location.pathname !== '/set-up-skills' && location.pathname !== '/set-up-basic' &&
    location.pathname !== '/reset-password';;

  return (
    <div>
      <div className="App full-height">

              <Authenticator signedIn={signedIn} setSignInCB={toggleSignIn} setUser={setUser} >

                  <Route index element={<Home/>} />
                  <Route path="chat" element={<Chat />} />
                  <Route path="*" element={<span className='text-center'>Page Not Found :(</span>} />

              </Authenticator>


      </div>
      <footer>
        {isFooterVisible && <footer><Footer /></footer>}
      </footer>
    </div>
  );
}

export default App;