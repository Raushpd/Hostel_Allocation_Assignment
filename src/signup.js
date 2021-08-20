import React, { useState, useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import './App.css';

// Configure Firebase.
const config = {
    apiKey: 'AIzaSyAeue-AsYu76MMQlTOM-KlbYBlusW9c1FM',
    authDomain: 'myproject-1234.firebaseapp.com',
    // ...
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessWithAuthResult: () => {
        return false;
    },
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,

    ],
};

function SignInScreen() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const authObserver = firebase.auth().onAuthStateChanged((user) => {
            setUser(user)
        });
        return authObserver;
    })
    
    if (user) {
        return
        <>
            <p>welcome, {user.displayName}+" "+{user.email}</p>
            <button onClick={() => { }}>Sign Out</button>
        </>
    }
    else {

        return (
            <div id="hostel">
                <h1 >Hostel Allocation</h1>
                <p>Please sign-in:</p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        );
    }
}

export default SignInScreen;