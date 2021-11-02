import React from 'react'

function Header() {
  return (
    <>
      <div className="header-core-container">
        <div className="header-social-icons">
          <i className="social-icon bi bi-facebook"> Facebook</i>
          <i className="social-icon bi bi-instagram"> Instagram</i>
          <i className="social-icon bi bi-youtube"> Youtube</i>
        </div>
        <div className="header-logo-and-buttons">
          <div className="logo-container">
            <span className="logo">LOGO HERE</span>
          </div>
          <div className="buttons-container">
            <div className="login-button">Login</div>
            <div className="register-button">Register</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
