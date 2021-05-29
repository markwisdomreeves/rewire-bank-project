import React, { useState, useEffect } from "react";
import { isAuth, getCookie, signout, updateUser } from "../helpers/helper";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { REACT_BACKEND_API } from "../config/config";


const PrivateProfileScreen = ({ history }) => {
    const [values, setValues] = useState({
        role: '',
        name: '',
        email: '',
        password: '',
        buttonText: 'Submit'
    });

    const [showPassword, setShowPassword] = useState(false)

    const token = getCookie('token');

    useEffect(() => {
        loadProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    function loadProfile() {
      axios({
            method: 'GET',
            url: `${REACT_BACKEND_API}/api/user/${isAuth()._id}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            const { role, name, email } = response.data;
            setValues({ ...values, role, name, email });
        })
        .catch(error => {
            console.log('PRIVATE PROFILE ERROR', error.response.data.error);
            if (error.response.status === 401) {
                signout(() => {
                    history.push('/')
                });
            }
        });

    }

    const { role, name, email, password, buttonText } = values;

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, buttonText: 'Submitting' });
        axios({
            method: 'PUT',
            url: `${REACT_BACKEND_API}/api/user/update`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: { name, password },
        })
        .then(response => {
            console.log('PRIVATE PROFILE UPDATE SUCCESS', response);

            updateUser(response, () => {
                setValues({ ...values,  buttonText: 'Submitted' });
                toast.success('Profile updated successfully');
            });
        })
        .catch(error => {
            console.log('PRIVATE PROFILE UPDATE ERROR', error.response.data.error);
            setValues({ ...values, buttonText: 'Submit' });
            toast.error(error.response.data.error);
        });
    };


    return (
      <>
        <div id="login-auth-global-top-image-container">
            <section className="global-top-section-container">
                <div className="container global-top-text-container text-white">
                    <h1 className="global-h1-text">Profile Dashboard</h1>
                </div>
            </section>
        </div>

        <div className="col-md-6 offset-md-3 privateProfile">
            <ToastContainer />
            <h1 className="lead text-center mb-3 user-profile-header">Update Private Profile</h1>
            <form>
            <div className="private-profile-form-container">
                <div className="form-group">
                    <label className="text-muted">Role</label>
                    <input
                        type="text"
                        defaultValue={role}
                        className="form-control"
                        placeholder="Enter Your Role"
                        disabled
                    />
                </div>
                <div className="form-group">
                    <label className="text-muted">Name</label>
                    <input
                        type="text"
                        value={name}
                        className="form-control"
                        onChange={handleChange('name')}
                        placeholder="Enter Your Name"
                    />
                </div>
                <div className="form-group">
                    <label className="text-muted">Email</label>
                    <input
                        type="email"
                        defaultValue={email}
                        className="form-control"
                        placeholder="Enter Your Email"
                        disabled
                    />
                </div>
                <div className="form-group show-password-container">
                    <label className="text-muted">Password</label>
                    <input
                        type={ showPassword ? "text" : "password" }
                        value={password}
                        onChange={handleChange('password')}
                        className="form-control"
                        placeholder="Enter Your Password"
                    />
                    <small onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? 'Hide' : "Show"}
                    </small>
                </div>

                <div>
                    <button className="btn btn-info btn-block" onClick={clickSubmit}>
                        { buttonText }
                    </button>
                </div>

            </div>
            </form>
        </div>
      </>
    );

};


export default PrivateProfileScreen;
