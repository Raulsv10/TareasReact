// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvOaxT7qRcd3U1vVI5hMUM53MflB-3xj0",
  authDomain: "dummy-rsv.firebaseapp.com",
  projectId: "dummy-rsv",
  storageBucket: "dummy-rsv.firebasestorage.app",
  messagingSenderId: "104703608355",
  appId: "1:104703608355:web:35c4a6198e789143a59396",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
