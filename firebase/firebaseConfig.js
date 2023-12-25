
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, set, ref, get, child, onChildAdded, push } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import { getStorage, ref as Sref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";
import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    sendEmailVerification,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD1QBG674j95TXhdw5pruzwx0UB_3T6flg",
    authDomain: "full-authentication-e4259.firebaseapp.com",
    projectId: "full-authentication-e4259",
    storageBucket: "full-authentication-e4259.appspot.com",
    messagingSenderId: "982114283168",
    appId: "1:982114283168:web:6e3efb0d1c3f12630623c5",
    measurementId: "G-VXHE6P2CGX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
  const storage = getStorage();
  const auth = getAuth(app);
  const db = getDatabase(app);


  export {
    auth,
    db,
    getStorage,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    sendEmailVerification,
    // googleProvider,
    // githubProvider,
    signInWithPopup,
    set,
    ref,
    get,
    child,
    Sref,
    uploadBytesResumable,
    getDownloadURL,
    push
}