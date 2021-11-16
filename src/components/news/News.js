import React, { useState, useEffect } from "react"
import './news.css'

const Noticias = () => {
  const [content, setContent] = useState([])
  const [article, setArticle] = useState({})

  useEffect(() => {
    const detailArticle = JSON.parse(localStorage.getItem("article"))
    setArticle(detailArticle)
    fetch(`https://newsapi.org/v2/top-headlines?country=ar&category=sports&pageSize=3&apiKey=7eb74fa920534eb3a215300069d7b2c4`)
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
          <div className="cards-container">
          {
            content.length > 0?content.map(noticia =>
              (<div>
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
  );
};

export default Noticias;