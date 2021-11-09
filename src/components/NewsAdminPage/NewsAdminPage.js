import React from 'react'
import './newsAdminPage.css'
import imgArticles from './images/news.png'
import imgSearch from './images/search.png'
import imgFilter from './images/filter.png'
import imgAdd from './images/add.png'
import imgEnter from './images/enter.png'
import imgEdit from './images/edit.png'
import imgDelete from './images/delete.png'
import {useState} from 'react'


function NewsAdminPage() {
  const [txtTitle,setTxtTitle] = useState("")
  const [imgArticle,setImgArticle] = useState("")
  const [txtArticle,setTxtArticle] = useState("")
  const dteToday = "06/11/20"
  const txtAutor = "61816f436e837d143f7addbc"

  const [news, setNews] = useState([])

  setTimeout(() => {
    fetch('http://localhost:8000/get-news')
    .then(response => response.json())
    .then(response => setNews(response))
    .catch(err => {
      console.log(err.message)
    })
  },1000)

  

  const handleFrmNewArticles = (event) => {
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
          <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#mdlNewArticles">
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
              <form className="frmNewArticles" onSubmit={handleFrmNewArticles}>
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
                  <button type="submit" id="btnSaveUser" className="btn btn-primary">Save changes</button>
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
              <h5 class="modal-title">Edit user</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="frmEditArticles">
                <div className="d-flex justify-content-between">
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" class="form-control" id="txtName"/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" class="form-control" id="txtName"/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Last name</label>
                    <input type="text" class="form-control" id="txtLastName"/>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="mb-3">
                    <label className="form-label">Born date</label>
                    <input type="date" class="form-control" id="txtBornDate" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">D.N.I.</label>
                    <input type="text" class="form-control" id="txtDNI" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">User type</label>
                    <select className="form-control" id="txtSelect">
                      <option value="reader">Reader</option>
                      <option value="writer">Writer</option>
                      <option value="administrator">Administrator</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mb-3">
                    <label>Email address</label>
                    <input type="email" class="form-control" id="txtEmail" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" class="form-control" id="txtPassword" />
                  </div>
                  <div>
                    <button type="submit" id="btnSaveUser" className="btn btn-primary">Save changes</button>
                  </div>
                </div>    
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="mdlViewUsers" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">New user</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="frmNewUser">
                <div className="d-flex justify-content-between">
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" class="form-control" id="txtName"/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" class="form-control" id="txtName"/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Last name</label>
                    <input type="text" class="form-control" id="txtLastName"/>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="mb-3">
                    <label className="form-label">Born date</label>
                    <input type="date" class="form-control" id="txtBornDate" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">D.N.I.</label>
                    <input type="text" class="form-control" id="txtDNI" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">User type</label>
                    <select className="form-control" id="txtSelect">
                      <option value="reader">Reader</option>
                      <option value="writer">Writer</option>
                      <option value="administrator">Administrator</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mb-3">
                    <label>Email address</label>
                    <input type="email" class="form-control" id="txtEmail" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" class="form-control" id="txtPassword" />
                  </div>
                  <div>
                    <button type="submit" id="btnSaveUser" className="btn btn-primary">Save changes</button>
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
           {news.map((article) => (
              <tr> 
                <th scope="row">{article.title}</th>
                <td>{article.autor_id}</td>
                <td>{article.date}</td>
                <td>Opinion</td>
                <td>192</td>
                <td><a href="#" data-bs-toggle="modal" data-bs-target="#mdlViewUsers" ><img src={imgEnter} alt="imgEnter" width="20 px" height="20 px" /></a></td>
                <td><a href="#" data-bs-toggle="modal" data-bs-target="#mdlEditUsers"><img src={imgEdit} alt="imgEdit" width="20 px" height="20 px" /></a></td>
                <td><a href="#"><img src={imgDelete} alt="imgDelete" width="20 px" height="20 px" /></a></td>
              </tr>
            ))}
            <tr>
              <th scope="row">La razón que te traiciona</th>
              <td>Franco Pichilini</td>
              <td>16/02/2021</td>
              <td>Economía</td>
              <td>12</td>
              <td><img src={imgEnter} alt="imgEnter" width="20 px" height="20 px" /></td>
              <td><img src={imgEdit} alt="imgEdit" width="20 px" height="20 px" /></td>
              <td><img src={imgDelete} alt="imgDelete" width="20 px" height="20 px" /></td>
            </tr>
            <tr>              
              <th scope="row">Falabella se va del país</th>
              <td>Torcuato Pichirri</td>
              <td>16/02/2021</td>
              <td>Actualidad</td>
              <td>300</td>
              <td><img src={imgEnter} alt="imgEnter" width="20 px" height="20 px" /></td>
              <td><img src={imgEdit} alt="imgEdit" width="20 px" height="20 px" /></td>
              <td><img src={imgDelete} alt="imgDelete" width="20 px" height="20 px" /></td>
            </tr>
            <tr>
              <th scope="row">El nuevo Titanic</th>
              <td>Torcuato Pichirri</td>
              <td>16/02/2021</td>
              <td>Economía</td>
              <td>325</td>
              <td><img src={imgEnter} alt="imgEnter" width="20 px" height="20 px" /></td>
              <td><img src={imgEdit} alt="imgEdit" width="20 px" height="20 px" /></td>
              <td><img src={imgDelete} alt="imgDelete" width="20 px" height="20 px" /></td>
            </tr>
            <tr>
              <th scope="row">La fortaleza perdida</th>
              <td>Franco Pichilini</td>
              <td>16/02/2021</td>
              <td>Literatura</td>
              <td>12</td>
              <td><img src={imgEnter} alt="imgEnter" width="20 px" height="20 px" /></td>
              <td><img src={imgEdit} alt="imgEdit" width="20 px" height="20 px" /></td>
              <td><img src={imgDelete} alt="imgDelete" width="20 px" height="20 px" /></td>
            </tr>
            <tr>              
              <th scope="row">Nos vendieron espejitos de colores</th>
              <td>Marcio Imola</td>
              <td>15/02/2021</td>
              <td>Economía</td>
              <td>192</td>
              <td><a href="#" data-bs-toggle="modal" data-bs-target="#mdlViewUsers" ><img src={imgEnter} alt="imgEnter" width="20 px" height="20 px" /></a></td>
              <td><a href="#" data-bs-toggle="modal" data-bs-target="#mdlEditUsers"><img src={imgEdit} alt="imgEdit" width="20 px" height="20 px" /></a></td>
              <td><a href="#"><img src={imgDelete} alt="imgDelete" width="20 px" height="20 px" /></a></td>
            </tr>
            <tr>
              <th scope="row">La marea obsecuente</th>
              <td>Geronimo Calibuto</td>
              <td>15/02/2021</td>
              <td>Opinion</td>
              <td>192</td>
              <td><a href="#" data-bs-toggle="modal" data-bs-target="#mdlViewUsers" ><img src={imgEnter} alt="imgEnter" width="20 px" height="20 px" /></a></td>
              <td><a href="#" data-bs-toggle="modal" data-bs-target="#mdlEditUsers"><img src={imgEdit} alt="imgEdit" width="20 px" height="20 px" /></a></td>
              <td><a href="#"><img src={imgDelete} alt="imgDelete" width="20 px" height="20 px" /></a></td>
            </tr>
            <tr>
              <th scope="row">El chori radical</th>
              <td>Geronimo Calibuto</td>
              <td>15/02/2021</td>
              <td>Política</td>
              <td>192</td>
              <td><a href="#" data-bs-toggle="modal" data-bs-target="#mdlViewUsers" ><img src={imgEnter} alt="imgEnter" width="20 px" height="20 px" /></a></td>
              <td><a href="#" data-bs-toggle="modal" data-bs-target="#mdlEditUsers"><img src={imgEdit} alt="imgEdit" width="20 px" height="20 px" /></a></td>
              <td><a href="#"><img src={imgDelete} alt="imgDelete" width="20 px" height="20 px" /></a></td>
            </tr>
            <tr>              
              <th scope="row">Los 27 alimentos necesarios para prevenir el cancer</th>
              <td>Rafael Peña</td>
              <td>16/02/2021</td>
              <td>Salud</td>
              <td>127</td>
              <td><img src={imgEnter} alt="imgEnter" width="20 px" height="20 px" /></td>
              <td><img src={imgEdit} alt="imgEdit" width="20 px" height="20 px" /></td>
              <td><img src={imgDelete} alt="imgDelete" width="20 px" height="20 px" /></td>
            </tr>
            <tr>
              <th scope="row">Rodrigo De Paul vuelve al banco</th>
              <td>Ernesto Zelarayan</td>
              <td>16/02/2021</td>
              <td>Deportes</td>
              <td>1028</td>
              <td><img src={imgEnter} alt="imgEnter" width="20 px" height="20 px" /></td>
              <td><img src={imgEdit} alt="imgEdit" width="20 px" height="20 px" /></td>
              <td><img src={imgDelete} alt="imgDelete" width="20 px" height="20 px" /></td>
            </tr>
            <tr>
              <th scope="row">Patagonia abre nueva sucursal en Tucumán</th>
              <td>Ernesto Zelarayan</td>
              <td>17/02/2021</td>
              <td>Actualidad</td>
              <td>111</td>
              <td><img src={imgEnter} alt="imgEnter" width="20 px" height="20 px" /></td>
              <td><img src={imgEdit} alt="imgEdit" width="20 px" height="20 px" /></td>
              <td><img src={imgDelete} alt="imgDelete" width="20 px" height="20 px" /></td>
            </tr>
            <tr>              
              <th scope="row">Los espíritus lanzaron nuevo disco</th>
              <td>Pablo Guyot</td>
              <td>17/02/2021</td>
              <td>Musica</td>
              <td>254</td>
              <td><img src={imgEnter} alt="imgEnter" width="20 px" height="20 px" /></td>
              <td><img src={imgEdit} alt="imgEdit" width="20 px" height="20 px" /></td>
              <td><img src={imgDelete} alt="imgDelete" width="20 px" height="20 px" /></td>
            </tr>
          </tbody>
        </table>  
      </div>
    </div>
  )
}

export default NewsAdminPage
