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
  const baseURL = process.env.REACT_APP_DB_CONNECTION
  
  useEffect(() => {
    fetch(`${baseURL}/get-news`)
      .then((response) => response.json())
      .then((json) => setContent(json));
  }, [baseURL, content])
  
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
      <Carrousel content={content} />
      <div className="app-categorias" id="deportes">Deportes</div>
      <Card1 category={sports}/>
      <h2 className="app-categorias" id="politica">Política</h2>
      <Card1 category={politics}/>
      <Advertising />
      <h2 className="app-categorias" id="economia">Economía</h2>
      <Card1 category={economy}/>
      <h2 className="app-categorias" id="entretenimiento">Entretenimiento</h2>
      <Card1 category={entertainment}/>
      <h2 className="app-categorias" id="sociedad">Sociedad</h2>
      <Card1 category={society}/>
      <Footer />
    </div>
  );
}

export default App;