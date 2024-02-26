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
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const sampleData = [{"title": "Travel Fitness App", 
                     "roles":["Engineer","Front-End","Graphic Designer"], 
                     "location":"Seattle, WA",
                     "shortdesc":"Imagine a workout plan you could keep up no matter where in the world you are.",
                     "longdesc":"Imagine a workout plan you could keep up no matter where in the world you are. Imagine a workout plan you could keep up no matter where in the world you are. Imagine a workout plan you could keep up no matter where in the world you are.",
                     "poster":"Jane Doe"}, 
                     {"title": "Wellness Program for Dogs", 
                     "roles":["Product Manager"], 
                     "location":"Seattle, WA",
                     "shortdesc":"Your dog could use a break. Pamper them with a program to make them more at peace with their busy lives.",
                     "longdesc":"Imagine a workout plan you could keep up no matter where in the world you are. Imagine a workout plan you could keep up no matter where in the world you are. Imagine a workout plan you could keep up no matter where in the world you are.",
                     "poster":"Dog Doggerton"},
                     {"title": "Beach Home Generator", 
                     "roles":["Engineer", "Graphic Designer"], 
                     "location":"Portland, OR",
                     "shortdesc":"An app to generate schematic layouts for beach houses.",
                     "longdesc":"Imagine a workout plan you could keep up no matter where in the world you are. Imagine a workout plan you could keep up no matter where in the world you are. Imagine a workout plan you could keep up no matter where in the world you are.",
                     "poster":"Joe Beachhouse"},
                     {"title": "Miniature GoPros for Koi Fish", 
                     "roles":["Product Manager"], 
                     "location":"Capitol Hill, Seattle",
                     "shortdesc":"Wouldn't it be cool to see first-person footage of a koi fish's day? Help us make it happen.",
                     "longdesc":"Imagine a workout plan you could keep up no matter where in the world you are. Imagine a workout plan you could keep up no matter where in the world you are. Imagine a workout plan you could keep up no matter where in the world you are.",
                     "poster":"Bob Pondenjoyer"},
                     {"title": "Miniature GoPros for Koi", 
                     "roles":["Product Manager"], 
                     "location":"Capitol Hill, Seattle",
                     "shortdesc":"Wouldn't it be cool to see first-person footage of a koi fish's day? Help us make it happen.",
                     "longdesc":"Imagine a workout plan you could keep up no matter where in the world you are. Imagine a workout plan you could keep up no matter where in the world you are. Imagine a workout plan you could keep up no matter where in the world you are.",
                     "poster":"Bob Pondenjoyer"}]


function App() {
  return (
    <div className="App full-height"> 
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home postings={sampleData} />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/chat"
                    element={<Chat />}
                />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
