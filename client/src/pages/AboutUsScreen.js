import React, { useEffect, useRef } from 'react'
import Footer from '../component/Footer';
import OpenNewBankAccount from '../component/OpenNewBankAccount'
import OurOnlinePlatform from '../component/OurOnlinePlatform'
import MoneyTransfer from "../component/MoneyTransfer"
import OurTeam from "../component/OurTeam"
import { Link } from 'react-router-dom';


function AboutUsScreen () {

    const globalRef = useRef(null)

    // Dymically scroll element at the top when a user visits the page
    const globalScroll = () => globalRef.current.scrollIntoView(0)

    useEffect(() => {
      globalScroll()
    }, [])

    return (
      <>
        <div id="global-top-image-container" ref={globalRef}>
          <section className="global-top-section-container">
            <div className="container global-top-text-container text-white">
              <h1 className="global-h1-text">About Us</h1>
                <div className="global-header-title-container">
                  <Link to="/">
                    <i className="fa fa-home"></i>
                    Home
                  </Link>
                  <span>
                    <i className="fa fa-angle-right"></i>
                    About Us
                  </span>
                </div>
            </div>
          </section>
        </div>

        <section id="about-us-container">
          <OurOnlinePlatform />
          <MoneyTransfer />
          <OurTeam />
          <OpenNewBankAccount />
          <Footer />
        </section>
      </>
  )
}


export default AboutUsScreen
