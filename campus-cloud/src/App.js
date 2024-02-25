'use strict'

import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import NavBar from './components/NavBar';
import Splash from './pages/Splash';
import Home from './pages/Home';
import About from './pages/About';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/chat"
                    element={<Chat />}
                />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
        App is rendering
    </div>
  );
}

export default App;
