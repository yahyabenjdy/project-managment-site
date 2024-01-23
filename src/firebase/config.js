import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9Sqez6VnzJ9ImnFpFb79ybD7R5cgfxVk",
  authDomain: "projectmanagementsite-513c9.firebaseapp.com",
  projectId: "projectmanagementsite-513c9",
  storageBucket: "projectmanagementsite-513c9.appspot.com",
  messagingSenderId: "143843375953",
  appId: "1:143843375953:web:df7cefba4a5a63623df170",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
