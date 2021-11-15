import React, { useState, useEffect } from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './card.css'

export default function App(props) {
  const [content, setContent] = useState([])
  const handleClick = () => {
    fetch(`https://newsapi.org/v2/top-headlines?country=ar&category=${props.section}&pageSize=3&apiKey=b1a3dfcb23504041b4879a07a4fe3180`)
      .then(response => response.json())
      .then(json => setContent(json))
  }

  useEffect(() => {
    handleClick()   
  }, )

  return (
    <MDBRow className='row-cols-1 row-cols-md-3 gx-0'>
      {
        content.map(noticia => 
        <MDBCol className='p-2' onClick= {()=>{history.push(`/detail-new?${title}?${urlToImage}?${content}`)}}>
          <MDBCard className='h-100'>
            <MDBCardImage className='img-size' src={noticia.urlToImage} alt='...' position='top'/>
            <MDBCardBody>
              <MDBCardTitle>{noticia.title}</MDBCardTitle>
              <MDBCardText>{noticia.description}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>)
      }
      </MDBRow>
  );
}