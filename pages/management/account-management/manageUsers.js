import { Row, Col, Card, Button, Form } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserEdit, faPen, faCar,faLock} from '@fortawesome/free-solid-svg-icons'

const tableLinks = function(){
  return(
    <div>
      <button className="btn btn-outline-light m-1">
        <FontAwesomeIcon className="pe-2" icon={faUserEdit} size="lg"/>
        user role</button>
      <button className="btn btn-outline-light m-1">
        <FontAwesomeIcon className="pe-2" icon={faPen} size="lg"/>
       user info</button>
      <button className="btn btn-outline-light m-1">
        <FontAwesomeIcon className="pe-2" icon={faCar} size="lg"/>
      manage vehicles</button>
      <button className="btn btn-outline-light m-1">
        <FontAwesomeIcon className="pe-2" icon={faLock} size="lg"/>
      reset password</button>
    </div>
  )
}

const completeBtn = <button className="btn btn-outline-light m-1">
<FontAwesomeIcon className="pe-2" icon={faUserEdit} size="lg"/> Complete User Creation </button>;

const Data_table = [
  {
      fullname: "Ahmad Jaber",
      username: "a.jaber2020",
      email: "a.hantash@saferoad.com.sa",
      status:"active",
      action: tableLinks(),
  },
  {
      fullname: "Ahmad Jaber",
      username: "a.jaber2020",
      email: "a.hantash@saferoad.com.sa",
      status:"active",
      action: tableLinks(),
  },
  {
      fullname: "Ahmad Jaber",
      username: "a.jaber2020",
      email: "a.hantash@saferoad.com.sa",
      status:"active",
      action: tableLinks(),
  },
  {
      fullname: "Ahmad Jaber",
      username: "a.jaber2020",
      email: "a.hantash@saferoad.com.sa",
      status:"active",
      action: tableLinks(),
  },
];

const Data_table2 = [
  {
      fullname: "Ahmad Jaber",
      username: "a.jaber2020",
      email: "a.hantash@saferoad.com.sa",
      status:"active",
      action: completeBtn,
  },
  {
      fullname: "Ahmad Jaber",
      username: "a.jaber2020",
      email: "a.hantash@saferoad.com.sa",
      status:"active",
      action: completeBtn,
  },
  {
      fullname: "Ahmad Jaber",
      username: "a.jaber2020",
      email: "a.hantash@saferoad.com.sa",
      status:"active",
      action: completeBtn,
  },
  {
      fullname: "Ahmad Jaber",
      username: "a.jaber2020",
      email: "a.hantash@saferoad.com.sa",
      status:"active",
      action: completeBtn,
  },
];


const manageUsers = () => {
  return (
    <>
      
      <Row>
        
        <Row className="g-3">
            <Col sm="12">
               <Card className="h-100">
                  <nav className="navbar navbar-dark navbar-lg shadow rounded p-3">
                      <h3>Manage Users</h3> 
                  </nav>
                  <Card.Header className="d-flex justify-content-between">
                     <div className="w-100 header-title d-flex justify-content-between align-items-center p-3">
                     <div>
                     <button type="button" className="btn btn-primary  px-3 py-2 me-3 ">Add Account</button>
                     </div>
                      <Form.Floating className=" custom-form-floating-sm form-group m-0">
                        <Form.Control type="email" className="" id="floatingInput6"  placeholder="Place Holder"/>
                        <label htmlFor="floatingInput">Search</label>
                      </Form.Floating>
                      
                     </div>
                  </Card.Header>
                  <Card.Body>
                     <div className="table-responsive">
                        <table id="datatable" className="table table-striped text-center" data-toggle="data-table">
                           <thead>
                              <tr>
                                 <th>Full Name</th>
                                 <th>User Name</th>
                                 <th>E-mail</th>
                                 <th>Status</th>
                                 <th>Action</th>
                              </tr>
                           </thead>
                           <tbody>
                           { 
                                 Data_table.map((item) => (
                              <tr key={Math.floor(Math.random() * 100)}>
                                 <td>{item.fullname}</td>
                                 <td>{item.username}</td>
                                 <td>{item.email}</td>
                                 <td>{item.status}</td>
                                 <td>{item.action}</td>
                              </tr>
                                 ))}
                           </tbody>
                        </table>
                        <p className="lead text-warning text-end">pagination here</p>
                      </div>
                  </Card.Body>
               </Card>
            </Col>

            {/* ================== second table  ===================== */}
            <Col sm="12">
               <Card className="h-100">
                  <Card.Header className="d-flex justify-content-between">
                     <div className="w-100 header-title d-flex justify-content-between align-items-center p-3">
                     <div>
                      <h3>Manage Incompleted Users</h3>
                     </div>
                      <Form.Floating className=" custom-form-floating-sm form-group m-0">
                        <Form.Control type="email" className="" id="floatingInput6"  placeholder="Place Holder"/>
                        <label htmlFor="floatingInput">Search</label>
                      </Form.Floating>
                      
                     </div>
                  </Card.Header>
                  <Card.Body>
                     <div className="table-responsive">
                        <table id="datatable" className="table table-striped text-center" data-toggle="data-table">
                           <thead>
                              <tr>
                                 <th>Account Name</th>
                                 <th> User Name </th>
                                 <th>E-mail</th>
                                 <th>Status</th>
                                 <th>Action</th>
                              </tr>
                           </thead>
                           <tbody>
                           { 
                                 Data_table2.map((item) => (
                              <tr key={Math.floor(Math.random() * 100)}>
                                 <td>{item.fullname}</td>
                                 <td>{item.username}</td>
                                 <td>{item.email}</td>
                                 <td>{item.status}</td>
                                 <td>{item.action}</td>
                              </tr>
                                 ))}
                           </tbody>
                        </table>
                        <p className="lead text-warning text-end">pagination here</p>
                      </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </Row>
    </>
  );
};

export default manageUsers;
