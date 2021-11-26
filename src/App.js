import './app.css'
import {useState, useEffect} from 'react';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Carrousel from './components/carrousel/Carrousel';
import Card1 from './components/cards/Card1';
import Advertising from './components/advertising/Advertising';
import MobileMenu from "./components/mobileMenu/MobileMenu";

function App() {

  const [content, setContent] = useState([])
  
  
  const handleClick = async () => {
    const response = await fetch('http://localhost:8000/get-news')
    const json = await response.json()
    return setContent(json);
  }

  
  useEffect(() => {
    handleClick()   
  }, [])
  
  const sports = content.filter(noticia => noticia.article.category === 'sports')
  const politics = content.filter(noticia => noticia.article.category === 'politics')
  const economy = content.filter(noticia => noticia.article.category === 'economy')
  const entertainment = content.filter(noticia => noticia.article.category === 'entertainment')
  const society = content.filter(noticia => noticia.article.category === 'society')
  
  return (
    <div className="App">
      <MobileMenu />
      <Header />
      <Navbar />
      <Carrousel categoryOne={politics} categoryTwo={economy} categoryThree={sports} />
      <div className="app-categorias">Deportes</div>
      <Card1 category={sports}/>
      <h2 className="app-categorias">Política</h2>
      <Card1 category={politics}/>
      <Advertising />
      <h2 className="app-categorias">Economía</h2>
      <Card1 category={economy}/>
      <h2 className="app-categorias">Entretenimiento</h2>
      <Card1 category={entertainment}/>
      <h2 className="app-categorias">Sociedad</h2>
      <Card1 category={society}/>
      <Footer />
    </div>
  );
}

export default App;
