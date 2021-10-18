
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUsers, faPlug, faUsersCog } from '@fortawesome/free-solid-svg-icons'
import CountUp from "react-countup";

const Data_table = [
  {
      accName: "Demo Moaz",
      billing: "09/26/2021",
      parent: "SafeRoad All",
      status:"active",
      reseller: "Undistributed",
      action: "buttons here",
  },
  {
      accName: "Demo Moaz",
      billing: "09/26/2021",
      parent: "SafeRoad All",
      status:"active",
      reseller: "Undistributed",
      action: "buttons here",
  },
  {
      accName: "Demo Moaz",
      billing: "09/26/2021",
      parent: "SafeRoad All",
      status:"active",
      reseller: "Undistributed",
      action: "buttons here",
  },
  {
      accName: "Demo Moaz",
      billing: "09/26/2021",
      parent: "SafeRoad All",
      status:"active",
      reseller: "Undistributed",
      action: "buttons here",
  },
];


const AccountManagement = () => {
  return (
    <>
      <Row>

      <Col md="6" xl="3">
               <Card>
                  <Card.Body>
                     <div className="d-flex justify-content-between align-itmes-center">
                        <div>
                           <div className="p-3 rounded bg-soft-primary">
                           <FontAwesomeIcon className="fa-4x" icon={faUsers} size="lg"/>
                           </div>
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                        <h1 className="counter"><CountUp  start={0} end={115} duration={2} /></h1>
                           <p className="mb-0">Total Accounts</p>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>

      <Col md="6" xl="3">
               <Card>
                  <Card.Body>
                     <div className="d-flex justify-content-between align-itmes-center">
                        <div>
                           <div className="p-3 rounded bg-soft-primary">
                           <FontAwesomeIcon className="fa-4x" icon={faUsers} size="lg"/>
                           </div>
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                        <h1 className="counter"><CountUp  start={0} end={2} duration={2} /></h1>
                           <p className="mb-0">Active Accounts</p>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>

      <Col md="6" xl="3">
               <Card>
                  <Card.Body>
                     <div className="d-flex justify-content-between align-itmes-center">
                        <div>
                           <div className="p-3 rounded bg-soft-primary">
                           <FontAwesomeIcon className="fa-4x" icon={faPlug} size="lg"/>
                           </div>
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                        <h1 className="counter"><CountUp  start={0} end={0} duration={2} /></h1>
                           <p className="mb-0">Suspended Accounts</p>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>

      <Col md="6" xl="3">
               <Card>
                  <Card.Body>
                     <div className="d-flex justify-content-between align-itmes-center">
                        <div>
                           <div className="p-3 rounded bg-soft-primary">
                           <FontAwesomeIcon className="fa-4x" icon={faUsersCog} size="lg"/>
                           </div>
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                        <h1 className="counter"><CountUp  start={0} end={1} duration={2} /></h1>
                           <p className="mb-0">Distributor Accounts</p>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>



        
      </Row>
      <Row>
        
        <Row className="g-3">
            <Col sm="12">
               <Card>
                  <nav className="navbar navbar-dark navbar-lg shadow rounded p-3">
                      <h3>Manage Accounts</h3> 
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
                                 <th>Account Name</th>
                                 <th>Next Billing Date</th>
                                 <th>Parent Account</th>
                                 <th>Status</th>
                                 <th>Reseller</th>
                                 <th>Action</th>
                              </tr>
                           </thead>
                           <tbody>
                           { 
                                 Data_table.map((item) => (
                              <tr key={Math.floor(Math.random() * 100)}>
                                 <td>{item.accName}</td>
                                 <td>{item.billing}</td>
                                 <td>{item.parent}</td>
                                 <td>{item.status}</td>
                                 <td>{item.reseller}</td>
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
               <Card>
                  <Card.Header className="d-flex justify-content-between">
                     <div className="w-100 header-title d-flex justify-content-between align-items-center p-3">
                     <div>
                      <h3>Incompleted Accounts</h3>
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
                                 <th>Next Billing Date</th>
                                 <th>Parent Account</th>
                                 <th>Status</th>
                                 <th>Reseller</th>
                                 <th>Action</th>
                              </tr>
                           </thead>
                           <tbody>
                           { 
                                 Data_table.map((item) => (
                              <tr key={Math.floor(Math.random() * 100)}>
                                 <td>{item.accName}</td>
                                 <td>{item.billing}</td>
                                 <td>{item.parent}</td>
                                 <td>{item.status}</td>
                                 <td>{item.reseller}</td>
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

export default AccountManagement;
