import React, { useState } from "react";
import SideBar from "./SideBar";
import Widgets from "./Widgets";
import { Outlet } from "react-router-dom";
import { List } from "react-bootstrap-icons";
const SharedLayout = () => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <div className="">
      {localStorage["isLoggedIn"] ? (
        <div className="d-flex justify-content-center justify-content-md-around justify-content-xl-between">
          {hamburger ? (
            <div
              className="d-md-none hamburgerNav position-absolute start-0"
              style={{ height: "100vh" }}
            >
              <SideBar />
            </div>
          ) : (
            ""
          )}
          <div className="row col-12">
            <div className="d-none d-md-block col-1 col-md-3 col-lg-3 hamburgerNav">
              <SideBar />
            </div>
            <div className="hamburgerButton d-md-none">
              <button
                className="btn fs-3"
                onClick={() => setHamburger(!hamburger)}
              >
                <List />
              </button>
            </div>

            <div className="col-12 col-md-7 col-lg-7">
              <Outlet />
            </div>
            <div className="ms-5 col-2 col-md-1 col-xl-1 d-none d-xl-block">
              <Widgets />
            </div>
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default SharedLayout;
