import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  newPost,
  deletePost,
  setHandle,
  setUserName,
  newHashtag2023Post,
  deleteHashtag2023Post,
  newHashtagCatsPost,
  deleteHashtagCatsPost,
  newHashtagDogsPost,
  deleteHashtagDogsPost,
  newHashtagHotChocolatePost,
  deleteHashtagHotChocolatePost,
  newHashtagPorschePost,
  deleteHashtagPorschePost,
  newHashtagVeganPost,
  deleteHashtagVeganPost,
} from "../../../../features/Twitter/TwitterAppSlice";
import {
  Image,
  FiletypeGif,
  BarChart,
  EmojiSmile,
} from "react-bootstrap-icons";
import TweetPage from "./TweetPage";
import ImageInput from "./ImageInput";
const Header = ({page,wheretopost}) => {
  const currentUser = useSelector((store) => store.twitter.user);
  const [imgUploadPopup, setImgUploadPopup] = useState(false);
  const dispatch = useDispatch();
  const newPostTextRef = useRef();
  return (
    <div>
      {" "}
      <div className="mainHeader">
        <h3 className="main-Title">{page}</h3>
        <hr></hr>
      </div>
      <div className="createPost">
        <div className="createPost-Header">
          <img src={currentUser.imgSrc}></img>
          <input
            ref={newPostTextRef}
            type="text"
            placeholder="What's happening?"
          />
        </div>

        <div className="createPostBody">
          <div className="createPostBody-Icons">
            <span onClick={() => setImgUploadPopup(true)}>
              <Image />
            </span>
            <span onClick={() => setImgUploadPopup(true)}>
              <FiletypeGif />
            </span>
            <span>
              <BarChart />
            </span>
            <span>
              <EmojiSmile />
            </span>
          </div>
          {imgUploadPopup ? (
            <>
              <ImageInput>
                <div
                  className="hitbox position-absolute top-0 start-0"
                  style={{ height: "100vh", width: "99.5vw" }}
                  onClick={() => {
                    setImgUploadPopup(!imgUploadPopup);
                  }}
                ></div>
              </ImageInput>
            </>
          ) : (
            ""
          )}

          <button
            onClick={() => {
              if (
                newPostTextRef.current.value !== "" ||
                localStorage["NextTweetImg"] !== ""
              ) {
                if(wheretopost=="home") {
                    dispatch(
                   
                        newPost({
                          postText: newPostTextRef.current.value,
                          postSrc: localStorage["NextTweetImg"],
                          userId: currentUser.userId,
                        })
                      );
                }
                else if (wheretopost=="hashtag2023"){
                    dispatch(newHashtag2023Post({
                        postText: newPostTextRef.current.value,
                        postSrc: localStorage["NextTweetImg"],
                        userId: currentUser.userId,
                      }))
                }
                else if (wheretopost=="hashtagdogs"){
                    dispatch(newHashtagDogsPost({
                        postText: newPostTextRef.current.value,
                        postSrc: localStorage["NextTweetImg"],
                        userId: currentUser.userId,
                      }))
                }
                else if (wheretopost=="hashtagcats"){
                    dispatch(newHashtagCatsPost({
                        postText: newPostTextRef.current.value,
                        postSrc: localStorage["NextTweetImg"],
                        userId: currentUser.userId,
                      }))
                }
                else if (wheretopost=="hashtagvegan"){
                    dispatch(newHashtagVeganPost({
                        postText: newPostTextRef.current.value,
                        postSrc: localStorage["NextTweetImg"],
                        userId: currentUser.userId,
                      }))
                }
                else if (wheretopost=="hashtagporsche"){
                    dispatch(newHashtagPorschePost({
                        postText: newPostTextRef.current.value,
                        postSrc: localStorage["NextTweetImg"],
                        userId: currentUser.userId,
                      }))
                }
                else if (wheretopost=="hashtaghotchocolate"){
                    dispatch(newHashtagHotChocolatePost({
                        postText: newPostTextRef.current.value,
                        postSrc: localStorage["NextTweetImg"],
                        userId: currentUser.userId,
                      }))
                }
               
                newPostTextRef.current.value = "";
              } else alert("Tweet can't be empty!");
            }}
          >
            {" "}
            Tweet{" "}
          </button>
        </div>
        <hr></hr>
      </div>
    </div>
  );
};

export default Header;
