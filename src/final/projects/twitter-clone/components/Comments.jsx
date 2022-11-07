import React from "react";
import Header from "./Header";
const Comments = () => {
  return (
    <div>
      <div className="isShown">
        <Header page="Home" newpostfunc={"home"} />
        <div className="feed-container">
          <div className="feed">
            {yourFeed.map((post) => (
              <div className="position-relative" key={post.id}>
                <div
                  className="Feed-Post"
                  style={{ minWidth: "49vw" }}
                  onClick={() => {
                    setTweetPage(post);
                    setIsShown(false);
                  }}
                >
                  <img className="profile-picture" src={currentUser.imgSrc} />
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
                        userId: post.userId,
                      })
                    )
                  }
                >
                  <PinFill />
                </button>
                <button
                  onClick={() => dispatch(deletePost(post.id))}
                  className="deletePost position-absolute"
                >
                  <XSquareFill />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
