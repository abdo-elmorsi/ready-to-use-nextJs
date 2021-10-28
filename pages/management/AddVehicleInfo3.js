import react,{ CSSProperties,forwardRef } from 'react';
import { Row, Col, Card, Form, FormCheck} from "react-bootstrap";
import Select from 'react-select'

const model = [
  { value:"Add new device", label:"Add new device" },
  { value:"6109798923", label:"6109798923" },
  { value:"6109798924", label:"6109798924" },
  { value:"6109798925", label:"6109798925" },
]
const AddSIMCardInformation= () => {
  return(
    <>
      <Row>
        <Card>
          <Card.Body>
           <Row className=" d-flex justify-content-center mb-5"> 
             <Col lg="6">
                <Form className="mt-5">
                  <Row className="p-3 mb-3">
                    <div className="card-title">
                      <h4>Select exist SIM card</h4>
                    </div>
                      <Col md="12">
                        <div className="my-3">
                          <Form.Group className="form-group">
                            <Form.Label>Select a SIN card</Form.Label>
                                <Select options={model} />
                           </Form.Group>

                        </div>
                      </Col>
                      <Col md="12" className="card-title my-3">
                        <h4>Add new SIM card</h4>
                      </Col>
  
                        <Col md="6">
                          <div className="mb-3">
                            <Form.Group className="form-group">
                            <Form.Label  htmlFor="SimSerialNumber">SIM Serial Number</Form.Label>
                            <Form.Control type="number"  id="SimSerialNumber"/>
                          </Form.Group>
                          </div>
                          </Col>
                        <Col md="6">
                          <div className="mb-3">
                            <Form.Group className="form-group">
                            <Form.Label  htmlFor="phoneNumber">Phone Number</Form.Label>
                            <Form.Control type="number"  id="phoneNumber"/>
                          </Form.Group>
                          </div>
                          </Col>
                        <Col md="12">
                          <div className="mb-3">
                            <Form.Group className="form-group">
                              <Form.Label>SIM Provider</Form.Label>
                                <Select options={model} />
                            </Form.Group>
                          </div>
                      </Col>
                    </Row>
                </Form>

                  <div className="mt-5 d-flex justify-content-end">
                    <button className="btn btn-primary px-3 py-2 ms-3">Back</button>
                    <button className="btn btn-primary px-3 py-2 ms-3">Next</button>
                    <button className="btn btn-primary px-3 py-2 ms-3">Cancel</button>
                  </div>
                  </Col>
              </Row>
          </Card.Body>
        </Card>            
      </Row>
    </>
  )
}
export default AddSIMCardInformation;
