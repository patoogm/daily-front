import React from 'react'
import './user.css'
import imgUser from '../../images/user.png'
import {useState, useEffect} from 'react'

function User() {
  const [userById,setUserById] = useState({})
  const [users,setUsers] = useState ([])
  const [txtName,setTxtName] = useState("")
  const [txtLastName,setTxtLastName] = useState("")
  const [txtDni,setTxtDni] = useState("")
  const [txtEmail,setTxtEmail] = useState("")
  const [txtPassword,setTxtPassword] = useState("")

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
    console.log(userById)
  } 

  const handleUsers = () => {
    fetch('http://localhost:8000/get-users')
    .then(response => response.json())
    .then(response => setUsers(response))
  }
  useEffect(() => {
    handleUsers()
  },[])

  const addUser = (event) => {
    const body = {
      name: txtName,
      lastName: txtLastName,
      dni: txtDni,
      email: txtEmail,
      password: txtPassword
    }
    fetch('http://localhost:8000/create-users',{
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

  const editUser = (event) => {
    const body = {
      name: txtName,
      lastName: txtLastName,
      dni: txtDni,
      email: txtEmail,
      password: txtPassword
    }
    console.log(body)
    fetch('http://localhost:8000/'+ userById._id,{
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

  const deleteUser = (user) => {
    fetch('http://localhost:8000/'+ user._id,{
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
      reload()
  } 
  return (
    <div className="sectionUsers">
      <div className="title-container"> 
        <img src={imgUser} alt="imgUser" width="60 px" height="60 px" />
        <label className="lblUsers">Users</label>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="dropdown">
          <button className="btn btn-link dropdown-toggle" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="bi bi-funnel"></i>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><button class="dropdown-item">DNI</button></li>
            <li><button class="dropdown-item">Name</button></li>
          </ul>
         </div>
        <div className="d-flex col-4 input-search-container">
          <input type="text" className="txtSearch" id="txtSearch"/> 
          <button id="btnSearchNews" type="button" class="btn btn-link"><i className="bi bi-search"></i></button>
        </div>
        <div className="d-flex">
          <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#mdlAddUsers" onClick={(event) => cleanForm()}>
            <i class="bi bi-plus-circle"></i>
          </button>
        </div>
      </div>
      <div className="modal fade" id="mdlAddUsers" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">New user</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="frmNewUser" onSubmit={addUser}>
                <div className="d-flex justify-content-between">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" class="form-control" id="txtName" onChange={(event) => setTxtName(event.target.value)} value={txtName}/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Last name</label>
                    <input type="text" class="form-control" id="txtLastName" onChange={(event) => setTxtLastName(event.target.value)} value={txtLastName} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">D.N.I.</label>
                    <input type="text" class="form-control" id="txtDNI" onChange={(event) => setTxtDni(event.target.value)} value={txtDni}/>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mb-3">
                    <label className="form-label">User type</label>
                    <select className="form-control" id="txtSelect">
                      <option value="reader">Reader</option>
                      <option value="writer">Writer</option>
                      <option value="administrator">Administrator</option>
                    </select>
                  </div>
                  <div className="mb-3 col-5">
                    <label className="form-label">Email address</label>
                    <input type="email" class="form-control" id="txtEmail" aria-describedby="emailHelp" onChange={(event) => setTxtEmail(event.target.value)} value={txtEmail} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" class="form-control" id="txtPassword" onChange={(event) => setTxtPassword(event.target.value)} value={txtPassword}/>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <div>
                    <button type="submit" id="btnSaveUser" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                  </div>
                </div>    
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="mdlEditUsers" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit user</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="frmEditUser" onSubmit={editUser}>
                <div className="d-flex justify-content-between">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" class="form-control" id="txtName" onChange={(event) => setTxtName(event.target.value)} value={txtName}/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Last name</label>
                    <input type="text" class="form-control" id="txtLastName" onChange={(event) => setTxtLastName(event.target.value)} value={txtLastName} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">D.N.I.</label>
                    <input type="text" class="form-control" id="txtDNI" onChange={(event) => setTxtDni(event.target.value)} value={txtDni}/>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mb-3">
                    <label className="form-label">User type</label>
                    <select className="form-control" id="txtSelect">
                      <option value="reader">Reader</option>
                      <option value="writer">Writer</option>
                      <option value="administrator">Administrator</option>
                    </select>
                  </div>
                  <div className="mb-3 col-5">
                    <label className="form-label">Email address</label>
                    <input type="email" class="form-control" id="txtEmail" aria-describedby="emailHelp" onChange={(event) => setTxtEmail(event.target.value)} value={txtEmail} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" class="form-control" id="txtPassword" onChange={(event) => setTxtPassword(event.target.value)} value={txtPassword}/>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <div>
                    <button type="submit" id="btnSaveUser" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                  </div>
                </div>    
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="mdlViewUsers" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">View user</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="frmViewUser">
                <div className="d-flex justify-content-between">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" class="form-control" id="txtName" onChange={(event) => setTxtName(event.target.value)} value={txtName} disabled/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Last name</label>
                    <input type="text" class="form-control" id="txtLastName" onChange={(event) => setTxtLastName(event.target.value)} value={txtLastName} disabled/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">D.N.I.</label>
                    <input type="text" class="form-control" id="txtDNI" onChange={(event) => setTxtDni(event.target.value)} value={txtDni} disabled/>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mb-3">
                    <label className="form-label">User type</label>
                    <select className="form-control" id="txtSelect" disabled>
                      <option value="reader">Reader</option>
                      <option value="writer">Writer</option>
                      <option value="administrator">Administrator</option>
                    </select>
                  </div>
                  <div className="mb-3 col-5">
                    <label className="form-label">Email address</label>
                    <input type="email" class="form-control" id="txtEmail" aria-describedby="emailHelp" onChange={(event) => setTxtEmail(event.target.value)} value={txtEmail} disabled/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" class="form-control" id="txtPassword" onChange={(event) => setTxtPassword(event.target.value)} value={txtPassword} disabled/>
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
              <th scope="col">Name</th>
              <th scope="col">DNI</th>
              <th scope="col">Email</th>
              <th scope="col">Type</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.length>0?users.map((user) =>(
            <tr>
              <th scope="row">{`${user.name} ${user.lastName}`}</th>
              <td>{user.dni}</td>
              <td>{user.email}</td>
              <td>Editor</td>
              <td><button data-bs-toggle="modal" data-bs-target="#mdlViewUsers" onClick={(event) => fillForm(user)}><i className="bi bi-eye"></i></button></td>
              <td><button data-bs-toggle="modal" data-bs-target="#mdlEditUsers" onClick={(event) => fillForm(user)}><i className="bi bi-pencil"></i></button></td>
              <td><button onClick={(event) => deleteUser(user)}><i className="bi bi-x-lg"></i></button></td>
            </tr>
            )): <h1 className="loading-content">Cargando... </h1>}
          </tbody>
        </table>  
      </div>
    </div>
  )
}

export default User
