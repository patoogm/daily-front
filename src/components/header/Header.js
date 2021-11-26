import { useEffect, useRef } from 'react'
import logo from "../../images/rollingDailyIcon.png"
import '../header/header.css'

function Header() {

  let isToken = localStorage.getItem('token') === 'undefined' || localStorage.getItem('token') === null ? false : true
  let userRole = localStorage.getItem('user_role')
  let userName = localStorage.getItem('user_name')
  

  let logOut = () => {
    localStorage.removeItem("token")
    window.location.assign('/')
  }

  let mobileButton = useRef()

  useEffect(() => {

    const menu = document.querySelector('.mobile-menu');
    const one = !isToken ? document.querySelector('.one') : document.querySelector('.seven');
    const two = !isToken ? document.querySelector('.two') : document.querySelector('.eight');
    const three = document.querySelector('.three');
    const four = document.querySelector('.four');
    const five = document.querySelector('.five');
    const six = document.querySelector('.six');
    const nine = !isToken ? 1+1 : document.querySelector('.nine');
    const ten = !isToken ? 1+1 : document.querySelector('.ten');


    const toggleMobileMenu = (event) => {
      if(mobileButton?.current?.contains(event.target)){
        menu.classList.add('active')
        setTimeout(()=>{
          one.classList.add('itemActive')
          if (isToken && (userRole === 'writer' || userRole === 'admin')) {
            two.classList.add('itemActive')            
          } else if (!isToken) {
            two.classList.add('itemActive')
          }
          three.classList.add('itemActive')
          four.classList.add('itemActive')
          five.classList.add('itemActive')
          six.classList.add('itemActive')
          if (isToken) {
            nine.classList.add('itemActive')
          }
          if (isToken && userRole === 'admin') {
            ten.classList.add('itemActive')
          }
        }, 250)     
      }
    }
  
    document.addEventListener('click', toggleMobileMenu, false )

    return () => {
      document.removeEventListener('click', toggleMobileMenu, false )
    }

  }, [isToken, userRole])
  
  return (
    <>
      <div className="header-core-container">
        <div className="header-social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="social-icon bi bi-facebook"> Facebook</i></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="social-icon bi bi-instagram"> Instagram</i></a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer"><i className="social-icon bi bi-youtube"> Youtube</i></a>
        </div>
        <div className="header-logo-and-buttons">
          <div className="logo-container">           
            <a href="/" className="logo"><span className="logo-icon-span"><img className="header-logo-icon" src={logo} alt="" />ROLLING DAILY</span></a>
            <i ref={mobileButton} className="bi bi-list navToggle"></i>
          </div>
          <div className="buttons-container">
            { !isToken ? <a href="/login" className="login-button"><div>LOGIN</div></a> : <div className="logged-in">¡Bienvenido {userName}!</div>  }
            { !isToken ? <a href="/register" className="register-button"><div>REGISTER</div></a> : userRole === 'writer' || userRole === 'admin' ? <a href="/NewsAdmin" className="admin-button"><div>Admin</div></a> : null }
            { !isToken ? null : userRole === 'admin' ? <a href="/UsersAdmin" className="admin-button"><div>Users</div></a> : null  }
            { !isToken ? <div></div> : <div className="logOut" onClick={logOut}>Cerrar Sesión</div> }
          </div>
        </div>
      </div>
    </>
  )
}

export default Header