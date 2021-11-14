import { useRef, useEffect } from 'react'
import './mobileMenu.css'

const MobileMenu = () => {

  let isToken = localStorage.getItem('token') === 'undefined' || localStorage.getItem('token') === null ? false : true
  console.log(isToken)

  let logOut = () => {
    localStorage.removeItem("token")
    window.location.assign('/')
  }

  let menuRef = useRef();

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

    console.log(one)

    

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
      if(!menuRef.current.contains(event.target) ){
        menu.classList.remove('active')
        setTimeout(()=>{
          one.classList.remove('itemActive')
          two.classList.remove('itemActive')
          three.classList.remove('itemActive')
          four.classList.remove('itemActive')
          five.classList.remove('itemActive')
          six.classList.remove('itemActive')
          if (isToken) {
            nine.classList.remove('itemActive')
          }
        },100)
        
      }
    })
  }, [isToken]);
  
  return (
    <>
      <div ref={menuRef} className="mobile-menu">
        { !isToken ? <a href="/login" className="mobile-menu-item one login"><div>LOGIN</div></a> : <div className="logged-in-mobile seven">¡Bienvenido!</div>  }
        { !isToken ? <a href="/register" className="mobile-menu-item two register"><div>REGISTER</div></a> : <a href="/NewsAdmin" className="mobile-menu-item eight admin"><div>Admin</div></a>  }            
        <div className="mobile-menu-item three">HOME</div>
        <div className="mobile-menu-item four">ACTUALIDAD</div>
        <div className="mobile-menu-item five">ULTIMO MOMENTO</div>
        <div className="mobile-menu-item six">CONTACTO</div>
        { !isToken ? <div></div> : <div className="log-out nine" onClick={logOut}>Cerrar Sesión</div> }
      </div>
    </>
  )
}

export default MobileMenu
