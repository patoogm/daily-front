import React, { useEffect, useState } from 'react';
import '../Register/register.css';
import { useForm } from 'react-hook-form';

const Register = () => {

  const { register, handleSubmit, reset } = useForm();

  const [ RegisterError, setRegisterError ] = useState([])
  const [ Password, setPassword ] = useState("")
  const [ PasswordConfirm, setPasswordConfirm ] = useState("")
  const [ PasswordMatchError, setPasswordMatchError] = useState("")
  
  const baseURL = process.env.REACT_APP_DB_CONNECTION

  const onSubmit = data => {
    if (Password === PasswordConfirm) {
      setPasswordMatchError("")
      fetch(`${baseURL}/create-users`,{
      method: 'POST',
      body: JSON.stringify(
        data
      ),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then(json => setRegisterError(json.errors))
    } else {
      setPasswordMatchError("Las contraseñas no coinciden")
    }    
  }

  useEffect(() => {
    if (RegisterError === undefined) {
      reset()
    }
  }, [RegisterError, reset])

  return (
    <>
      <div className="register-core-container">
        <form className="register-core-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="register-title">Ingrese sus datos</div>
          <label htmlFor="name" className="register-label">Nombre</label>
          <input type="text" name="name" id="name" className="register-input" required {...register("name")} minLength='4' maxLength='25'/>                      
          <label htmlFor="lastName" className="register-label">Apellido</label>
          <input type="text" name="lastName" id="lastName" className="register-input" required {...register("lastName")} minLength='3' maxLength='20'/>
          <label htmlFor="dni" className="register-label">Número de Documento</label>
          <input type="number" name="dni" id="dni" className="register-input" required {...register("dni")} minLength='6' maxLength='8'/>
          <label htmlFor="email" className="register-label">Correo Electrónico</label>
          <input type="email" name="email" id="email" className="register-input" required {...register("email")} minLength='10' maxLength='40'/>
          <label htmlFor="password" className="register-label">Contraseña</label>
          <input type="password" name="password" id="password" className="register-input" required {...register("password")} minLength='5' maxLength='15' onChange={event => setPassword(event.target.value)} />
          <label htmlFor="password" className="register-label">Confirmar contraseña</label>
          <input type="password" name="password-confirm" id="password-confirm" className="register-input" onChange={event => setPasswordConfirm(event.target.value)} />
          <input type="text" name="role" id='role' className='register-input' value="reader" {...register("role")} hidden/>
          {RegisterError === undefined ? <span></span> : RegisterError.length === 0 ? <span></span> : RegisterError[0].param === 'dni' ? <span className="register-error">* {RegisterError[0].msg}</span> : <span></span>}
          {RegisterError === undefined ? <span></span> : RegisterError.length === 0 ? <span></span> : RegisterError[0].param === 'email' ? <span className="register-error">* {RegisterError[0].msg}</span> : <span></span>}
          {RegisterError === undefined ? <span></span> : RegisterError.length === 0 ? <span></span> : RegisterError[1] === undefined ? <span></span> : RegisterError[1].param === 'email' ? <span className="register-error">* {RegisterError[1].msg}</span> : <span></span>}
          {RegisterError === undefined ? <span></span> : RegisterError.length === 0 ? <span></span> : RegisterError[1] === undefined ? <span></span> : RegisterError[1].param === 'dni' ? <span className="register-error">* {RegisterError[1].msg}</span> : <span></span>}
          {RegisterError === undefined ? <span className="register-ok">¡Usuario creado con éxito!</span> : <span></span>}
          {PasswordMatchError === "" ? <span></span> : <span className="register-error">{PasswordMatchError}</span> }
          <div className="register-con-cuenta">¿Ya posees una cuenta? <a className="register-login-link" href="/login">¡Logueate!</a></div>
          <input type="submit" className="register-form-button" value="REGISTRARSE"/>
        </form>
      </div>
    </>
  )
}

export default Register
