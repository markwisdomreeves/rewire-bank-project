import React from 'react'
import {Link} from 'react-router-dom'
import ScrollToTopButton from "./ScrollToTopButton"
import { GiReceiveMoney } from "react-icons/gi"


function Footer() {

  return (
    <>
      <div id="footer-container">
        <div className="main-inner-footer-container custom-footer-box">
          <div className="inner-footer-container">

            <div className="mb-4 footer-items-links-container">
              <Link to="/" className="logo-link">
                <GiReceiveMoney id="footer-logo-icon" />
                Rewire Bank
              </Link>
              <p>
              Banking with Rewire Bank might make sense if you’re looking toward growing your business quicker.
              </p>

              <div className="footer-social-media-icons">
                <ul>
                  <li>
                    <a href="###">
                     <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="###">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="###">
                     <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="###">
                     <i className="fa fa-google" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="###">
                     <i className="fa fa-pinterest" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-news-letter-form">
                <form>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                  <button type="submit" className="news-letter-btn">
                  Subscribe
                  </button>
                </form>
              </div>

            </div>

            <div className="mb-4 footer-items-links-container">
              <h5 className="text-uppercase mb-0 footer-h5 text-left">Company</h5>
              <ul className="list-unstyled mb-0 footer-items-links-box text-left">
                <li>
                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li>
                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                  <Link to="/features">
                    Features
                  </Link>
                </li>
                <li>
                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                  <Link to="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                  <Link to="/about_us">
                    About Us
                  </Link>
                </li>
                <li>
                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                  <Link to="/contact_us">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-4 footer-items-links-container">
              <h5 className="text-uppercase mb-0 footer-h5 text-left">Products</h5>
              <ul className="list-unstyled mb-0 footer-items-links-box text-left">
                <li>
                  <span>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  Affiliate
                  </span>
                </li>
                <li>
                  <span>
                  <i className="fa fa-check" aria-hidden="true"></i>
                    Software
                  </span>
                </li>
                <li>
                  <span>
                  <i className="fa fa-check" aria-hidden="true"></i>
                    Branding
                  </span>
                </li>
                <li>
                  <span>
                  <i className="fa fa-check" aria-hidden="true"></i>
                    Bank Card
                  </span>
                </li>
                <li>
                  <span>
                  <i className="fa fa-check" aria-hidden="true"></i>
                    Promotion
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-4 footer-items-links-container">
              <h5 className="text-uppercase mb-0 footer-h5 text-left">Support</h5>
              <ul className="list-unstyled mb-0 footer-items-links-box text-left">
                <li>
                  <span>
                  <i className="fa fa-check" aria-hidden="true"></i>
                    Privacy
                  </span>
                </li>
                <li>
                  <span>
                  <i className="fa fa-check" aria-hidden="true"></i>
                   Live chat
                  </span>
                </li>
                <li>
                  <span>
                  <i className="fa fa-check" aria-hidden="true"></i>
                    Voice call
                  </span>
                </li>
                <li>
                  <span>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  Notification
                  </span>
                </li>
                <li>
                  <span>
                  <i className="fa fa-check" aria-hidden="true"></i>
                    Customer Care
                  </span>
                </li>
              </ul>
            </div>

          </div>

        </div>


        <div className="right-reserved-container">
          <p className="text-center">Copyright &copy; 2021 Rewire Bank, Inc. All rights reserved</p>
        </div>

      </div>

      <ScrollToTopButton />
    </>
  )
}


export default Footer

