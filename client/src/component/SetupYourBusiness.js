import React from 'react'
import { Link } from 'react-router-dom'
import MoveMoney from "../assets/move-money.svg"


const SetupYourBusiness = () => {
  return (
    <section id="setup-business-container">
      <div className="inner-setup-container">
        <div className="main-setup-content-container">
          <div className="inner-setup-text-content">
            <div className="setup-img-content-box">
              <img src={MoveMoney} alt="" />
            </div>
            <div className="setup-text-content-box">
              <h3>Move money worldwide to startup your business.</h3>
              <p>
              Business loans from a traditional bank are some of the most sought-after forms of financing options for small businesses because of the safety nets inherently found in traditional banking.
              </p>
              <p>
              Backed by the federal government, banks, and most of their products, come with assurances that many nontraditional and online banking lessors don't.
              </p>
              <div className="setup-business-btn">
                <Link to="/register">Get Started Now</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}


export default SetupYourBusiness
