import react from "react";
import Header from "./components/header/Header";
import '../src/components/header/header.css'
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Carrousel from './components/carrousel/Carrousel';
import Title1 from './components/titles/Title1';
import Card1 from './components/cards/Card1';
import Title2 from './components/titles/Title2';
import Card2 from './components/cards/Card2';
import Advertising from './components/advertising/Advertising';
import Title3 from './components/titles/Title3';
import Card3 from './components/cards/Card3';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Carrousel />
      <Title1 />
      <Card1 />
      <Title2 />
      <Card2 />
      <Advertising />
      <Title3 />
      <Card3 />
      <Footer />
    </div>
  );
}

export default App;
