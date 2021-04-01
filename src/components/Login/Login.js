import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, email } = res.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        console.log(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
      });
  };
  const [errorMessage, setErrorMessage] = useState({});
  return (
    <>
      <div
        style={{ height: " 100vh" }}
        className=" d-flex justify-content-center align-items-center "
      >
        <Button
          onClick={handleGoogleSignIn}
          className="google-btn"
          variant="primary"
        >
          Google Sign In
        </Button>
      </div>
    </>
  );
};

export default Login;
