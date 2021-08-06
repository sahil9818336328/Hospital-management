import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAVJU_CwL2CA--p5PVDV3DH7t0C8vrIK8I',
  authDomain: 'renal-hospital-project.firebaseapp.com',
  projectId: 'renal-hospital-project',
  storageBucket: 'renal-hospital-project.appspot.com',
  messagingSenderId: '186546268610',
  appId: '1:186546268610:web:22b159c8609866553f4e5b',
  measurementId: 'G-6T7LJEBPM4',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
