import react from "react";
import Header from "./components/header/Header";
import '../src/components/header/header.css'
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Carrousel from './components/carrousel/Carrousel';
import Card1 from './components/cards/Card1';
import Advertising from './components/advertising/Advertising';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Carrousel />
      <h2 className="container">Ultimas Noticias </h2>
      <Card1 />
      <h2 className="container">Deportes </h2>
      <Card1 />
      <Advertising />
      <h2 className="container">Politica </h2>
      <Card1 />
      <Footer />
    </div>
  );
}

export default App;
