import { useState } from "react";
import { Row, Col, Card, Form, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTimes } from "@fortawesome/free-solid-svg-icons";

// component for show profile image preview when uploading
const React = require("react");
const Upload = () => {
  const [state, setState] = useState({ file: null });

  const handleChange = (e) => {
    setState({
      file: URL.createObjectURL(e.target.files[0]),
    });
  };
  return (
    <Col>
      <Row>
        <Col sm="8">
          <Form.Control type="file" onChange={handleChange} />
        </Col>
        <Col sm="4">
          <Image
            src={state.file || "https://i.imgur.com/vCihc0e.jpg"}
            className="rounded img-thumbnail"
            alt="Profile Picture"
            width="100"
            height="100"
          />
        </Col>
      </Row>
    </Col>
  );
};

const EditdriverInfo = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Row className=" d-flex justify-content-center">
            <Col md="8">
              <h4 className="my-3">Edit Driver Info</h4>
              <Form>
                <Row className="p-3 mb-3">
                  <Col lg="6">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="FirstName">First Name</Form.Label>
                      <Form.Control
                        type="text"
                        id="FirstName"
                        defaultValue="Fares"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="lastName">Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        id="lastName"
                        defaultValue="Saleh"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="BirthDate">Date of Birth</Form.Label>
                      <Form.Control
                        type="Date"
                        id="BirthDate"
                        defaultValue="10/12/2000"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="Nationality">Nationality</Form.Label>
                      <Form.Control
                        type="text"
                        id="Nationality"
                        defaultValue="Saudi Arabian"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="PhoneNumber">
                        Phone Number
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="PhoneNumber"
                        defaultValue="05123456789"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="Email">Email</Form.Label>
                      <Form.Control
                        type="email"
                        id="Email"
                        defaultValue="fares@gmail.com"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="LicenceNumber">
                        Licence Number
                      </Form.Label>
                      <Form.Control
                        type="number"
                        id="LicenceNumber"
                        defaultValue="05123456789"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="LicenceEXPDate">
                        Licence Expiration Date
                      </Form.Label>
                      <Form.Control
                        type="date"
                        id="LicenceEXPDate"
                        defaultValue="15/09/2024"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="Department">Department</Form.Label>
                      <Form.Control
                        type="text"
                        id="Department"
                        defaultValue="Department"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="RFID">RFID</Form.Label>
                      <Form.Control
                        type="text"
                        id="RFID"
                        defaultValue="fares115"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="AssignedVehicle">
                        Assigned Vehicle
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="AssignedVehicle"
                        defaultValue="9311 Fares FMB920"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="Image">Image</Form.Label>
                      <Upload />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <h4 className="my-3">WASL Integration (Optional)</h4>

                  <Col lg="6">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="IdentityNumber">
                        Identity Number
                      </Form.Label>
                      <Form.Control type="number" id="IdentityNumber" />
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="DateOfBirthHijri">
                        Date Of Birth Hijri
                      </Form.Label>
                      <Form.Control type="date" id="DateOfBirthHijri" />
                    </Form.Group>
                  </Col>
                  <Col lg="12">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="MobileNumber">
                        Mobile Number
                      </Form.Label>
                      <Form.Control type="text" id="MobileNumber" />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
              <div className="mt-5 d-flex justify-content-end">
                <button className="btn btn-primary px-3 py-2 ms-3">
                  <FontAwesomeIcon className="me-2" icon={faSave} size="sm" />
                  Save Changes
                </button>
                <button className="btn btn-primary px-3 py-2 ms-3">
                  <FontAwesomeIcon className="me-2" icon={faTimes} size="sm" />
                  close
                </button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default EditdriverInfo;
