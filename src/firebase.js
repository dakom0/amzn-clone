import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAIaMy0J_cPHhU2KSUTvAJxGdNhEhASs3U",
    authDomain: "amzn-86173.firebaseapp.com",
    databaseURL: "https://amzn-86173.firebaseio.com",
    projectId: "amzn-86173",
    storageBucket: "amzn-86173.appspot.com",
    messagingSenderId: "280235002267",
    appId: "1:280235002267:web:cb41c3749fb0b1f72ab93e",
    measurementId: "G-RT3PQ13N4Z"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};