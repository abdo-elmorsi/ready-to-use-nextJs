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
import { Provider } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTimes } from "@fortawesome/free-solid-svg-icons";

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

const EditDeviceInfo = () => {
  return (
    <>
      <Row>
        <Card>
          <Card.Body>
            <Row className=" d-flex justify-content-center">
              <Col md="8">
                <Card className="shadow-none">
                  <Card.Body>
                    <Form>
                      <Row className=" rounded p-3 mb-3">
                        <h4 className="card-title mb-5 mt-3">
                          Edit Device Information
                        </h4>

                        <Col lg="12">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="plate number">
                              Plate Number{" "}
                            </Form.Label>
                            <Form.Control
                              type="number"
                              id="plateNnpm"
                              defaultValue="0304684068"
                            />
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
                      </Row>

                      <Row className=" rounded p-3 mb-3">
                        <h4 className="card-title mb-5 mt-3">
                          Edit SIMCard Information
                        </h4>
                        <Col lg="12">
                          <div className="mb-3">
                            <Form.Group className="form-group">
                              <Form.Label htmlFor="ManufactCompanyName">
                                Select SIMCard
                              </Form.Label>
                              <Select options={model} />
                            </Form.Group>
                          </div>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="serialNumber">
                              Serial Number{" "}
                            </Form.Label>
                            <Form.Control type="number" id="serialNumber" />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="PhoneNumber">
                              Phone Number{" "}
                            </Form.Label>
                            <Form.Control type="number" id="PhoneNumber" />
                          </Form.Group>
                        </Col>
                        <Col lg="12">
                          <div className="mb-3">
                            <Form.Group className="form-group">
                              <Form.Label htmlFor="ManufactCompanyName">
                                SIM Provider
                              </Form.Label>
                              <Select options={model} />
                            </Form.Group>
                          </div>
                        </Col>
                      </Row>
                    </Form>

                    <div className="mt-5 d-flex justify-content-end">
                      <button className="btn btn-primary px-3 py-2 ms-3">
                        <FontAwesomeIcon
                          className="me-2"
                          icon={faSave}
                          size="sm"
                        />
                        Save WASl and Weight
                      </button>
                      <button className="btn btn-primary px-3 py-2 ms-3">
                        <FontAwesomeIcon
                          className="me-2"
                          icon={faSave}
                          size="sm"
                        />
                        Save Changes
                      </button>
                      <button className="btn btn-primary px-3 py-2 ms-3">
                        <FontAwesomeIcon
                          className="me-2"
                          icon={faTimes}
                          size="sm"
                        />
                        Close
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

export default EditDeviceInfo;
