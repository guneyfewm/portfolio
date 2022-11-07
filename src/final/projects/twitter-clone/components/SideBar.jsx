import React from "react";
import { Link, Outlet } from "react-router-dom";
import { House, Hash, Bell, Envelope, Bookmark } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
function SideBar() {
  const user = useSelector((store) => store.twitter.user);

  return (
    <nav className="sideBar sidenavbar mt-5">
      <div className="sidebar-content fs-4">
        <Link to="home">
          <House></House> Home
        </Link>
        <Link to="explore">
          <Hash className="fs-3" /> Explore
        </Link>
{/*         <Link to="notifications">
          <Bell /> Notifications
        </Link>
        <Link to="messages">
          <Envelope /> Messages
        </Link> */}
        <Link to="bookmarks">
          <Bookmark /> Bookmarks
        </Link>
        <Link to="profile">
          <img src={user.imgSrc} alt="" className="profile-picture p-1" />
          Profile
        </Link>
      </div>
    </nav>
  );
}

export default SideBar;
