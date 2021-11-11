import React from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTypography, MDBContainer, } from 'mdb-react-ui-kit';

export default function App() {
  return (
  <MDBContainer>
    <MDBCard>
      <MDBCardHeader>Publicidad</MDBCardHeader>
      <MDBCardBody>
        <MDBTypography blockquote className='mb-0'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        </MDBTypography>
      </MDBCardBody>
    </MDBCard>
  </MDBContainer>
  );
}