import React, { useState, useEffect } from "react"
import './news.css'

const Noticias = () => {

  const [content, setContent] = useState([])
  const [article, setArticle] = useState({})

  useEffect(() => {
    const detailArticle = JSON.parse(localStorage.getItem("article"))
    setArticle(detailArticle)
    fetch('http://localhost:8000/get-news')
      .then(response => response.json())
      .then(json => setContent(json))
  }, [])

  

  return (
      <>
        <div className="noticias-core-container">
          <div className="article-container">
            <h1 className="article-title">{article.title}</h1>
            <p className="article-subtitle">{article.description}</p>
            <span className="article-tag">{article.date}</span>
            <img className="article-image" src={article.image} alt="ImagenNoticia" />
            <p className="article-content">{article.newsBody}</p>
          </div>
          <div className="cards-container">
          {
            content.length > 0?content.slice(10,13).map(noticia =>
              (<div>
                <div className="card-artesanal">
                  <img className="card-image" src={noticia.article.image} alt="ImagenCard" />
                  <h6 className="card-title">{noticia.article.title}</h6>
                </div>
              </div>)
              ):<h4>Cargando noticias</h4>
          }
          </div>
        </div>
      </>
  );
};

export default Noticias;