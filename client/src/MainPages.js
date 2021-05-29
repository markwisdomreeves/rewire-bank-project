import React from "react"
import { Route, Switch } from "react-router-dom"

import HomeScreen from "./pages/HomeScreen"
import AboutUsScreen from "./pages/AboutUsScreen"
import FeatureScreen from "./pages/FeatureScreen"
import ContactScreen from "./pages/ContactScreen"
import BlogScreen from "./pages/BlogScreen"
import BlogDetailScreen from "./pages/BlogDetailScreen"
import PageNotFoundScreen from "./pages/PageNotFoundScreen"

import LoginFormScreen from "./auth/LoginFormScreen"
import RegisterFormScreen from "./auth/RegisterFormScreen"

import ForgotPasswordScreen from "./auth/ForgotPasswordScreen"
import ResetPasswordScreen from "./auth/ResetPasswordScreen"
import EmailActivationScreen from "./auth/EmailActivationScreen"

import AdminProfileScreen from "./core/AdminProfileScreen"
import PrivateProfileScreen from "./core/PrivateProfileScreen"

import AdminRoute from "./auth/AdminRoute"
import PrivateRoute from "./auth/PrivateRoute"


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/about_us" component={AboutUsScreen} />
        <Route exact path="/features" component={FeatureScreen} />
        <Route exact path="/contact_us" component={ContactScreen} />
        <Route exact path="/blog" component={BlogScreen} />
        <Route exact path="/blog/:id" component={BlogDetailScreen} />
        <Route exact path="/login" component={LoginFormScreen} />
        <Route exact path="/register" component={RegisterFormScreen} />

        <AdminRoute path="/admin" exact component={AdminProfileScreen} />
        <PrivateRoute path="/private" exact component={PrivateProfileScreen} />

        <Route exact path="/auth/forgot_password" component={ForgotPasswordScreen} />
        <Route exact path="/auth/activate/:token" component={EmailActivationScreen} />
        <Route exact path="/auth/password/reset/:token" component={ResetPasswordScreen} />

        <Route path="*" component={PageNotFoundScreen} />
      </Switch>
    </>
  );
}


export default App;
