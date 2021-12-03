import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCardHeader } from 'mdb-react-ui-kit';
import {Hidden} from '@mui/material'

export default function App() {
  return (
<Hidden smDown>
  <MDBContainer>
    <MDBCardHeader>Publicidad</MDBCardHeader>
    <MDBRow>
      <MDBCol className='col-example'>
        <div className='bg-image hover-overlay' style={{ maxWidth: '24rem' }}>
              <img src='	https://www.mcdonalds.com.ar/uploads/BANNER_SECUNDARIO_1423_623_ad25d4ae7f.jpg' className='img-fluid' alt="tastysecundario"/>
              <a href='https://www.mcdonalds.com.ar/'>
                <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div></a>
                <h6 style={{textAlign: 'center'}}>¡Llegó Grand Tasty Doble y Triple!</h6>
        </div>
      </MDBCol>
      <MDBCol order='5' className='col-example'>
        <div className='bg-image hover-overlay' style={{ maxWidth: '24rem' }}>
              <img src='https://www.mcdonalds.com.ar/uploads/inscribite_en_club_vip_automac_580x250_30e390c0f9.jpg' className='img-fluid' alt="tastysecundario"/>
              <a href='https://www.mcdonalds.com.ar/'>
                <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div></a>
                <h6 style={{textAlign: 'center'}}>Club VIP AutoMac</h6>
            </div>
      </MDBCol>
        <MDBCol order='1' className='col-example'>
        <div className='bg-image hover-overlay' style={{ maxWidth: '24rem' }}>
              <img src='https://www.mcdonalds.com.ar/uploads/Banner_Mc_Delivery_Desktop_c79e2ea066.jpg' className='img-fluid' alt="tastysecundario"/>
              <a href='https://www.mcdonalds.com.ar/'>
                <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div></a>
                <h6 style={{textAlign: 'center'}}>Pedí McDelivery donde estés</h6>
        </div>
        </MDBCol>
    </MDBRow>
  </MDBContainer>
</Hidden>
  );
}