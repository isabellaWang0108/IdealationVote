import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBhKma1ZCj-ddPr1VGFEXzVzAKsE0ZEDb0",
    authDomain: "ideavote-799b2.firebaseapp.com",
    databaseURL: "https://ideavote-799b2.firebaseio.com",
    projectId: "ideavote-799b2",
    storageBucket: "",
    messagingSenderId: "99964423429",
    appId: "1:99964423429:web:e5f8658b9fd2e0be36fb6c"
};

var fire = firebase.initializeApp(config);
export default fire;