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

const sampleData = [{"title": "Travel Fitness App", 
                     "roles":["Engineer","Front-End","Graphic Design"], 
                     "location":"Seattle, WA",
                     "shortdesc":"Imagine a workout plan you could keep up no matter where in the world you are.",
                     "poster":"Jane Doe"}, 
                     {"title": "Wellness Program for Dogs", 
                     "roles":["Product Manager"], 
                     "location":"Seattle, WA",
                     "shortdesc":"Your dog could use a break. Pamper them with a program to make them more at peace with their busy lives.",
                     "poster":"Dog Doggerton"}]


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
    </div>
  );
}

export default App;
