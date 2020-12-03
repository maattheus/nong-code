import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCPxmlsK0Ne4rCA3fQS64M1gn8SaZbTkU4",
    authDomain: "nong-code.firebaseapp.com",
    databaseURL: "https://nong-code.firebaseio.com",
    projectId: "nong-code",
    storageBucket: "nong-code.appspot.com",
    messagingSenderId: "784151698441",
    appId: "1:784151698441:web:be2149afc6e357a029ecd8",
    measurementId: "G-574JPWXH10"
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;