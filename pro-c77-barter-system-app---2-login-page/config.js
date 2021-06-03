  import firebase from "firebase";
require ("@firebase/firestore");
  
  var firebaseConfig = {
    apiKey: "AIzaSyB6ET0rnT0LhuJPOUfav8JfmDU3c51AaQM",
    authDomain: "pro-77-new.firebaseapp.com",
    projectId: "pro-77-new",
    storageBucket: "pro-77-new.appspot.com",
    messagingSenderId: "398421257039",
    appId: "1:398421257039:web:21f59224f1dd89527bb33a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();