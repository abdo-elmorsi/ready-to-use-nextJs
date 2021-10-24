import React from "react";
import { Row, Col, Card, Form, FormCheck} from "react-bootstrap";

const AccountWizard = ()=> {
  return(
    <>
      <Row>
      <Col>
               <Card>
                  <Card.Body>
                      
                      <Form className="mt-5">
                      <Row className="border border-light rounded p-3 mb-3">
                            <Col lg="6">
                             <Form.Group className="form-group">
                              <Form.Label  htmlFor="AccountName">Account Name </Form.Label>
                              <Form.Control type="text"  id="AccountName" placeholder=" Your Account Name"/>
                            </Form.Group>
                            </Col>
                            <Col lg="6">
                              <div className="mb-3">
                                <Form.Group className="form-group">
                                  <Form.Label  htmlFor="AccountName">Parent Account </Form.Label>

                                  <Form.Select className=" form-select mb-3" aria-label=".form-select-lg">
                                      <option defaultValue="">SafeRoad All</option>
                                      <option defaultValue="1">One</option>
                                      <option defaultValue="2">Two</option>
                                      <option defaultValue="3">Three</option>
                                  </Form.Select>
                                </Form.Group>

                              </div>
                            </Col>
                            <Col lg="6">
                              <div className="mb-3">
                                  <Form.Group className="form-group">
                                    <Form.Check className=" form-check-inline">
                                        <FormCheck.Input type="checkbox" className="form-check-input" id="reseller"/>
                                        <FormCheck.Label className="form-check-label px-3 fs-5" htmlFor="reseller">Reseller</FormCheck.Label>
                                    </Form.Check>
                                  </Form.Group>

                                </div>
                              
                            </Col>

                            <Col lg="6">
                              <div className="mb-3">
                                <Form.Group className="form-group">
                                  <Form.Label  htmlFor="accountType">Account Type </Form.Label>

                                  <Form.Select id="accountType" className=" form-select mb-3" aria-label=".form-select-lg">
                                      <option defaultValue="">Gerneral</option>
                                      <option defaultValue="1">One</option>
                                      <option defaultValue="2">Two</option>
                                      <option defaultValue="3">Three</option>
                                  </Form.Select>
                                </Form.Group>

                              </div>
                            </Col>

                          </Row>

                          <Row className="border border-light rounded p-3 mb-3">
                            <Col lg="6">
                                <div className="mb-3">
                                  <Form.Group className="form-group">
                                    <Form.Label  htmlFor="billingPeriod">Billing Period </Form.Label>

                                    <Form.Select id="billingPeriod" className=" form-select mb-3" aria-label=".form-select-lg">
                                      <option defaultValue="1">Yearly</option>
                                      <option defaultValue="2">Quarterly</option>
                                      <option defaultValue="3">Monthly</option>
                                    </Form.Select>
                                  </Form.Group>

                                </div>
                            </Col>

                            <Col lg="6">
                                <div className="mb-3">
                                  <Form.Group className="form-group">
                                    <Form.Label  htmlFor="billingDate">Billing Started On</Form.Label>
                                    <Form.Control type="date"  id="billingDate" defaultValue="2021-10-17"/>
                                  </Form.Group>

                                </div>
                            </Col>

                            <Col lg="6">
                             <Form.Group className="form-group">
                              <Form.Label  htmlFor="AccountTag">Account Tag </Form.Label>
                              <Form.Control type="text"  id="AccountTag" placeholder=" Your Account Tag"/>
                            </Form.Group>
                            </Col>
                            <Col lg="6">
                                <div className="mb-3">
                                  <Form.Group className="form-group">
                                    <Form.Label  htmlFor="nextBillingDate">Next Billing Date</Form.Label>
                                    <Form.Control type="date"  id="nextBillingDate" defaultValue="2021-10-17"/>
                                  </Form.Group>

                                </div>
                            </Col>
                            
                            
                          </Row>

                          <Row className="border border-light rounded p-3 mb-3">
                            <h4 className="card-title mb-5 mt-3">WASL Integration (Optional)</h4>

                            <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="identity">Identity Number </Form.Label>
                                <Form.Control type="NUMBER"  id="identity"/>
                              </Form.Group>
                            </Col>
                            <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="Commercial">Commercial Record Number </Form.Label>
                                <Form.Control type="bumber"  id="Commercial"/>
                              </Form.Group>
                            </Col>
                            <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="HijriDate">Record Issue Date Hijri </Form.Label>
                                <Form.Control type="text"  id="HijriDate"/>
                              </Form.Group>
                            </Col>
                            <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="phoneNum">Phone Number </Form.Label>
                                <Form.Control type="number"  id="phoneNum"/>
                              </Form.Group>
                            </Col>
                            <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="extensionNum">Extension Number</Form.Label>
                                <Form.Control type="number"  id="extensionNum"/>
                              </Form.Group>
                            </Col>
                            <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="emailAddress">Email Address </Form.Label>
                                <Form.Control type="email"  id="emailAddress"/>
                              </Form.Group>
                            </Col>
                            <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="managerName">Manager Name </Form.Label>
                                <Form.Control type="text"  id="managerName"/>
                              </Form.Group>
                            </Col>
                            <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="managerPhoneNum">Manager Phone Number</Form.Label>
                                <Form.Control type="number"  id="managerPhoneNum"/>
                              </Form.Group>
                            </Col>
                            <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="ManagerMobile">Manager Mobile Number </Form.Label>
                                <Form.Control type="number"  id="ManagerMobile"/>
                              </Form.Group>
                            </Col>
                          </Row>

                      </Form>

                      <div className="mt-5 d-flex justify-content-end">
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
  