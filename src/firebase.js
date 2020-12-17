import * as firebase from "firebase";
import 'firebase/firestore';
const firebaseConfig = {apiKey: "AIzaSyBJS25RqYlJo_OQ31EgLQLjWTuSaiNfs4A",
authDomain: "fb-clone-54d60.firebaseapp.com",
databaseURL: "https://fb-clone-54d60.firebaseio.com",
projectId: "fb-clone-54d60",
storageBucket: "fb-clone-54d60.appspot.com",
messagingSenderId: "874628575246",
appId: "1:874628575246:web:4f2ee5d328d1465cc1cc5f",
measurementId: "G-BKBFM4L3ZL"
  
    };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;