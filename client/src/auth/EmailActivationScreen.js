import React, { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { REACT_BACKEND_API } from "../config/config";


const EmailActivationScreen = ({ match }) => {
    const [values, setValues] = useState({
        name: "",
        token: "",
        show: true
    });

    useEffect(() => {
        let token = match.params.token;
        let { name } = jwt.decode(token);
        if (token) {
          setValues({ ...values, name, token });
        }
    }, [match.params.token, values]);

    const { name, token } = values;

    const clickSubmit = event => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: `${REACT_BACKEND_API}/api/account-activation`,
            data: { token }
        })
        .then(response => {
            setValues({ ...values, show: false });
            toast.success(response.data.message);
        })
        .catch(error => {
            console.log('ACCOUNT ACTIVATION ERROR', error.response.data.error);
            toast.error(error.response.data.error);
        });
    };

    return (
      <>
      <div id="login-auth-global-top-image-container">
        <section className="global-top-section-container">
          <div className="container global-top-text-container text-white">
            <h1 className="global-h1-text">Activate your account</h1>
          </div>
        </section>
      </div>

      <div id="email-activation-container">
        <ToastContainer />
        <div className="text-center">
          <h1 className="p-2" id="account-activate-header">Hey, {name}, Ready to activate your account?</h1>
          <button className="btn btn-outline-primary" onClick={clickSubmit}>
            Activate Account
          </button>
        </div>
      </div>

      </>
    );
};


export default EmailActivationScreen;
