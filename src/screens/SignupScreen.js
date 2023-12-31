import React, { useRef } from "react";
import "./SignupScreen.css";
import { auth } from "../firebase1";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// // import firebase from "firebase/app";
// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";


// ----------------------------------------------------

// -------------------------------------------------


function SigupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);




  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        // console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value,
      )
      .then((authUser) => {
        // console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <div className="signupScreen_rememberMe">
          <input type="checkbox" className="checkbox" />
          <p>Remember me</p>
        </div>
        <h4>
          <span className="signupScreen_gray">New to Netflix? </span>
          <span className="signupScreen_link" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SigupScreen;
