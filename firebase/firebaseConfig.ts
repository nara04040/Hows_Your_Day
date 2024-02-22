// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUaj1I89zQSZP0iPmWeDWJOfDkXpcQCQw",
  authDomain: "howsyourday-c60e2.firebaseapp.com",
  databaseURL: "https://howsyourday-c60e2-default-rtdb.firebaseio.com",
  projectId: "howsyourday-c60e2",
  storageBucket: "howsyourday-c60e2.appspot.com",
  messagingSenderId: "733274286824",
  appId: "1:733274286824:web:66a858d08e9947eef1b75d",
  measurementId: "G-LGR4D5F9HY",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
