import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deletePost,
  bookmark,
} from "../../../../features/Twitter/TwitterAppSlice";
import {
  Pin,XLg,
  PinFill,XSquareFill,
} from "react-bootstrap-icons";
import TweetPage from "./TweetPage";
import ImageInput from "./ImageInput";
import SignUpPage from "./SignUp";
import Header from "./Header";

const Main = () => {
  const yourFeed = useSelector((store) => store.twitter.posts);
  const user = useSelector((store) => store.twitter.user);
  const currentUser = useSelector((store) => store.twitter.user);
  const [imgUploadPopup, setImgUploadPopup] = useState(false);
  const dispatch = useDispatch();
  const newPostTextRef = useRef();
  const [isShown, setIsShown] = useState(true);
  const [tweetPage, setTweetPage] = useState({});
  const inputChangeHandler = () => {};


  return (
    <div className="mainSection">
      {useSelector((store) => store.twitter.user.isLoggedIn) ? (
        <div className="">
          {isShown ? (
            <div className="">
            <Header page="Home" wheretopost={"home"} />
            <div className="feed-container">
              <div className="feed container-fluid">
                {yourFeed.map((post) => (
                  <div className="position-relative" role='button' key={post.id}>
                    <div
                      className="d-flex p-2 rounded-5 m-2 mb-3 mt-0 bg-white"
                      onClick={() => {
                        setTweetPage(post);
                        setIsShown(false);
                      }}
                    >
                        <img
                          className="profile-picture"
                          src={currentUser.imgSrc}
                        />
                        <div className="Post-Body">
                          <div className="Post-Body-Header">
                            <h4>{currentUser.userName}</h4>
                            <h5>{`@${currentUser.handle}`}</h5>
                          </div>
                          <p>{post.postText}</p>
                          {post.postSrc !== "" ? (
                            <img
                              className="post-image img-fluid pe-5 mt-2"
                              src={post.postSrc}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <button
                        className="deletePost me-5"
                        onClick={() =>
                          dispatch(
                            bookmark({
                              userName: post.userName,
                              handle: post.handle,
                              postText: post.postText,
                              imgSrc: post.imgSrc,
                              postSrc: post.postSrc,
                              id: post.id,
                              userId: post.userId
                            })
                          )
                        }
                      >
                        <PinFill/>
                      </button>
                      <button
                        onClick={() => {dispatch(deletePost(post.id)); document.location.reload()}}
                        className="deletePost fs-6 position-absolute"
                      >
                        <span><XLg style={{marginBottom: "3px"}}/></span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <TweetPage hashtag="home" post={tweetPage} setIsShown={setIsShown}></TweetPage>
          )}
        </div>
      ) : (
        <SignUpPage />
      )}
    </div>
  );
};

export default Main;
