import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Footer from '../component/Footer';
import OpenNewBankAccount from "../component/OpenNewBankAccount"
import { REACT_BACKEND_API } from '../config/config';


function ContactScreen () {

  const globalRef = useRef(null)
  const globalScroll = () => globalRef.current.scrollIntoView(0)

    const [values, setValues] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
      buttonText: 'Submit',
    })

    const { name, email, subject, message, buttonText} = values

    useEffect(() => {
      globalScroll();
    }, [])

    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    }

    const submitContact = async event => {
      event.preventDefault();
      setValues({ ...values, buttonText: 'Submitting Contact' });
      try {
        const res = await axios.post(`${REACT_BACKEND_API}/api/contact`, {
          name,
          email,
          subject,
          message
        })
        setValues({
          ...values,
          name: '',
          email: '',
          subject: '',
          message: '',
          buttonText: 'Contact Submitted',
          res
        })
        toast.success(res.data.message);
      } catch (error) {
        setValues({ ...values, buttonText: 'Submit' });
        toast.error(error.response.data.error);
      }
    }


    return (
      <>
        <div id="global-top-image-container" ref={globalRef}>
          <section className="global-top-section-container">
            <div className="container global-top-text-container text-white">
              <h1 className="global-h1-text">Contact Us</h1>
                <div className="global-header-title-container">
                  <Link to="/">
                    <i className="fa fa-home"></i>
                    Home
                  </Link>
                  <span>
                    <i className="fa fa-angle-right"></i>
                    Contact Us
                  </span>
                </div>
            </div>
          </section>
        </div>


        <section id="contact-screen-container">

          <ToastContainer />

          <div className="inner-contact-info-box">
            <div className="inner-contact-box">

              <div className="main-icon-info-container">
                <div className="contact-icon-box">
                  <div className="single-contact-icon">
                    <i className="fa fa-mobile" aria-hidden="true"></i>
                    <p>Mobile: +39 77 357 3878</p>
                    <span>Monday-Friday (9am-6am)</span>
                  </div>
                </div>
              </div>

              <div className="main-icon-info-container">
                <div className="contact-icon-box">
                  <div className="single-contact-icon">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                    <p>Email: wisdom@gmail.com</p>
                    <span>Web: www.wisdom.com</span>
                  </div>
                </div>
              </div>

              <div className="main-icon-info-container">
                <div className="contact-icon-box">
                  <div className="single-contact-icon">
                   <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <p>Location: Viale Bovio, Teramo</p>
                    <span>City: Teramo</span>
                  </div>
                </div>
              </div>

            </div>
          </div>


          <div className="main-form-input-container">

            <div className="main-map-container">
              {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
              <iframe id="custom-map-style" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6146976.806107893!2d8.223663855457053!3d41.211886348932815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fe82448dd203%3A0xe22cf55c24635e6f!2sItaly!5e0!3m2!1sen!2sit!4v1618434818896!5m2!1sen!2sit" allowFullScreen="" loading="lazy"></iframe>
            </div>


            <div className="main-form-container">
              <div className="contact-form-box">
                <form>
                  <input
                    type="text"
                    value={name}
                    onChange={handleChange('name')}
                    id="name"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={handleChange('email')}
                    id="email_id"
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    value={subject}
                    onChange={handleChange('subject')}
                    id="subject"
                    placeholder="Subject"
                  />
                  <textarea
                    type="text"
                    value={message}
                    onChange={handleChange('message')}
                    id="message"
                    rows="4"
                    cols="50"
                    placeholder="Message"
                  />
                  <button type="submit" id="submit-btn" onClick={submitContact}>
                    {buttonText}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </section>


        <OpenNewBankAccount />

        <Footer />

      </>
  )
}


export default ContactScreen
