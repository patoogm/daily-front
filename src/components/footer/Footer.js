import React from 'react'
import '../footer/footer.css'

function Footer() {
  return (
    <>
      <div className="footer-core-container">
        <div className="footer-links-container">
          <div className="link-container">
            <span className="footer-logo">ROLLING DAILY <br /> TUCUMÁN</span>
            <span className="link-span fecha">Lunes 01 de Noviembre de 2021</span>
            <span className="link-span">Edición 387 - Año 5 Mes 9</span>
            <span className="link-span">Rolling Daily S.A.</span>
          </div>
          <div className="link-container">
            <span className="link-span">San Miguel de Tucumán</span>
            <span className="link-span">Provincia de Tucumán (T4000DAN)</span>
            <span className="link-span editores">Editores Responsables:</span>
            <span className="link-span">Antoni, Javier</span>
            <span className="link-span">Frías Silva, Jerónimo</span>
            <span className="link-span">García Millan, Patricio</span>
            <span className="link-span">Lopez, Marcos Emmanuel</span>
            <span className="link-span">Paz, Lucas</span>
          </div>
          <div className="link-container">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><div className="social-link facebook"></div></a>          
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><div className="social-link instagram"></div></a>          
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><div className="social-link youtube"></div></a>          
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer"><div className="social-link whatsapp"></div></a>
          </div>
        </div>
        <div className="footer-legal-container">
          <div className="footer-end-logo">ROLLING DAILY</div>
          <div className="footer-end-link">Uso de Datos Personales</div>
          <div className="footer-end-link">Términos y Condiciones</div>
          <div className="footer-end-link">Rolling Daily S.A. © 2021 - Todos los derechos reservados</div>
        </div>         
      </div>
    </>
  )
}

export default Footer
