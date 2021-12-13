import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <>
    <div className="hero-landing">
      <div className="hero-content">
        <h1 className="fancy-text">Casual Cleaners</h1>
        <p>
          Delivering a better way to get your home, rental, or office clean. We
          combine professional style cleaning with our reasonable prices, so you
          get better cleanings for less. We are committed to providing world
          class customer service to give you a comforting experience. Explore
          now to see the services we offer. We look forward to working with you!
        </p>
        <Link to="/about">
          <button className="start-button">
            <span>Get Started</span>
          </button>
        </Link>
      </div>
    </div>
  </>
);

export default HomePage;
