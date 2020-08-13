import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCHAAvaDjqjlBVAljcckierN7Db7xf4qkA",
  authDomain: "instagram-clone-react-fbc70.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-fbc70.firebaseio.com",
  projectId: "instagram-clone-react-fbc70",
  storageBucket: "instagram-clone-react-fbc70.appspot.com",
  messagingSenderId: "109222237131",
  appId: "1:109222237131:web:371afdd72ca536e29fdc4e",
  measurementId: "G-QQ9TDP32JC",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
