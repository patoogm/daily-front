import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselElement, MDBCarouselCaption, MDBContainer } from 'mdb-react-ui-kit';
import './carrousel.css'

export default function App() {
  return (
    <MDBCarousel className="car-core" showControls showIndicators>
      <MDBCarouselInner>
        <MDBCarouselItem className='active car-item'>
          <MDBCarouselElement className="car-image" src='https://img.lagaceta.com.ar/fotos/notas/2021/11/16/se-reuni-con-fernndez-y-manzur-jaldo-viajo-para-gestionar-construccion-dos-estaciones-transformadoras-sur-provincia-919839-171805.jpg' alt='carrousel-1' />
          <MDBCarouselCaption className="car-caption"> 
            <h5>Noticia destacada 1</h5>
            <p>Con el Presidente y con Manzur, Jaldo firma convenios por más de $ 414 millones para obras eléctricas</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem className="car-item">
          <MDBCarouselElement src='https://img.lagaceta.com.ar/fotos/notas/2021/11/16/oficialismo-busca-lo-no-pudo-urnas-quedarse-intendencia-919845-181304.jpeg' alt='carrousel-2' />
          <MDBCarouselCaption className="car-caption">
            <h5>Noticia destacada 2</h5>
            <p>"El oficialismo busca lo que no pudo en las urnas: quedarse con la Intendencia"</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem className="car-item">
          <MDBCarouselElement src='https://img.lagaceta.com.ar/fotos/notas/2021/11/16/recuerdo-argentina-derroto-brasil-final-copa-america-jugada-maracana-919804-122057.jpg' alt='carrousel-3' />
          <MDBCarouselCaption className="car-caption"> 
            <h5>Noticia destacada 3</h5>
            <p>Argentina-Brasil: hora, formaciones y TV del clásico sudamericano</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
  </MDBCarousel>
  );
}