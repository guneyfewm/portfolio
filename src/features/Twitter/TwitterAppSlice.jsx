import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import NoProfilePhoto from "../../final/projects/twitter-clone/img/noprofilephoto.png";
import JohnSrc from "../../final/projects/twitter-clone/img/johnprofilepic.png";
let id = 0;
let hashtag2023id = 0;
let hashtagporscheid = 0;
let hashtaghotchocolateid = 0;
let hashtagveganid = 0;
let hashtagcatsid = 0;
let hashtagdogsid = 0;
let bookmarkid = 0;
const hashtagCatsInitial =
  localStorage["HashtagCats"] != undefined
    ? JSON.parse(localStorage["HashtagCats"])
    : [];
const hashtagDogsInitial =
  localStorage["HashtagDogs"] != undefined
    ? JSON.parse(localStorage["HashtagDogs"])
    : [];
const hashtagVeganInitial =
  localStorage["HashtagVegan"] != undefined
    ? JSON.parse(localStorage["HashtagVegan"])
    : [];
const hashtagHotChocolateInitial =
  localStorage["HashtagHotchocolate"] != undefined
    ? JSON.parse(localStorage["HashtagHotchocolate"])
    : [];
const hashtagPorscheInitial =
  localStorage["HashtagPorsche"] != undefined
    ? JSON.parse(localStorage["HashtagPorsche"])
    : [];
const hashtag2023Initial =
  localStorage["Hashtag2023"] != undefined
    ? JSON.parse(localStorage["Hashtag2023"])
    : [];
const bookmarkInitial =
  localStorage["bookmarked"] != undefined
    ? JSON.parse(localStorage["bookmarked"])
    : [];
