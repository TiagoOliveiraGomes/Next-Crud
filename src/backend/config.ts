import { getApp, initializeApp, getApps } from 'firebase/app';
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
}

// const firebaseConfig = {
//     apiKey: "AIzaSyC5_SVBLQPz9DfTBpTxdgGuK8l-x9x8LhI",
//     authDomain: "next-crud-3b3c1.firebaseapp.com",
//     projectId: "next-crud-3b3c1",
//   };
console.log("testing...", process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID)
console.log("testing...", "next-crud-3b3c1")

const app = !getApps().length ? initializeApp( firebaseConfig) : getApp()
const dataBase = getFirestore(app)
export { dataBase }

