import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { REACT_BACKEND_API, REACT_APP_GOOGLE_CLIENT_ID } from '../config/config'


const Google = ({ informParent = f => f }) => {
    const responseGoogle = response => {
        console.log(response.tokenId);
        axios({
            method: 'POST',
            url: `${REACT_BACKEND_API}/api/google-login`,
            data: { idToken: response.tokenId }
        })
        .then(response => {
          informParent(response);
        })
        .catch(error => {
            console.log('GOOGLE SIGNIN ERROR', error.response);
        });
    };

    return (
        <GoogleLogin
            clientId={`${REACT_APP_GOOGLE_CLIENT_ID}`}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            render={renderProps => (
                <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="btn btn-danger btn-block"
                >
                    <i className="fa fa-google pr-2"></i>Login with Google
                </button>
            )}
            cookiePolicy={'single_host_origin'}
        />
    );
};


export default Google;
