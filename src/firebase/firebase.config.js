import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC5sCzr-OWp5Hz26UGmEiR2iufMqnH5wHo",
  authDomain: "neo-bazar.firebaseapp.com",
  projectId: "neo-bazar",
  storageBucket: "neo-bazar.firebasestorage.app",
  messagingSenderId: "248515101244",
  appId: "1:248515101244:web:0d84c41f9c4d402b533939"
};

export const app = initializeApp(firebaseConfig);