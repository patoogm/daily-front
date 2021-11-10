import { useRef, useEffect } from 'react'
import './mobileMenu.css'

const MobileMenu = () => {

  let menuRef = useRef();
  let menuItem1 = useRef();
  let menuItem2 = useRef();
  let menuItem3 = useRef();
  let menuItem4 = useRef();
  let menuItem5 = useRef();
  let menuItem6 = useRef();

  useEffect(() => {
    const toggle = document.querySelector('.navToggle');
    const menu = document.querySelector('.mobile-menu');
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
      if(!menuRef.current.contains(event.target) ){
        menu.classList.remove('active')
        setTimeout(()=>{
          one.classList.remove('itemActive')
          two.classList.remove('itemActive')
          three.classList.remove('itemActive')
          four.classList.remove('itemActive')
          five.classList.remove('itemActive')
          six.classList.remove('itemActive')

        },100)
      }
    })

  }, []);

  return (
    <>
      <div ref={menuRef} className="mobile-menu">
        <div className="mobile-menu-item one login">LOGIN</div>
        <div className="mobile-menu-item two register">REGISTER</div>
        <div className="mobile-menu-item three">HOME</div>
        <div className="mobile-menu-item four">ACTUALIDAD</div>
        <div className="mobile-menu-item five">ULTIMO MOMENTO</div>
        <div className="mobile-menu-item six">CONTACTO</div>
      </div>
    </>
  )
}

export default MobileMenu
