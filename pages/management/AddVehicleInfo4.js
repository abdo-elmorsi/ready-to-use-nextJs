import react,{ CSSProperties,forwardRef } from 'react';
import { Row, Col, Card, Form, FormCheck} from "react-bootstrap";
import Select from 'react-select'

const model = [
  { value:"Add new device", label:"Add new device" },
  { value:"6109798923", label:"6109798923" },
  { value:"6109798924", label:"6109798924" },
  { value:"6109798925", label:"6109798925" },
]
const AddGroupInformation = () => {
  return(
    <>
      <Row>
        <Card>
          <Card.Body>
           <Row className=" d-flex justify-content-center mb-5"> 
             <Col lg="6">
                <Form className="mt-5">
                      <Row>
                        <Col md="12">
                            <div className="mb-3">
                              <Form.Group className="form-group">
                                <Form.Label>Group Name</Form.Label>
                                  <Select options={model} />
                              </Form.Group>
                            </div>
                        </Col>
                        <Col md="6">
                          <div className="mb-3">
                              <Form.Group className="form-group">
                              <Form.Label  htmlFor="MaximumParkingTime">Maximum Parking Time</Form.Label>
                              <Form.Control type="number"  id="MaximumParkingTime"/>
                            </Form.Group>
                            </div>
                        </Col> 
                        <Col md="6">
                          <div className="mb-3">
                              <Form.Group className="form-group">
                              <Form.Label  htmlFor="MaximumIdlingTime">Maximum Idling Time</Form.Label>
                              <Form.Control type="number"  id="MaximumIdlingTime"/>
                            </Form.Group>
                            </div>
                        </Col> 
                        <Col md="12">
                          <div className="mb-3">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                              <Form.Label>Remarks</Form.Label>
                              <Form.Control as="textarea" rows={7} />
                            </Form.Group>
                            </div>
                        </Col> 
                      </Row>

                </Form>

                  <div className="mt-5 d-flex justify-content-end">
                    <button className="btn btn-primary px-3 py-2 ms-3">Back</button>
                    <button className="btn btn-primary px-3 py-2 ms-3">Finish</button>
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
export default AddGroupInformation;
