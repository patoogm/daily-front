import React from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTypography, MDBContainer, } from 'mdb-react-ui-kit';

export default function App() {
  return (
  <MDBContainer>
    <MDBCard>
      <MDBCardHeader>Publicidad</MDBCardHeader>
      <MDBCardBody>
        <MDBTypography blockquote className='mb-0'>
          <div>
            <div className='bg-image hover-overlay' style={{ maxWidth: '24rem' }}>
              <img src='	https://www.mcdonalds.com.ar/uploads/BANNER_SECUNDARIO_1423_623_ad25d4ae7f.jpg' className='img-fluid' alt="tastysecundario"/>
              <a href='https://www.mcdonalds.com.ar/'>
                <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div></a>
                <h4>¡Llegó Grand Tasty Doble y Triple!</h4>
            </div>
          </div>
        </MDBTypography>
      </MDBCardBody>
    </MDBCard>
  </MDBContainer>
  );
}