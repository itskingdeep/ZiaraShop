// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMA9O_45DhZ5JzkZ6nCV9HcS5y6i72eHY",
  authDomain: "fir-connection-fd0c1.firebaseapp.com",
  projectId: "fir-connection-fd0c1",
  storageBucket: "fir-connection-fd0c1.appspot.com",
  messagingSenderId: "620346205464",
  appId: "1:620346205464:web:d5dfcce6c9aaa9df1f2a6d"
 
};
// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getDatabase(app);
 export { db,app };