const initialState = {
  bookmarked:[...bookmarkInitial],
  user: {
    userId:0,
    userName:
      localStorage.getItem("username") != null
        ? localStorage.getItem("username")
        : "",
    handle:
      localStorage.getItem("handle") != null
        ? localStorage.getItem("handle")
        : "",
    email: "",
    password: "",
    imgSrc:
      localStorage.getItem("fileBase64") != null
        ? localStorage.getItem("fileBase64")
        : NoProfilePhoto,
    isLoggedIn: localStorage["isLoggedIn"],
  },
  posts:
    localStorage.getItem("Tweets") !== null
      ? JSON.parse(localStorage.getItem("Tweets"))
      : [],
  hashtag2023: [...hashtag2023Initial],
  hashtagPorsche: [...hashtagPorscheInitial],
  hashtagHotChocolate: [...hashtagHotChocolateInitial],
  hashtagVegan: [...hashtagVeganInitial],
  hashtagDogs: [...hashtagDogsInitial],
  hashtagCats: [...hashtagCatsInitial],
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    bookmark: (state, action) => {
      state.bookmarked = [...state.bookmarked,         {
        userName: action.payload.userName,
        handle: action.payload.handle,
        postText: action.payload.postText,
        imgSrc: action.payload.imgSrc,
        postSrc: action.payload.postSrc,
        id: ++bookmarkid,
        userId:action.payload.userId
      },];
      localStorage.setItem(
        "bookmarked",
        JSON.stringify(state.bookmarked.map((post) => post))
      );
    },
    deleteBookmark: (state, action) => {
      state.bookmarked = state.bookmarked.filter((post) => {
        return post.id != action.payload;
      });
      localStorage.setItem(
        "bookmarked",
        JSON.stringify(state.bookmarked.map((post) => post))
      );
    },
    newHashtag2023Post: (state, action) => {
      state.hashtag2023 = [
        ...state.hashtag2023,
        {
          userName: state.user.userName,
          handle: state.user.handle,
          postText: action.payload.postText,
          imgSrc: state.user.imgSrc,
          postSrc: action.payload.postSrc,
          id: ++hashtag2023id,
          userId: action.payload.userId,

        },
      ];

      localStorage["Hashtag2023"] = JSON.stringify(
        state.hashtag2023.map((item) => item)
      );
      localStorage["NextTweetImg"] = "";
    },
    newHashtagPorschePost: (state, action) => {
      state.hashtagPorsche = [
        ...state.hashtagPorsche,
        {
          userName: state.user.userName,
          handle: state.user.handle,
          postText: action.payload.postText,
          imgSrc: state.user.imgSrc,
          postSrc: action.payload.postSrc,
          id: ++hashtagporscheid,
          userId: action.payload.userId,

        },
      ];
      localStorage.setItem(
        "HashtagPorsche",
        JSON.stringify(state.hashtagPorsche.map((post) => post))
      );
      localStorage["NextTweetImg"] = "";
    },
    newHashtagHotChocolatePost: (state, action) => {
      state.hashtagHotChocolate = [
        ...state.hashtagHotChocolate,
        {
          userName: state.user.userName,
          handle: state.user.handle,
          postText: action.payload.postText,
          imgSrc: state.user.imgSrc,
          postSrc: action.payload.postSrc,
          id: ++hashtaghotchocolateid,
          userId: action.payload.userId,

        },
      ];
      localStorage.setItem(
        "HashtagHotChocolate",
        JSON.stringify(state.hashtagHotChocolate.map((post) => post))
      );
      localStorage["NextTweetImg"] = "";
    },
    newHashtagVeganPost: (state, action) => {
      state.hashtagVegan = [
        ...state.hashtagVegan,
        {
          userName: state.user.userName,
          handle: state.user.handle,
          postText: action.payload.postText,
          imgSrc: state.user.imgSrc,
          postSrc: action.payload.postSrc,
          id: ++hashtagveganid,
          userId: action.payload.userId,

        },
      ];
      localStorage.setItem(
        "HashtagVegan",
        JSON.stringify(state.hashtagVegan.map((post) => post))
      );
      localStorage["NextTweetImg"] = "";
    },
    newHashtagDogsPost: (state, action) => {
      state.hashtagDogs = [
        ...state.hashtagDogs,
        {
          userName: state.user.userName,
          handle: state.user.handle,
          postText: action.payload.postText,
          imgSrc: state.user.imgSrc,
          postSrc: action.payload.postSrc,
          id: ++hashtagdogsid,
          userId: action.payload.userId,

        },
      ];
      localStorage.setItem(
        "HashtagDogs",
        JSON.stringify(state.hashtagDogs.map((post) => post))
      );
      localStorage["NextTweetImg"] = "";
    },
    newHashtagCatsPost: (state, action) => {
      state.hashtagCats = [
        ...state.hashtagCats,
        {
          userName: state.user.userName,
          handle: state.user.handle,
          postText: action.payload.postText,
          imgSrc: state.user.imgSrc,
          postSrc: action.payload.postSrc,
          id: ++hashtagcatsid,
          userId: action.payload.userId,

        },
      ];
      localStorage.setItem(
        "HashtagCats",
        JSON.stringify(state.hashtagCats.map((post) => post))
      );
      localStorage["NextTweetImg"] = "";
    },

    newPost: (state, action) => {
      state.posts = [
        ...state.posts,
        {
          userName: state.user.userName,
          handle: state.user.handle,
          postText: action.payload.postText,
          imgSrc: state.user.imgSrc,
          postSrc: action.payload.postSrc,
          id: ++id,
          userId: action.payload.userId,
        },
      ];
      localStorage.setItem(
        "Tweets",
        JSON.stringify(state.posts.map((post) => post))
      );
      localStorage["NextTweetImg"] = "";
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => {
        return post.id != action.payload;
      });
      localStorage.setItem(
        "Tweets",
        JSON.stringify(state.posts.map((post) => post))
      );
    },
    deleteHashtag2023Post: (state, action) => {
      state.hashtag2023 = state.hashtag2023.filter((post) => {
        return (
          post.userName != state.user.userName || post.id != action.payload
        );
      });
      localStorage.setItem(
        "Hashtag2023",
        JSON.stringify(state.hashtag2023.map((post) => post))
      );
    },
    deleteHashtagPorschePost: (state, action) => {
      state.hashtagPorsche = state.hashtagPorsche.filter((post) => {
        return post.id != action.payload;
      });
      localStorage.setItem(
        "HashtagPorsche",
        JSON.stringify(state.hashtagPorsche.map((post) => post))
      );
    },
    deleteHashtagHotChocolatePost: (state, action) => {
      state.hashtagHotChocolate = state.hashtagHotChocolate.filter((post) => {
        return post.id != action.payload;
      });
      localStorage.setItem(
        "HashtagHotChocolate",
        JSON.stringify(state.hashtagHotChocolate.map((post) => post))
      );
    },
    deleteHashtagVeganPost: (state, action) => {
      state.hashtagVegan = state.hashtagVegan.filter((post) => {
        return post.id != action.payload;
      });
      localStorage.setItem(
        "HashtagVegan",
        JSON.stringify(state.hashtagVegan.map((post) => post))
      );
    },
    deleteHashtagDogsPost: (state, action) => {
      state.hashtagDogs = state.hashtagDogs.filter((post) => {
        return post.id != action.payload;
      });
      localStorage.setItem(
        "HashtagDogs",
        JSON.stringify(state.hashtagDogs.map((post) => post))
      );
    },
    deleteHashtagCatsPost: (state, action) => {
      state.hashtagCats = state.hashtagCats.filter((post) => {
        return post.id != action.payload;
      });
      localStorage.setItem(
        "HashtagCats",
        JSON.stringify(state.hashtagCats.map((post) => post))
      );
    },
    setUserName: (state, action) => {
      state.user.userName = action.payload;
      localStorage.setItem("username", state.user.userName);
    },
    setHandle: (state, action) => {
      state.user.handle = action.payload;
      localStorage.setItem("handle", state.user.handle);
    },
    setIsLoggedIn: (state, action) => {
      state.user.isLoggedIn = action.payload;
      localStorage["isLoggedIn"] = state.user.isLoggedIn;
    },
  },
});
export const {
  newPost,
  deletePost,
  setUserName,
  setHandle,
  bookmark,
  deleteBookmark,
  setIsLoggedIn,
  newHashtag2023Post,
  newHashtagCatsPost,
  newHashtagDogsPost,
  newHashtagHotChocolatePost,
  newHashtagPorschePost,
  newHashtagVeganPost,
  deleteHashtag2023Post,
  deleteHashtagCatsPost,
  deleteHashtagDogsPost,
  deleteHashtagHotChocolatePost,
  deleteHashtagPorschePost,
  deleteHashtagVeganPost,
} = appSlice.actions;
export default appSlice.reducer;
