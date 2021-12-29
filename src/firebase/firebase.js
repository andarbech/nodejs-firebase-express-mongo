// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const {    FB_API_KEY,
    FB_AUTH_DOMAIN,
    FB_PROYECT_ID,
    FB_STORAGE_BUCKET,
    FB_MENSSAGING_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID}=process.env

const firebaseConfig = {
  apiKey: FB_API_KEY,
  authDomain:FB_AUTH_DOMAIN,
  projectId:FB_PROYECT_ID,
  storageBucket: FB_STORAGE_BUCKET,
  messagingSenderId:FB_MENSSAGING_SENDER_ID,
  appId: APP_ID,
    measurementId:MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);