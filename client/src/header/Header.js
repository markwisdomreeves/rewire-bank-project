import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { GiReceiveMoney } from "react-icons/gi"
import { MdClose, MdMenu } from 'react-icons/md'
import { isAuth, signout } from "../helpers/helper"


const Header = () => {
  const history = useHistory()
  const [header, setHeader] = useState(false)
  const [showNav, setShowNav] = useState(false);


  useEffect(() => {
    changebackgroundColor()
    setHeader()
    setShowNav()
  }, [])


  const changebackgroundColor = () => {
    if (window.scrollY >= 80) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  window.addEventListener('scroll',  changebackgroundColor)


  return (
    <>
      <nav className={header ? "navbar-container active" : "navbar-container"}>
        <div className="logo-container">
          <Link to="/">
            <GiReceiveMoney id="logo-icon" />
            Rewire Bank
          </Link>
        </div>
        <div
          className="open-mobile-menu"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdMenu id="menu-open-icon" />
        </div>

        <ul className={!showNav ? 'navbar-link-items hide-navbar-link-item' : 'navbar-link-items'}>
          <div
            className="close-navbar-menu"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
            >
            <MdClose id="menu-close-icon" />
          </div>

          <li>
            <Link
              to="/"
              onClick={() => setShowNav(!showNav)}
              onKeyDown={() => setShowNav(!showNav)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              onClick={() => setShowNav(!showNav)}
              onKeyDown={() => setShowNav(!showNav)}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              onClick={() => setShowNav(!showNav)}
              onKeyDown={() => setShowNav(!showNav)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/about_us"
              onClick={() => setShowNav(!showNav)}
              onKeyDown={() => setShowNav(!showNav)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact_us"
              onClick={() => setShowNav(!showNav)}
              onKeyDown={() => setShowNav(!showNav)}
            >
              Contact
            </Link>
          </li>

          { !isAuth() &&  (
            <li id="login-account">
              <Link
                to="/login"
                onClick={() => setShowNav(!showNav)}
                onKeyDown={() => setShowNav(!showNav)}
              >
                Login
              </Link>
            </li>
          )}

          {isAuth() && isAuth().role === 'admin' && (
            <li>
              <Link
                onClick={() => setShowNav(!showNav)}
                onKeyDown={() => setShowNav(!showNav)}
                to="/admin"
              >
                Profile
              </Link>
            </li>
          )}

          {isAuth() && isAuth().role === 'user' && (
              <li>
                <Link
                  to="/private"
                  onClick={() => setShowNav(!showNav)}
                  onKeyDown={() => setShowNav(!showNav)}
                >
                  Profile
                </Link>
              </li>
          )}

          {isAuth() && (
            <li id="logout-btn">
              <span
                onKeyDown={() => setShowNav(!showNav)}
                onClick={() => {
                  signout(() => {history.push('/')});
                  setShowNav(!showNav);
                }}
              >
                Logout
              </span>
            </li>
          )}
        </ul>
      </nav>
    </>
  )
}


export default Header;
