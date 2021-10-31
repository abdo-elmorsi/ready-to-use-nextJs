import { CSSProperties } from 'react';
import {RowColCardForm, ButtonFormCheck,Row,Col,Form,FormCheck,Card} from "react-bootstrap"
import Select from 'react-select'



const ManufactCompanyName = [
  { value:"Acura", label:"Acura" },
  { value:"Alfa Romeo", label:"Alfa Romeo" },
  { value:"AM General", label:"AM General" },
  { value:"AMC", label:"AMC" },
  { value:"Ariel", label:"Ariel" },
  { value:"Aston Martin", label:"Aston Martin" },
  { value:"Asuna", label:"Asuna" },
  { value:"Audi", label:"Audi" },
  { value:"Austin", label:"Austin" }
]

const model = [
  { value:"CL", label:"CL" },
  { value:"CSX", label:"CSX" },
  { value:"EL", label:"EL" },
  { value:"Integra", label:"Integra" },
  { value:"Legend", label:"Legend" },
  { value:"MDX", label:"MDX" },
  { value:"NSX", label:"NSX" },
  { value:"RDX", label:"RDX" },
  { value:"RL", label:"RL" },
  { value:"RSX", label:"RSX" },
  { value:"SLX", label:"SLX" },
  { value:"TL", label:"TL" },
  { value:"TSX", label:"TSX" },
  { value:"Vigor", label:"Vigor" },
]
const vehicleType = [
  { value:"Salon", label:"Salon" },
  { value:"4X4", label:"4X4" },
  { value:"Truck", label:"Truck" },
  { value:"Sport", label:"Sport" },
]

const VehicleAccessories = () =>{
  return(
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
                          <h4 className="card-title mb-5 mt-3">Vehicle Information</h4>
                              
                              <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="plate number">Plate Number </Form.Label>
                                <Form.Control type="number"  id="plateNnpm" defaultValue="0304684068" disabled/>
                              </Form.Group>
                              </Col>
                              <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="displayName">Display Name </Form.Label>
                                <Form.Control type="text"  id="displayName" defaultValue="Maaz Khan 5716 ULB" disabled/>
                              </Form.Group>
                              </Col>
                              <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="Serialnumber">Serial Number </Form.Label>
                                <Form.Control type="number"  id="Serialnumber" defaultValue="0304684068" disabled/>
                              </Form.Group>
                              </Col>
                              <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="DeviceType">Device Type </Form.Label>
                                <Form.Control type="text"  id="DeviceType" defaultValue="SR01" disabled/>
                              </Form.Group>
                              </Col>
                              
                            </Row>

                            <Row>
                              <h4 className="card-title mb-5 mt-3">Accessories Information</h4>
                              <Col md="4">
                                <h5 className="p-3 text-center border-5 border-info border-bottom text-info mb-4 fw-normal">Temperature</h5>
                                <Col lg="12">
                                  <Form.Group className="form-group">
                                    <Form.Label  htmlFor="MaximunVoltage">Maximun Voltage</Form.Label>
                                    <Form.Control type="number"  id="MaximunVoltage"/>
                                  </Form.Group>
                                </Col>
                                <Col lg="12">
                                  <Form.Group className="form-group">
                                    <Form.Label  htmlFor="MinimumVoltage">Minimum Voltage</Form.Label>
                                    <Form.Control type="number"  id="MinimumVoltage"/>
                                  </Form.Group>
                                </Col>
                              </Col>
                              <Col md="4">
                                <h5 className="p-3 text-center border-5 border-primary border-bottom text-primary mb-4 fw-normal">Oil Change</h5>
                                <Col lg="12">
                                  <Form.Group className="form-group">
                                    <Form.Label  htmlFor="NextMileage">Next Mileage</Form.Label>
                                    <Form.Control type="text"  id="NextMileage"/>
                                  </Form.Group>
                                </Col>
                              </Col>
                              <Col md="4">
                                <h5 className="p-3 text-center border-5 border-info border-bottom text-info mb-4 fw-normal">Door Control</h5>
                                <Col lg="12">
                                  <Form.Group className="form-group">
                                    <Form.Label  htmlFor="DoorStatus">Door Status</Form.Label>
                                    <Form.Control type="text"  id="DoorStatus"/>
                                  </Form.Group>
                                </Col>
                              </Col>
                            </Row>


                        </Form>
                        <div className="mt-5 d-flex justify-content-end">
                          <button className="btn btn-primary px-3 py-2 ms-3">Save Changes</button>
                          <button className="btn btn-primary px-3 py-2 ms-3">Close</button>
                        </div>

                    </Card.Body>
                  </Card>
                  
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </>
  )
}

export default VehicleAccessories
