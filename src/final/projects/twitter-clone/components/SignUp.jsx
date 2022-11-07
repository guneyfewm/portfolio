import React, { useRef, useState } from "react";
import {
  setUserName,
  setHandle,
} from "../../../../features/Twitter/TwitterAppSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setIsLoggedIn } from "../../../../features/Twitter/TwitterAppSlice";

function SignUp() {
  const userNameRef = useRef();
  const handleRef = useRef();
  const dispatch = useDispatch();
  const HandleClick = () => {
    if (userNameRef.current.value !== "") {
      dispatch(setUserName(userNameRef.current.value));
      document.location.reload();
    } else {
      dispatch(setUserName("John Wick"));
      document.location.reload();
    }
    if (handleRef.current.value !== "") {
      dispatch(setHandle(handleRef.current.value));
      document.location.reload();
    } else {
      dispatch(setHandle("johnwick1"));
      document.location.reload();
    }

    dispatch(setIsLoggedIn(true));
  };
  /*   const imageUpload = (e) => {
    const file = e.target.files[0];
    getBase64(file).then(base64 => {
      localStorage["fileBase64"] = base64;
    });
};
const getBase64 = (file) => {
    return new Promise((resolve,reject) => {
       const reader = new FileReader();
       reader.onload = () => resolve(reader.result);
       reader.onerror = error => reject(error);
       reader.readAsDataURL(file);
    });
  } */
  return (
    <div className="container d-flex justify-content-center mt-5">
<div className="col-lg-6 d-flex justify-content-center flex-column">
      <div className="text-center d-flex flex-column  justify-content-center">
        <div className="p-3 text-center display-5 rounded-4 mb-5 text-light bg-green">
          Sign Up
        </div>

        <div>
          <input
            ref={userNameRef}
            className="p-3 bg-light text-center rounded-5 px-5 border-0 nooutline "
            placeholder="New Username"
          ></input>
        </div>
        <br></br>
        <div>
          <input
            ref={handleRef}
            className="p-3 bg-light text-center rounded-5 px-5 border-0 nooutline"
            placeholder="New Handle @"
          ></input>
        </div>
        <br></br>
        <div></div>

        <div className="text-center">
          <button
            onClick={() => HandleClick()}
            className="col-3 mt-5 rounded-3 btn btn-light bg-green text-white"
          >
            Sign up
          </button>
          <button
            onClick={() => HandleClick()}
            className="col-3 mt-5 ms-3 rounded-3 btn btn-light bg-green text-white"
          >
            Continue without signing in
          </button>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default SignUp;
