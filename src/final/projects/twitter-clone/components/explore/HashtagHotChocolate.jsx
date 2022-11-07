import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  bookmark,
  deleteHashtagHotChocolatePost,
} from "../../../../../features/Twitter/TwitterAppSlice";
import TweetPage from "../TweetPage";
import Header from "../Header";
import { Pin, PinFill,XLg } from "react-bootstrap-icons";

const Hashtag2023 = () => {
  const yourFeed = useSelector((store) => store.twitter.posts);
  const currentUser = useSelector((store) => store.twitter.user);
  const [imgUploadPopup, setImgUploadPopup] = useState(false);
  const dispatch = useDispatch();
  const newPostTextRef = useRef();
  const [isShown, setIsShown] = useState(true);
  const [tweetPage, setTweetPage] = useState({});
  const inputChangeHandler = () => {};
  const hashtag = useSelector((store) => store.twitter.hashtagHotChocolate);

  return (
    <div className="">
      {isShown ? (
        <div className="">
          <Header page="#hotchocolate" wheretopost={"hashtaghotchocolate"} />
          <div className="feed-container">
            <div className="feed container-fluid">
              {hashtag.map((post) => (
                <div className="position-relative" role="button" key={post.id}>
                  <div
                    className="d-flex p-2 rounded-5  m-2 mb-3 mt-0 bg-white"
                    onClick={() => {
                      setTweetPage(post);
                      setIsShown(false);
                    }}
                  >
                    <img className="profile-picture" src={post.imgSrc} />
                    <div className="Post-Body">
                      <div className="Post-Body-Header">
                        <h4>{post.userName}</h4>
                        <h5>{`@${post.handle}`}</h5>
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
                          userId: post.userId,
                        })
                      )
                    }
                  >
                    <PinFill />
                  </button>
                  <button
                    onClick={() =>
                      dispatch(deleteHashtagHotChocolatePost(post.id))
                    }
                    className="deletePost position-absolute"
                  >
                    <span>
                      <XLg style={{ marginBottom: "3px" }} />
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <TweetPage
          hashtag="hotchocolate"
          post={tweetPage}
          setIsShown={setIsShown}
        ></TweetPage>
      )}
    </div>
  );
};
export default Hashtag2023;
