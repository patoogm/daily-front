import React from 'react'
import '../mini-header/miniheader.css'
import logo from "../../images/rollingDailyIcon.png"
import { Link } from 'react-router-dom'

function MiniHeader() {
  return (
    <>
      <div className="miniheader-core-container">
        <img className="miniheader-image" src={logo} alt="Rolling Daily!" />
        <Link to="/"><div className="title">Rolling Daily</div></Link>
      </div>
    </>
  )
}

export default MiniHeader