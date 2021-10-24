import {Row, Col, Card, Form , FormCheck} from "react-bootstrap"



const SelectUserRole = () => {
  return(
    <>
      <Row>
        <Card>
          <Card.Body>
            <Row>
              <Col lg="4" md="6" className="mb-3">
                <Card className="border-bottom border-4 border-0 border-primary">
                    <Card.Body className="d-flex justify-content-start align-items-center">
                      <div>
                        <Form.Check className="mb-3 form-check">
                          <FormCheck.Input type="checkbox" className="me-3 p-2" id="exampleCheck1"/>
                          <FormCheck.Label className="h4" htmlFor="exampleCheck1">Admin</FormCheck.Label>
                        </Form.Check>
                        <span>text deisciption here...</span>
                      </div>
                    </Card.Body>
                </Card>
              </Col>
              <Col lg="4" md="6" className="mb-3">
                <Card className="border-bottom border-4 border-0 border-primary">
                    <Card.Body className="d-flex justify-content-start align-items-center">
                      <div>
                        <Form.Check className="mb-3 form-check">
                          <FormCheck.Input type="checkbox" className="me-3 p-2" id="exampleCheck1"/>
                          <FormCheck.Label className="h4" htmlFor="exampleCheck1">Account Manager</FormCheck.Label>
                        </Form.Check>
                        <span>text deisciption here...</span>
                      </div>
                    </Card.Body>
                </Card>
              </Col>
              <Col lg="4" md="6" className="mb-3">
                <Card className="border-bottom border-4 border-0 border-primary">
                    <Card.Body className="d-flex justify-content-start align-items-center">
                      <div>
                        <Form.Check className="mb-3 form-check">
                          <FormCheck.Input type="checkbox" className="me-3 p-2" id="exampleCheck1"/>
                          <FormCheck.Label className="h4" htmlFor="exampleCheck1">User</FormCheck.Label>
                        </Form.Check>
                        <span>text deisciption here...</span>
                      </div>
                    </Card.Body>
                </Card>
              </Col>
              <Col lg="4" md="6" className="mb-3">
                <Card className="border-bottom border-4 border-0 border-primary">
                    <Card.Body className="d-flex justify-content-start align-items-center">
                      <div>
                        <Form.Check className="mb-3 form-check">
                          <FormCheck.Input type="checkbox" className="me-3 p-2" id="exampleCheck1"/>
                          <FormCheck.Label className="h4" htmlFor="exampleCheck1">Sales</FormCheck.Label>
                        </Form.Check>
                        <span>text deisciption here...</span>
                      </div>
                    </Card.Body>
                </Card>
              </Col>
              <Col lg="4" md="6" className="mb-3">
                <Card className="border-bottom border-4 border-0 border-primary">
                    <Card.Body className="d-flex justify-content-start align-items-center">
                      <div>
                        <Form.Check className="mb-3 form-check">
                          <FormCheck.Input type="checkbox" className="me-3 p-2" id="exampleCheck1"/>
                          <FormCheck.Label className="h4" htmlFor="exampleCheck1">Account Admin</FormCheck.Label>
                        </Form.Check>
                        <span>text deisciption here...</span>
                      </div>
                    </Card.Body>
                </Card>
              </Col>
              <Col lg="4" md="6" className="mb-3">
                <Card className="border-bottom border-4 border-0 border-primary">
                    <Card.Body className="d-flex justify-content-start align-items-center">
                      <div>
                        <Form.Check className="mb-3 form-check">
                          <FormCheck.Input type="checkbox" className="me-3 p-2" id="exampleCheck1"/>
                          <FormCheck.Label className="h4" htmlFor="exampleCheck1">Reporting</FormCheck.Label>
                        </Form.Check>
                        <span>text deisciption here...</span>
                      </div>
                    </Card.Body>
                </Card>
              </Col>
              
            </Row>
            <Row>
              <div className="mt-5 d-flex justify-content-end">
                <button className="btn btn-primary px-3 py-2 ms-3">Back</button>
                <button className="btn btn-primary px-3 py-2 ms-3">Next</button>
                <button className="btn btn-primary px-3 py-2 ms-3">Cancel</button>
                </div>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </>
  )
}

export default SelectUserRole