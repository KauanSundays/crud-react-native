import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyD3Cdz-8DLBE6mPvAtkbHiJ9SQCOq-4uL4",
  authDomain: "tutorialcrudreactnative-69141.firebaseapp.com",
  projectId: "tutorialcrudreactnative-69141",
  storageBucket: "tutorialcrudreactnative-69141.appspot.com",
  messagingSenderId: "345699047293",
  appId: "1:345699047293:web:1beb422853440f6b649e14"
};

if (!firebase.apps.length) {
    console.log('Deu ruim ${firebase.apps.lenght}')
    firebase.initializeApp(firebaseConfig)
    console.log('conectado ${firebase.apps.lenght}')
}

export default firebase;