import React from 'react'
import '../footer/footer.css'

function Footer() {
  return (
    <>
      <div className="footer-core-container">
        <div className="footer-links-container">
          <div className="link-container">
            <span className="footer-logo">LOGO HERE TUCUMÁN</span>
            <span className="link-span">Lunes 01 de Noviembre de 2021</span>
            <span className="link-span">Edición 387 - Año 5 Mes 9</span>
            <span className="link-span">Logo Here S.A.</span>
          </div>
          <div className="link-container">
            <span className="link-span">San Miguel de Tucumán</span>
            <span className="link-span">Provincia de Tucumán (T4000DAN)</span>
            <br />
            <span className="link-span">Editores Responsables:</span>
            <span className="link-span">Antoni, Javier</span>
            <span className="link-span">Frías Silva, Jerónimo</span>
            <span className="link-span">Antoni, Javier</span>
            <span className="link-span">Lopez, Marcos Emmanuel</span>
          </div>
          <div className="link-container">
            <div className="social-link facebook"></div>
            <div className="social-link instagram"></div>
            <div className="social-link youtube"></div>
            <div className="social-link whatsapp"></div>
          </div>
        </div>
        <div className="footer-legal-container">
          <div className="footer-end-logo">LOGO HERE</div>
          <div className="footer-end-link">Uso de Datos Personales</div>
          <div className="footer-end-link">Términos y Condiciones</div>
          <div className="footer-end-link">Logo Here S.A. © 2021 - Todos los derechos reservados</div>
        </div>         
      </div>
    </>
  )
}

export default Footer
