import React, { useState } from 'react'
import { Link, Redirect } from "react-router-dom"
import { authenticate, isAuth } from "../helpers/helper"
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import Google from "./Google"
import Facebook from "./Facebook"
import LoginImg from "../assets/login-img.jpg"
import { REACT_BACKEND_API } from '../config/config';


const LoginFormScreen = ({ history }) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    buttonText: 'Login'
  });

  const [showPassword, setShowPassword] = useState(false)

  const { email, password, buttonText } = values;

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  };

  function refreshPage() {
    window.location.reload(false);
  }

  const informParent = response => {
    authenticate(response, () => {
      isAuth() && isAuth().role === 'admin' ? history.push('/admin') : history.push('/private')

      refreshPage()
    });
  }


  const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, buttonText: 'Processing Login...' })
    axios({
      method: 'POST',
      url: `${REACT_BACKEND_API}/api/signin`,
      data: { email, password }
    })
    .then(response => {
        authenticate(response, () => {
            setValues({
                ...values,
                name: '',
                email: '',
                password: '',
                buttonText: 'Login'
            });
            isAuth() && isAuth().role === 'admin' ? history.push('/admin') : history.push('/private')

            refreshPage()
        });
    })
    .catch(error => {
      setValues({ ...values, buttonText: 'Login' })
      toast.error(error.response.data.error);
    });
  };


  return (
    <>
      <div id="login-auth-global-top-image-container">
        <section className="global-top-section-container">
          <div className="container global-top-text-container text-white">
            <h1 className="global-h1-text">Login to your account</h1>
          </div>
        </section>
      </div>

      <div id="login-container" className="global-user-form-screen-container">

        <ToastContainer />

        <div className="main-demo-account-box">
          <h3>LOGIN DEMO</h3>
          <span className="user">user@gmail.com</span>
          <span className="user">user12345</span>
          <span className="admin">admin@gmail.com</span>
          <span className="admin">admin12345</span>
        </div>

        { isAuth() ? <Redirect to="/" /> : null }

        <div className="container" id="main-custom-form-container">
          <div className="row">

            <div className="global-img-content display-none-small-screen col-xl-6 col-xxl-6 col-lg-6 col-md-6">
              <img src={LoginImg} alt="" />
            </div>

            <div className="main-form-container custom-register-input-style col-xl-6 col-xxl-6 col-lg-6 col-md-6">
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
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

                <div className="forgot-password-box col-xs-12 col-sm-12 col-md-12">
                  <Link to="/auth/forgot_password">Forgot Password?</Link>
                </div>

                <button type="submit" className="btn-style-container" onClick={clickSubmit}>
                  { buttonText }
                </button>

              </form>

              <div id="custom-form-group-box">
                <div className="hr-line">Or Login With</div>
                  <Google informParent={informParent} />
                  <Facebook informParent={informParent} />
                <div className="login-route-msg">
                  <h5>Don't have an account? {" "} <Link to="/register">Register</Link></h5>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default LoginFormScreen
