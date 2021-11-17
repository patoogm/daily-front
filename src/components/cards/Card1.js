import { useState, useEffect } from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'
import './card.css'

export default function Card1(props) {
  let apiURL = 'https://api.newscatcherapi.com/v2/'
  let apiKey = 'xb_wthuPYwUjQ35iPMKI6dKwF7FD0CJxLffYQ_wCm0g'
  const [content, setContent] = useState([])

  const handleClick = () => {
    fetch(`${apiURL}latest_headlines?countries=AR&page_size=6`,{
      method: 'GET',
      headers: {
        'x-api-key':`${apiKey}`
      }
    })
      .then(response => response.json())
      .then(json => setContent(json.articles));
  }
  

  useEffect(() => {
    handleClick()   
  }, [])

  return (
    <MDBRow className='row-cols-1 row-cols-md-3 gx-0 tarjeta-core-container'>
      {
        content.map(noticia => 
        <Link className='letra' target="_blank" to={`/article/${noticia.title}`}>
          <MDBCol className='p-2  tarjeta' onClick={()=>{
            localStorage.setItem("article", JSON.stringify(noticia))
          }}>
          <MDBCard className='h-100'>
            <MDBCardImage className='img-size' src={noticia.media} alt='...' position='top'/>
            <MDBCardBody className="tarjeta-body">
              <MDBCardTitle>{noticia.title}</MDBCardTitle>
              <MDBCardText className="tarjeta-contenido">{noticia.excerpt}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        </Link>
        )
      }
      </MDBRow>
  )
}