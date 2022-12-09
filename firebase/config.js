// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getDatabase } from "firabase/database"

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAmGdfr6Z7anZUeq0s0p2MJVW7CT7eGFOU",

  authDomain: "pingme-ec8a5.firebaseapp.com",

  databaseURL: "https://pingme-ec8a5-default-rtdb.firebaseio.com",

  projectId: "pingme-ec8a5",

  storageBucket: "pingme-ec8a5.appspot.com",

  messagingSenderId: "551598153725",

  appId: "1:551598153725:web:8f38244dd14f27621a0394",

  measurementId: "G-QYCBEK8MC5"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)