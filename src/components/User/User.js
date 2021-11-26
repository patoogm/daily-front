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
  const [txtRole, setTxtRole] = useState("reader")

  console.log(txtRole)

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
  
  const reload = () => {
    setTimeout(function(){
      window.location.reload()
    }, 500)
  }

  const addUser = (event) => {
    const body = {
      name: txtName,
      lastName: txtLastName,
      dni: txtDni,
      email: txtEmail,
      password: txtPassword,
      role: txtRole
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


  const editUser = (event) => {
    const body = {
      name: txtName,
      lastName: txtLastName,
      dni: txtDni,
      email: txtEmail,
      password: txtPassword,
      role: txtRole
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
          <i className="bi bi-funnel"></i>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li key="DNI"><button className="dropdown-item">DNI</button></li>
            <li key="Name"><button className="dropdown-item">Name</button></li>
          </ul>
         </div>
        <div className="d-flex col-4 input-search-container">
          <input type="text" className="txtSearch" id="txtSearch"/> 
          <button id="btnSearchNews" type="button" className="btn btn-link"><i className="bi bi-search"></i></button>
        </div>
        <div className="d-flex">
          <button type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#mdlAddUsers" onClick={(event) => cleanForm()}>
            <i className="bi bi-plus-circle"></i>
          </button>
        </div>
      </div>
      <div className="modal fade" id="mdlAddUsers" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">New user</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="frmNewUser" onSubmit={addUser}>
                <div className="d-flex justify-content-between">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="txtName" onChange={(event) => setTxtName(event.target.value)} value={txtName}/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Last name</label>
                    <input type="text" className="form-control" id="txtLastName" onChange={(event) => setTxtLastName(event.target.value)} value={txtLastName} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">D.N.I.</label>
                    <input type="text" className="form-control" id="txtDNI1" onChange={(event) => setTxtDni(event.target.value)} value={txtDni}/>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mb-3">
                    <label className="form-label">User type</label>
                    <select value={txtRole} className="form-control" id="txtSelect" onChange={(event) => setTxtRole(event.target.value)}>
                      <option value="reader">Reader</option>
                      <option value="writer">Writer</option>
                      <option value="administrator">Administrator</option>
                    </select>
                  </div>
                  <div className="mb-3 col-5">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="txtEmail" aria-describedby="emailHelp" onChange={(event) => setTxtEmail(event.target.value)} value={txtEmail} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="txtPassword" onChange={(event) => setTxtPassword(event.target.value)} value={txtPassword}/>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <div>
                    <button type="submit" id="btnSaveUser1" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                  </div>
                </div>    
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="mdlEditUsers" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit user</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="frmEditUser" onSubmit={editUser}>
                <div className="d-flex justify-content-between">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="txtName2" onChange={(event) => setTxtName(event.target.value)} value={txtName}/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Last name</label>
                    <input type="text" className="form-control" id="txtLastName2" onChange={(event) => setTxtLastName(event.target.value)} value={txtLastName} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">D.N.I.</label>
                    <input type="text" className="form-control" id="txtDNI2" onChange={(event) => setTxtDni(event.target.value)} value={txtDni}/>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mb-3">
                    <label className="form-label">User type</label>
                    <select className="form-control" id="txtSelect2" onChange={(event) => setTxtRole(event.target.value)} defaultValue={txtRole}>
                      <option value={txtRole}>{txtRole}</option>
                      { txtRole === "reader" ? null : <option value="reader">reader</option> }
                      { txtRole === "writer" ? null : <option value="writer">writer</option> }
                      { txtRole === "admin" ? null : <option value="admin">admin</option> }
                    </select>
                  </div>
                  <div className="mb-3 col-5">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="txtEmail2" aria-describedby="emailHelp" onChange={(event) => setTxtEmail(event.target.value)} value={txtEmail} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="txtPassword2" onChange={(event) => setTxtPassword(event.target.value)} value={txtPassword}/>
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
      <div className="modal fade" id="mdlViewUsers" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">View user</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="frmViewUser">
                <div className="d-flex justify-content-between">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="txtName3" onChange={(event) => setTxtName(event.target.value)} value={txtName} disabled/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Last name</label>
                    <input type="text" className="form-control" id="txtLastName3" onChange={(event) => setTxtLastName(event.target.value)} value={txtLastName} disabled/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">D.N.I.</label>
                    <input type="text" className="form-control" id="txtDNI3" onChange={(event) => setTxtDni(event.target.value)} value={txtDni} disabled/>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mb-3">
                    <label className="form-label">User type</label>
                    <select className="form-control" id="txtSelect3" disabled>
                      <option value="reader">{txtRole}</option>
                    </select>
                  </div>
                  <div className="mb-3 col-5">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="txtEmail3" aria-describedby="emailHelp" onChange={(event) => setTxtEmail(event.target.value)} value={txtEmail} disabled/>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="txtPassword3" onChange={(event) => setTxtPassword(event.target.value)} value={txtPassword} disabled/>
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
              <td>{user.role}</td>
              <td><button data-bs-toggle="modal" data-bs-target="#mdlViewUsers" onClick={(event) => fillForm(user)}><i className="bi bi-eye"></i></button></td>
              <td><button data-bs-toggle="modal" data-bs-target="#mdlEditUsers" onClick={(event) => fillForm(user)}><i className="bi bi-pencil"></i></button></td>
              <td>{user.role === "admin" ? null : <button onClick={(event) => deleteUser(user)}><i className="bi bi-x-lg"></i></button>}</td>
            </tr>
            )): <tr><td><h1 className="loading-content">Cargando... </h1></td></tr>}
          </tbody>
        </table>  
      </div>
    </div>
  )
}

export default User
