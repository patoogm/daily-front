import { useEffect, useRef } from 'react'
import logo from "../../images/rollingDailyIcon.png"
import '../header/header.css'

function Header() {

  let isToken = localStorage.getItem('token') === 'undefined' || localStorage.getItem('token') === null ? false : true
  console.log(isToken)

  let logOut = () => {
    localStorage.removeItem("token")
    window.location.assign('/')
  }

  let mobileButton = useRef()

  useEffect(() => {
    const toggle = document.querySelector('.navToggle');
    const menu = document.querySelector('.mobile-menu');
    const one = !isToken ? document.querySelector('.one') : document.querySelector('.seven');
    const two = !isToken ? document.querySelector('.two') : document.querySelector('.eight');
    const three = document.querySelector('.three');
    const four = document.querySelector('.four');
    const five = document.querySelector('.five');
    const six = document.querySelector('.six');
    const nine = !isToken ? 1+1 : document.querySelector('.nine');
    const ten = !isToken ? 1+1 : document.querySelector('.ten');

    let toggleMenu = () => {     
      let checkItem;
      if(menu.className.indexOf('active') > -1){
        checkItem = true;
      } else {        
        checkItem = false;
      }   
  
      if(checkItem){
        menu.classList.remove('active')
      } else {
        menu.classList.add('active')
      }
    }
  
    toggle.addEventListener('click', toggleMenu, false);
    document.addEventListener('click', (event)=>{
      if(mobileButton.current.contains(event.target)){
        menu.classList.add('active')
        setTimeout(()=>{
          one.classList.add('itemActive')
          two.classList.add('itemActive')
          three.classList.add('itemActive')
          four.classList.add('itemActive')
          five.classList.add('itemActive')
          six.classList.add('itemActive')
          if (isToken) {
            nine.classList.add('itemActive')
            ten.classList.add('itemActive')
          }
        }, 250)     
      }
    })
  }, [isToken])
  
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
            <a href="/" className="logo"><span><img className="header-logo-icon" src={logo} alt="" />ROLLING DAILY</span></a>
            <i ref={mobileButton} className="bi bi-list navToggle"></i>
          </div>
          <div className="buttons-container">
            { !isToken ? <a href="/login" className="login-button"><div>Login</div></a> : <div className="logged-in">Bienvenido!</div>  }
            { !isToken ? <a href="/register" className="register-button"><div>Register</div></a> : <a href="/NewsAdmin" className="admin-button"><div>Admin</div></a>  }
            { !isToken ? <div></div> : <a href="/UsersAdmin" className="admin-button"><div>Users</div></a>  }
            { !isToken ? <div></div> : <div className="logOut" onClick={logOut}>Cerrar Sesión</div> }
          </div>
        </div>
      </div>
    </>
  )
}

export default Header