import firebase from 'firebase'
require ('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyBLMi5ikCWnJ3QDfgC2XUAaQ79wnRk9lyE",
    authDomain: "biblioteca-3e62a.firebaseapp.com",
    projectId: "biblioteca-3e62a",
    storageBucket: "biblioteca-3e62a.appspot.com",
    messagingSenderId: "152215055256",
    appId: "1:152215055256:web:3ca9f80f5e368c7481d9ed"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore()