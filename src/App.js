'use strict'

import React from 'react';
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


function RequireAuth(props) {
  //...determine if user is logged in
  const userIsLoggedIn = true;
  if(!userIsLoggedIn) { //if no user, say so
    return <p>Forbidden!</p>
  }
  else { //otherwise, show the child route content
    return <Outlet />
  }
}


function App() {
  const samplePosts = SAMPLE_POSTS;
  const sampleChats = SAMPLE_CHATS;

  return (
    <div>
      <div className="App full-height">
              <NavBar />
              <Routes>
                <Route exact path="/" element={<Home postings={samplePosts} />} />
                <Route element={<RequireAuth />} >
                  <Route path="/splash" element={<Splash />} />
                  <Route path="/chat" element={<Chat chats={sampleChats} />} />
                  <Route path="/profile" element={<Profile />} />
                </Route>
              </Routes>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

/**
function App() {
  const samplePosts = SAMPLE_POSTS;
  let [loggedIn, toggleLoggedIn] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    }
  }, [loggedIn, navigate]);

  return (
    <div>
      <div className="App full-height">
        <NavBar />
        <Routes>
          {/* Conditional rendering based on loggedIn state }
          {loggedIn ? (
            <>
              <Route path="/" element={<Home postings={samplePosts} />} />
              <Route path="/about" element={<About />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/profile" element={<Profile />} />
            </>
          ) : (
            <Route path="*" element={<Splash toggleLoggedIn={toggleLoggedIn} />} />
          )}
        </Routes>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
 */
 /**
  function RequireAuth() {
    //...determine if user is logged in
    if(!loggedIn) { //if no user, say so
      return <Navigate to="/login" />
    }
    else { //otherwise, show the child route content
      return <Outlet />
    }

  return (
    <div>
      <div className="App full-height">
              <NavBar />
              <Routes>
                <Route exact path="/" element={<Home postings={samplePosts} />} />
                <Route element={<RequireAuth />} >
                  <Route path="/about" element={<About />} />
                  <Route path="/chat" element={<Chat />} />
                  <Route path="/profile" element={<Profile />} />
                </Route>

                <Route path="login" element={<Splash toggleLoggedIn={toggleLoggedIn}/>}></Route>
              </Routes>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );

}
*/

export default App;