import { useRef, useEffect } from 'react'
import './mobileMenu.css'

const MobileMenu = () => {

  let isToken = localStorage.getItem('token') === 'undefined' || localStorage.getItem('token') === null ? false : true
  let userRole = localStorage.getItem('user_role')
  let userName = localStorage.getItem('user_name')

  let logOut = () => {
    localStorage.removeItem("token")
    window.location.assign('/')
  }

  let menuRef = useRef();

  useEffect(() => {
    const menu = document.querySelector('.mobile-menu');
    const one = !isToken ? document.querySelector('.one') : document.querySelector('.seven');
    const two = !isToken ? document.querySelector('.two') : document.querySelector('.eight');
    const three = document.querySelector('.three');
    const four = document.querySelector('.four');
    const five = document.querySelector('.five');
    const six = document.querySelector('.six');
    const eleven = document.querySelector('.eleven')
    const twelve = document.querySelector('.twelve')
    const nine = !isToken ? 1+1 : document.querySelector('.nine');
    const ten = !isToken ? 1+1 : document.querySelector('.ten');

    

    let toggleMobileMenu = (event) => {
        if(!menuRef.current.contains(event.target)){
          menu.classList.remove('active')
          setTimeout(()=>{
            one.classList.remove('itemActive')
            if (isToken && (userRole === 'writer' || userRole === 'admin')) {
              two.classList.remove('itemActive') 
            } else if (!isToken) {
              two.classList.remove('itemActive')
            }
            three.classList.remove('itemActive')
            four.classList.remove('itemActive')
            five.classList.remove('itemActive')
            six.classList.remove('itemActive')
            eleven.classList.remove('itemActive')
            twelve.classList.remove('itemActive')
            if (isToken) {
              nine.classList.remove('itemActive')
            }
            if (isToken && userRole === 'admin') {
              ten.classList.remove('itemActive')
            }
          },100)    
        }
    }
  
    document.addEventListener('click', toggleMobileMenu, false)

    return () => {
      document.removeEventListener('click', toggleMobileMenu, false )
    }
  }, [isToken, userRole]);
  
  return (
    <>
      <div ref={menuRef} className="mobile-menu">
        { !isToken ? <a href="/login" className="mobile-menu-item one login"><div>INGRESAR</div></a> : <div className="logged-in-mobile seven">¡Bienvenido {userName}!</div>  }
        { !isToken ? <a href="/register" className="mobile-menu-item two register"><div>REGÍSTRATE</div></a> : userRole === 'writer' || userRole === 'admin' ? <a href="/NewsAdmin" className="mobile-menu-item eight admin"><div>Administrador</div></a> : null }            
        { !isToken ? <div></div> : userRole === 'admin' ? <a href="/UsersAdmin" className="mobile-menu-item ten admin"><div>Usuario</div></a> : null  }            
        <a href="#actualidad" className="mobile-menu-item three"><div>ACTUALIDAD</div></a>
        <a href="#deportes" className="mobile-menu-item four"><div>DEPORTES</div></a>
        <a href="#politica" className="mobile-menu-item five"><div>POLÍTICA</div></a>
        <a href="#economia" className="mobile-menu-item six"><div>ECONOMÍA</div></a>
        <a href="#entretenimiento" className="mobile-menu-item eleven"><div>ENTRETENIMIENTO</div></a>
        <a href="#sociedad" className="mobile-menu-item twelve"><div>SOCIEDAD</div></a>
        { !isToken ? <div></div> : <div className="log-out nine" onClick={logOut}>Cerrar Sesión</div> }
      </div>
    </>
  )
}

export default MobileMenu