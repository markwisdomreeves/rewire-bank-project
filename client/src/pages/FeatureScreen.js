import React, { useEffect, useRef } from 'react'
import GrowYourBusiness from "../component/GrowYourBusiness"
import OpenNewBankAccount from '../component/OpenNewBankAccount';
import Pricing from '../component/Pricing';
import SetupYourBusiness from '../component/SetupYourBusiness';
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';


function BlogDetailScreen () {
    const globalRef = useRef(null)
    const globalScroll = () => globalRef.current.scrollIntoView(0)

    useEffect(() => {
      globalScroll()
    }, [])

    return (
      <>
        <div id="global-top-image-container" ref={globalRef}>
          <section className="global-top-section-container">
            <div className="container global-top-text-container text-white">
              <h1 className="global-h1-text">Features</h1>
                <div className="global-header-title-container">
                  <Link to="/">
                    <i className="fa fa-home"></i>
                    Home
                  </Link>
                  <span>
                    <i className="fa fa-angle-right"></i>
                    Features
                  </span>
                </div>
            </div>
          </section>
        </div>

        <section id="feature-screen-container">
          <GrowYourBusiness />
          <SetupYourBusiness />
          <Pricing />
          <OpenNewBankAccount />
          <Footer />
        </section>

      </>
  )
}


export default BlogDetailScreen
