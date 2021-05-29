import React from 'react'
import { Link } from 'react-router-dom'


const OpenNewBankAccount = () => {
  return (
    <div id="open-new-account-container">

      <div className="inner-open-new-account-box">
        <div className="inner-open-new-account-content-box">
          <div className="open-new-account-header-text">
            <p>Our worldwide integration partner work with long time relationship</p>
          </div>
          <div className="open-new-account-box">
            <Link to="/register">Open new account</Link>
          </div>
        </div>

      </div>

    </div>
  )
}


export default OpenNewBankAccount
