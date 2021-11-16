import React, { useState, useEffect } from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'
import './card.css'

export default function Card1(props) {
  const [content, setContent] = useState([])
  const handleClick = () => {
      fetch(`https://newsapi.org/v2/top-headlines?country=ar&category=${props.section}&pageSize=3&apiKey=042321d9894d48c18f9f67312f3ca2ae`)
      .then(response => response.json())
      .then(json => console.log(json))
  }

  useEffect(() => {
    handleClick()   
  }, )

  return (
    <MDBRow className='row-cols-1 row-cols-md-3 gx-0'>
      {
        content.map(noticia => 
        <Link target="_blank" to={`/article/${noticia.title}`}>
          <MDBCol className='p-2' onClick={()=>{
            localStorage.setItem("article", JSON.stringify(noticia))
          }}>
          <MDBCard className='h-100'>
            <MDBCardImage className='img-size' src={noticia.urlToImage} alt='...' position='top'/>
            <MDBCardBody>
              <MDBCardTitle>{noticia.title}</MDBCardTitle>
              <MDBCardText>{noticia.description}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        </Link>
        )
      }
      </MDBRow>
  );
}