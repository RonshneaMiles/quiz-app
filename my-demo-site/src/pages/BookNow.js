import React from "react";
import { Link } from "react-router-dom";

const BookNow = () => (
  <>
    <div className="hero-booking-banner">
      <div className="hero-booking-content">
        <h1 className="booking-text">Book With Us Now</h1>
        <Link to="/contact">
          <button className="start-button">
            <span>Contact Us Today! </span>
          </button>
        </Link>
      </div>
    </div>
    <div className="section-cells">
      <div className="large-cell">
        <h2>Professional Cleaning Service</h2>
        <article className="text-content">
          Our team is backed by the experience and expertise needed to get the
          job done right. We offer customized price quotes and guarantee 100%
          customer satisfaction. We know deep cleaning is essential for the
          success of your businesses and homes. We will use eco-friendly,
          top-quality products to ensure your commercial property sparkles. In
          addition to enhancing your property visually, our services will
          prevent mildew cultivation, control odors, and provide your property
          with a fresh, clean feel. For the green services you want at the price
          you can afford, contact our cleaning experts for a customized cleaning
          quote. You won’t be disappointed.
        </article>
      </div>
      <aside>
        <div className="contact-form">
          <h2>Request a Quote Today!</h2>
          <p>
            <strong>Please complete the form below to get started.</strong>
          </p>

          <fieldset>
            <ul className="flex">
              <li className="full-length">
                <div className="input-text">
                  <label htmlFor="first-name">First Name*</label>
                  <input
                    required="required"
                    type="text"
                    id="first-name"
                    name="first--name"
                  ></input>
                </div>
              </li>
              <li className="full-length">
                <div className="input-text">
                  <label htmlFor="last-name">Last Name*</label>
                  <input
                    required="required"
                    type="text"
                    id="last-name"
                    name="last--name"
                  ></input>
                </div>
              </li>
              <li className="full-length">
                <div className="input-text">
                  <label htmlFor="email-input">Email*</label>
                  <input
                    required="required"
                    type="email"
                    id="email-input"
                    name="email"
                  ></input>
                </div>
              </li>
              <div className="side-by-side">
                <li className="half-length">
                  <div className="input-text">
                    <label htmlFor="phone-input">Phone*</label>
                    <input
                      required="required"
                      type="tel"
                      pattern="[(]\d{3}[)][\s]\d{3}[\-]\d{4}"
                      id="phone-input"
                      name="phone-number"
                    ></input>
                  </div>
                </li>
                <li className="half-length">
                  <div className="input-text">
                    <label htmlFor="zipcode-input">Zip Code*</label>
                    <input
                      required="required"
                      type="text"
                      id="zipcode-input"
                      name="zipcode"
                    ></input>
                  </div>
                </li>
              </div>
              <li className="full radio-buttons">
                <div className="input-text">
                  <label htmlFor="interest-options">Interested In?</label>
                  <ul id="interest-options">
                    <li>
                      <input
                        type="radio"
                        value="Recurring Cleaning Service"
                        id="interest-option-one"
                        name="interest"
                      />
                      <label
                        className="cms-replace"
                        tabIndex="0"
                        htmlFor="interest-option-one"
                      ></label>
                      <label htmlFor="interest-option-one">
                        Recurring Cleaning Service
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        value="Floor Care or One-Time Job"
                        id="interest-option-two"
                        name="interest"
                      />
                      <label
                        className="cms-replace"
                        tabIndex="0"
                        htmlFor="interest-option-two"
                      ></label>
                      <label htmlFor="interest-option-two">
                        Floor Care or One-Time Job
                      </label>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="input-text">
                  <label htmlFor="interest-message">
                    Additional Information:
                  </label>
                  <textarea
                    type="text"
                    id="interest-message"
                    name="user-message"
                  ></textarea>
                </div>
              </li>
            </ul>
            <div className="required">*Indicates required field</div>
            <div className="required">
              Submitting your info makes it subject to our privacy policy
            </div>
            <div className="button-container">
              <button className="button" type="submit" id="submit-button">
                Submit Information
              </button>
            </div>
          </fieldset>
        </div>
      </aside>
    </div>
  </>
);

export default BookNow;
