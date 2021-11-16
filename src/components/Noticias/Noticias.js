import React, {useState, useEffect} from "react";
import './noticias.css'

const Noticias = () => {
  const [content, setContent] = useState([])
  const [article, setArticle] = useState({})

  useEffect(() => {
    const detailArticle = JSON.parse(localStorage.getItem("article"))
    setArticle(detailArticle)
      fetch(`https://newsapi.org/v2/top-headlines?country=ar&category=health&pageSize=3&apiKey=042321d9894d48c18f9f67312f3ca2ae`)
      .then(response => response.json())
      .then(json => setContent(json.articles))
  }, [])

  return (
      <>
        <div className="noticias-core-container">
          <div className="article-container">
            <h1 className="article-title">{article.title}</h1>
            <img className="article-image" src={article.urlToImage} alt="ImagenNoticia" />
            <p className="article-content">{article.description}</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi vero dolore quos ullam rerum recusandae non voluptas dolorem deleniti dolorum alias sint provident fugiat, aliquid odit sed harum, necessitatibus eius, esse expedita error ducimus vel! Harum dicta sed eum neque veritatis maiores, sit sapiente tenetur quibusdam blanditiis delectus eligendi numquam recusandae dolores, laborum enim corrupti voluptate ducimus eveniet error adipisci eius quis. Nobis quae distinctio architecto dicta, deleniti vel optio exercitationem cumque non eligendi inventore quod aspernatur aliquam asperiores error sunt natus tempore ex beatae fugit saepe veritatis? Voluptates explicabo veniam nostrum, iusto quaerat dolore deserunt animi aliquid? Vel, pariatur?</p>
          </div>
          <div>
          {
            content.length > 0?content.map(noticia =>
              (<div className="cards-container">
                <div className="card-artesanal">
                  <img className="card-image" src={noticia.urlToImage} alt="ImagenCard" />
                  <h6 className="card-title">{noticia.title}</h6>
                </div>
              </div>)
              ):<h4>Cargando noticias</h4>
          }
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
