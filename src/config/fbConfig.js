import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var fbConfig = {
  apiKey: "AIzaSyBA_M_g5IVhooyjhuVra4iSlMx49-Kmer8",
  authDomain: "ajens-marioplan.firebaseapp.com",
  databaseURL: "https://ajens-marioplan.firebaseio.com",
  projectId: "ajens-marioplan",
  storageBucket: "ajens-marioplan.appspot.com",
  messagingSenderId: "706226381476"
  //   appId: "1:706226381476:web:4d3c25a4549bdc7efbbc31",
  //   measurementId: "G-ZXZ2R5PE9H"
};

firebase.initializeApp(fbConfig);
// firebase.firestore().settings({ timeStampsInSnapshots: true });
firebase.firestore().settings({});

export default firebase;
