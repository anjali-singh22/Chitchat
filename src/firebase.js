import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyDQXAc__aLDRGNj5gxxHuapSexDenWAOcA",
  authDomain: "chitchat-a7ca6.firebaseapp.com",
  projectId: "chitchat-a7ca6",
  storageBucket: "chitchat-a7ca6.appspot.com",
  messagingSenderId: "276241085716",
  appId: "1:276241085716:web:2e738eca98d19634ffbe01",
  measurementId: "G-2DHKWZRBEP"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
