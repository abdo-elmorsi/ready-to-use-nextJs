import {Row,Col,Card,Form, Button,FormCheck} from "react-bootstrap"

const ManufactCompanyName = ["Acura","Alfa Romeo","AM General","AMC","Ariel","Aston Martin","Asuna","Audi","Austin","Austin-Healey","Bedford","Bentley","BMW","Bugatti","Buick","Cadillac","Checker","Chevrolet","Chrysler","Citroen","Continental","Dacia","Daewoo","Daihatsu","Daimler","Datsun","DeLorean","DeSoto","DeTomaso","Diasio","Dodge","Duesenberg","Eagle","Eunos","Excalibur","Factory Five","Ferrari","Fiat","Ford","Frazer","Freightliner","Fusion","Gatsby","Geo","Gillet","GMC","Graber","GTM","Heinkel","Hillman","Holden","Honda","Hudson","Hummer","Hyundai","IHC","Infiniti","Infinity","Innocenti","International","Iso","Isuzu","Jaguar","Jeep","Jensen","Kaiser","Kia","Lada","Lamborghini","Lancia","Land Rover","Lexus","Lincoln","Lotus","Mack","Maserati","Matra","Maybach","Mazda","MCC","McLaren","Mercedes-Benz","Mercury","Merkur","MG","MINI","Mitsubishi","Mongoose","Morgan","Morris","Mosler","Muntz","Nash","Nissan","Noble","NSU","Oldsmobile","Opel","Packard","Pagani","Panoz","Perodua","Peugeot","Plymouth","Pontiac","Porsche","Proton","Radical","Rambler","Renault","Rickman","Rolls-Royce","Rover","Saab","Saleen","Saturn","Scion","Seat","Shelby","Skoda","smart","SSC","Stalker","Sterling","Studebaker","Subaru","Sunbeam","Suzuki","Talbot","Tata","Tatra","TD","Tesla","Toyota","Trabant","Triumph","TRV","Ultima","Vauxhall","Volga","Volkswagen","Volvo","Willys","Yugo","MAN","AIRMAN"]

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
            <Row>
              <Col>
                <Card>
                    <Card.Body>
                        
                        <Form className="mt-5">
                        <Row className="border border-light rounded p-3 mb-3">
                              <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="displayName">Display Name </Form.Label>
                                <Form.Control type="text"  id="displayName" placeholder="Vehicle display name"/>
                              </Form.Group>
                              </Col>
                              <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="plate number">Plate Number </Form.Label>
                                <Form.Control type="number"  id="plate number" placeholder="Vehicle plate number"/>
                              </Form.Group>
                              </Col>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Form.Group className="form-group">
                                    <Form.Label  htmlFor="ManufactCompanyName">Manufacturing company</Form.Label>

                                    <Form.Select id="ManufactCompanyName" className=" form-select mb-3" aria-label=".form-select-lg">
                                        {
                                          ManufactCompanyName.map(item =>{
                                            return(<><option key={uniqueKey(ManufactCompanyName)} defaultValue={item}>{item}</option></>)})
                                        }
                                    </Form.Select>
                                  </Form.Group>

                                </div>
                              </Col>
                              <Col lg="6">
                                <div className="mb-3">
                                    <Form.Group className="form-group">
                                      <Form.Check className=" form-check-inline">
                                          <FormCheck.Input type="checkbox" className="form-check-input" id="reseller"/>
                                          <FormCheck.Label className="form-check-label px-3 fs-5" htmlFor="reseller">Reseller</FormCheck.Label>
                                      </Form.Check>
                                    </Form.Group>

                                  </div>
                                
                              </Col>

                              <Col lg="6">
                                <div className="mb-3">
                                  <Form.Group className="form-group">
                                    <Form.Label  htmlFor="accountType">Account Type </Form.Label>

                                    <Form.Select id="accountType" className=" form-select mb-3" aria-label=".form-select-lg">
                                        <option defaultValue="">Gerneral</option>
                                        <option defaultValue="1">One</option>
                                        <option defaultValue="2">Two</option>
                                        <option defaultValue="3">Three</option>
                                    </Form.Select>
                                  </Form.Group>

                                </div>
                              </Col>

                            </Row>

                            <Row className="border border-light rounded p-3 mb-3">
                              <Col lg="6">
                                  <div className="mb-3">
                                    <Form.Group className="form-group">
                                      <Form.Label  htmlFor="billingPeriod">Billing Period </Form.Label>

                                      <Form.Select id="billingPeriod" className=" form-select mb-3" aria-label=".form-select-lg">
                                        <option defaultValue="1">Yearly</option>
                                        <option defaultValue="2">Quarterly</option>
                                        <option defaultValue="3">Monthly</option>
                                      </Form.Select>
                                    </Form.Group>

                                  </div>
                              </Col>

                              <Col lg="6">
                                  <div className="mb-3">
                                    <Form.Group className="form-group">
                                      <Form.Label  htmlFor="billingDate">Billing Started On</Form.Label>
                                      <Form.Control type="date"  id="billingDate" defaultValue="2021-10-17"/>
                                    </Form.Group>

                                  </div>
                              </Col>

                              <Col lg="6">
                              <Form.Group className="form-group">
                                <Form.Label  htmlFor="AccountTag">Account Tag </Form.Label>
                                <Form.Control type="text"  id="AccountTag" placeholder=" Your Account Tag"/>
                              </Form.Group>
                              </Col>
                              <Col lg="6">
                                  <div className="mb-3">
                                    <Form.Group className="form-group">
                                      <Form.Label  htmlFor="nextBillingDate">Next Billing Date</Form.Label>
                                      <Form.Control type="date"  id="nextBillingDate" defaultValue="2021-10-17"/>
                                    </Form.Group>

                                  </div>
                              </Col>
                              
                              
                            </Row>

                            <Row className="border border-light rounded p-3 mb-3">
                              <h4 className="card-title mb-5 mt-3">WASL Integration (Optional)</h4>

                              <Col lg="6">
                                <Form.Group className="form-group">
                                  <Form.Label  htmlFor="identity">Identity Number </Form.Label>
                                  <Form.Control type="NUMBER"  id="identity"/>
                                </Form.Group>
                              </Col>
                              <Col lg="6">
                                <Form.Group className="form-group">
                                  <Form.Label  htmlFor="Commercial">Commercial Record Number </Form.Label>
                                  <Form.Control type="bumber"  id="Commercial"/>
                                </Form.Group>
                              </Col>
                              <Col lg="6">
                                <Form.Group className="form-group">
                                  <Form.Label  htmlFor="HijriDate">Record Issue Date Hijri </Form.Label>
                                  <Form.Control type="text"  id="HijriDate"/>
                                </Form.Group>
                              </Col>
                              <Col lg="6">
                                <Form.Group className="form-group">
                                  <Form.Label  htmlFor="phoneNum">Phone Number </Form.Label>
                                  <Form.Control type="number"  id="phoneNum"/>
                                </Form.Group>
                              </Col>
                              <Col lg="6">
                                <Form.Group className="form-group">
                                  <Form.Label  htmlFor="extensionNum">Extension Number</Form.Label>
                                  <Form.Control type="number"  id="extensionNum"/>
                                </Form.Group>
                              </Col>
                              <Col lg="6">
                                <Form.Group className="form-group">
                                  <Form.Label  htmlFor="emailAddress">Email Address </Form.Label>
                                  <Form.Control type="email"  id="emailAddress"/>
                                </Form.Group>
                              </Col>
                              <Col lg="6">
                                <Form.Group className="form-group">
                                  <Form.Label  htmlFor="managerName">Manager Name </Form.Label>
                                  <Form.Control type="text"  id="managerName"/>
                                </Form.Group>
                              </Col>
                              <Col lg="6">
                                <Form.Group className="form-group">
                                  <Form.Label  htmlFor="managerPhoneNum">Manager Phone Number</Form.Label>
                                  <Form.Control type="number"  id="managerPhoneNum"/>
                                </Form.Group>
                              </Col>
                              <Col lg="6">
                                <Form.Group className="form-group">
                                  <Form.Label  htmlFor="ManagerMobile">Manager Mobile Number </Form.Label>
                                  <Form.Control type="number"  id="ManagerMobile"/>
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