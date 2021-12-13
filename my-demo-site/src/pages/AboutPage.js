import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => (
  <>
    <div className="greeting-banner">
      <div className="greeting-content">
        <h1 className="fancy-text">Casual Cleaners</h1>
      </div>
    </div>
    <div className="split">
      <div className="section-cells light-bg">
        <h2>
          <Link to="/kitchen">Kitchen and Bathroom</Link>
        </h2>
        <div className="service-cards">
          <div className="half-cell">
            <img src="./bathroom-g8979a9f7e_1920.jpg" alt="clean bathroom" />
          </div>
          <div className="half-cell">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
        </div>
      </div>
      <div className="section-cells accent-bg">
        <h2>
          <Link to="/windows">Windows</Link>
        </h2>
        <div className="service-cards">
          <div className="half-cell">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
          <div className="half-cell">
            <img src="./white-gf21fca5fa_1920.jpg" alt="streak-free windows" />
          </div>
        </div>
      </div>
      <div className="section-cells">
        <h2>
          <Link to="/carpet">Carpet Detail</Link>
        </h2>
        <div className="service-cards">
          <div className="half-cell">
            <img
              src="./vacuum-cleaner-gf53e1d02a_1920.jpg"
              alt="deep-treated carpet"
            />
          </div>
          <div className="half-cell">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
        </div>
      </div>
      <div className="greeting-banner">
        <div className="greeting-content">
          <p>
            “Casual Cleaners is the most professional crew I have ever worked
            with. They made it easy to schedule my cleanings and the
            communication was phenomenal. Just fantastic!”
          </p>
        </div>
      </div>
      <div className="section-cells">
        <div>
          <h3>We Offer Custom Cleanings</h3>
          <Link to="/schedule">
            <button className="start-button">
              <span>Get A Quote</span>
            </button>
          </Link>
          <h2>Our Most Popular Options</h2>
        </div>
        <div className="quarter-split">
          <div className="service-cards options">
            <div className="half-cell small">
              <img
                className="round"
                src="calender-g6d55c928a_1280.png"
                alt="calendar"
              ></img>
            </div>
            <div className="half-cell small">
              <h3>1 Room, Once A Week</h3>
              <p>A quick clean, best for focused needs or very small homes.</p>
            </div>
          </div>
          <div className="service-cards options">
            <div className="half-cell small">
              <img
                className="round"
                src="calender-g6d55c928a_1280.png"
                alt="calendar"
              ></img>
            </div>
            <div className="half-cell small">
              <h3>2 Rooms, Once A Week</h3>
              <p>
                The most popular clean, great to get more details done in the
                home
              </p>
            </div>
          </div>
          <div className="service-cards options">
            <div className="half-cell small">
              <img
                className="round"
                src="calender-g6d55c928a_1280.png"
                alt="calendar"
              ></img>
            </div>
            <div className="half-cell small">
              <h3>1 Room, Twice A Week</h3>
              <p>
                The 2nd most popular clean, long enough for general cleanings of
                most homes.
              </p>
            </div>
          </div>
          <div className="service-cards options">
            <div className="half-cell small">
              <img
                className="round"
                src="calender-g6d55c928a_1280.png"
                alt="calendar"
              ></img>
            </div>
            <div className="half-cell small">
              <h3>Up To 4 Rooms, Twice A Week</h3>
              <p>
                The deepest clean, enough for a deep, detailed cleaning of many
                homes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AboutPage;
