import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBT0ynr0e86xHRkHUK0iuFxrTOYqI_9Mqg",
    authDomain: "nuxt-6397b.firebaseapp.com",
    databaseURL: "https://nuxt-6397b.firebaseio.com",
    projectId: "nuxt-6397b",
    storageBucket: "nuxt-6397b.appspot.com",
    messagingSenderId: "533892599090"
  };
  firebase.initializeApp(config);

  export default firebase