import React from 'react'
import OnlinePayment from "../assets/online-payment.svg"
import BankDeposit from "../assets/bank-deposit.svg"
import OnlineShopping from "../assets/Online-shopping.svg"
import MoneyTransfer from "../assets/money-transfer.svg"


const OnelineServices = () => {
  return (
    <section id="main-services-container">
      <div className="inner-services-container">

        <div className="services-title-heading-box">
          <h1>Rewire Banking Services Worldwide.</h1>
          <p>Help agencies to define their new business objectives and then create professional software.</p>
        </div>

        <div className="services-content-container">
          <div className="services-inner-content-box">
            <div className="services-content-box">
              <div className="services-content-img-box">
                <img src={BankDeposit} alt="" />
              </div>
              <div className="services-content-text-box">
                <h4>Bank Deposit</h4>
              </div>
            </div>
          </div>

          <div className="services-inner-content-box">
            <div className="services-content-box">
              <div className="services-content-img-box">
                <img src={OnlinePayment} alt="" />
              </div>
              <div className="services-content-text-box">
                <h4>Online Payment</h4>
              </div>
            </div>
          </div>

          <div className="services-inner-content-box">
            <div className="services-content-box">
              <div className="services-content-img-box">
                <img src={MoneyTransfer} alt="" />
              </div>
              <div className="services-content-text-box">
                <h4>Money Transfer</h4>
              </div>
            </div>
          </div>

          <div className="services-inner-content-box">
            <div className="services-content-box">
              <div className="services-content-img-box">
                <img src={OnlineShopping} alt="" />
              </div>
              <div className="services-content-text-box">
                <h4>Online Shopping</h4>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}


export default OnelineServices
