import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import ECommerce from "./final/projects/ecommerce/Index.jsx";
import ECommerceNavbar from "./final/projects/ecommerce/components/Navbar";
import ECommerceCart from "./final/projects/ecommerce/components/Cart";
import ECommerceCatalog from "./final/projects/ecommerce/components/Catalog";
import CryptoMaster from "./final/projects/cryptomaster/Index.jsx";
import TwitterClone from "./final/projects/twitter-clone/Index";
import TwitterSharedLayout from "./final/projects/twitter-clone/components/SharedLayout";
import TwitterExplore from "./final/projects/twitter-clone/components/Explore";
import TwitterProfilePage from "./final/projects/twitter-clone/components/Profile";
import TwitterBookmark from "./final/projects/twitter-clone/components/Bookmarked";
import Hashtag2023 from "./final/projects/twitter-clone/components/explore/Hashtag2023";
import HashtagCats from "./final/projects/twitter-clone/components/explore/HashtagCats";
import HashtagDogs from "./final/projects/twitter-clone/components/explore/HashtagDogs";
import HashtagPorsche from "./final/projects/twitter-clone/components/explore/HashtagPorsche";
import HashtagVegan from "./final/projects/twitter-clone/components/explore/HashtagVegan";
import HashtagHotChocolate from "./final/projects/twitter-clone/components/explore/HashtagHotChocolate";
import Resume from "./final/components/ResumePage";
import "./index.css";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/">
            <Route index element={<App />} />
            <Route path="projects">
              <Route path="shopbest" element={<ECommerceNavbar />} key="ShopBest">
                <Route index element={<ECommerce />} />
                <Route path="cart" element={<ECommerceCart />} />
                <Route path="catalog" element={<ECommerceCatalog />} />
              </Route>
              <Route path="cryptomaster" key="CryptoMaster" element={<CryptoMaster />} />
              <Route path="tweety" key="Tweety" element={<TwitterSharedLayout />}>
                <Route path="home" key="Twitter Home" element={<TwitterClone />} />
                <Route path="explore" key="Explore" >

                  <Route key="exploreindex" index element={<TwitterExplore />}/>
                  <Route path="2023" key="2023" element={<Hashtag2023 />} />
                  <Route path="cats" key="cats" element={<HashtagCats />} />
                  <Route path="dogs" key="dogs" element={<HashtagDogs />} />
                  <Route path="porsche" key="porsche" element={<HashtagPorsche />} />
                  <Route path="hotchocolate" key="hotchocolate" element={<HashtagHotChocolate />} />
                  <Route path="vegan" key="vegan" element={<HashtagVegan />} />

                </Route>
                <Route path="bookmarks" key="bookmarks" element={<TwitterBookmark />} />
                <Route
                  path="profile"
                  key="TwitterProfilePage"
                  element={<TwitterProfilePage />}
                />
              </Route>
            </Route>
            <Route path="resume" key="resume" element={<Resume />}></Route>
          </Route>
        </Routes>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
