const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const expressJwt = require('express-jwt');
const _ = require('lodash');
const { OAuth2Client } = require("google-auth-library");
const fetch = require("node-fetch");

// SENDGRID
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


// SENDING EMAIL TO GMAIL WITH SEND GRID
exports.signup = (req, res) => {
    const { name, email, password } = req.body;

    User.findOne({ email }).exec((err, user) => {
        if (user) {
            return res.status(400).json({
                error: "This Email is already exist in our database"
            });
        }

        const token = jwt.sign({ name, email, password },
            process.env.JWT_ACCOUNT_ACTIVATION,
            { expiresIn: '10m' });


        const emailData = {
            to: email,
            from: process.env.EMAIL_FROM,
            subject: "Account Activation Link",
            html: `
              <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
                <h2 style="text-align: center; text-transform: uppercase; color: teal;">Welcome to activating your account.</h2>
                <p>
                  Please click the button below to validate your email.
                </p>

                <a href=${process.env.LIVE_CLIENT_URL}/auth/activate/${token} style="background: teal; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">Activate your account</a>

                <p>
                 If the button doesn't work for any reason, you can also click on the link below to try again:
                </p>
                <div>${process.env.LIVE_CLIENT_URL}</div>
              </div>
              `
        };

        sgMail
            .send(emailData)
            .then(sent => {
                console.log('SIGNUP EMAIL HAVE BEEN SENT: ', sent);
                return res.json({
                    message: `We have just sent an account activation link to this ${email}. Please follow the instruction to activate your account`
                });
            })
            .catch(err => {
                console.log('SIGNUP EMAIL SENT ERROR: ', err);
                return res.json({
                    message: err.message
                });
            });

    });
};


// ACCOUNT ACTIVATION
exports.accountActivation = (req, res) => {
    const { token } = req.body;

    if (token) {
        jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, function(err, decoded) {
            if (err) {
                console.log('JWT VERIFY IN ACCOUNT ACTIVATION ERROR', err);
                return res.status(401).json({
                    error: 'This link has Expired. Please Register Again'
                })
            }

            const { name, email, password } = jwt.decode(token);
            const user = new User({ name, email, password });
            user.save((err, user) => {
                if (err) {
                    console.log('SAVE USER IN ACCOUNT ACTIVATION ERROR', err);
                    return res.status(401).json({
                        error: 'Error savings your credentials. Please Try to register again.'
                    });
                }
                return res.json({
                    message: 'Congrats! Your Registration was successful. Please Login.'
                });
            });

        });
    } else {
        return res.json({
            message: 'Something went wrong. Try again.'
        });
    }
};


// SIGNIN
exports.signin = (req, res) => {
    const { email, password } = req.body;

    // check if user is exist in the Database
    User.findOne({ email }).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "This User does not exist in our database. Please register with a new account."
            });
        }

        // authenticate
        if (!user.authenticate(password)) {
            return res.status(400).json({
                error: "This Email and Password do not match."
            });
        }

        // WE are generating our token to send it to the client
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        const { _id, name, email, role } = user;

        return res.json({
            token,
            user: { _id, name, email, role }
        });
    });
};

// REQUEIRE USERS SIGNIN MIDDLEWARE: IS USER TO VALIDATE THE TOKEN AND MAKE THE DATA
// AVALIABLE IN THE REQUIRE USER.
exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'] // now specifying algorithm property is mandatory
});

// ADMIN MIDDLEWARE
exports.adminMiddleware = (req, res, next) => {
    User.findById({ _id: req.user._id }).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'This user does not exist in our database'
            });
        }

        if (user.role !== 'admin') {
            return res.status(400).json({
                error: 'Only Admin is allowed to access this page. Access denied.'
            });
        }

        req.profile = user;
        next();
    });
};


// FORGET PASSWORD CONTROLLER
exports.forgotPasswordCtrl = (req, res) => {
    const { email } = req.body;

    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User with that email does not exist in our database'
            });
        }

        const token = jwt.sign({ _id: user._id, name: user.name }, process.env.JWT_RESET_PASSWORD, {
            expiresIn: '10m'
        });

        const emailData = {
            from: process.env.EMAIL_FROM,
            to: email,
            subject: `Password Reset link`,
            html: `
              <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">

                <h3 style="text-align: center; text-transform: uppercase; color: teal;">
                  Please click the red button below to reset your password.
                </h3>

                <a href=${process.env.LIVE_CLIENT_URL}/auth/password/reset/${token} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">Reset your password to Login.</a>

                <hr />

                <div>
                    <p>This email may contain sensetive information</p>
                    <a href=${process.env.LIVE_CLIENT_URL} style="background: teal; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">
                    Our Website Page
                    </a>
                </div>
              </div>
            `
        };

        return user.updateOne({ resetPasswordLink: token }, (err, success) => {
            if (err) {
                console.log('RESET PASSWORD LINK ERROR', err);
                return res.status(400).json({
                    error: 'Database connection error on user password forgot request'
                });
            } else {
                sgMail
                    .send(emailData)
                    .then(sent => {
                        return res.json({
                            message: `We have just sent a password reset link to this ${email}. Follow the instruction to activate your account`
                        });
                    })
                    .catch(err => {
                        return res.json({
                            message: err.message
                        });
                    });
            }
        });
    });
};


