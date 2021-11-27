import React from 'react'
import './news-admin.css'
import imgArticles from '../../images/news.png'
import {useState} from 'react'
import { useEffect } from 'react';
import { useForm } from 'react-hook-form'


function NewsAdminPage() {
  const { register, handleSubmit } = useForm();
  const [newsById,setNewsById] = useState({})
  const [txtTitle,setTxtTitle] = useState("")
  const [imgArticle,setImgArticle] = useState("")
  const [txtArticle,setTxtArticle] = useState("")

  const txtAutor = localStorage.getItem('_id')

  const [news, setNews] = useState([])
 
  const getCurrentDate = () => {
    let newDate = new Date()
    let date = newDate.getDate()
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear()
    const currentDate = `${date}/${month<10?`0${month}`:`${month}`}/${year}`
    return currentDate
  }

  const dteToday = getCurrentDate()

  const cleanForm = (query) => {
    setTxtTitle("")
    setImgArticle("")
    setTxtArticle("")
  }
  const fillForm = (query) => {
    setTxtTitle(query.article.title)
    setTxtArticle(query.article.newsBody)
    setImgArticle(query.article.image)
    setNewsById(query)
  } 

  const handleNews = () => {fetch('http://localhost:8000/get-news')
  .then(response => response.json())
  .then(response => setNews(response))
  .catch(err => {
    console.log(err.message)
  })}
  
  useEffect(() => {
    handleNews()
  }, [])

  const addArticle = data => {
    const body = {
      title: data.txtTitle,
      image: data.imgArticle,
      newsBody: data.txtArticle,
      date: dteToday,
      autor_id: txtAutor
    }
    
    fetch('http://localhost:8000/create-news',{
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type':'application/json;charset=UTF-8'
      }
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    reload()
  }

  const reload = () => {
    setTimeout(function(){
      window.location.reload()
    },500)
  }

  const editArticle = (event) => {
    const body = {
      title: txtTitle,
      image: imgArticle,
      newsBody: txtArticle,
      date: dteToday,
      autor_id: txtAutor
    }

    fetch('http://localhost:8000/news/'+newsById.article._id,{
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-type':'application/json;charset=UTF-8'
      }
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    reload()
  } 

  const deleteArticle = (query) => {
    fetch('http://localhost:8000/news/'+ query.article._id,{
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
      reload()
  } 
  
  return (
    <div className="sectionArticles">
      <div className="title-container"> 
        <img className="imgArticles" src={imgArticles} alt="imgArticles" width="60 px" height="60 px" />
        <label className="lblArticles">Articles</label>
      </div>
      <div className="d-flex align-items-center justify-content-around">
        <div className="dropdown">
          <button className="btn btn-link dropdown-toggle" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="bi bi-funnel"></i>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><button className="dropdown-item">Born Date</button></li>
            <li><button className="dropdown-item">Name</button></li>
            <li><button className="dropdown-item">Type</button></li>
          </ul>
        </div>
        <div className="d-flex col-4 input-search-container">
          <input type="text" className="txtSearch" id="txtSearch"/> 
          <button id="btnSearchNews" type="button" className="btn btn-link"><i className="bi bi-search"></i></button>          
        </div>
        <div className="d-flex">
          <button type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#mdlNewArticles" onClick={(event) => cleanForm()}>
            <i className="bi bi-plus-circle"></i>
          </button>
        </div>
      </div>

      <div className="modal fade" id="mdlNewArticles" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">New Article</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="frmNewArticles" onSubmit={handleSubmit(addArticle)}>
                <div className="d-flex justify-content-between div-new-article">
                  <div className="mb-3 col-8 div-new-article-item">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" id="txtTitle" required {...register("txtTitle")}/>
                  </div>
                  <div className="mb-3 col-3 div-new-article-item">
                    <label className="form-label">Image</label>
                    <input type="text" className="form-control" id="imgArticle" required {...register("imgArticle")}/>
                  </div>
                </div>
                <div className="d-flex justify-content-between div-new-article">
                  <div className="mb-3 col-8 div-new-article-item">
                    <label className="form-label">Article</label>
                    <textarea type="textarea" className="form-control txtArticle" id="txtArticle" required {...register("txtArticle")}/>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <button type="submit" id="btnSaveUser" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                </div>    
              </form>
            </div>
          </div>
        </div>
      </div>
      
    {/* EDIT ARTICLE */}
      <div className="modal fade" id="mdlEditArticles" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit article</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="frmEditArticles" onSubmit={editArticle}>
                <div className="d-flex justify-content-between div-edit-article">
                  <div className="mb-3 col-8 div-edit-article-item">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" id="txtName" onChange={(event) => setTxtTitle(event.target.value)} value={txtTitle}/>
                  </div>
                  <div className="mb-3 col-3 div-edit-article-item">
                    <label className="form-label">Image</label>
                    <input type="text" className="form-control" id="imgArticle" onChange={(event) => setImgArticle(event.target.value)} value={imgArticle}/>
                  </div>
                </div>
                <div className="d-flex justify-content-between div-edit-article">
                  <div className="mb-3 col-8 div-edit-article-item">
                    <label className="form-label">Article</label>
                    <textarea type="textarea" className="form-control txtArticle" id="txtArticle" onChange={(event) => setTxtArticle(event.target.value)} value={txtArticle}/>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <button type="submit" id="btnSaveUser" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                </div>    
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="mdlViewArticles" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Articles</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form className="frmViewArticles">
                <div className="d-flex justify-content-between div-view-article">
                  <div className="mb-3 col-8 div-view-article-item">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" id="txtName" onChange={(event) => setTxtTitle(event.target.value)} value={txtTitle} disabled/>
                  </div>
                  <div className="mb-3 col-3 div-view-article-item">
                    <label className="form-label">Image</label>
                    <input type="text" className="form-control" id="imgArticle" onChange={(event) => setImgArticle(event.target.value)} value={imgArticle} disabled/>
                  </div>
                </div>
                <div className="d-flex justify-content-between div-view-article">
                  <div className="mb-3 col-8 div-view-article-item">
                    <label className="form-label">Article</label>
                    <textarea type="textarea" className="form-control txtArticle" id="txtArticle" onChange={(event) => setTxtArticle(event.target.value)} value={txtArticle} disabled/>
                  </div>
                </div>  
              </form> 
            </div>
          </div>
        </div>
      </div>

      <div className="table-core-container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Título</th>
              <th scope="col">Autor</th>
              <th scope="col">Fecha</th>
              <th scope="col">Sección</th>
              <th scope="col">Vistas</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
           {news.length>0?news.map((query, key) => (
              <tr key={key}> 
                <th scope="row">{query.article.title}</th>
                <td>{`${query.autor.name}  ${query.autor.lastName}`}</td>
                <td>{query.article.date}</td>
                <td>Opinion</td>
                <td>192</td>
                <td><button data-bs-toggle="modal" data-bs-target="#mdlViewArticles" onClick={(event) => fillForm(query)}><i className="bi bi-eye"></i></button></td>
                <td><button data-bs-toggle="modal" data-bs-target="#mdlEditArticles" onClick={(event) => fillForm(query)}><i className="bi bi-pencil"></i></button></td>
                <td><button onClick={(event) => deleteArticle(query)}><i className="bi bi-x-lg"></i></button></td>
              </tr>
            )): <tr><td className="loading-content">Cargando...</td></tr>} 
          </tbody>
        </table>  
      </div>
    </div>
  )
}

export default NewsAdminPage
