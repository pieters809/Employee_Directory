import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand  mx-auto" to="/">
        <h1>Employee Directory</h1>
      </Link>
      <div>
      </div>
    </nav>
  );
}

export default Navbar;
