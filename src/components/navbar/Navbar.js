import React from 'react'
import '../navbar/navbar.css'

function Navbar() {
  return (
    <>
      <div className="navbar-core-container">
        <a className="navbar-button" href="#actualidad"><div>Actualidad</div></a>
        <a className="navbar-button" href="#deportes"><div>Deportes</div></a>
        <a className="navbar-button" href="#politica"><div>Política</div></a>
        <a className="navbar-button" href="#economia"><div>Economía</div></a>
        <a className="navbar-button" href="#entretenimiento"><div>Entretenimiento</div></a>
        <a className="navbar-button" href="#sociedad"><div>Sociedad</div></a>       
      </div>
    </>
  )
}

export default Navbar
