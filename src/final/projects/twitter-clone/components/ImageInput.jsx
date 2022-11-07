import React from "react";
import '../Index.css'

const ImageInput = (props) => {
  const imageUpload = (e) => {
    const file = e.target.files[0];
    getBase64(file).then(base64OfTweetImg => {
      localStorage["NextTweetImg"] = base64OfTweetImg;
      console.debug("file stored",base64OfTweetImg);
    });
};
const getBase64 = (file) => {
    return new Promise((resolve,reject) => {
       const reader = new FileReader();
       reader.onload = () => resolve(reader.result);
       reader.onerror = error => reject(error);
       reader.readAsDataURL(file);
    });
  }
  const inputChangeHandler = () => {};
  return (<>
  <label className="img-upload-label d-flex align-items-center" htmlFor="img-upload">
    <div
      className="col-8 bg-light d-flex justify-content-center align-items-center p-5 position-absolute top-50 start-50 img-upload"
    >
      <div>
      <h4 className="lead fs-2 text-center">Upload an Image</h4>

      <p className="text-center">The image gets stored in local storage until you post a tweet!</p>

      </div>
        <input
          type="file"
          id="img-upload"
          onChange={(e)=>{imageUpload(e);}}

        />

    </div>
      </label>
    {props.children}
    </>


  );
};

export default ImageInput;
