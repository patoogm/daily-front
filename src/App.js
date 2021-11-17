import './app.css'
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Carrousel from './components/carrousel/Carrousel';
import Card1 from './components/cards/Card1';
import Advertising from './components/advertising/Advertising';
import MobileMenu from "./components/mobileMenu/MobileMenu";

function App() {
  return (
    <div className="App">
      <MobileMenu />
      <Header />
      <Navbar />
      <Carrousel />
      <div className="app-categorias">Últimas Noticias</div>
      <Card1 section="nation"/>
      <h2 className="app-categorias">Deportes</h2>
      {/* <Card1 section="sports"/>
      <Advertising />
      <h2 className="p-4">Entretenimiento</h2>
      <Card1 section="entertainment"/>
      <h2 className="p-4">Negocios</h2>
      <Card1 section="business"/>
      <h2 className="p-4">Tecnología</h2>
      <Card1 section="technology"/> */}
      <Footer />
    </div>
  );
}

export default App;
