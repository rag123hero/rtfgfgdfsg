import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBnxh01JDdtVzlfuJ3FC_6YK8ob3UbOHos",
  authDomain: "booksanta-d7f9f.firebaseapp.com",
  databaseURL: "https://booksanta-d7f9f.firebaseio.com",
  projectId: "booksanta-d7f9f",
  storageBucket: "booksanta-d7f9f.appspot.com",
  messagingSenderId: "794239797454",
  appId: "1:794239797454:web:92d77df1659ee65133289f"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
