import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
  MDBContainer,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBContainer>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src='https://mdbcdn.b-cdn.net/img/new/slides/041.jpg' alt='...' />
          <MDBCarouselCaption> 
            <div className='example-square bg-light shadow-1-strong text-dark'>
            <h5>Noticia destacada 1</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p></div>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbcdn.b-cdn.net/img/new/slides/042.jpg' alt='...' />
          <MDBCarouselCaption>
            <div className='example-square bg-light shadow-1-strong text-dark'>
            <h5>Noticia destacada 2</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbcdn.b-cdn.net/img/new/slides/043.jpg' alt='...' />
          <MDBCarouselCaption> 
          <div className='example-square bg-light shadow-1-strong text-dark'>
            <h5>Noticia destacada 3</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p></div>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBContainer>
  </MDBCarousel>
  );
}