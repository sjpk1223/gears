import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC6U0I-CdK-XOHcFPhsNU6Ebr4vXmx3N_E",
    authDomain: "crownclothing-b7da6.firebaseapp.com",
    projectId: "crownclothing-b7da6",
    storageBucket: "crownclothing-b7da6.appspot.com",
    messagingSenderId: "941099676191",
    appId: "1:941099676191:web:31db65be60923e35589b2a",
    measurementId: "G-18V0ZBVLSY"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// class named firebase with constructor and pulic methods
// one of them is called initialized app
// instance variables stored in the firebase class
// each will return objects 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;