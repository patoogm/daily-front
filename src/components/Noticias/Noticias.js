import React from "react";
import Image from "../../images/ejemploNoticia.jpeg";
import { useParams } from "react-router-dom";
import './noticias.css'

const Noticias = () => {
  const {titulo, imagen, contenido} = useParams();

  return (
      <>
        <div className="noticias-core-container">
          <div className="article-container">
            <h1 className="article-title">{titulo}</h1>
            <img className="article-image" src={Image} alt="ImagenNoticia" />
            <p className="article-content">{contenido}</p>
          </div>
          <div className="cards-container">
            <div className="card-artesanal">
              <img className="card-image" src={Image} alt="ImagenCard" />
              <h6 className="card-title">Este es el titulo de card</h6>
            </div>
            <div className="card-artesanal">
            <img className="card-image" src={Image} alt="ImagenCard" />
            <h6 className="card-title">Este es el titulo de card</h6>
            </div>
            <div className="card-artesanal">
            <img className="card-image" src={Image} alt="ImagenCard" />
            <h6 className="card-title">Este es el titulo de card</h6>
            </div>
            <div className="card-artesanal">
            <img className="card-image" src={Image} alt="ImagenCard" />
            <h6 className="card-title">Este es el titulo de card</h6>
            </div>
          </div>
        </div>
      </>






    // <div>
    //   <div className="d-flex flex-row mx-4">
    //     <div className="bg-dark text-white mx-auto col-7 p-3 card">
    //       <div>
    //         <h1 className="text-center">{title}</h1>
    //       </div>
    //       <div>
    //         <img src={urlToImage} className="img-fluid w-100"/>
    //       </div>
    //       <div>
    //         <p>{content}</p>
    //       </div>
    //     </div>
    //     <div className="d-flex flex-column justify-content-around mx-auto col-4 pl-5 card">
    //       <div className="bg-dark text-white p-3">
    //         <p className="h3 text-center">Noticia 1</p>
    //         <div className="text-left">
    //           <img src={Image} className="img-fluid"/>
    //           <p className="">
    //             Lorem ipsum dolor sit, amet consectetur adipisicing elit...{" "}
    //           </p>
    //         </div>
    //       </div>
    //       <div className="bg-dark text-white p-3">
    //         <p className="h3 text-center">Noticia 2</p>
    //         <div className="text-left">
    //           <img src={Image} className="img-fluid"/>
    //           <p className="">
    //             Lorem ipsum dolor sit, amet consectetur adipisicing elit...{" "}
    //           </p>
    //         </div>
    //       </div>
    //       <div className="bg-dark text-white p-3">
    //         <p className="h3 text-center">Noticia 3</p>
    //         <div className="text-left">
    //           <img src={Image} className="img-fluid"/>
    //           <p className="">
    //             Lorem ipsum dolor sit, amet consectetur adipisicing elit...{" "}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Noticias;
