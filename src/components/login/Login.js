import { useState } from 'react'
import '../login/login.css'
import { useForm } from 'react-hook-form'

function Login() {

  const [LoginError, setLoginError] = useState(false)

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
  fetch('http://localhost:8000/login-user',{
      method: 'POST',
      body: JSON.stringify({
        email: data.email,
        password: data.password
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem("token", json.token)
        localStorage.setItem('_id', json._id)
      })

      setTimeout( () => {
        if(localStorage.getItem("token") === 'undefined' || localStorage.getItem('token') === null){
          setLoginError(true)
          localStorage.removeItem('token')
        } else {
          window.location.assign('/')
        }
      }, 500)    
  }  

  return (
    <>
      <div className="form-core-container">
        <form className="core-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="login-title">Ingrese sus datos</div>

            <label htmlFor="email" className="login-label">Dirección de correo electrónico</label>
            <input type="email" name="email" id="email" className="login-input" required {...register("email")}/>

            <label htmlFor="password" className="login-label">Contraseña</label>
            <input type="password" name="password" id="password" className="login-input" {...register("password")}/>
            {LoginError ? <span className="login-error">Usuario o Contraseña erróneos</span> : <span></span>}

            <div className="login-sin-cuenta">¿No tienes una cuenta? <a className="login-register-link" href="/register">¡Regístrate!</a></div>
            
            <input type="submit" className="login-form-button" value="ENTRAR" />
        </form>
      </div>
    </>
  )
}

export default Login
