import React, { useState } from 'react'
import { Link, Redirect } from "react-router-dom"
import axios from "axios";
import { isAuth } from "../helpers/helper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import LoginImg from "../assets/login-img.jpg"
import { REACT_BACKEND_API } from '../config/config';


const RegisterFormScreen = () => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    buttonText: 'Register'
  });

  const [showPassword, setShowPassword] = useState(false)

  const { name, email, password, buttonText } = values;

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = event => {
      event.preventDefault();
      setValues({ ...values, buttonText: 'Processing Registration...' });
      axios({
          method: 'POST',
          url: `${REACT_BACKEND_API}/api/signup`,
          data: { name, email, password }
      })
      .then(response => {
          setValues({
              ...values,
              name: '',
              email: '',
              password: '',
              buttonText: 'Register'
          });
          toast.success(response.data.message);
      })
      .catch(error => {
          setValues({ ...values, buttonText: 'Register' });
          toast.error(error.response.data.error);
      });

  };

  return (
    <>
      <div id="login-auth-global-top-image-container">
        <section className="global-top-section-container">
          <div className="container global-top-text-container text-white">
            <h1 className="global-h1-text">Register your account</h1>
          </div>
        </section>
      </div>

      <div id="register-container" className="global-login-form-screen-container">

        <ToastContainer />

        { isAuth() ? <Redirect to="/" /> : null }

        <div className="container" id="main-custom-form-container">
          <div className="row">
            <div className="global-img-content display-none-small-screen col-xl-6 col-xxl-6 col-lg-6 col-md-6">
              <img src={LoginImg} alt="" />
            </div>

            <div className="main-form-container custom-register-input-style col-xl-6 col-xxl-6 col-lg-6 col-md-6">

              <div class="alert alert-primary d-flex align-items-center" role="alert">
                <div>
                  We will email you an account activation link to activate your account
                </div>
              </div>

              <form>
               <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={handleChange('name')}
                    id="name"
                    autoComplete="off"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleChange('email')}
                    id="email"
                    autoComplete="off"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>

                <div className="form-group show-password-container">
                  <label htmlFor="password">Password</label>
                  <input
                    type={ showPassword ? "text" : "password" }
                    value={password}
                    onChange={handleChange('password')}
                    id="password"
                    autoComplete="off"
                    className="form-control"
                    placeholder="Password"
                  />
                  <small onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? 'Hide' : "Show"}
                  </small>
                </div>

                <button type="submit" className="btn-style-container custom-register-input-style" onClick={clickSubmit}>
                  { buttonText }
                </button>

              </form>

              <div id="custom-form-group-box" className="custom-register-input-style">
                <div className="login-route-msg">
                  <h5>have an account? {" "} <Link to="/login">Login</Link></h5>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </>
  )
}


export default RegisterFormScreen
