import React from 'react'
import './userPage.css'
import imgUser from './images/user.png'
import imgSearch from './images/search.png'
import imgFilter from './images/filter.png'
import imgAdd from './images/add.png'
import imgEnter from './images/enter.png'
import imgEdit from './images/edit.png'
import imgDelete from './images/delete.png'


function UserPage() {
  return (
    <div className="sectionUsers">
      <div> 
        <img src={imgUser} alt="imgUser" width="50 px" height="50 px" />
        <label className="lblUsers">Users</label>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <div className="dropdown">
          <a className="btn btn-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={imgFilter} alt="imgFilter" width="40 px" height="40 px" />
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><a className="dropdown-item" href="#">Born Date</a></li>
            <li><a className="dropdown-item" href="#">Name</a></li>
            <li><a className="dropdown-item" href="#">Type</a></li>
          </ul>
        </div>
        <div className="d-flex col-4">
          <input type="text" className="txtSearch" id="txtSearch"/> 
          <button id="btnSearchUser" type="button" class="btn btn-link"><img src={imgSearch} alt="imgSearch" width="40 px" height="40 px" /></button>
        </div>
        <div className="d-flex">
          <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#mdlAddUsers">
            <img src={imgAdd} alt="imgAdd" width="35 px" height="35 px" />
          </button>
        </div>
      </div>

      <div className="modal fade" id="mdlAddUsers" tabindex="-1" aria-hidden="true">
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

      <div className="modal fade" id="mdlEditUsers" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit user</h5>
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
              <th scope="col">Username</th>
              <th scope="col">Name</th>
              <th scope="col">Last name</th>
              <th scope="col">Email</th>
              <th scope="col">Born date</th>
              <th scope="col">Type</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">marciano</th>
              <td>Marcio</td>
              <td>Imola</td>
              <td>mimola@yahoo.com</td>
              <td>25/03/1982</td>
              <td>Editor</td>
              <td><a href="#" data-bs-toggle="modal" data-bs-target="#mdlViewUsers" ><img src={imgEnter} alt="imgEnter" width="20 px" height="20 px" /></a></td>
              <td><a href="#" data-bs-toggle="modal" data-bs-target="#mdlEditUsers"><img src={imgEdit} alt="imgEdit" width="20 px" height="20 px" /></a></td>
              <td><a href="#"><img src={imgDelete} alt="imgDelete" width="20 px" height="20 px" /></a></td>
            </tr>
            <tr>
              <th scope="row">frankia</th>
              <td>Franco</td>
              <td>Pichilini</td>
              <td>frankpichon@hotmail.com</td>
              <td>14/09/1993</td>
              <td>User</td>
              <td><img src={imgEnter} alt="imgEnter" width="20 px" height="20 px" /></td>
              <td><img src={imgEdit} alt="imgEdit" width="20 px" height="20 px" /></td>
              <td><img src={imgDelete} alt="imgDelete" width="20 px" height="20 px" /></td>
            </tr>
            <tr>              
              <th scope="row">jantoni</th>
              <td>Javier</td>
              <td>Antoni</td>
              <td>jantoni@gmail.com</td>
              <td>05/05/1989</td>
              <td>Admin</td>
              <td><img src={imgEnter} alt="imgEnter" width="20 px" height="20 px" /></td>
              <td><img src={imgEdit} alt="imgEdit" width="20 px" height="20 px" /></td>
              <td><img src={imgDelete} alt="imgDelete" width="20 px" height="20 px" /></td>
            </tr>
            <tr>
              <th scope="row">marciano</th>
              <td>Marcio</td>
              <td>Imola</td>
              <td>mimola@yahoo.com</td>
              <td>25/03/1982</td>
              <td>Editor</td>
              <td><img src={imgEnter} alt="imgEnter" width="20 px" height="20 px" /></td>
              <td><img src={imgEdit} alt="imgEdit" width="20 px" height="20 px" /></td>
              <td><img src={imgDelete} alt="imgDelete" width="20 px" height="20 px" /></td>
            </tr>
            <tr>
              <th scope="row">frankia</th>
              <td>Franco</td>
              <td>Pichilini</td>
              <td>frankpichon@hotmail.com</td>
              <td>14/09/1993</td>
              <td>User</td>
              <td><img src={imgEnter} alt="imgEnter" width="20 px" height="20 px" /></td>
              <td><img src={imgEdit} alt="imgEdit" width="20 px" height="20 px" /></td>
              <td><img src={imgDelete} alt="imgDelete" width="20 px" height="20 px" /></td>
            </tr>
            <tr>              
              <th scope="row">jantoni</th>
              <td>Javier</td>
              <td>Antoni</td>
              <td>jantoni@gmail.com</td>
              <td>05/05/1989</td>
              <td>Admin</td>
              <td><img src={imgEnter} alt="imgEnter" width="20 px" height="20 px" /></td>
              <td><img src={imgEdit} alt="imgEdit" width="20 px" height="20 px" /></td>
              <td><img src={imgDelete} alt="imgDelete" width="20 px" height="20 px" /></td>
            </tr>
            <tr>
              <th scope="row">marciano</th>
              <td>Marcio</td>
              <td>Imola</td>
              <td>mimola@yahoo.com</td>
              <td>25/03/1982</td>
              <td>Editor</td>
              <td><img src={imgEnter} alt="imgEnter" width="20 px" height="20 px" /></td>
              <td><img src={imgEdit} alt="imgEdit" width="20 px" height="20 px" /></td>
              <td><img src={imgDelete} alt="imgDelete" width="20 px" height="20 px" /></td>
            </tr>
            <tr>
              <th scope="row">frankia</th>
              <td>Franco</td>
              <td>Pichilini</td>
              <td>frankpichon@hotmail.com</td>
              <td>14/09/1993</td>
              <td>User</td>
              <td><img src={imgEnter} alt="imgEnter" width="20 px" height="20 px" /></td>
              <td><img src={imgEdit} alt="imgEdit" width="20 px" height="20 px" /></td>
              <td><img src={imgDelete} alt="imgDelete" width="20 px" height="20 px" /></td>
            </tr>
            <tr>              
              <th scope="row">jantoni</th>
              <td>Javier</td>
              <td>Antoni</td>
              <td>jantoni@gmail.com</td>
              <td>05/05/1989</td>
              <td>Admin</td>
              <td><img src={imgEnter} alt="imgEnter" width="20 px" height="20 px" /></td>
              <td><img src={imgEdit} alt="imgEdit" width="20 px" height="20 px" /></td>
              <td><img src={imgDelete} alt="imgDelete" width="20 px" height="20 px" /></td>
            </tr>
            <tr>
              <th scope="row">marciano</th>
              <td>Marcio</td>
              <td>Imola</td>
              <td>mimola@yahoo.com</td>
              <td>25/03/1982</td>
              <td>Editor</td>
              <td><img src={imgEnter} alt="imgEnter" width="20 px" height="20 px" /></td>
              <td><img src={imgEdit} alt="imgEdit" width="20 px" height="20 px" /></td>
              <td><img src={imgDelete} alt="imgDelete" width="20 px" height="20 px" /></td>
            </tr>
            <tr>
              <th scope="row">frankia</th>
              <td>Franco</td>
              <td>Pichilini</td>
              <td>frankpichon@hotmail.com</td>
              <td>14/09/1993</td>
              <td>User</td>
              <td><img src={imgEnter} alt="imgEnter" width="20 px" height="20 px" /></td>
              <td><img src={imgEdit} alt="imgEdit" width="20 px" height="20 px" /></td>
              <td><img src={imgDelete} alt="imgDelete" width="20 px" height="20 px" /></td>
            </tr>
            <tr>              
              <th scope="row">jantoni</th>
              <td>Javier</td>
              <td>Antoni</td>
              <td>jantoni@gmail.com</td>
              <td>05/05/1989</td>
              <td>Admin</td>
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

export default UserPage
