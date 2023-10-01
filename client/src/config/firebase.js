import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, updateDoc} from 'firebase/firestore';
import { collection , getDocs} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import CLIENT_API from './env.js';

const firebaseConfig = {
  apiKey: "",
  authDomain: "mygainz-project.firebaseapp.com",
  projectId: "mygainz-project",
  storageBucket: "mygainz-project.appspot.com",
  messagingSenderId: "419352770030",
  appId: "1:419352770030:web:73af8c823d514caa2b0aff"
};

firebaseConfig.apiKey = CLIENT_API;

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, signInWithEmailAndPassword, app, db, storage, collection, getDocs, doc, updateDoc, ref, uploadBytes, getDownloadURL};
