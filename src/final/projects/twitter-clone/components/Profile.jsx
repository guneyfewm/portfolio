import React, { useRef } from "react";
import {
  setUserName,
  setHandle,
} from "../../../../features/Twitter/TwitterAppSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Profile() {
  const userNameRef = useRef();
  const handleRef = useRef();
  const dispatch = useDispatch();
  const handleClick = () => {
    document.location.reload()
    if (userNameRef.current.value == "" && handleRef.current.value == "")
      alert("You need to fill in atleast one!");
    else {
      if (userNameRef.current.value !== "")
        dispatch(setUserName(userNameRef.current.value));
      if (handleRef.current.value !== "")
        dispatch(setHandle(handleRef.current.value));

      document.location.reload();
    }
  };
  const imageUpload = (e) => {
    const file = e.target.files[0];
    getBase64(file).then((base64) => {
      localStorage["fileBase64"] = base64;
    });
  };
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };
  return (
    <div className="col-7 mt-5 d-flex justify-content-center flex-column">
      <div className="text-center d-flex flex-column  justify-content-center">
        <div className="p-3 text-center display-5 rounded-4 mb-5 text-light bg-green">
          Profile Page
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
        <div>
        <label 
        className="col-3 bg rounded-5"
        htmlFor="imageFile">
          <input
            type="file"
            id="imageFile"
            name="imageFile"
            onChange={(e) => {
              imageUpload(e);
            }}
          />
          <div className="btn btn-dark bg-green rounded-5 col-12 p-2 text-white">
            Upload A Profile Picture
          </div>
        </label>
        </div>

        <div className="text-center">
          <button
            onClick={() => handleClick()}
            className="col-3 mt-5 rounded-3 btn btn-light bg-green text-white"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
