import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './card.css'


export default function Card1( {category} ) {   

  return (

  <MDBRow className='row-cols-1 row-cols-md-3 gx-0 tarjeta-core-container'>
      {
        category.map( noticia => 
        <a key={noticia.article._id} className='letra' href={`/article/${noticia.title}`}>
          <MDBCol className='p-2  tarjeta' onClick={()=>{
            localStorage.setItem("article", JSON.stringify(noticia.article))
          }}>
          <MDBCard className='h-100'>
            <MDBCardImage className='img-size' src={noticia.article.image} alt='...' position='top'/>
            <MDBCardBody className="tarjeta-body">
              <MDBCardTitle>{noticia.article.title}</MDBCardTitle>
              <MDBCardText className="tarjeta-contenido">{noticia.article.description}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
          </MDBCol>
        </a>
        )
      }
  </MDBRow>  
  )
}