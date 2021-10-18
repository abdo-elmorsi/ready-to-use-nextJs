import React from "react";
import { Row, Col, Card, Form, FormCheck} from "react-bootstrap";

const AccountWizard = ()=> {
  return(
    <>
      <Row>
      <Col>
               <Card>
                  <Card.Body>
                      <div className="header-title">
                        <h4 className="card-title">Create Administrator User</h4>
                      </div>
               
                      <Form className="mt-5">
                          <Row>
                            <Col lg="6">
                             <Form.Group className="form-group">
                              <Form.Label  htmlFor="firstName">First Name </Form.Label>
                              <Form.Control type="text"  id="firstName"/>
                            </Form.Group>
                            </Col>
                            <Col lg="6">
                             <Form.Group className="form-group">
                              <Form.Label  htmlFor="LastName">Last Name </Form.Label>
                              <Form.Control type="text"  id="LastName"/>
                            </Form.Group>
                            </Col>
                            

                          </Row>
                          <hr className="my-3" />
                          <Row>
                            <Col lg="6">
                             <Form.Group className="form-group">
                              <Form.Label  htmlFor="userName">User Name </Form.Label>
                              <Form.Control type="text"  id="userName"/>
                            </Form.Group>
                            </Col>
                          </Row>
                          <hr className="my-3" />

                          <Row>
                            <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="emailAddress">Email</Form.Label>
                                <Form.Control type="email"  id="emailAddress"/>
                              </Form.Group>
                            </Col>
                            
                            <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="PhoneNum">Phone Number</Form.Label>
                                <Form.Control type="number"  id="PhoneNum"/>
                              </Form.Group>
                            </Col>
                            <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="passowrd">Password </Form.Label>
                                <Form.Control type="password"  id="password"/>
                              </Form.Group>
                            </Col>
                            <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="confirmpassword">Confirm Password </Form.Label>
                                <Form.Control type="password"  id="confirmpassword"/>
                              </Form.Group>
                            </Col>
                          </Row>

                      </Form>

                      <div className="mt-5 d-flex justify-content-end">
                        <button className="btn btn-primary px-3 py-2 ms-3">Back</button>
                        <button className="btn btn-primary px-3 py-2 ms-3">Next</button>
                        <button className="btn btn-primary px-3 py-2 ms-3">Cancel</button>
                      </div>
                  </Card.Body>
                </Card>
                
            </Col>

            
      </Row>
    </>
  )
}
export default  AccountWizard
  