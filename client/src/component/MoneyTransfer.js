import React from 'react'


const MoneyTransfer = () => {
  return(
    <section id="money-transfer-container">
      <div className="inner-money-transfer-container">
        <div className="main-money-transfer-box">
          <div className="money-transfer-text-content">
            <h3>Transfer money to clients or business partners</h3>
            <p>
            Business loans from a traditional bank are some of the most sought-after forms of financing options for small businesses because of the safety nets inherently found in traditional banking.
            </p>
            <p>
            Commonly offered by banks, business loans offer a much-needed infusion of cash to help cover most costs, though many small business owners find it hard to be approved. When looking to obtain a business loan from a bank, it's important to keep the following information and tips in mind so you can more quickly and easily get approved.
            </p>
          </div>

          <div className="popup-money-tranfers-container">

            <a href="###" data-toggle="modal" data-target="#exampleModalCenter">
              <i className="fa fa-play"></i>
            </a>

            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header custom-popup-btn-container">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>

                  <div className="modal-body my-custom-popup-model-item-box">
                    <video width="400" muted controls>
                      <source src="banking.mp4" type="video/mp4" />
                      <source src="banking.ogg" type="video/ogg" />
                    </video>
                  </div>

                </div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  )
}


export default MoneyTransfer
