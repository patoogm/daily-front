import React from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTypography } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCard className='p-4'>
      <MDBCardHeader>Publicidad</MDBCardHeader>
      <MDBCardBody>
        <MDBTypography blockquote className='mb-0'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        </MDBTypography>
      </MDBCardBody>
    </MDBCard>
  );
}