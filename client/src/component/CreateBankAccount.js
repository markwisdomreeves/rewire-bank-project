import React from 'react'
import CreateAccount from "../assets/account-account.svg"
import Bank from "../assets/bank.svg"
import SendMoney from "../assets/send-money.svg"


const CreateBankAccount= () => {
  return (
    <div id="bank-account-container">

      <div className="inner-bank-account-box">
        <div className="main-inner-bank-content-box">

          <div className="bank-account-box">
            <div className="bank-account-img-box">
              <img src={CreateAccount} alt="" />
            </div>
            <div className="bank-account-text-box">
              <div className="custom-bank-heading-box">
                <span>01.</span>
                <h3>Create an account</h3>
              </div>
              <p>
              Create a new account. If you have recently lost your bank account, please sign up.
              </p>
            </div>
          </div>

          <div className="bank-account-box" id="custom-account-box">
            <div className="bank-account-img-box">
            <img src={Bank} alt="" />
            </div>
            <div className="bank-account-text-box">
              <div className="custom-bank-heading-box">
                <span>02.</span>
                <h3>Attach bank account</h3>
              </div>
              <p>
              After you have created your bank account, attached your deposit slip to it.
              </p>
            </div>
          </div>

          <div className="bank-account-box">
            <div className="bank-account-img-box">
              <img src={SendMoney} alt="" />
            </div>
            <div className="bank-account-text-box">
              <div className="custom-bank-heading-box">
                <span>03.</span>
                <h3>Send money</h3>
              </div>
              <p>
              Finally, you can now send your money to you friends and family members anywhere.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}


export default CreateBankAccount
