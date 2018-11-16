import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDpUsSfaOWjTsXfU9IONA6Xtej52eAUgZw",
  authDomain: "project-management-80a9a.firebaseapp.com",
  databaseURL: "https://project-management-80a9a.firebaseio.com",
  projectId: "project-management-80a9a",
  storageBucket: "project-management-80a9a.appspot.com",
  messagingSenderId: "481681584737"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots : true });

export default firebase;