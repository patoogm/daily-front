import React, { useState, useEffect } from "react"
import './news.css'

const Noticias = () => {

  const [content, setContent] = useState([])
  const [article, setArticle] = useState({})
  const baseURL = process.env.REACT_APP_DB_CONNECTION
  const randomNumber = Math.floor(30*Math.random())+1
  const randomNumberPlus = randomNumber + 3

  useEffect(() => {
    const detailArticle = JSON.parse(localStorage.getItem("article"))
    setArticle(detailArticle)
    fetch(`${baseURL}/get-news`)
      .then(response => response.json())
      .then(json => setContent(json))
  }, [baseURL])

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
            content.length > 0 ?
             content.slice(randomNumber,randomNumberPlus).map(noti =>
              (
              <a key={noti.article._id} className="letra" href={`/article/${noti.article.title.replace(/%\s/g, '_')}`}>
                <div className="card-artesanal"  onClick={()=>{ localStorage.setItem("article", JSON.stringify(noti.article))}}>
                  <img className="card-image" src={noti.article.image} alt="ImagenCard" />
                  <h6 className="card-title">{noti.article.title}</h6>
                </div>
              </a>)
              )
            :
            <h4>Cargando noticias</h4>
          }
          </div>
        </div>
      </>
  );
};

export default Noticias;