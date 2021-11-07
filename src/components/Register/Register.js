import React from 'react'
import '../Register/register.css'

const Register = () => {
  return (
    <>
      <div className="register-core-container">
        <form className="register-core-form">
            <div className="register-title">Ingrese sus datos</div>
            <label htmlFor="name" className="register-label">Nombre y Apellido</label>
            <input type="text" name="name" id="name" className="register-input" />
            <label htmlFor="dni" className="register-label">Número de Documento</label>
            <input type="text" name="dni" id="dni" className="register-input" />
            <label htmlFor="email" className="register-label">Dirección de correo electrónico</label>
            <input type="email" name="email" id="email" className="register-input" />
            <label htmlFor="password" className="register-label">Contraseña</label>
            <input type="password" name="password" id="password" className="register-input" />
            <div className="register-form-button">REGISTRARSE</div>
        </form>
      </div>
    </>
  )
}

export default Register
