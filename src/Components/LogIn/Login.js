import React, { useContext } from 'react';
import { userContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const googelSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
                const newUserInfo = { ...loggedInUser }
                newUserInfo.name = user.displayName
                newUserInfo.email = user.email
                setLoggedInUser(newUserInfo)

                history.replace(from);
                // ...
            }).catch((error) => {
                // // Handle Errors here.
                // var errorCode = error.code;
                // var errorMessage = error.message;
                // // The email of the user's account used.
                // var email = error.email;
                // // The firebase.auth.AuthCredential type that was used.
                // var credential = error.credential;
                // // ...
            });
    }

    return (
        <div>
            <button onClick={googelSignIn}>google sign in</button>
        </div>
    );
};

export default Login;