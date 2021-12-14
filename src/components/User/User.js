import React from 'react'
import './user.css'
import imgUser from '../../images/user.png'
import {useState, useEffect} from 'react'

function User() {
  const [userById,setUserById] = useState({})
  const [news, setNews] = useState([])
  const [users,setUsers] = useState ([])
  const [searchList,setSearchList] = useState ([])
  const [txtName,setTxtName] = useState("")
  const [txtLastName,setTxtLastName] = useState("")
  const [txtDni,setTxtDni] = useState("")
  const [txtEmail,setTxtEmail] = useState("")
  const [txtPassword,setTxtPassword] = useState("")
  const [txtRole, setTxtRole] = useState("reader")
  const [txtSearch, setTxtSearch] = useState("")
  const [btnSearch, setBtnSearch] = useState(false)
  const [userSelected,setUserSelected] = useState([])
  const [newsByAutor,setNewsByAutor] = useState([])
  const baseURL = process.env.REACT_APP_DB_CONNECTION

  const cleanForm = (user) => {
    setTxtName("")
    setTxtLastName("")
    setTxtDni("")
    setTxtEmail("")
    setTxtPassword("")
  }
  const fillForm = (user) => {
    setUserById(user)
    setTxtName(user.name)
    setTxtLastName(user.lastName)
    setTxtDni(user.dni)
    setTxtEmail(user.email)
    setTxtPassword(user.password)
    setTxtRole(user.role)
  } 

  const handleSearch = () => {
    fetch(`${baseURL}/users/`+txtSearch)
    .then(response => response.json())
    .then(response => setSearchList(response))
    setBtnSearch(true)
  }

  const handleUsers = () => {
    fetch(`${baseURL}/get-users`)
    .then(response => response.json())
    .then(response => setUsers(response))
  }
  
  const reload = () => {
    setTimeout(function(){
      window.location.reload()
    }, 500)
  }

  const addUser = (event) => {
    event.preventDefault()
    const body = {
      name: txtName,
      lastName: txtLastName,
      dni: txtDni,
      email: txtEmail,
      password: txtPassword,
      role: txtRole
    }
    fetch(`${baseURL}/create-users`,{
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type':'application/json;charset=UTF-8',
      }
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    reload()
  }


  const editUser = (event) => {
    event.preventDefault()
    const body = {
      name: txtName,
      lastName: txtLastName,
      dni: txtDni,
      email: txtEmail,
      password: txtPassword,
      role: txtRole
    }
    fetch(`${baseURL}/`+ userById._id,{
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

  const handleNews = () => {fetch(`${baseURL}/get-news`)
    .then(response => response.json())
    .then(response => setNews(response))
  .catch(err => {
    console.log(err.message)
  })}

  const openDeleteModal = (user) => {
    setNewsByAutor(news.filter(noticia => noticia.article.autor_id === user._id))
    setUserSelected(user)
  }

  const deleteUser = (user) => {
    fetch(`${baseURL}/`+ user._id,{
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
      reload()
  } 

  useEffect(() => {
    handleUsers()
    handleNews()
  })

  return (
    <div className="sectionUsers">
      {/* TITULO E ICONO */}
      <div className="title-container"> 
        <img src={imgUser} alt="imgUser" width="60 px" height="60 px" />
        <label className="lblUsers">Usuarios</label>
      </div>
      {/* BUSCAR USUARIO */}
      <div className="d-flex align-items-center justify-content-between search-user-container">
        <div>
         </div>
        <div className="d-flex col-4 input-search-container">
          <input type="text" placeholder="Enter a surname" className="txtSearch" id="txtSearch" onChange={(event) => {
            setTxtSearch(event.target.value)
            setBtnSearch(false)  
          }}/> 
          <button id="btnSearchNews" type="button" className="btn btn-link" onClick={handleSearch}><i className="bi bi-search"></i></button>
        </div>
        <div className="d-flex">
          <button type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#mdlAddUsers" onClick={(event) => cleanForm()}>
            <i className="bi bi-plus-circle"></i>
          </button>
        </div>
      </div>
       {/* AGREGAR USUARIO */}
      <div className="modal fade" id="mdlAddUsers" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Nuevo Usuario</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="frmNewUser" onSubmit={addUser}>
                <div className="d-flex justify-content-between div-new-user">
                  <div className="mb-3 div-new-user-item">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="txtName" onChange={(event) => 
                      setTxtName(event.target.value)} value={txtName}  maxLength="20" required/>
                  </div>
                  <div className="mb-3 div-new-user-item">
                    <label className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="txtLastName" onChange={(event) => 
                      setTxtLastName(event.target.value)} value={txtLastName}  maxLength="20" required/>
                  </div>
                  <div className="mb-3 div-new-user-item">
                    <label className="form-label">D.N.I.</label>
                    <input type="number" className="form-control txtDNI" id="txtDNI1" title="El DNI debe tener 8 cifras" onChange={(event) => 
                      setTxtDni(event.target.value)} value={txtDni} min="1000000" max="99999999" required/>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center div-new-user">
                  <div className="mb-3 div-new-user-item">
                    <label className="form-label">Tipo de usuario</label>
                    <select value={txtRole} className="form-control" id="txtSelect" onChange={(event) => 
                      setTxtRole(event.target.value)}>
                      <option value="reader">reader</option>
                      <option value="writer">writer</option>
                      <option value="admin">admin</option>
                    </select>
                  </div>
                  <div className="mb-3 col-5 div-new-user-item">
                    <label className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="txtEmail" aria-describedby="emailHelp" onChange={(event) => 
                      setTxtEmail(event.target.value)} value={txtEmail}  maxLength="30" required/>
                  </div>
                  <div className="mb-3 div-new-user-item">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="txtPassword" onChange={(event) => 
                      setTxtPassword(event.target.value)} value={txtPassword} maxLength="20" required/>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <div>
                    <button type="submit" id="btnSaveUser1" className="btn btn-primary">Guardar cambios</button>
                  </div>
                </div>    
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* EDITAR USUARIO */}
      <div className="modal fade" id="mdlEditUsers" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Editar usuario</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="frmEditUser" onSubmit={editUser}>
                <div className="d-flex justify-content-between div-edit-user">
                  <div className="mb-3 div-edit-user-item">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="txtName2" onChange={(event) => 
                      setTxtName(event.target.value)} value={txtName} maxLength="20" required/>
                  </div>
                  <div className="mb-3 div-edit-user-item">
                    <label className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="txtLastName2" onChange={(event) => 
                      setTxtLastName(event.target.value)} value={txtLastName} maxLength="20" required/>
                  </div>
                  <div className="mb-3 div-edit-user-item">
                    <label className="form-label">D.N.I.</label>
                    <input type="number" className="form-control txtDNI" id="txtDNI2" onChange={(event) => 
                      setTxtDni(event.target.value)} value={txtDni} min="1000000" max="99999999" required/>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center div-edit-user">
                  <div className="mb-3 div-edit-user-item">
                    <label className="form-label">Tipo de usuario</label>
                    <select className="form-control" id="txtSelect2" onChange={(event) => setTxtRole(event.target.value)} defaultValue={txtRole}>
                      <option value={txtRole}>{txtRole}</option>
                      { txtRole === "reader" ? null : <option value="reader">reader</option> }
                      { txtRole === "writer" ? null : <option value="writer">writer</option> }
                      { txtRole === "admin" ? null : <option value="admin">admin</option> }
                    </select>
                  </div>
                  <div className="mb-3 col-5 div-edit-user-item">
                    <label className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="txtEmail2" aria-describedby="emailHelp" onChange={(event) => 
                      setTxtEmail(event.target.value)} value={txtEmail}  maxLength="20" required/>
                  </div> 
                  <div className="mb-3 div-edit-user-item">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="txtPassword2" onChange={(event) => 
                      setTxtPassword(event.target.value)} value={txtPassword} maxLength="20" required/>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <div>
                    <button type="submit" id="btnSaveUser" className="btn btn-primary">Guardar cambios</button>
                  </div>
                </div>    
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* VER USUARIO */}
      <div className="modal fade" id="mdlViewUsers" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Ver usuarios</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="frmViewUser">
                <div className="d-flex justify-content-between div-view-user">
                  <div className="mb-3 div-view-user-item">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="txtName3" onChange={(event) => setTxtName(event.target.value)} value={txtName} disabled/>
                  </div>
                  <div className="mb-3 div-view-user-item">
                    <label className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="txtLastName3" onChange={(event) => setTxtLastName(event.target.value)} value={txtLastName} disabled/>
                  </div>
                  <div className="mb-3 div-view-user-item">
                    <label className="form-label">D.N.I.</label>
                    <input type="text" className="form-control" id="txtDNI3" onChange={(event) => setTxtDni(event.target.value)} value={txtDni} disabled/>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center div-view-user">
                  <div className="mb-3 div-view-user-item">
                    <label className="form-label">Tipo de usuario</label>
                    <select className="form-control" id="txtSelect3" disabled>
                      <option value="reader">{txtRole}</option>
                    </select>
                  </div>
                  <div className="mb-3 col-5 div-view-user-item">
                    <label className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="txtEmail3" aria-describedby="emailHelp" onChange={(event) => setTxtEmail(event.target.value)} value={txtEmail} disabled/>
                  </div>
                  <div className="mb-3 div-view-user-item">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="txtPassword3" onChange={(event) => setTxtPassword(event.target.value)} value={txtPassword} disabled/>
                  </div>
                </div>  
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* ELIMINAR USUARIO */}
      <div className="modal" id="mdlDeleteUser" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Eliminar usuario</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {newsByAutor.length === 0?
                <p>¿Está seguro/a que desea eliminar el registro?</p>
              :
                <p>No es posible eliminar este usuario, asegurese que no tenga noticias de su autoría antes de realizar esta acción</p>}
            </div>
            <div className="modal-footer">
              {newsByAutor.length === 0?
                 (
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>,
                  <button type="button" className="btn btn-primary" onClick={(event) => deleteUser(userSelected)} >Confirmar</button>
                )
              :
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              }
            </div>
          </div>
        </div>
      </div>

      {/* MOSTRAR USUARIO */}
      <div className="table-core-container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">DNI</th>
              <th scope="col">Correo electrónico</th>
              <th scope="col">Tipo</th>
            </tr>
          </thead>
          <tbody>
            
            {txtSearch !== "" && btnSearch === true?
              searchList.length>0?searchList.map((user, key) =>(
              <tr key={key}>
                <th scope="row">{`${user.name} ${user.lastName}`}</th>
                <td>{user.dni}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td><button data-bs-toggle="modal" data-bs-target="#mdlViewUsers" onClick={(event) => fillForm(user)}><i className="bi bi-eye"></i></button></td>
                <td><button data-bs-toggle="modal" data-bs-target="#mdlEditUsers" onClick={(event) => fillForm(user)}><i className="bi bi-pencil"></i></button></td>
                <td>{user.role === "admin" ? null : <button data-bs-toggle="modal" data-bs-target="#mdlDeleteUser" onClick={(event) =>
                  openDeleteModal(user)} ><i className="bi bi-x-lg"></i></button>}</td>
              </tr>
              )): <tr><td><h3 className="loading-content">No se encontraron registros relacionados a la búsqueda </h3></td></tr>
            : users.length>0?users.map((user, key) =>(
              <tr key={key}>
                <th scope="row">{`${user.name} ${user.lastName}`}</th>
                <td>{user.dni}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td><button data-bs-toggle="modal" data-bs-target="#mdlViewUsers" onClick={(event) => fillForm(user)}><i className="bi bi-eye"></i></button></td>
                <td><button data-bs-toggle="modal" data-bs-target="#mdlEditUsers" onClick={(event) => fillForm(user)}><i className="bi bi-pencil"></i></button></td>
                <td>{user.role === "admin" ? null : <button data-bs-toggle="modal" data-bs-target="#mdlDeleteUser" onClick={(event) =>
                  openDeleteModal(user)} ><i className="bi bi-x-lg"></i></button>}</td>
              </tr>
              )): <tr><td><h1 className="loading-content">Cargando... </h1></td></tr>}
            </tbody>
        </table>  
      </div>
    </div>
  )
}

export default User