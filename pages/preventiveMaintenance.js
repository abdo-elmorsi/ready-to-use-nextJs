import React from "react";
import { Row, Col,Navbar,Container,Nav,NavDropdown,Dropdown, Button } from "react-bootstrap";
import Card from "../components/Card";

const Data_table = [
  {
    'check':'check',
    'name': 'Demo Moaz',
    'plateNumber': '358480085000471',
    'mainType': 'Vechile Wash',
    'periodTyoe':'By Fixed Date',
    'startValue':'09/26/2021',
    'nextValue':'09/19/2021',
    'recurring':'Exist',
    'notifyPeriod':'Value',
    'notifyWhenValue':'0',
    'overdue':'yes',
    'action':'reset/edit/delete',
  },
  {
    'check':'check',
    'name': 'Demo Moaz',
    'plateNumber': '358480085000471',
    'mainType': 'Vechile Wash',
    'periodTyoe':'By Fixed Date',
    'startValue':'09/26/2021',
    'nextValue':'09/19/2021',
    'recurring':'Exist',
    'notifyPeriod':'Value',
    'notifyWhenValue':'0',
    'overdue':'yes',
    'action':'reset/edit/delete',
  },
  {
    'check':'check',
    'name': 'Demo Moaz',
    'plateNumber': '358480085000471',
    'mainType': 'Vechile Wash',
    'periodTyoe':'By Fixed Date',
    'startValue':'09/26/2021',
    'nextValue':'09/19/2021',
    'recurring':'Exist',
    'notifyPeriod':'Value',
    'notifyWhenValue':'0',
    'overdue':'yes',
    'action':'reset/edit/delete',
  },
  {
    'check':'check',
    'name': 'Demo Moaz',
    'plateNumber': '358480085000471',
    'mainType': 'Vechile Wash',
    'periodTyoe':'By Fixed Date',
    'startValue':'09/26/2021',
    'nextValue':'09/19/2021',
    'recurring':'Exist',
    'notifyPeriod':'Value',
    'notifyWhenValue':'0',
    'overdue':'yes',
    'action':'reset/edit/delete',
  },
  {
    'check':'check',
    'name': 'Demo Moaz',
    'plateNumber': '358480085000471',
    'mainType': 'Vechile Wash',
    'periodTyoe':'By Fixed Date',
    'startValue':'09/26/2021',
    'nextValue':'09/19/2021',
    'recurring':'Exist',
    'notifyPeriod':'Value',
    'notifyWhenValue':'0',
    'overdue':'yes',
    'action':'reset/edit/delete',
  },
  {
    'check':'check',
    'name': 'Demo Moaz',
    'plateNumber': '358480085000471',
    'mainType': 'Vechile Wash',
    'periodTyoe':'By Fixed Date',
    'startValue':'09/26/2021',
    'nextValue':'09/19/2021',
    'recurring':'Exist',
    'notifyPeriod':'Value',
    'notifyWhenValue':'0',
    'overdue':'yes',
    'action':'reset/edit/delete',
  },
  {
    'check':'check',
    'name': 'Demo Moaz',
    'plateNumber': '358480085000471',
    'mainType': 'Vechile Wash',
    'periodTyoe':'By Fixed Date',
    'startValue':'09/26/2021',
    'nextValue':'09/19/2021',
    'recurring':'Exist',
    'notifyPeriod':'Value',
    'notifyWhenValue':'0',
    'overdue':'yes',
    'action':'reset/edit/delete',
  },
  {
    'check':'check',
    'name': 'Demo Moaz',
    'plateNumber': '358480085000471',
    'mainType': 'Vechile Wash',
    'periodTyoe':'By Fixed Date',
    'startValue':'09/26/2021',
    'nextValue':'09/19/2021',
    'recurring':'Exist',
    'notifyPeriod':'Value',
    'notifyWhenValue':'0',
    'overdue':'yes',
    'action':'reset/edit/delete',
  },
  {
    'check':'check',
    'name': 'Demo Moaz',
    'plateNumber': '358480085000471',
    'mainType': 'Vechile Wash',
    'periodTyoe':'By Fixed Date',
    'startValue':'09/26/2021',
    'nextValue':'09/19/2021',
    'recurring':'Exist',
    'notifyPeriod':'Value',
    'notifyWhenValue':'0',
    'overdue':'yes',
    'action':'reset/edit/delete',
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
                <h4 className="card-title">Preventive Maintenance</h4>
              </div>
            </Card.Header>
            
            {/* table buttons start */}
            
            <Navbar expand="lg" className="navbar-light">
                <Container fluid>
                            <Nav className=" me-auto mb-2 mb-lg-0 d-flex justify-content-end col-12">
                                    <Nav variant="pills">
                                        <Button variant="primary m-2 py-1">Add Maintenance Plan</Button>
                                        <Button variant="primary m-2 py-1">Delete Selected</Button>
                                        <Button variant="primary m-2 py-1">View History</Button>
                                        <Button variant="primary m-2 py-1">Export To Excel</Button>
                                    </Nav>
                            </Nav>
                </Container>
            </Navbar>
            <Navbar className="navbar-light rounded-1 " expand="lg">
                <Container fluid>
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
                    <form className="d-flex col-6">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-primary" type="submit">Search</button>
                </form>
                </Container>
            </Navbar>
            
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
                      <th className="text-center">check</th>
                      <th className="text-center">Display Name</th>
                      <th className="text-center">Plate Number</th>
                      <th className="text-center">Maintenance Type</th>
                      <th className="text-center">Period Type</th>
                      <th className="text-center">Start Value</th>
                      <th className="text-center">Next Value</th>
                      <th className="text-center">Recurring</th>
                      <th className="text-center">Notify Period</th>
                      <th className="text-center">Notify When Value</th>
                      <th className="text-center">Overdue</th>
                      <th className="text-center">action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Data_table.map((item) => (
                      <tr key={item.name}>
                        <td className="text-center">{item.check}</td>
                        <td className="text-center">{item.name}</td>
                        <td className="text-center">{item.plateNumber}</td>
                        <td className="text-center">{item.mainType}</td>
                        <td className="text-center">{item.periodTyoe}</td>
                        <td className="text-center">{item.startValue}</td>
                        <td className="text-center">{item.nextValue}</td>
                        <td className="text-center">{item.recurring}</td>
                        <td className="text-center">{item.notifyPeriod}</td>
                        <td className="text-center">{item.notifyWhenValue}</td>
                        <td className="text-center">{item.overdue}</td>
                        <td className="text-center">{item.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <div className="col-12 mb-5">
        Showing 1 to 10 of 10 entries
        </div>
      </Row>
    </div>
  );
}
