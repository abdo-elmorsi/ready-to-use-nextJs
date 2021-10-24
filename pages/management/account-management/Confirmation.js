import React from "react";
import { Row, Col, Card, Form, FormCheck} from "react-bootstrap";

const Confirmation = ()=> {
  return(
    <>
      <Row>
      <Col>
               <Card>
                  <Card.Body>
                      <div className="header-title">
                        <h4 className="card-title"> Account Information</h4>
                      </div>
               
                      <Form className="mt-5">
                          <Row className="border border-light rounded p-3 mb-3">
                            <Col lg="6">
                             <Form.Group className="form-group">
                              <Form.Label  htmlFor="AccountName">Account Name </Form.Label>
                              <Form.Control type="text"  id="AccountName" defaultValue="Account Name" disabled/>
                            </Form.Group>
                            </Col>
                            <Col lg="6">
                             <Form.Group className="form-group">
                              <Form.Label  htmlFor="parentAccount">Parent Account </Form.Label>
                              <Form.Control type="text"  id="parentAccount" defaultValue="Demo" disabled/>
                            </Form.Group>
                            </Col>
                            
                            <Col lg="6">
                             <Form.Group className="form-group">
                              <Form.Label  htmlFor="billingStart">Billing Start on </Form.Label>
                              <Form.Control type="text"  id="billingStart" defaultValue="17/10/2021" disabled/>
                            </Form.Group>
                            </Col>
                            
                            <Col lg="6">
                             <Form.Group className="form-group">
                              <Form.Label  htmlFor="NextBilling">Next Billing on </Form.Label>
                              <Form.Control type="text"  id="NextBilling" defaultValue="17/12/2021" disabled/>
                            </Form.Group>
                            </Col>
                            
                            <Col lg="6">
                             <Form.Group className="form-group">
                              <Form.Label  htmlFor="accountType">Acount Type </Form.Label>
                              <Form.Control type="text"  id="accountType" defaultValue="Rental" disabled/>
                            </Form.Group>
                            </Col>
                          </Row>
 
                          <Row className="border border-light rounded p-3 mb-3">
                            <h4>Subscriptions List</h4>
                            <p className="p-3 rounded lead text-end">Total Price : 0</p>
                          </Row>
                      </Form>

                      <div className="mt-5 d-flex justify-content-end">
                        <button className="btn btn-primary px-3 py-2 ms-3">Back</button>
                        <button className="btn btn-primary px-3 py-2 ms-3">Finish</button>
                        <button className="btn btn-primary px-3 py-2 ms-3">Cancel</button>
                      </div>
                  </Card.Body>
                </Card>
                
            </Col>

            
      </Row>
    </>
  )
}
export default  Confirmation
  