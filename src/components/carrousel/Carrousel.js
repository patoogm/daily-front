import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselInner className='p-4'>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src='https://mdbcdn.b-cdn.net/img/new/slides/041.jpg' alt='...' />
          <MDBCarouselCaption>
            <h5>Noticia destacada 1</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbcdn.b-cdn.net/img/new/slides/042.jpg' alt='...' />
          <MDBCarouselCaption>
            <h5>Noticia destacada 2</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbcdn.b-cdn.net/img/new/slides/043.jpg' alt='...' />
          <MDBCarouselCaption>
            <h5>Noticia destacada 3</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}