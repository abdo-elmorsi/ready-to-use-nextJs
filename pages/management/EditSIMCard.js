import React, {useState} from 'react'
import { Row, Col, Card, Form} from "react-bootstrap";
import Select from 'react-select'

const options = [
  { value: 'STC', label: 'STC' },
  { value: 'Zain', label: 'Zain' },
  { value: 'Mobily', label: 'Mobily' }
]

const EditSimCard = ()=> {
  return(
    <>
      <Card>
        <Card.Body>
          <Row className="d-flex justify-content-center">
           <Col md="7">
                      
            <Form className="mt-5">
              <Row className="p-3 mb-3">
                    <Col lg="6">
                      <Form.Group className="form-group">
                      <Form.Label  htmlFor="SIMCardSerialNumber">SImCard Serial Number</Form.Label>
                      <Form.Control type="number"  id="SIMCardSerialNumber"/>
                    </Form.Group>
                    </Col>
                    <Col lg="6">
                      <Form.Group className="form-group">
                      <Form.Label  htmlFor="phoneNumber">Phone Number</Form.Label>
                      <Form.Control type="number"  id="phoneNumber"/>
                    </Form.Group>
                    </Col>
                    <Col lg="12">
                      <div className="mb-3">
                        <Form.Group className="form-group">
                          <Form.Label  htmlFor="ProviderName">Provider Name</Form.Label>
                          <Select options={options} />
                        </Form.Group>
                      </div>
                    </Col>
                  </Row>
              </Form>
              <div className="mt-5 d-flex justify-content-end">
                <button className="btn btn-primary px-3 py-2 ms-3">Save Changes</button>
                <button className="btn btn-primary px-3 py-2 ms-3">Cancel</button>
              </div>
            </Col>
           </Row>
        </Card.Body>
      </Card>
    </>
  )
}
export default EditSimCard
