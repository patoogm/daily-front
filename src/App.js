import react from "react";
import Header from "./components/header/Header";
import '../src/components/header/header.css'
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Carrousel from './components/carrousel/Carrousel';
import Title1 from './components/titles/Title1';
import Card1 from './components/cards/Card1';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Carrousel />
      <Title1 />
      <Card1 />
      <Footer />
    </div>
  );
}

export default App;
