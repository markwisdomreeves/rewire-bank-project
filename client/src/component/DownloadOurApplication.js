import React from 'react'
import { Link } from 'react-router-dom'
import DownloadApps from "../assets/downloadApps.svg"



const DownloadOurApplication = () => {
  return (
    <section id="download-app-container">
      <div className="inner-download-app-container">
        <div className="main-download-app-content-container">
          <div className="inner-download-app-text-content">
            <div className="download-app-img-content-box">
              <img src={DownloadApps} alt="" />
            </div>
            <div className="download-app-text-content-box">
              <h3>Download our App on your device for quicker transaction.</h3>
              <p>We want you to enjoy the convenience of our Banking app without the worry. So we continuously take steps to protect your money. Our priority is keeping you safe and secure online.
              </p>
              <div className="download-app-btn">
                <Link to="####">
                  <i className="fa fa-play"></i>
                  <span>Play store</span>
                </Link>
                <Link to="####">
                  <i className="fa fa-apple" aria-hidden="true"></i>
                  <span>App store</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}


export default DownloadOurApplication
