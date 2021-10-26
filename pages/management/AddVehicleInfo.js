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
  { value:"Austin", label:"Austin" },
  { value:"Austin-Healey", label:"Austin-Healey" },
  { value:"Bedford", label:"Bedford" },
  { value:"Bentley", label:"Bentley" },
  { value:"BMW", label:"BMW" },
  { value:"Bugatti", label:"Bugatti" },
  { value:"Buick", label:"Buick" },
  { value:"Cadillac", label:"Cadillac" },
  { value:"Checker", label:"Checker" },
  { value:"Chevrolet", label:"Chevrolet" },
  { value:"Chrysler", label:"Chrysler" },
  { value:"Citroen", label:"Citroen" },
  { value:"Continental", label:"Continental" },
  { value:"Dacia", label:"Dacia" },
  { value:"Daewoo", label:"Daewoo" },
  { value:"Daihatsu", label:"Daihatsu" },
  { value:"Daimler", label:"Daimler" },
  { value:"Datsun", label:"Datsun" },
  { value:"DeLorean", label:"DeLorean" },
  { value:"DeSoto", label:"DeSoto" },
  { value:"DeTomaso", label:"DeTomaso" },
  { value:"Diasio", label:"Diasio" },
  { value:"Dodge", label:"Dodge" },
  { value:"Duesenberg", label:"Duesenberg" },
  { value:"Eagle", label:"Eagle" },
  { value:"Eunos", label:"Eunos" },
  { value:"Excalibur", label:"Excalibur" },
  { value:"Factory Five", label:"Factory Five" },
  { value:"Ferrari", label:"Ferrari" },
  { value:"Fiat", label:"Fiat" },
  { value:"Ford", label:"Ford" },
  { value:"Frazer", label:"Frazer" },
  { value:"Freightliner", label:"Freightliner" },
  { value:"Fusion", label:"Fusion" },
  { value:"Gatsby", label:"Gatsby" },
  { value:"Geo", label:"Geo" },
  { value:"Gillet", label:"Gillet" },
  { value:"GMC", label:"GMC" },
  { value:"Graber", label:"Graber" },
  { value:"GTM", label:"GTM" },
  { value:"Heinkel", label:"Heinkel" },
  { value:"Hillman", label:"Hillman" },
  { value:"Holden", label:"Holden" },
  { value:"Honda", label:"Honda" },
  { value:"Hudson", label:"Hudson" },
  { value:"Hummer", label:"Hummer" },
  { value:"Hyundai", label:"Hyundai" },
  { value:"IHC", label:"IHC" },
  { value:"Infiniti", label:"Infiniti" },
  { value:"Infinity", label:"Infinity" },
  { value:"Innocenti", label:"Innocenti" },
  { value:"International", label:"International" },
  { value:"Iso", label:"Iso" },
  { value:"Isuzu", label:"Isuzu" },
  { value:"Jaguar", label:"Jaguar" },
  { value:"Jeep", label:"Jeep" },
  { value:"Jensen", label:"Jensen" },
  { value:"Kaiser", label:"Kaiser" },
  { value:"Kia", label:"Kia" },
  { value:"Lada", label:"Lada" },
  { value:"Lamborghini", label:"Lamborghini" },
  { value:"Lancia", label:"Lancia" },
  { value:"Land Rover", label:"Land Rover" },
  { value:"Lexus", label:"Lexus" },
  { value:"Lincoln", label:"Lincoln" },
  { value:"Lotus", label:"Lotus" },
  { value:"Mack", label:"Mack" },
  { value:"Maserati", label:"Maserati" },
  { value:"Matra", label:"Matra" },
  { value:"Maybach", label:"Maybach" },
  { value:"Mazda", label:"Mazda" },
  { value:"MCC", label:"MCC" },
  { value:"McLaren", label:"McLaren" },
  { value:"Mercedes-Benz", label:"Mercedes-Benz" },
  { value:"Mercury", label:"Mercury" },
  { value:"Merkur", label:"Merkur" },
  { value:"MG", label:"MG" },
  { value:"MINI", label:"MINI" },
  { value:"Mitsubishi", label:"Mitsubishi" },
  { value:"Mongoose", label:"Mongoose" },
  { value:"Morgan", label:"Morgan" },
  { value:"Morris", label:"Morris" },
  { value:"Mosler", label:"Mosler" },
  { value:"Muntz", label:"Muntz" },
  { value:"Nash", label:"Nash" },
  { value:"Nissan", label:"Nissan" },
  { value:"Noble", label:"Noble" },
  { value:"NSU", label:"NSU" },
  { value:"Oldsmobile", label:"Oldsmobile" },
  { value:"Opel", label:"Opel" },
  { value:"Packard", label:"Packard" },
  { value:"Pagani", label:"Pagani" },
  { value:"Panoz", label:"Panoz" },
  { value:"Perodua", label:"Perodua" },
  { value:"Peugeot", label:"Peugeot" },
  { value:"Plymouth", label:"Plymouth" },
  { value:"Pontiac", label:"Pontiac" },
  { value:"Porsche", label:"Porsche" },
  { value:"Proton", label:"Proton" },
  { value:"Radical", label:"Radical" },
  { value:"Rambler", label:"Rambler" },
  { value:"Renault", label:"Renault" },
  { value:"Rickman", label:"Rickman" },
  { value:"Rolls-Royce", label:"Rolls-Royce" },
  { value:"Rover", label:"Rover" },
  { value:"Saab", label:"Saab" },
  { value:"Saleen", label:"Saleen" },
  { value:"Saturn", label:"Saturn" },
  { value:"Scion", label:"Scion" },
  { value:"Seat", label:"Seat" },
  { value:"Shelby", label:"Shelby" },
  { value:"Skoda", label:"Skoda" },
  { value:"smart", label:"smart" },
  { value:"SSC", label:"SSC" },
  { value:"Stalker", label:"Stalker" },
  { value:"Sterling", label:"Sterling" },
  { value:"Studebaker", label:"Studebaker" },
  { value:"Subaru", label:"Subaru" },
  { value:"Sunbeam", label:"Sunbeam" },
  { value:"Suzuki", label:"Suzuki" },
  { value:"Talbot", label:"Talbot" },
  { value:"Tata", label:"Tata" },
  { value:"Tatra", label:"Tatra" },
  { value:"TD", label:"TD" },
  { value:"Tesla", label:"Tesla" },
  { value:"Toyota", label:"Toyota" },
  { value:"Trabant", label:"Trabant" },
  { value:"Triumph", label:"Triumph" },
  { value:"TRV", label:"TRV" },
  { value:"Ultima", label:"Ultima" },
  { value:"Vauxhall", label:"Vauxhall" },
  { value:"Volga", label:"Volga" },
  { value:"Volkswagen", label:"Volkswagen" },
  { value:"Volvo", label:"Volvo" },
  { value:"Willys", label:"Willys" },
  { value:"Yugo", label:"Yugo" },
  { value:"MAN", label:"MAN" },
  { value:"AIRMAN", label:"AIRMAN" }  
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
const uniqueKey = (arr) =>{
  for(let i = 0; i < arr.length; i++)
  return i
}

