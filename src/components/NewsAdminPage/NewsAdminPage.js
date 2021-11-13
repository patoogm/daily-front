import React from 'react'
import './newsAdminPage.css'
import imgArticles from '../../images/news.png'
import imgSearch from '../../images/search.png'
import imgFilter from '../../images/filter.png'
import imgAdd from '../../images/add.png'
import imgEnter from '../../images/enter.png'
import imgEdit from '../../images/edit.png'
import imgDelete from '../../images/delete.png'
import {useState} from 'react'
import { useEffect } from 'react';


function NewsAdminPage() {
  const [data,setData] = useState({})
  const [txtTitle,setTxtTitle] = useState("")
  const [imgArticle,setImgArticle] = useState("")
  const [txtArticle,setTxtArticle] = useState("")
  
  const txtAutor = '618e527979f2caa05f562ce0'

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
  
  const handleNews = () => {fetch('http://localhost:8000/get-news')
  .then(response => response.json())
  .then(response => setNews(response))
  .catch(err => {
    console.log(err.message)
  })}
  
  useEffect(() => {
    handleNews()
  }, [])

  const addArticles = (event) => {
    const body = {
      title: txtTitle,
      image: imgArticle,
      newsBody: txtArticle,
      date: dteToday,
      autor_id: txtAutor
    }
    console.log(body)
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

  const editArticles = (event) => {
    const body = {
      title: txtTitle,
      image: imgArticle,
      newsBody: txtArticle,
      date: dteToday,
      autor_id: txtAutor
    }

    fetch('http://localhost:8000/'+data.article._id,{
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

  const cleanForm = (query) => {
    setTxtTitle("")
    setImgArticle("")
    setTxtArticle("")
    console.log(dteToday)
  }
  const fillForm = (query) => {
    setTxtTitle(query.article.title)
    setTxtArticle(query.article.newsBody)
    setData(query)
    console.log(query)
  } 

  const deleteArticles = (query) => {
    console.log(query.article)
    fetch('http://localhost:8000/'+ query.article._id,{
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
      reload()
  } 
  
  return (
    <div className="sectionArticles">
      <div> 
        <img className="imgArticles" src={imgArticles} alt="imgArticles" width="60 px" height="60 px" />
        <label className="lblArticles">Articles</label>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="dropdown">
          <a className="btn btn-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={imgFilter} alt="imgFilter" width="40 px" height="40 px" />
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><a class="dropdown-item" href="#">Born Date</a></li>
            <li><a class="dropdown-item" href="#">Name</a></li>
            <li><a class="dropdown-item" href="#">Type</a></li>
          </ul>
        </div>
        <div className="d-flex col-4">
          <input type="text" className="txtSearch" id="txtSearch"/> 
          <button id="btnSearchNews" type="button" class="btn btn-link"><img src={imgSearch} alt="imgSearch" width="40 px" height="40 px" /></button>
        </div>
        <div className="d-flex">
          <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#mdlNewArticles" onClick={(event) => cleanForm()}>
            <img src={imgAdd} alt="imgAdd" width="35 px" height="35 px" />
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
              <form className="frmNewArticles" onSubmit={addArticles}>
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
              <form className="frmEditArticles" onSubmit={editArticles}>
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

      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Article title</th>
              <th scope="col">Autor</th>
              <th scope="col">Release date</th>
              <th scope="col">Section</th>
              <th scope="col">Views</th>
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
                <td><a href="#" data-bs-toggle="modal" data-bs-target="#mdlViewArticles" onClick={(event) => fillForm(query)}><img src={imgEnter} alt="imgEnter" width="20 px" height="20 px" /></a></td>
                <td><a href="#" data-bs-toggle="modal" data-bs-target="#mdlEditArticles" onClick={(event) => fillForm(query)}><img src={imgEdit} alt="imgEdit" width="20 px" height="20 px" /></a></td>
                <td><a href="#" onClick={(event) => deleteArticles(query)}><img src={imgDelete} alt="imgDelete" width="20 px" height="20 px" /></a></td>
              </tr>
            )): <h1>Cargando</h1>} 
          </tbody>
        </table>  
      </div>
    </div>
  )
}

export default NewsAdminPage
