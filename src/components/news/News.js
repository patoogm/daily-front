import React, { useState, useEffect } from "react"
import './news.css'

const Noticias = () => {
  let apiURL = 'https://api.newscatcherapi.com/v2/'
  let apiKey = 'xb_wthuPYwUjQ35iPMKI6dKwF7FD0CJxLffYQ_wCm0g'

  const [content, setContent] = useState([])
  const [article, setArticle] = useState({})

  useEffect(() => {
    const detailArticle = JSON.parse(localStorage.getItem("article"))
    setArticle(detailArticle)
    fetch(`${apiURL}latest_headlines?countries=AR&page_size=3`,{
      method: 'GET',
      headers: {
        'x-api-key':`${apiKey}`
      }
    })
      .then(response => response.json())
      .then(json => setContent(json.articles))
  }, [])

  return (
      <>
        <div className="noticias-core-container">
          <div className="article-container">
            <h1 className="article-title">{article.title}</h1>
            <p className="article-subtitle">{article.excerpt}</p>
            <span className="article-tag">{article.published_date}</span>
            <img className="article-image" src={article.media} alt="ImagenNoticia" />
            <p className="article-content">{article.summary}</p>
          </div>
          <div className="cards-container">
          {
            content.length > 0?content.map(noticia =>
              (<div>
                <div className="card-artesanal">
                  <img className="card-image" src={noticia.media} alt="ImagenCard" />
                  <h6 className="card-title">{noticia.title}</h6>
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