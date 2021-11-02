import React from 'react'
import '../navbar/navbar.css'

function Navbar() {
  return (
    <>
      <div className="navbar-core-container">
        <div className="navbar-button">Home</div>
        <div className="navbar-button">Actualidad</div>
        <div className="navbar-button">Último Momento</div>
        <div className="navbar-button">Contacto</div>
      </div>
    </>
  )
}

export default Navbar
