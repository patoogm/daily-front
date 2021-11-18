import { useState, useEffect } from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'
import './card.css'

export default function Card1({ section }) {
  let apiURL = 'https://newsdata.io/api/1/news'
  let apiKey = 'pub_2286d3ba0c3bf64c423bddf8ae93b66e3d63'
  const [content, setContent] = useState([])

  
  
  const handleClick = () => {
    fetch(`${apiURL}?apikey=${apiKey}&category=${section}&country=ar&domain=clarin`)
    .then(response => response.json())
    .then(json => setContent(json.results));
  }
    

  useEffect(() => {
    handleClick()   
  }, [])

  return (
    <MDBRow className='row-cols-1 row-cols-md-3 gx-0 tarjeta-core-container'>
      {
        content.slice(0, 6).map((noticia, key) => 
        <Link key={key} className='letra' target="_blank" to={`/article/${noticia.title}`}>
          <MDBCol className='p-2  tarjeta' onClick={()=>{
            localStorage.setItem("article", JSON.stringify(noticia))
          }}>
          <MDBCard className='h-100'>
            <MDBCardImage className='img-size' src={noticia.image_url} alt='...' position='top'/>
            <MDBCardBody className="tarjeta-body">
              <MDBCardTitle>{noticia.title}</MDBCardTitle>
              <MDBCardText className="tarjeta-contenido">{noticia.description}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        </Link>
        )
      }
      </MDBRow>
  )
}