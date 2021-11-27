import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselElement, MDBCarouselCaption } from 'mdb-react-ui-kit';
import './carrousel.css'

export default function App( { content } ) {

  let randomNumberOne = Math.floor(29*Math.random())+1
  let randomNumberTwo = Math.floor(29*Math.random())+1
  let randomNumberThree = Math.floor(29*Math.random())+1

  return (
     content.length ? <MDBCarousel className="car-core" showControls showIndicators>
     <MDBCarouselInner>
       <MDBCarouselItem className='active car-item'>
         <MDBCarouselElement id="actualidad" className="car-image" src={content[randomNumberOne].article.image} alt='carrousel-1' />
         <MDBCarouselCaption className="car-caption"> 
           <h5>{content[randomNumberOne].article.title}</h5>
           <p>{content[randomNumberOne].article.description}</p>
         </MDBCarouselCaption>
       </MDBCarouselItem>
       <MDBCarouselItem className="car-item">
         <MDBCarouselElement className="car-image" src={content[randomNumberTwo].article.image} alt='carrousel-2' />
         <MDBCarouselCaption className="car-caption">
           <h5>{content[randomNumberTwo].article.title}</h5>
           <p>{content[randomNumberTwo].article.description}</p>
         </MDBCarouselCaption>
       </MDBCarouselItem>
       <MDBCarouselItem className="car-item">
         <MDBCarouselElement className="car-image" src={content[randomNumberThree].article.image} alt='carrousel-3' />
         <MDBCarouselCaption className="car-caption"> 
           <h5>{content[randomNumberThree].article.title}</h5>
           <p>{content[randomNumberThree].article.description}</p>
         </MDBCarouselCaption>
       </MDBCarouselItem>
     </MDBCarouselInner>
 </MDBCarousel> : null
    
  );
}