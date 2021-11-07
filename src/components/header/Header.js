import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../images/rollingDailyIcon.png"
import '../header/header.css'

function Header() {
  return (
    <>
      <div className="header-core-container">
        <div className="header-social-icons">
          <a href="https://facebook.com" target="_blank"><i className="social-icon bi bi-facebook"> Facebook</i></a>
          <a href="https://instagram.com" target="_blank"><i className="social-icon bi bi-instagram"> Instagram</i></a>
          <a href="https://youtube.com" target="_blank"><i className="social-icon bi bi-youtube"> Youtube</i></a>
        </div>
        <div className="header-logo-and-buttons">
          <div className="logo-container">
            <img className="header-logo-icon" src={logo} alt="" />
            <span className="logo">ROLLING DAILY</span>
          </div>
          <div className="buttons-container">
            <Link to="/login"><div className="login-button">Login</div></Link>
            <Link to="/register"><div className="register-button">Register</div></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
