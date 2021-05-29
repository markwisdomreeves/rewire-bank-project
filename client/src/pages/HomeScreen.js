import React, { useEffect, useRef } from 'react'
import Hero from '../component/Hero'
import Footer from "../component/Footer"
import CreateBankAccount from '../component/CreateBankAccount'
import OurOnlinePlatform from '../component/OurOnlinePlatform'
import OpenNewBankAccount from "../component/OpenNewBankAccount"
import OnelineServices from '../component/OnelineServices'
import SetupYourBusiness from '../component/SetupYourBusiness'
import GrowYourBusiness from '../component/GrowYourBusiness'
import DownloadOurApplication from '../component/DownloadOurApplication'


function HomeScreen() {

  const globalRef = useRef(null)

  // Dymically scroll element at the top when a user visits the page
  const globalScroll = () => globalRef.current.scrollIntoView(0)

  useEffect(() => {
    globalScroll()
  }, [])


  return (
    <>
      <header id="main-header-container" ref={globalRef}>
        <Hero />
      </header>

      <div id="home-page-container">
        <OurOnlinePlatform />
        <OnelineServices />
        <CreateBankAccount/>
        <SetupYourBusiness />
        <GrowYourBusiness />
        <DownloadOurApplication />
        <OpenNewBankAccount />
      </div>


      <Footer />
    </>
  )
}

export default HomeScreen

