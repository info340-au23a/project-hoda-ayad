import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBrWCfEVSlUShsM8ooeta2nTgdYGIftqZM",
  authDomain: "campus-cloud-24.firebaseapp.com",
  projectId: "campus-cloud-24",
  storageBucket: "campus-cloud-24.appspot.com",
  messagingSenderId: "1037774923599",
  appId: "1:1037774923599:web:0ee2fa542f78e729b9873a"
};

const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
);
