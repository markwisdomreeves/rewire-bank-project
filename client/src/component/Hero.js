import { Component } from 'react';
import { Link } from 'react-router-dom';
import TransactionForm from './TransactionForm';
import HeroModal from "./HeroModal";


class Hero extends Component{
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    }
  }

  openModal() {
    this.setState({ modal: true });
  }

  closeModal() {
    this.setState({ modal: false });
  }

  handleClose() {
    this.closeModal()
  }

  render() {
    return (
      <div id="hero-container">

        <div className="container main-hero-custom-container">
          <div className="row">

            <div className="col-md-6 col-sm-12 col-sx-12 custom-hero-container-1">
              <div className="inner-text-items-container">
                <h2>Send your money in 3 secure steps</h2>
                <p>
                  We provide fast and easy ways to send and receive money.
                </p>

                <div className="btns-container">
                  <div className="btn-1 video-container">
                   <Link to="/register" className="get-started-btn btn-1">Get Started</Link>

                    <Link to="####" className="watch-video" onClick={e => this.openModal(e)}>
                      <i className="fa fa-play"></i>
                      <span>watch video</span>
                    </Link>

                  </div>

                  <div className="transact-container">
                    <HeroModal show={this.state.modal} handleClose={e => this.closeModal(e)}>
                      <div className="modal-body hero-modal-container">
                        <video width="400" muted controls>
                          <source src="banking.mp4" type="video/mp4" />
                          <source src="banking.ogg" type="video/ogg" />
                        </video>
                      </div>
                    </HeroModal>
                  </div>

                </div>

              </div>
            </div>

            <div className="col-md-6 col-sm-12 col-xs-12 custom-hero-container-2">
              <TransactionForm />
            </div>

          </div>
        </div>

      </div>
    )
  }
}


export default Hero;
