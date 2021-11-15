import React from 'react'
import './newsAdminPage.css'
import imgArticles from '../../images/news.png'
import imgEnter from '../../images/enter.png'
import imgEdit from '../../images/edit.png'
import imgDelete from '../../images/delete.png'
import {useState} from 'react'
import { useEffect } from 'react';


function NewsAdminPage() {
  const [newsById,setNewsById] = useState({})
  const [txtTitle,setTxtTitle] = useState("")
  const [imgArticle,setImgArticle] = useState("")
  const [txtArticle,setTxtArticle] = useState("")
  const txtAutor = '61808b30cf9c233a27508d2c'

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
    setNewsById(query)
  } 


  const handleNews = () => {fetch('http://localhost:8000/get-news')
    .then(response => response.json())
    .then(response => setNews(response))
  }
  
  useEffect(() => {
    handleNews()
  }, [])

  const addArticle = (event) => {
    const body = {
      title: txtTitle,
      image: imgArticle,
      newsBody: txtArticle,
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

    fetch('http://localhost:8000/'+newsById.article._id,{
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
    fetch('http://localhost:8000/'+ query.article._id,{
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
          <i class="bi bi-funnel"></i>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><button class="dropdown-item">Born Date</button></li>
            <li><button class="dropdown-item">Name</button></li>
            <li><button class="dropdown-item">Type</button></li>
          </ul>
        </div>
        <div className="d-flex col-4 input-search-container">
          <input type="text" className="txtSearch" id="txtSearch"/> 
          <button id="btnSearchNews" type="button" class="btn btn-link"><i className="bi bi-search"></i></button>          
        </div>
        <div className="d-flex">
          <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#mdlNewArticles" onClick={(event) => cleanForm()}>
            <i class="bi bi-plus-circle"></i>
          </button>
        </div>
      </div>

      <div className="modal fade" id="mdlNewArticles" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content mdlNewArticles">
            <div class="modal-header">
              <h5 class="modal-title">New Article</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="frmNewArticles" onSubmit={addArticle}>
                <div className="d-flex justify-content-between">
                  <div className="mb-3 col-8">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" id="txtName" onChange={(event) => setTxtTitle(event.target.value)} value={txtTitle}/>
                  </div>
                  <div className="mb-3 col-3">
                    <label className="form-label">Image</label>
                    <input type="file" className="form-control" id="imgArticle" onChange={(event) => setImgArticle(event.target.value)} value={imgArticle}/>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="mb-3 col-8">
                    <label className="form-label">Article</label>
                    <textarea type="textarea" className="form-control txtArticle" id="txtArticle" onChange={(event) => setTxtArticle(event.target.value)} value={txtArticle}/>
                  </div>
                  <div className="mb-3 col-3 txtArticle">
                    <img src="..." className="rounded float-start" alt="..."/> 
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

      <div className="modal fade" id="mdlEditArticles" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit article</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="frmEditArticles" onSubmit={editArticle}>
                <div className="d-flex justify-content-between">
                  <div className="mb-3 col-8">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" id="txtName" onChange={(event) => setTxtTitle(event.target.value)} value={txtTitle}/>
                  </div>
                  <div className="mb-3 col-3">
                    <label className="form-label">Image</label>
                    <input type="file" className="form-control" id="imgArticle" onChange={(event) => setImgArticle(event.target.value)} value={imgArticle}/>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="mb-3 col-8">
                    <label className="form-label">Article</label>
                    <textarea type="textarea" className="form-control txtArticle" id="txtArticle" onChange={(event) => setTxtArticle(event.target.value)} value={txtArticle}/>
                  </div>
                  <div className="mb-3 col-3 txtArticle">
                    <img src="..." className="rounded float-start" alt="..."/> 
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

      <div className="modal fade" id="mdlViewArticles" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Articles</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form className="frmViewArticles">
                <div className="d-flex justify-content-between">
                  <div className="mb-3 col-8">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" id="txtName" onChange={(event) => setTxtTitle(event.target.value)} value={txtTitle} disabled/>
                  </div>
                  <div className="mb-3 col-3">
                    <label className="form-label">Image</label>
                    <input type="file" className="form-control" id="imgArticle" onChange={(event) => setImgArticle(event.target.value)} value={imgArticle} disabled/>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="mb-3 col-8">
                    <label className="form-label">Article</label>
                    <textarea type="textarea" className="form-control txtArticle" id="txtArticle" onChange={(event) => setTxtArticle(event.target.value)} value={txtArticle} disabled/>
                  </div>
                  <div className="mb-3 col-3 txtArticle">
                    <img src="..." className="rounded float-start" alt="..."/> 
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
           {news.length>0?news.map((query) => (
              <tr> 
                <th scope="row">{query.article.title}</th>
                <td>{`${query.autor.name}  ${query.autor.lastName}`}</td>
                <td>{query.article.date}</td>
                <td>Opinion</td>
                <td>192</td>
                <td><button data-bs-toggle="modal" data-bs-target="#mdlViewArticles" onClick={(event) => fillForm(query)}><img src={imgEnter} alt="imgEnter" width="20 px" height="20 px" /></button></td>
                <td><button data-bs-toggle="modal" data-bs-target="#mdlEditArticles" onClick={(event) => fillForm(query)}><img src={imgEdit} alt="imgEdit" width="20 px" height="20 px" /></button></td>
                <td><button onClick={(event) => deleteArticle(query)}><img src={imgDelete} alt="imgDelete" width="20 px" height="20 px" /></button></td>
              </tr>
            )): <h1 className="loading-content">Cargando...</h1>} 
          </tbody>
        </table>  
      </div>
    </div>
  )
}

export default NewsAdminPage
