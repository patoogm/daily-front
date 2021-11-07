import React from 'react'
import '../login/login.css'

function Login() {
  return (
    <>
      <div className="form-core-container">
        <form className="core-form">
            <div className="login-title">Ingrese sus datos</div>
            <label htmlFor="email" className="login-label">Dirección de correo electrónico</label>
            <input type="email" name="email" id="email" className="login-input" />
            <label htmlFor="password" className="login-label">Contraseña</label>
            <input type="password" name="password" id="password" className="login-input" />
            <div className="login-form-button">ENTRAR</div>
        </form>
      </div>
    </>
  )
}

export default Login
