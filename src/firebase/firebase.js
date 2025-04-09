import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBkb2HJuE_ZGN7kNk-L0YbOSj13ixwwpbA",
    authDomain: "netflix-43cf3.firebaseapp.com",
    projectId: "netflix-43cf3",
    storageBucket: "netflix-43cf3.firebasestorage.app",
    messagingSenderId: "459051918358",
    appId: "1:459051918358:web:cb7bc6f9c3b672cf404137",
    measurementId: "G-L17Z7VVD9J",
    databaseURL: "https://netflix-43cf3-default-rtdb.firebaseio.com/"
  };

  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
