import React from "react";
import Header from "./components/header/Header";
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
      <h2 className="container p-4">Ultimas Noticias </h2>
      <Card1 />
      <h2 className="container p-4">Deportes </h2>
      <Card1 />
      <Advertising />
      <h2 className="container p-4">Politica </h2>
      <Card1 />
      <Footer />
    </div>
  );
}

export default App;
