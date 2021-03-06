import React from 'react'
import './news-admin.css'
import imgArticles from '../../images/news.png'
import {useState} from 'react'
import { useEffect } from 'react';
import { useForm } from 'react-hook-form'

function NewsAdminPage() {
  const { register, handleSubmit } = useForm();
  const [btnSearch,setBtnSearch] = useState(false)
  const [txtTitle,setTxtTitle] = useState("")
  const [imgArticle,setImgArticle] = useState("")
  const [txtArticle,setTxtArticle] = useState("")
  const [txtDescription, setTxtDescription] = useState("")
  const [txtCategory, setTxtCategory] = useState("")
  const [txtSearch,setTxtSearch] = useState("")
  const txtAutor = localStorage.getItem('_id')
  const [newsById,setNewsById] = useState({})
  const [news, setNews] = useState([])
  const [searchList, setSearchList] = useState([])
  const baseURL = process.env.REACT_APP_DB_CONNECTION
 
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
    setTxtDescription(query.article.description)
    setTxtCategory(query.article.category)
    setNewsById(query)
  } 

  const handleSearch = () => {
    fetch(`${baseURL}/news/`+ txtSearch)
    .then(response => response.json())
    .then(response => setSearchList(response))
    setBtnSearch(true)
  }

  const handleNews = () => {fetch(`${baseURL}/get-news`)
  .then(response => response.json())
  .then(response => setNews(response))
  .catch(err => {
    console.log(err.message)
  })}
  
  useEffect( () => {
    handleNews()
  })

  const addArticle = data => {
    const body = {
      title: data.txtTitle,
      image: data.imgArticle,
      newsBody: data.txtArticle,
      date: dteToday,
      autor_id: txtAutor,
      description: data.txtDescription,
      category: data.txtCategory
    }
    
    fetch(`${baseURL}/create-news`,{
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
    event.preventDefault()
    const body = {
      title: txtTitle,
      image: imgArticle,
      newsBody: txtArticle,
      date: dteToday,
      autor_id: txtAutor,
      description: txtDescription,
      category: txtCategory
    }

    fetch(`${baseURL}/news/${newsById.article._id}`,{
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

  const deleteArticle = (newsById) => {
    fetch(`${baseURL}/news/${newsById.article._id}`,{
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
      reload()
  } 
  
  return (
    <div className="sectionArticles">
      {/* TITULO E ICONO */}
      <div className="title-container"> 
        <img className="imgArticles" src={imgArticles} alt="imgArticles" width="60 px" height="60 px" />
        <label className="lblArticles">Art??culos</label>
      </div>
      {/* BUSCAR */}
      <div className="d-flex align-items-center justify-content-around search-container">
        <div ></div>
        {/* BUSCAR ARTICULO */}
        <div className="d-flex col-4 input-search-container">
          <input type="text" className="txtSearch" placeholder="Ingrese una palabra relacionada al art??culo" id="txtSearch" onChange={(event) => {
            setTxtSearch(event.target.value)
            setBtnSearch(false)
          }}/> 
          <button id="btnSearchNews" type="button" className="btn btn-link" onClick={handleSearch}><i className="bi bi-search"></i></button>          
        </div>
        <div className="d-flex">
          <button type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#mdlNewArticles" onClick={(event) => cleanForm()}>
            <i className="bi bi-plus-circle"></i>
          </button>
        </div>
      </div>

      {/* AGREGAR ARTICULO */}
      <div className="modal fade" id="mdlNewArticles" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Nuevo Art??culo</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="frmNewArticles" onSubmit={handleSubmit(addArticle)}>
                <div className="d-flex justify-content-between div-new-article">
                  <div className="mb-3 col-8 div-new-article-item">
                    <label className="form-label">T??tulo</label>
                    <input type="text" className="form-control" id="txtTitle" minLength="3" maxLength="100" required {...register("txtTitle")}/>
                  </div>
                  <div className="mb-3 col-3 div-new-article-item">
                    <label className="form-label">Imagen</label>
                    <input type="url" className="form-control" id="imgArticle" required {...register("imgArticle")}/>
                  </div>
                </div>
                <div className="d-flex justify-content-between div-new-article">
                  <div className="mb-3 col-8 div-new-article-item">
                    <label className="form-label">Descripci??n</label>
                    <input type="text" className="form-control" id="txtDescription" minLength="10" maxLength="200" required {...register("txtDescription")}/>
                  </div>
                  <div className="mb-3 col-3 div-new-article-item">
                    <label className="form-label">Categor??a</label>
                    <select defaultValue='sports' className="form-control" id="txtCategory" required {...register("txtCategory")}>
                      <option value="sports">Deportes</option>
                      <option value="politics">Pol??tica</option>
                      <option value="economy">Econom??a</option>
                      <option value="entertainment">Entretenimiento</option>
                      <option value="society">Sociedad</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex justify-content-between div-new-article">
                  <div className="mb-3 col-8 div-new-article-item">
                    <label className="form-label">Cuerpo de la noticia</label>
                    <textarea type="textarea" className="form-control txtArticle" id="txtArticle" minLength="10" maxLength="700" required {...register("txtArticle")}/>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <button type="submit" id="btnSaveUser" className="btn btn-primary">Guardar</button>
                </div>    
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* EDITAR ARTICULO */}
      <div className="modal fade" id="mdlEditArticles" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Editar art??culo</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="frmEditArticles" onSubmit={editArticle}>
                <div className="d-flex justify-content-between div-edit-article">
                  <div className="mb-3 col-8 div-edit-article-item">
                    <label className="form-label">T??tulo</label>
                    <input type="text" className="form-control" id="txtTitle" onChange={(event) => 
                      setTxtTitle(event.target.value)} value={txtTitle} minLength="3" maxLength="40" required/>
                  </div>
                  <div className="mb-3 col-3 div-edit-article-item">
                    <label className="form-label">Imagen</label>
                    <input type="url" className="form-control" id="imgArticle" onChange={(event) => 
                      setImgArticle(event.target.value)} value={imgArticle} />
                  </div>
                </div>
                <div className="d-flex justify-content-between div-edit-article">
                  <div className="mb-3 col-8 div-edit-article-item">
                    <label className="form-label">Descripci??n</label>
                    <input type="text" className="form-control" id="txtDescription" onChange={(event) =>
                       setTxtDescription(event.target.value)} value={txtDescription} minLength="10" maxLength="200" required/>
                  </div>
                  <div className="mb-3 col-3 div-edit-article-item">
                    <label className="form-label">Categor??a</label>
                    <select className="form-control" id="txtCategory" onChange={(event) => 
                      setTxtCategory(event.target.value)} value={txtCategory} >
                      <option value="sports">Deportes</option>
                      <option value="politics">Pol??tica</option>
                      <option value="economy">Econom??a</option>
                      <option value="entertainment">Entretenimiento</option>
                      <option value="society">Sociedad</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex justify-content-between div-edit-article">
                  <div className="mb-3 col-8 div-edit-article-item">
                    <label className="form-label">Cuerpo de la noticia</label>
                    <textarea type="textarea" className="form-control txtArticle" id="txtArticle" onChange={(event) => 
                      setTxtArticle(event.target.value)} value={txtArticle} minLength="10" maxLength="700" required/>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <button type="submit" id="btnSaveUser" className="btn btn-primary">Guardar cambios</button>
                </div>    
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* VER ARTICULO */}
      <div className="modal fade" id="mdlViewArticles" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Art??culo</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form className="frmViewArticles">
                <div className="d-flex justify-content-between div-view-article">
                  <div className="mb-3 col-8 div-view-article-item">
                    <label className="form-label">T??tulo</label>
                    <input type="text" className="form-control" id="txtName" onChange={(event) => setTxtTitle(event.target.value)} value={txtTitle} disabled/>
                  </div>
                  <div className="mb-3 col-3 div-view-article-item">
                    <label className="form-label">Imagen</label>
                    <input type="text" className="form-control" id="imgArticle" onChange={(event) => setImgArticle(event.target.value)} value={imgArticle} disabled/>
                  </div>
                </div>
                <div className="d-flex justify-content-between div-edit-article">
                  <div className="mb-3 col-8 div-edit-article-item">
                    <label className="form-label">Descripcion</label>
                    <input type="text" className="form-control" id="txtDescription" onChange={(event) => setTxtDescription(event.target.value)} value={txtDescription} disabled/>
                  </div>
                  <div className="mb-3 col-3 div-edit-article-item">
                    <label className="form-label">Categor??a</label>
                    <input type="text" className="form-control" id="txtCategory" onChange={(event) => setTxtCategory(event.target.value)} value={txtCategory} disabled/>
                  </div>
                </div>
                <div className="d-flex justify-content-between div-view-article">
                  <div className="mb-3 col-8 div-view-article-item">
                    <label className="form-label">Cuerpo de la noticia</label>
                    <textarea type="textarea" className="form-control txtArticle" id="txtArticle" onChange={(event) => setTxtArticle(event.target.value)} value={txtArticle} disabled/>
                  </div>
                </div>  
              </form> 
            </div>
          </div>
        </div>
      </div>
      
      {/* ELIMINAR USUARIO */}
      <div class="modal" id="mdlDeleteArticles" tabIndex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Eliminar Art??culo</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>??Est?? seguro/a que desea eliminar el registro?</p>
            </div>
            <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>,
                  <button type="button" class="btn btn-primary" onClick={(event) => deleteArticle(newsById)} >Confirmar</button>
            </div>
          </div>
        </div>
      </div>

      {/* MOSTRAR ARTICULO */}
      <div className="table-core-container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">T??tulo</th>
              <th scope="col">Autor</th>
              <th scope="col">Fecha</th>
              <th scope="col">Categor??a</th>
            </tr>
          </thead>
          <tbody>
           
           {txtSearch !== "" && btnSearch === true?
              searchList.length>0?searchList.map((query, key) => (
                <tr key={key}> 
                  <th scope="row">{query.article.title}</th>
                  <td>{`${query.autor.name}  ${query.autor.lastName}`}</td>
                  <td>{query.article.date}</td>
                  <td>{query.article.category}</td>
                  <td><button data-bs-toggle="modal" data-bs-target="#mdlViewArticles" onClick={(event) => fillForm(query)}><i className="bi bi-eye"></i></button></td>
                  <td><button data-bs-toggle="modal" data-bs-target="#mdlEditArticles" onClick={(event) => fillForm(query)}><i className="bi bi-pencil"></i></button></td>
                  <td><button data-bs-toggle="modal" data-bs-target="#mdlDeleteArticles" onClick={(event) =>
                  setNewsById(query)} ><i className="bi bi-x-lg"></i></button></td>
                </tr>
              )): <tr><td className="loading-content">No se encontraron registros relacionados a la b??squeda</td></tr>
            : news.length>0?news.map((query, key) => (
              <tr key={key}> 
                <th scope="row">{query.article.title}</th>
                <td>{`${query.autor.name}  ${query.autor.lastName}`}</td>
                <td>{query.article.date}</td>
                <td>{query.article.category}</td>
                <td><button data-bs-toggle="modal" data-bs-target="#mdlViewArticles" onClick={(event) => fillForm(query)}><i className="bi bi-eye"></i></button></td>
                <td><button data-bs-toggle="modal" data-bs-target="#mdlEditArticles" onClick={(event) => fillForm(query)}><i className="bi bi-pencil"></i></button></td>
                <td><button data-bs-toggle="modal" data-bs-target="#mdlDeleteArticles" onClick={(event) =>
                  setNewsById(query)} ><i className="bi bi-x-lg"></i></button></td>
              </tr>
            )): <tr><td className="loading-content">Cargando...</td></tr>}
          </tbody>
        </table>  
      </div>
    </div>
  )
}

export default NewsAdminPage