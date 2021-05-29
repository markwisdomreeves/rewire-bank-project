import React from 'react'
import { Link } from "react-router-dom"


const Pricing = () => {
  return(
    <div id="pricing-container">
      <div className="inner-pricing-container">
        <div className="text-contents-container">
          <h3>Listing of our services with affordable packages</h3>
          <p>
           Help agencies to define their new business objectives and then create professional software.
          </p>
        </div>

        <div className="main-pricing-container">
          <div className="pricing-contents-container">

            <div className="pricing-content-items-box">
              <h4>Basic</h4>
              <div className="pricing-items">
                <span className="money-sign">
                 <i className="fa fa-usd" aria-hidden="true"></i>
                 <strong>15</strong>
                </span>
                <span className="per-month">Per Month</span>
              </div>
              <div className="list-items-container">
                <li>
                  <span>
                   Free apps
                  </span>
                  <i className="fa fa-check custom-green-color" aria-hidden="true"></i>
                </li>
                <li>
                  <span>
                   Full access
                  </span>
                  <i className="fa fa-check custom-green-color" aria-hidden="true"></i>
                </li>
                <li>
                  <span>
                   Live preview
                  </span>
                  <i className="fa fa-times custom-red-color" aria-hidden="true"></i>
                </li>
                <li>
                  <span>
                   Online System
                  </span>
                  <i className="fa fa-check custom-green-color" aria-hidden="true"></i>
                </li>
                <li>
                  <span>
                   Support unlimited
                  </span>
                  <i className="fa fa-times custom-red-color" aria-hidden="true"></i>
                </li>
              </div>

              <Link to="####">Buy Now</Link>
            </div>

            <div className="pricing-content-items-box">
              <h4>Standard</h4>
              <div className="pricing-items">
                <span className="money-sign">
                 <i className="fa fa-usd" aria-hidden="true"></i>
                 <strong>80</strong>
                </span>
                <span className="per-month">Per Month</span>
              </div>
              <div className="list-items-container">
                <li>
                  <span>
                   Free apps
                  </span>
                  <i className="fa fa-check custom-green-color" aria-hidden="true"></i>
                </li>
                <li>
                  <span>
                   Full access
                  </span>
                  <i className="fa fa-check custom-green-color" aria-hidden="true"></i>
                </li>
                <li>
                  <span>
                   Live preview
                  </span>
                  <i className="fa fa-times custom-red-color" aria-hidden="true"></i>
                </li>
                <li>
                  <span>
                   Online System
                  </span>
                  <i className="fa fa-check custom-green-color" aria-hidden="true"></i>
                </li>
                <li>
                  <span>
                   Support unlimited
                  </span>
                  <i className="fa fa-check custom-green-color" aria-hidden="true"></i>
                </li>
              </div>

              <Link to="####">Buy Now</Link>
            </div>

            <div className="pricing-content-items-box">
              <h4>Premiun</h4>
              <div className="pricing-items">
                <span className="money-sign">
                 <i className="fa fa-usd" aria-hidden="true"></i>
                 <strong>99</strong>
                </span>
                <span className="per-month">Per Month</span>
              </div>
              <div className="list-items-container">
                <li>
                  <span>
                   Free apps
                  </span>
                  <i className="fa fa-check custom-green-color" aria-hidden="true"></i>
                </li>
                <li>
                  <span>
                   Full access
                  </span>
                  <i className="fa fa-check custom-green-color" aria-hidden="true"></i>
                </li>
                <li>
                  <span>
                   Live preview
                  </span>
                  <i className="fa fa-check custom-green-color" aria-hidden="true"></i>
                </li>
                <li>
                  <span>
                   Online System
                  </span>
                  <i className="fa fa-check custom-green-color" aria-hidden="true"></i>
                </li>
                <li>
                  <span>
                   Support unlimited
                  </span>
                  <i className="fa fa-check custom-green-color" aria-hidden="true"></i>
                </li>
              </div>

              <Link to="####">Buy Now</Link>
            </div>


          </div>
        </div>

      </div>

    </div>
  )
}


export default Pricing
