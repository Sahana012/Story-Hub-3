import firebase from 'firebase';
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBsWnBE0wJuPgHQcHiW8KmgsYXz1Ypp8zE",
  authDomain: "story-hub-3909e.firebaseapp.com",
  projectId: "story-hub-3909e",
  storageBucket: "story-hub-3909e.appspot.com",
  messagingSenderId: "232324429290",
  appId: "1:232324429290:web:fa55c03a6d087a16c26e93"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();