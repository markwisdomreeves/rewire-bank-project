import React from "react";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import axios from "axios";
import { REACT_BACKEND_API, REACT_APP_FACEBOOK_APP_ID } from '../config/config'


const Facebook = ({ informParent = f => f }) => {
    const responseFacebook = response => {
        axios({
            method: 'POST',
            url: `${REACT_BACKEND_API}/api/facebook-login`,
            data: { userID: response.userID, accessToken: response.accessToken }
        })
        .then(response => {
            informParent(response);
        })
        .catch(error => {
            console.log('FACEBOOK SIGNIN ERROR', error.response);
        });
    };

    return (
        <FacebookLogin
            appId={`${REACT_APP_FACEBOOK_APP_ID}`}
            autoLoad={false}
            callback={responseFacebook}
            render={renderProps => (
                <button
                    onClick={renderProps.onClick}
                    className="btn btn-primary btn-block"
                >
                    <i className="fa fa-facebook pr-2"></i> Login with Facebook
                </button>
            )}
        />
    );
};


export default Facebook;
