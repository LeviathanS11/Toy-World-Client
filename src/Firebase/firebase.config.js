import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBLxykwQe2cLSrBb7EARGLku1HwgBLLiG4",
  authDomain: "assignment-11-d56d2.firebaseapp.com",
  projectId: "assignment-11-d56d2",
  storageBucket: "assignment-11-d56d2.appspot.com",
  messagingSenderId: "981144098063",
  appId: "1:981144098063:web:12f7c7842a3dcc31a49a7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;