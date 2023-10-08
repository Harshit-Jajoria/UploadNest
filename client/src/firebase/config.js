// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBU4PxYr3WuOIFVzze6-Uj99CHc3C-ETmc',
  authDomain: 'farmart-dc925.firebaseapp.com',
  projectId: 'farmart-dc925',
  storageBucket: 'farmart-dc925.appspot.com',
  messagingSenderId: '618865142533',
  appId: '1:618865142533:web:3dc4b255acfa4cf965a56c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, db, storage };

// import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: 'AIzaSyBZT5DK41D11J22xZNuOEMFX7AKAgx_YQU',
//   authDomain: 'nodejs-assignment-5caba.firebaseapp.com',
//   projectId: 'nodejs-assignment-5caba',
//   storageBucket: 'nodejs-assignment-5caba.appspot.com',
//   messagingSenderId: '107073953731',
//   appId: '1:107073953731:web:60b9aca7b1fc8171852776',
//   measurementId: 'G-PV07X1JLKK',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// export { auth, provider };
