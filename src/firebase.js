import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "messanger-app-react.firebaseapp.com",
    projectId: "messanger-app-react",
    storageBucket: "messanger-app-react.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDING_ID,
    appId: process.env.REACT_APP_APP_ID,
  })
  .auth();
