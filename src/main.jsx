import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDEF_hQl6vfKk6SBT0ApsdIwyH0eBRK8Go",
  authDomain: "react-coder-89dae.firebaseapp.com",
  projectId: "react-coder-89dae",
  storageBucket: "react-coder-89dae.appspot.com",
  messagingSenderId: "430313585693",
  appId: "1:430313585693:web:db85e41a6b7d17495c9af4",
  measurementId: "G-G6BXSRZZ86"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
