import firebase from "firebase/app";
//firebase service
//auth service
// realtime service
//storage service
//deploy service
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC0VNlHxs6kaJZzLQPJgwLDGIB4219wwro",
  authDomain: "spotify-clone-5dd93.firebaseapp.com",
  projectId: "spotify-clone-5dd93",
  storageBucket: "spotify-clone-5dd93.appspot.com",
  messagingSenderId: "719114429057",
  appId: "1:719114429057:web:1ad79a4f1407f747e0e380",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
