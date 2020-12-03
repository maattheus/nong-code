import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import List from './components/List';
import Hero from './components/Hero';

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: 'AIzaSyCPxmlsK0Ne4rCA3fQS64M1gn8SaZbTkU4',
        authDomain: '784151698441-nqhpgnoke6bihl12rjcu6hgpcg47j67k.apps.googleusercontent.com',
        projectId: '784151698441'
    });
}

ReactDOM.render(
    <App />,
    document.getElementById('root')

)