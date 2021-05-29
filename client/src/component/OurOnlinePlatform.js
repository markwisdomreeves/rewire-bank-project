
import React from 'react'
import { Link } from "react-router-dom"
import Professional from "../assets/professional.svg"
import LowCost from "../assets/low_cost.svg"
import LiveSupport from "../assets/live_support.svg"
import Security from "../assets/securty.svg"


const OurOnlinePlatform = () => {
  return (
    <div id="online-platform-container">
      <div className="inner-online-platform-box">

        <div className="online-platform-intro-text-box">
          <h1>Why choose rewire online banking plateform.</h1>
          <p>
            Help agencies to define their new business objectives and then create professional software.
          </p>
        </div>

        <div className="online-platform-content-box">

          <div className="online-platform-box">
            <div className="main-online-content-box">
              <div className="online-platform-img-box">
                <img src={Professional} alt="" />
              </div>
              <div className="online-platform-text-box">
                <h3>Quick Support</h3>
                <p>
                 We offer a quick support to all of our great customers with our internal software platform.
                </p>
              </div>
            </div>
          </div>

          <div className="online-platform-box">
            <div className="main-online-content-box">
              <div className="online-platform-img-box">
                <img src={LowCost} alt="" />
              </div>
              <div className="online-platform-text-box">
                <h3>Safe & Security</h3>
                <p>
                  Our Services is very safe and secure. It uses a security system to protect your business.
                </p>
              </div>
            </div>
          </div>

          <div className="online-platform-box">
            <div className="main-online-content-box">
              <div className="online-platform-img-box">
                <img src={LiveSupport} alt="" />
              </div>
              <div className="online-platform-text-box">
                <h3>Live Support</h3>
                <p>
                  Exprience the latest version of our Live Support and communication system with our specialists.
                </p>
              </div>
            </div>
          </div>

          <div className="online-platform-box">
            <div className="main-online-content-box">
              <div className="online-platform-img-box">
                <img src={Security} alt="" />
              </div>
              <div className="online-platform-text-box">
                <h3>Low Costing</h3>
                <p>
                  Transfer money worldwide and deposit income for better transaction with low cost attached.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="online-platform-btns-container">
          <div className="more-about-us-box">
            <Link to="/about_us">More About Us</Link>
          </div>
          <div className="create-account-box">
            <Link to="/register">Create an account</Link>
          </div>
        </div>

      </div>

    </div>
  )
}


export default OurOnlinePlatform
