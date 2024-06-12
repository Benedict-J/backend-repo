import { cert, initializeApp } from 'firebase-admin/app';
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from 'firebase-admin/firestore';
const serviceAccount = require('../serviceAccount.json')

const app = initializeApp({
  credential: cert(serviceAccount)
});

console.log('firebase initialized')

const auth = getAuth();
const db = getFirestore();

export { auth, db }