import React, { useState } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import LoginImg from "../assets/login-img.jpg"
import { REACT_BACKEND_API } from '../config/config';


const ForgotPasswordScreen = () => {
  const [values, setValues] = useState({
    email: '',
    buttonText: 'Reset password'
  });

  const { email, buttonText } = values;

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, buttonText: 'Resetting Password...' });
    axios({
        method: 'PUT',
        url: `${REACT_BACKEND_API}/api/forgot-password`,
        data: { email }
    })
      .then(response => {
          console.log('FORGOT PASSWORD SUCCESS', response);
          toast.success(response.data.message);
          setValues({ ...values, buttonText: 'Password is reset' });
      })
      .catch(error => {
          console.log('FORGOT PASSWORD ERROR', error.response.data);
          toast.error(error.response.data.error);
          setValues({ ...values, buttonText: 'Reset Password' });
      });
  };


  return (
    <>
    <div id="login-auth-global-top-image-container">
      <section className="global-top-section-container">
        <div className="container global-top-text-container text-white">
          <h1 className="global-h1-text">Forgot Password?</h1>
        </div>
      </section>
    </div>

    <div id="forgot-password-container" className="global-user-form-screen-container">

    <ToastContainer />

      <div className="container" id="main-custom-form-container">
        <div className="row">
          <div className="global-img-content display-none-small-screen col-xl-6 col-xxl-6 col-lg-6 col-md-6">
            <img src={LoginImg} alt="" />
          </div>

          <div className="main-form-container custom-register-input-style col-xl-6 col-xxl-6 col-lg-6 col-md-6">

            <div class="alert alert-primary d-flex align-items-center" role="alert">
              <div>
                We will email you a password reset link to reset your password
              </div>
            </div>

            <form>
              <label htmlFor="email">Email address</label>
              <input
                onChange={handleChange('email')}
                value={email}
                type="email"
                id="email"
                autoComplete="off"
                className="form-control"
                placeholder="Enter your Email"
              />
              <div className="forgot-password-box col-xs-12 col-sm-12 col-md-12">
                <p>
                  Remember your account?
                  <Link style={{paddingLeft: "5px"}} to="/login">Login</Link>
                </p>
              </div>
              <button
                className="btn-style-container"
                onClick={clickSubmit}
              >
                {buttonText}
              </button>
            </form>

          </div>

        </div>
      </div>
    </div>
    </>
  )
}


export default ForgotPasswordScreen
