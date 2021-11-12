import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
  MDBContainer,
} from 'mdb-react-ui-kit';
import './carrousel.css'

export default function App() {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBContainer>
      <MDBCarouselInner>
        <MDBCarouselItem className='active car-item'>
          <MDBCarouselElement src='https://mdbcdn.b-cdn.net/img/new/slides/041.jpg' alt='carrousel-1' />
          <MDBCarouselCaption className="car-caption"> 
            <h5>Noticia destacada 1</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem className="car-item">
          <MDBCarouselElement src='https://mdbcdn.b-cdn.net/img/new/slides/042.jpg' alt='carrousel-2' />
          <MDBCarouselCaption className="car-caption">
            <h5>Noticia destacada 2</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem className="car-item">
          <MDBCarouselElement src='https://mdbcdn.b-cdn.net/img/new/slides/043.jpg' alt='carrousel-3' />
          <MDBCarouselCaption className="car-caption"> 
            <h5>Noticia destacada 3</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBContainer>
  </MDBCarousel>
  );
}