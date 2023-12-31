// import firebase from 'firebase/app'
// import { initializeApp, authDomain, firestore } from 'firebase/app';
// import { initializeApp } from "firebase/app"; // Import specific function
// import { getAuth } from "firebase/auth"; // Import specific function
// import "firebase/firestore";


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCiTCpIxzPkJwGF3UDn7QQ9iylqcNFxJwI",
  authDomain: "netflix-clone-13e09.firebaseapp.com",
  projectId: "netflix-clone-13e09",
  storageBucket: "netflix-clone-13e09.appspot.com",
  messagingSenderId: "416581200298",
  appId: "1:416581200298:web:0c44101d67dcbe3a1f23d3"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp)
// const auth = firebase.auth();

export { auth };
export default db;
// export default firebaseApp;