const AddVehicleInfo = () =>{
  return(
    <>
      <Row>
        <Card>
          <Card.Body>
            <Row className=" d-flex justify-content-center">
              <Col md="9">
                <Card className="shadow-none">
                    <Card.Body>
                        
                        <Form className="mt-5">
                        <Row className=" rounded p-3 mb-3">
                              <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="displayName">Display Name </Form.Label>
                                <Form.Control type="text"  id="displayName"/>
                              </Form.Group>
                              </Col>
                              <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="plate number">Plate Number </Form.Label>
                                <Form.Control type="number"  id="plateNnpm"/>
                              </Form.Group>
                              </Col>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Form.Group className="form-group">
                                    <Form.Label  htmlFor="ManufactCompanyName">Manufacturing company</Form.Label>
                                        
                                          <Select options={ManufactCompanyName} />
                                  </Form.Group>
                                </div>
                              </Col>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Form.Group className="form-group">
                                    <Form.Label  htmlFor="ManufactCompanyName">Model</Form.Label>
                                        <Select options={model} />
                                    </Form.Group>
                                </div>
                              </Col>
                              <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="ManufactureYear">Manufacturing Year</Form.Label>
                                <Form.Control type="number"  id="ManufactureYear"/>
                              </Form.Group>
                              </Col>
                              
                              <Col lg="6">
                                <div className="mb-3">
                                  <Form.Group className="form-group">
                                    <Form.Label  htmlFor="vehicleType">vehicle Type</Form.Label>
                                        <Select id="vehicleType" options={vehicleType} />
                                    </Form.Group>
                                </div>
                              </Col>

                              <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="color">color</Form.Label>
                                <Form.Control type="text"  id="color"/>
                              </Form.Group>
                              </Col>

                              <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="chassisNumber">Chassis Number</Form.Label>
                                <Form.Control type="number"  id="chassisNumber"/>
                              </Form.Group>
                              </Col>

                              <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="speedLimit">Speed Limit</Form.Label>
                                <Form.Control type="number"  id="speedLimit"/>
                              </Form.Group>
                              </Col>
                              <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="LiterPer100KM">Liter Per 100KM</Form.Label>
                                <Form.Control type="number"  id="LiterPer100KM"/>
                              </Form.Group>
                              </Col>
                              <Col lg="6" className="d-flex justify-content-between">
                                <Form.Check className="form-check mb-3">
                                  <Form.Check.Input type="checkbox"  id="RequiredRFID"/>
                                  <Form.Check.Label htmlFor="RequiredRFID">Required RFID</Form.Check.Label>
                                </Form.Check>
                                <Form.Check className="form-check mb-3">
                                  <Form.Check.Input type="checkbox"  id="HaveIgnition"/>
                                  <Form.Check.Label htmlFor="HaveIgnition">HaveIgnition</Form.Check.Label>
                                </Form.Check>
                                <Form.Check className="form-check mb-3">
                                  <Form.Check.Input type="checkbox"  id="HaveRelay"/>
                                  <Form.Check.Label htmlFor="HaveRelay">HaveRelay</Form.Check.Label>
                                </Form.Check>
                              </Col>
                            </Row>

                            <Row className=" rounded p-3 mb-3">
                              <h4 className="card-title mb-5 mt-3">WASL Integration (Optional)</h4>

                              <Col lg="6">
                                <Form.Group className="form-group">
                                  <Form.Label  htmlFor="Number">Number </Form.Label>
                                  <Form.Control type="number"  id="Number"/>
                                </Form.Group>
                              </Col>
                              <Col lg="6">
                                <Form.Group className="form-group">
                                  <Form.Label  htmlFor="rightLetter">Right Letter</Form.Label>
                                  <Form.Control type="text"  id="rightLetter"/>
                                </Form.Group>
                              </Col>
                              <Col lg="6">
                                <Form.Group className="form-group">
                                  <Form.Label  htmlFor="middleLetter">Middle Letter</Form.Label>
                                  <Form.Control type="text"  id="middleLetter"/>
                                </Form.Group>
                              </Col>
                              <Col lg="6">
                                <Form.Group className="form-group">
                                  <Form.Label  htmlFor="middleLetter2">Middle Letter</Form.Label>
                                  <Form.Control type="text"  id="middleLetter2"/>
                                </Form.Group>
                              </Col>
                              <Col lg="6">
                                <Form.Group className="form-group">
                                  <Form.Label  htmlFor="leftLetter">Left Letter</Form.Label>
                                  <Form.Control type="text"  id="leftLetter"/>
                                </Form.Group>
                              </Col>
                              <Col lg="6">
                                <Form.Group className="form-group">
                                  <Form.Label  htmlFor="SequenceNumber">Sequence Number</Form.Label>
                                  <Form.Control type="number"  id="SequenceNumber"/>
                                </Form.Group>
                              </Col>
                              <Col lg="6">
                                <Form.Group className="form-group">
                                  <Form.Label  htmlFor="PlateType">Plate Type</Form.Label>
                                  <Form.Control type="number"  id="PlateType"/>
                                </Form.Group>
                              </Col>
                              <Col lg="6">
                                <Form.Group className="form-group">
                                  <Form.Label  htmlFor="IMEINumber">IMEI Number</Form.Label>
                                  <Form.Control type="number"  id="IMEINumber"/>
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
          </Card.Body>
        </Card>
      </Row>
    </>
  )
}

export default AddVehicleInfo