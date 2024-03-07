'use strict'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrWCfEVSlUShsM8ooeta2nTgdYGIftqZM",
  authDomain: "campus-cloud-24.firebaseapp.com",
  projectId: "campus-cloud-24",
  storageBucket: "campus-cloud-24.appspot.com",
  messagingSenderId: "1037774923599",
  appId: "1:1037774923599:web:0ee2fa542f78e729b9873a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
);
