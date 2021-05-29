import React from 'react'
import TeamNumberOne from "../assets/team-member-1.jpg"
import TeamNumberTwo from "../assets/team-member-2.jpg"
import TeamNumberThree from "../assets/team-member-3.jpg"



const OurTeam = () => {
  return(
    <div id="our-team-container">
      <div className="inner-team-container">
        <div className="main-team-content-box">
          <div className="inner-team-content-box">
            <div className="our-team-headering-box">
              <h3>
                Our Expert team member are here to guide you.
              </h3>
              <p>
              Help agencies to define their new business objectives and then create professional software.
              </p>
            </div>
            <div className="our-team-items-box">

              <div className="content-box">
                <img src={TeamNumberOne} alt="" />
                <h4>Mark Reeves</h4>
                <h6>Co-Founder</h6>
                <div className="social-icons-box">
                  <a href="###">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="###">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="###">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>

              <div className="content-box">
                <img src={TeamNumberTwo} alt="" />
                <h4>Thomas David</h4>
                <h6>Manager</h6>
                <div className="social-icons-box">
                  <a href="###">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="###">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="###">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>

              <div className="content-box">
                <img src={TeamNumberThree} alt="" />
                <h4>Williams Jack</h4>
                <h6>Finance</h6>
                <div className="social-icons-box">
                  <a href="###">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="###">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="###">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  )
}


export default OurTeam
