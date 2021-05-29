import React from 'react'
import { Link } from 'react-router-dom'
import GrowBusiness from "../assets/grow-your-business.svg"


const GrowYourBusiness = () => {
  return (
    <section id="grow-business-container">
      <div className="inner-grow-container">
        <div className="main-grow-content-container">
          <div className="inner-grow-text-content">
            <div className="grow-img-content-box">
              <img src={GrowBusiness} alt="" />
            </div>
            <div className="grow-text-content-box">
              <h3>Easily grow your business and save more money.</h3>
              <p>
              Working to improve your business culture can be the best investment of time and money. A happy employee is a productive employee. And small changes can reap big rewards.
              </p>
                <ul>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Consider remote working
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Use interactive calendars
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Use tech to save on bills
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Get the best deal possible
                  </li>
                </ul>
                <div className="grow-business-btn">
                  <Link to="/about_us">Learn More</Link>
                </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}


export default GrowYourBusiness
