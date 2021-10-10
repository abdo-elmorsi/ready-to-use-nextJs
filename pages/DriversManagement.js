import React from "react";
import {
  Row,
  Col,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Dropdown,
  Button,
} from "react-bootstrap";
import Card from "../components/Card";

const Data_table = [
  {
    name: "Demo Moaz",
    phoneNumber: "0539448802",
    email: "email@saferoad.com",
    department: "By Fixed Date",
    licenceNumber: "142666",
    licenceEXP: "09/19/2021",
    rfid: "Exist",
    waslIntgeration: "yes",
    action: "edit/del/locate driver/show/assigned vehicle",
  },
  {
    name: "Demo Moaz",
    phoneNumber: "0539448802",
    email: "email@saferoad.com",
    department: "By Fixed Date",
    licenceNumber: "142666",
    licenceEXP: "09/19/2021",
    rfid: "Exist",
    waslIntgeration: "yes",
    action: "edit/del/locate driver/show/assigned vehicle",
  },
  {
    name: "Demo Moaz",
    phoneNumber: "0539448802",
    email: "email@saferoad.com",
    department: "By Fixed Date",
    licenceNumber: "142666",
    licenceEXP: "09/19/2021",
    rfid: "Exist",
    waslIntgeration: "yes",
    action: "edit/del/locate driver/show/assigned vehicle",
  },
  {
    name: "Demo Moaz",
    phoneNumber: "0539448802",
    email: "email@saferoad.com",
    department: "By Fixed Date",
    licenceNumber: "142666",
    licenceEXP: "09/19/2021",
    rfid: "Exist",
    waslIntgeration: "yes",
    action: "edit/del/locate driver/show/assigned vehicle",
  },
];

export default function PreventiveMaintenance() {
  return (
    <div>
      {/* table */}
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Driver Management</h4>
              </div>
            </Card.Header>
            
            {/* /////////////////////////////////////////////////////////////// */}
        <Navbar className="navbar-light rounded-1 mt-2" expand="lg" >
            <Container fluid>
                <Navbar.Brand className="navbar-brand" to="#">
                     <Dropdown>
                         show  <Dropdown.Toggle as={Button} className=" bg-primary" size="lg" type="button" id="dropdownMenuButtonSM">
                        10
                        </Dropdown.Toggle> entries
                            <Dropdown.Menu aria-labelledby="dropdownMenuButtonSM">
                                <Dropdown.Item href="#">10</Dropdown.Item>
                                <Dropdown.Item href="#">25</Dropdown.Item>
                                <Dropdown.Item href="#">50</Dropdown.Item>
                                <Dropdown.Item href="#">100</Dropdown.Item>
                            </Dropdown.Menu>
                    </Dropdown> 
                </Navbar.Brand>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbar-2" aria-controls="navbar-2" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

               
                    <Navbar.Collapse className="collapse" id="navbar-2">
                        <Nav className=" ms-auto mb-2 mb-lg-0">
                            <Nav.Item>
                                <Button variant="primary m-2 py-1">Add New Driver</Button>
                            </Nav.Item>
                            <Nav.Item>
                                <Button variant="primary m-2 py-1">Add Drivers bulk</Button>
                            </Nav.Item>
                            <form className="d-flex col-6">
                                <input className="form-control me-2" type="search" placeholder="Search"
                                        aria-label="Search"/>
                                <button className="btn btn-primary" type="submit">Search</button>
                             </form>
                            
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
            {/* /////////////////////////////////////////////////////////////// */}

            {/* table buttons end */}
            <Card.Body>
              <div className="table-responsive">
                <table
                  id="datatable"
                  className="table table-striped table-hover table-bordered"
                  data-toggle="data-table"
                >
                  <thead>
                    <tr>
                      <th className="text-center">Full Name</th>
                      <th className="text-center">Phone number</th>
                      <th className="text-center">Email</th>
                      <th className="text-center">Department</th>
                      <th className="text-center">Licence number</th>
                      <th className="text-center">Licence expiration date</th>
                      <th className="text-center">RFID</th>
                      <th className="text-center">WASL integration</th>
                      <th className="text-center">action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Data_table.map((item) => (
                      <tr key={item.name}>
                        <td className="text-center">{item.name}</td>
                        <td className="text-center">{item.phoneNumber}</td>
                        <td className="text-center">{item.email}</td>
                        <td className="text-center">{item.department}</td>
                        <td className="text-center">{item.licenceNumber}</td>
                        <td className="text-center">{item.licenceEXP}</td>
                        <td className="text-center">{item.rfid}</td>
                        <td className="text-center">{item.waslIntgeration}</td>
                        <td className="text-center">{item.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <div className="col-12 mb-5">Showing 1 to 10 of 10 entries</div>
      </Row>
    </div>
  );
}
