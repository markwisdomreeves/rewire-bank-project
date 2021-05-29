import React, { useState, useEffect } from 'react'
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import LoginImg from "../assets/login-img.jpg"
import { REACT_BACKEND_API } from '../config/config';


const ResetPasswordScreen = ({ match }) => {

  const [values, setValues] = useState({
    name: '',
    token: '',
    newPassword: '',
    buttonText: 'Reset password'
  });

  useEffect(() => {
      let token = match.params.token;
      let { name } = jwt.decode(token);
      if (token) {
        setValues({ ...values, name, token });
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { name, token, newPassword, buttonText } = values;

  const [showPassword, setShowPassword] = useState(false)

  const handleChange = event => {
      setValues({ ...values, newPassword: event.target.value });
  };

  const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, buttonText: 'Resetting Password...' });

    axios({
      method: 'PUT',
      url: `${REACT_BACKEND_API}/api/reset-password`,
      data: { newPassword, resetPasswordLink: token }
    })
      .then(response => {
        console.log('RESET PASSWORD SUCCESS', response);
        toast.success(response.data.message);
        setValues({ ...values, buttonText: 'Password is Reset' });
      })
      .catch(error => {
        console.log('RESET PASSWORD ERROR', error.response.data);
        toast.error(error.response.data.error);
        setValues({ ...values, buttonText: 'Reset password' });
      });
  };


  return (
    <>
      <div id="login-auth-global-top-image-container">
        <section className="global-top-section-container">
          <div className="container global-top-text-container text-white">
            <h1 className="global-h1-text">Reset your Password</h1>
          </div>
        </section>
      </div>

      <div id="reset-password-container" className="global-user-form-screen-container">

        <ToastContainer />

        <h1 className="p-5 text-center mb-2" id="reset-password-heading">Hey {name}, Type your new password</h1>

        <div className="container" id="main-custom-form-container">
          <div className="row">
            <div className="global-img-content display-none-small-screen col-xl-6 col-xxl-6 col-lg-6 col-md-6">
              <img src={LoginImg} alt="" />
            </div>

            <div className="main-form-container custom-register-input-style col-xl-6 col-xxl-6 col-lg-6 col-md-6">
              <form>
                <div className="form-group show-password-container">
                  <label htmlFor="password">Enter New Password</label>
                  <input
                    onChange={handleChange}
                    value={newPassword}
                    type={ showPassword ? "text" : "password" }
                    id="password"
                    autoComplete="off"
                    className="form-control"
                    placeholder="Type new Password"
                  />
                  <small onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? 'Hide' : "Show"}
                  </small>
                </div>

                <button type="submit" className="btn-style-container" onClick={clickSubmit}>
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


export default ResetPasswordScreen
