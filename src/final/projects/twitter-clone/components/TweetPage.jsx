import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteHashtag2023Post, deleteHashtagCatsPost, deleteHashtagDogsPost, deleteHashtagHotChocolatePost, deleteHashtagPorschePost, deleteHashtagVeganPost, deletePost } from "../../../../features/Twitter/TwitterAppSlice";
function TweetPage({ post,hashtag, setIsShown }) {
  const user = useSelector((store) => store.twitter.user);
  const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-center flex-column">
      <div className="position-relative ">
        <div className="Feed-Post" key={post.id} onClick={() => {}}>
          <img className="profile-picture" src={post.userId==user.userId ? user.imgSrc : post.imgSrc } />
          <div className="Post-Body">
            <div className="Post-Body-Header">
              <h4>{post.userName}</h4>
              <h5>{`@${post.handle}`}</h5>
            </div>
            <p>{post.postText}</p>
            {post.postSrc !== "" ? (
              <img
                className="post-image img-fluid pe-2 mt-2"
                src={post.postSrc}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="ms-5 btn-group col-lg-6">
        <button
          className="btn btn-light bg-green text-white"
          onClick={() => {
            setIsShown(true);
          }}
        >
          Go Back
          </button>
        {hashtag=="home" ?<button
          onClick={() => {
            dispatch(deletePost(post.id));
            document.location.reload();
          }}
          className="btn btn-light bg-danger rounded-5 ms-3 text-white"
        >
          Delete
        </button>:""}
        
        {hashtag=="2023" ?<button
          onClick={() => {
            dispatch(deleteHashtag2023Post(post.id));
            document.location.reload();
          }}
          className="btn btn-light bg-danger rounded-5 ms-3 text-white"
        >
          Delete
        </button>:""}
          
        {hashtag=="cats" ?<button
          onClick={() => {
            dispatch(deleteHashtagCatsPost(post.id));
            document.location.reload();
          }}
          className="btn btn-light bg-danger rounded-5 ms-3 text-white"
        >
          Delete
        </button>:""}
        {hashtag=="dogs" ?<button
          onClick={() => {
            dispatch(deleteHashtagDogsPost(post.id));
            document.location.reload();
          }}
          className="btn btn-light bg-danger rounded-5 ms-3 text-white"
        >
          Delete
        </button>:""}
        {hashtag=="porsche" ?<button
          onClick={() => {
            dispatch(deleteHashtagPorschePost(post.id));
            document.location.reload();
          }}
          className="btn btn-light bg-danger rounded-5 ms-3 text-white"
        >
          Delete
        </button>:""}
        {hashtag=="hotchocolate" ?<button
          onClick={() => {
            dispatch(deleteHashtagHotChocolatePost(post.id));
            document.location.reload();
          }}
          className="btn btn-light bg-danger rounded-5 ms-3 text-white"
        >
          Delete
        </button>:""}
        {hashtag=="vegan" ?<button
          onClick={() => {
            dispatch(deleteHashtagVeganPost(post.id));
            document.location.reload();
          }}
          className="btn btn-light bg-danger rounded-5 ms-3 text-white"
        >
          Delete
        </button>:""}

      </div>
    </div>
  );
}

export default TweetPage;
