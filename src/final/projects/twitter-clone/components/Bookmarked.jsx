import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {bookmark,deleteBookmark} from '../../../../features/Twitter/TwitterAppSlice'

const Bookmarked = () => {
  const [tweetPage, setTweetPage] = useState({});

  const dispatch = useDispatch();
  const bookmarked = useSelector((store) => store.twitter.bookmarked);
  const user = useSelector((store) => store.twitter.user);
  return (
    <div className="d-flex flex-column-reverse">
      {bookmarked.map((post) => (
        <div className="position-relative" key={post.id}>
          <div
            className="Feed-Post"
            style={{ minWidth: "49vw" }}
            onClick={() => {
              setTweetPage(post);
            }}
          >
            <img className="profile-picture" src={post.userId==user.userId ? user.imgSrc : post.imgSrc } />
            <div className="Post-Body">
              <div className="Post-Body-Header">
                <h4>{post.userId==user.userId ? user.userName : post.userName}</h4>
                <h5>{`@${post.userId==user.userId ? user.handle : post.handle}`}</h5>
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
            onClick={() => {dispatch(deleteBookmark(post.id));  document.location.reload()}}
            className="deletePost position-absolute"
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default Bookmarked;
