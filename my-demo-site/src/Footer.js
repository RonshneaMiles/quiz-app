import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <nav id="footer">
    <ul className="footer-nav-items">
      <li>
        <Link to="/">Home</Link>
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

export default Footer;
