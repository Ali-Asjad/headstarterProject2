// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKxzp4ufJjmhvgHCe6UaK7Ul5PzEmM-n0",
  authDomain: "inventory-management-c5530.firebaseapp.com",
  projectId: "inventory-management-c5530",
  storageBucket: "inventory-management-c5530.appspot.com",
  messagingSenderId: "152209454679",
  appId: "1:152209454679:web:c672c06d117dc9c1251512",
  measurementId: "G-JG821RWVYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}