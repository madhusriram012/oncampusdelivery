import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDwCu8Q4SiRSs73YSd8w31MayUTU4kxSbA",
  authDomain: "oncampusdelivery-3e482.firebaseapp.com",
  databaseURL: "https://oncampusdelivery-3e482-default-rtdb.firebaseio.com",
  projectId: "oncampusdelivery-3e482",
  storageBucket: "oncampusdelivery-3e482.appspot.com",
  messagingSenderId: "225531729392",
  appId: "1:225531729392:web:d1b2a9256d7b92bda43935",
  measurementId: "G-4CHVZMD5K7",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
