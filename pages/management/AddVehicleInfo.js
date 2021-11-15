import { CSSProperties } from "react";
import {
  RowColCardForm,
  ButtonFormCheck,
  Row,
  Col,
  Form,
  FormCheck,
  Card,
} from "react-bootstrap";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";

const ManufactCompanyName = [
  { value: "Acura", label: "Acura" },
  { value: "Alfa Romeo", label: "Alfa Romeo" },
  { value: "AM General", label: "AM General" },
  { value: "AMC", label: "AMC" },
  { value: "Ariel", label: "Ariel" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "Asuna", label: "Asuna" },
  { value: "Audi", label: "Audi" },
  { value: "Austin", label: "Austin" },
  { value: "Austin-Healey", label: "Austin-Healey" },
  { value: "Bedford", label: "Bedford" },
  { value: "Bentley", label: "Bentley" },
];

const model = [
  { value: "CL", label: "CL" },
  { value: "CSX", label: "CSX" },
  { value: "EL", label: "EL" },
  { value: "Integra", label: "Integra" },
  { value: "Legend", label: "Legend" },
  { value: "MDX", label: "MDX" },
  { value: "NSX", label: "NSX" },
  { value: "RDX", label: "RDX" },
  { value: "RL", label: "RL" },
  { value: "RSX", label: "RSX" },
  { value: "SLX", label: "SLX" },
  { value: "TL", label: "TL" },
  { value: "TSX", label: "TSX" },
  { value: "Vigor", label: "Vigor" },
];
const vehicleType = [
  { value: "Salon", label: "Salon" },
  { value: "4X4", label: "4X4" },
  { value: "Truck", label: "Truck" },
  { value: "Sport", label: "Sport" },
];

const AddVehicleInfo = () => {
  return (
    <>
      <Row>
        <Card>
          <Card.Body>
            <Row className=" d-flex justify-content-center">
              <Col md="8">
                <Card className="shadow-none">
                  <Card.Body>
                    <Form className="mt-5">
                      <Row className=" rounded p-3 mb-3">
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="displayName">
                              Display Name{" "}
                            </Form.Label>
                            <Form.Control type="text" id="displayName" />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="plate number">
                              Plate Number{" "}
                            </Form.Label>
                            <Form.Control type="number" id="plateNnpm" />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <div className="mb-3">
                            <Form.Group className="form-group">
                              <Form.Label htmlFor="ManufactCompanyName">
                                Manufacturing company
                              </Form.Label>

                              <Select options={ManufactCompanyName} />
                            </Form.Group>
                          </div>
                        </Col>
                        <Col lg="6">
                          <div className="mb-3">
                            <Form.Group className="form-group">
                              <Form.Label htmlFor="ManufactCompanyName">
                                Model
                              </Form.Label>
                              <Select options={model} />
                            </Form.Group>
                          </div>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="ManufactureYear">
                              Manufacturing Year
                            </Form.Label>
                            <Form.Control type="number" id="ManufactureYear" />
                          </Form.Group>
                        </Col>

                        <Col lg="6">
                          <div className="mb-3">
                            <Form.Group className="form-group">
                              <Form.Label htmlFor="vehicleType">
                                vehicle Type
                              </Form.Label>
                              <Select id="vehicleType" options={vehicleType} />
                            </Form.Group>
                          </div>
                        </Col>

                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="color">color</Form.Label>
                            <Form.Control type="text" id="color" />
                          </Form.Group>
                        </Col>

                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="chassisNumber">
                              Chassis Number
                            </Form.Label>
                            <Form.Control type="number" id="chassisNumber" />
                          </Form.Group>
                        </Col>

                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="speedLimit">
                              Speed Limit
                            </Form.Label>
                            <Form.Control type="number" id="speedLimit" />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="LiterPer100KM">
                              Liter Per 100KM
                            </Form.Label>
                            <Form.Control type="number" id="LiterPer100KM" />
                          </Form.Group>
                        </Col>
                        <Col lg="6" className="d-flex justify-content-between">
                          <Form.Check className="form-check mb-3">
                            <Form.Check.Input
                              type="checkbox"
                              id="RequiredRFID"
                            />
                            <Form.Check.Label htmlFor="RequiredRFID">
                              Required RFID
                            </Form.Check.Label>
                          </Form.Check>
                          <Form.Check className="form-check mb-3">
                            <Form.Check.Input
                              type="checkbox"
                              id="HaveIgnition"
                            />
                            <Form.Check.Label htmlFor="HaveIgnition">
                              HaveIgnition
                            </Form.Check.Label>
                          </Form.Check>
                          <Form.Check className="form-check mb-3">
                            <Form.Check.Input type="checkbox" id="HaveRelay" />
                            <Form.Check.Label htmlFor="HaveRelay">
                              HaveRelay
                            </Form.Check.Label>
                          </Form.Check>
                        </Col>
                      </Row>

                      <Row className=" rounded p-3 mb-3">
                        <h4 className="card-title mb-5 mt-3">
                          WASL Integration (Optional)
                        </h4>

                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="Number">Number </Form.Label>
                            <Form.Control type="number" id="Number" />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="rightLetter">
                              Right Letter
                            </Form.Label>
                            <Form.Control type="text" id="rightLetter" />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="middleLetter">
                              Middle Letter
                            </Form.Label>
                            <Form.Control type="text" id="middleLetter" />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="middleLetter2">
                              Middle Letter
                            </Form.Label>
                            <Form.Control type="text" id="middleLetter2" />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="leftLetter">
                              Left Letter
                            </Form.Label>
                            <Form.Control type="text" id="leftLetter" />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="SequenceNumber">
                              Sequence Number
                            </Form.Label>
                            <Form.Control type="number" id="SequenceNumber" />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="PlateType">
                              Plate Type
                            </Form.Label>
                            <Form.Control type="number" id="PlateType" />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="IMEINumber">
                              IMEI Number
                            </Form.Label>
                            <Form.Control type="number" id="IMEINumber" />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form>

                    <div className="mt-5 d-flex justify-content-end">
                      <button className="btn btn-primary px-3 py-2 ms-3">
                        <FontAwesomeIcon
                          className="me-2"
                          icon={faArrowRight}
                          size="sm"
                        />
                        Next
                      </button>
                      <button className="btn btn-primary px-3 py-2 ms-3">
                        <FontAwesomeIcon
                          className="me-2"
                          icon={faTimes}
                          size="sm"
                        />
                        Cancel
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
};

export default AddVehicleInfo;
