import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../images/rollingDailyIcon.png"
import '../header/header.css'

function Header() {

  let mobileButton = useRef()

  useEffect(() => {
    const toggle = document.querySelector('.navToggle')
    const menu = document.querySelector('.mobile-menu')
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    const three = document.querySelector('.three');
    const four = document.querySelector('.four');
    const five = document.querySelector('.five');
    const six = document.querySelector('.six');


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
        }, 250)
        
      }
    })
  }, [])


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
            
            <span className="logo"><img className="header-logo-icon" src={logo} alt="" />ROLLING DAILY</span>
            <i ref={mobileButton} className="bi bi-list navToggle"></i>
          </div>
          <div className="buttons-container">
            <Link to="/login"><div className="login-button">Login</div></Link>
            <Link to="/register"><div className="register-button">Register</div></Link>
          </div>
        </div>
      </div>
    </>
  )

}

export default Header