// RESET PASSWORD CONTROLLER
exports.resetPasswordCtrl = (req, res) => {
    const { resetPasswordLink, newPassword } = req.body;

    if (resetPasswordLink) {
        jwt.verify(resetPasswordLink, process.env.JWT_RESET_PASSWORD, function(err, decoded) {
            if (err) {
                return res.status(400).json({
                    error: 'This link has expired. Please try again'
                });
            }

            User.findOne({ resetPasswordLink }, (err, user) => {
                if (err || !user) {
                    return res.status(400).json({
                        error: 'Something went wrong. Please try again'
                    });
                }

                const updatedFields = {
                    password: newPassword,
                    resetPasswordLink: ''
                };
                user = _.extend(user, updatedFields);
                user.save((err, result) => {
                    if (err) {
                        return res.status(400).json({
                            error: 'Error resetting user password'
                        });
                    }
                    res.json({
                        message: 'Congrats! Your old password has been changed. You can now login with your new password'
                    });
                });

            });
        });
    };
};


// GOOGLE LOGIN
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
exports.googleLogin = (req, res) => {
    const { idToken } = req.body;

    client.verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT_ID }).then(response => {
        const { email_verified, name, email } = response.payload;

        // IF USER IS FOUND OR EXIST, THEM GOOGLE WILL LOGIN THEM INTO OUR APPLICATION
        if (email_verified) {
            User.findOne({ email }).exec((err, user) => {
                if (user) {
                    const token = jwt.sign({ _id: user._id },
                        process.env.JWT_SECRET, { expiresIn: '7d' });
                    const { _id, email, name, role } = user;
                    return res.json({
                        token,
                        user: { _id, email, name, role }
                    });

                    // BUT IF THE USER DOES EXIST OR NOT FOUND IN OUR DB,
                    // THEM WE WILL CREATE THEIR ACCOUNT TO BE ABLE TO LOGIN IN FOR OUR APP
                } else {
                    let password = email + process.env.JWT_SECRET;
                    user = new User({ name, email, password });
                    user.save((err, data) => {
                        if (err) {
                            console.log('GOOGLE LOGIN ERROR ON USER SAVE', err);
                            return res.status(400).json({
                                error: 'User signup failed with google'
                            });
                        }
                        const token = jwt.sign({ _id: data._id },
                            process.env.JWT_SECRET, { expiresIn: '7d' });
                            const { _id, email, name, role } = data;
                            return res.json({
                                token,
                                user: { _id, email, name, role }
                        });
                    });
                }
            });
        } else {
            return res.status(400).json({
                error: 'Google login failed. Try again'
            });
        }
    });
};



// FACEBOOK LOGIN
exports.facebookLogin = (req, res) => {
    // console.log('FACEBOOK LOGIN REQUEST BODY', req.body);
    const { userID, accessToken } = req.body;

    const url = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;

    return (
        fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(response => {
            const { email, name } = response;

            // IF THE USER IS FOUND, THEM FACEBOOK WILL LOGIN THEM INTO OUR APPLICATION
            User.findOne({ email }).exec((err, user) => {
                if (user) {
                    const token = jwt.sign({ _id: user._id },
                        process.env.JWT_SECRET, { expiresIn: '7d' });

                    const { _id, email, name, role } = user;

                    return res.json({
                        token,
                        user: { _id, email, name, role }
                    });

                    // BUT IF THE USER DOES EXIST OR NOT FOUND IN OUR DB,
                    // THEM WE WILL CREATE THEIR ACCOUNT TO BE ABLE TO LOGIN IN FOR OUR APP
                } else {
                    let password = email + process.env.JWT_SECRET;
                    user = new User({ name, email, password });
                    user.save((err, data) => {
                        if (err) {
                            console.log('ERROR FACEBOOK LOGIN ON USER SAVE', err);
                            return res.status(400).json({
                                error: 'User signup failed with facebook'
                            });
                        }
                        const token = jwt.sign({ id: data._id },
                            process.env.JWT_SECRET, {expiresIn: '7d' });
                        const { _id, email, name, role } = data;

                        return res.json({
                            token,
                            user: { _id, email, name, role }
                        });
                    });
                }
            });
        })
        .catch(error => {
            res.json({
                error: 'Facebook login failed. Try later'
            });
        })
    );


};
