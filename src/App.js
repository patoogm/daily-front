import react from "react";
import Header from "./components/header/Header";
import '../src/components/header/header.css'
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Carrousel from './components/carrousel/Carrousel';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Carrousel/>
      <Footer />
    </div>
  );
}

export default App;
