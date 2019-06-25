import firebase from 'firebase'
import  'firebase/storage'
import 'firebase/auth'
var config = {
    apiKey: "AIzaSyBT0ynr0e86xHRkHUK0iuFxrTOYqI_9Mqg",
    authDomain: "nuxt-6397b.firebaseapp.com",
    databaseURL: "https://nuxt-6397b.firebaseio.com",
    projectId: "nuxt-6397b",
    storageBucket: "nuxt-6397b.appspot.com",
    messagingSenderId: "533892599090"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(config);
  }
  
  const db = firebase.firestore()
  const storage = firebase.storage().ref()
  const  auth = firebase.auth()
  
  export default firebase
  export {
    db,
    storage,
    auth
  }