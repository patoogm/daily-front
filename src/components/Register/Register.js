import React from 'react';
import '../Register/register.css';
import { useForm } from 'react-hook-form';

const Register = () => {


  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    fetch('http://localhost:8000/create-users',{
      method: 'POST',
      body: JSON.stringify(
        data
      ),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then(json => console.log(json))
      console.log(data)
  }

  return (
    <>
      <div className="register-core-container">
        <form className="register-core-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="register-title">Ingrese sus datos</div>
          <label htmlFor="name" className="register-label">Nombre</label>
          <input type="text" name="name" id="name" className="register-input" required {...register("name")} />  
                    
          <label htmlFor="name" className="register-label">Apellido</label>
          <input type="text" name="lastName" id="lastName" className="register-input" required {...register("lastName")} />

          <label htmlFor="dni" className="register-label">Número de Documento</label>
          <input type="number" name="dni" id="dni" className="register-input" required {...register("dni")}/>                

          <label htmlFor="email" className="register-label">Dirección de correo electrónico</label>
          <input type="email" name="email" id="email" className="register-input" required {...register("email")} />

          <label htmlFor="password" className="register-label">Contraseña</label>
          <input type="password" name="password" id="password" className="register-input" required {...register("password")} />

          <input type="submit" className="register-form-button" value="REGISTRARSE" />
        </form>
      </div>
    </>
  )
}

export default Register
