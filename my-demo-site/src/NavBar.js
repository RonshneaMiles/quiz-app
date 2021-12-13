import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav id="navbar">
    <ul className="nav-items">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/schedule">Book Now</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
