import { Row, Col, Card, Form} from "react-bootstrap";



const EditdriverInfo = ()=> {
  return(
    <>
      <Card>
        <Card.Body>
        <Row className=" d-flex justify-content-center"> 
        <Col md="8">
         <h4>Edit Driver Info</h4>
              <Form className="mt-5">
              <Row className="p-3 mb-3">
                <Col lg="6">
                  <Form.Group className="form-group">
                    <Form.Label  htmlFor="FirstName">First Name</Form.Label>
                    <Form.Control type="text"  id="FirstName" defaultValue="Fares"/>
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="form-group">
                    <Form.Label  htmlFor="lastName">Last Name</Form.Label>
                    <Form.Control type="text"  id="lastName" defaultValue="Saleh"/>
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="form-group">
                    <Form.Label  htmlFor="BirthDate">Date of Birth</Form.Label>
                    <Form.Control type="Date"  id="BirthDate" defaultValue="10/12/2000"/>
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="form-group">
                    <Form.Label  htmlFor="Nationality">Nationality</Form.Label>
                    <Form.Control type="text"  id="Nationality" defaultValue="Saudi Arabian"/>
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="form-group">
                    <Form.Label  htmlFor="PhoneNumber">Phone Number</Form.Label>
                    <Form.Control type="text"  id="PhoneNumber" defaultValue="05123456789"/>
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="form-group">
                    <Form.Label  htmlFor="Email">Email</Form.Label>
                    <Form.Control type="email"  id="Email" defaultValue="fares@gmail.com"/>
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="form-group">
                    <Form.Label  htmlFor="LicenceNumber">Licence Number</Form.Label>
                    <Form.Control type="number"  id="LicenceNumber" defaultValue="05123456789"/>
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="form-group">
                    <Form.Label  htmlFor="LicenceEXPDate">Licence Expiration Date</Form.Label>
                    <Form.Control type="date"  id="LicenceEXPDate" defaultValue="15/09/2024"/>
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="form-group">
                    <Form.Label  htmlFor="Department">Department</Form.Label>
                    <Form.Control type="text"  id="Department" defaultValue="Department"/>
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="form-group">
                    <Form.Label  htmlFor="RFID">RFID</Form.Label>
                    <Form.Control type="text"  id="RFID" defaultValue="fares115"/>
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="form-group">
                    <Form.Label  htmlFor="AssignedVehicle">Assigned Vehicle</Form.Label>
                    <Form.Control type="text"  id="AssignedVehicle" defaultValue="9311 Fares FMB920"/>
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="form-group">
                    <Form.Label  htmlFor="Image">Image</Form.Label>
                    <Form.Control type="file"  id="Image" />
                  </Form.Group>
                </Col>
              </Row>
              </Form>
            
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}
export default EditdriverInfo
