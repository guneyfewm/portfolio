import React from "react";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="btn-group">
        <Link to="/" className="btn">Home</Link>
        <Link to="/projects" className="btn">Projects</Link>
        <Link to="/resume" className="btn">Resume</Link>
      </div>
      <Outlet></Outlet>
    </>
  );
}

export default NavBar;
