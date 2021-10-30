import React, {useState, useContext} from "react";
import LoginBg from '../../../images/login.png';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Import Firebase project configuration 
import firebaseConfig from './firebase.config.js'

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from 'react-router-dom';
import SignUp from "./signUp";



// Initialize Firebase
initializeApp(firebaseConfig);


// Main Login Component.jsx function
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
      isSignedIn : false,
      name : '',
      email : '',
      photoURL: '',  
    })

    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const {displayName, photoURL, email} = result.user;
        const isSignedInUser = {
          isSignedIn : true,
          name : displayName,
          email : email,
          photoURL: photoURL,
        }
        setUser(isSignedInUser)
        setLoggedInUser(isSignedInUser)
        history.replace(from);
        console.log(email, displayName, photoURL ,token)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log(error, errorMessage, email, errorCode, credential)
        });
    }

    

  return (
    <div className="login-page container">
      <div className="row d-flex align-items-center" style={{ height: "80vh" }}>
        <div className="col-md-5 shadow p-5 rounded">
          <div className="form-group">
            {/* <SignUp/> */}
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-primary mt-5">
              Please Sign In by Google*
            </label>
          </div>
          <div className="from-group mt-4">
            <button style={{backgroundColor : '#1cc7c1'}} className="btn form-control rounded " onClick={handleGoogleSignIn}>
              Google Sign in
            </button>
          </div>
        </div>
        <div className="col-md-7 d-none d-md-block align-self-end">
          <img className="img-fluid" src={LoginBg} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Login;
