import React from 'react'
import {Row,Col, Dropdown, Image} from 'react-bootstrap'
import Card from '../components/Card'

//progressbar
import Progress from '../components/progress.js'

// img
// import avatars1 from '../../../assets/images/avatars/01.png'

//Count-up
import CountUp from 'react-countup';

//apexcharts
import Chart from "react-apexcharts";

export default function Dashboard() {

    return (
        <div>
            <Row>

            {/* First section for map and active/disactive cars and drivers */}
               <Col lg="6">
                  <Row>
                     <Col md="6">
                        <Card>
                           <Card.Body>
                              <div className="d-flex justify-content-between">
                                 <div>
                                    <span><b>Revenue</b></span>
                                    <div className="mt-2">
                                       <h2 className="counter">$<CountUp  start={12163} end={35000} duration={3} /></h2>
                                    </div>
                                 </div>
                                 <div>
                                    <span className="badge bg-primary">Monthly</span>
                                 </div>
                              </div>
                              <div className="d-flex justify-content-between mt-2">
                                 <div>
                                    <span>Total Revenue</span>
                                 </div>
                                 <div>
                                    <span>35%</span>
                                 </div>
                              </div>
                              <div className="mt-3">
                                 <Progress softcolors="primary" color="primary" className="shadow-none w-100" value={70} minvalue={0} maxvalue={100} style={{height: "6px"}} />
                              </div>
                           </Card.Body>
                        </Card>
                     </Col>
                     <Col md="6">
                        <Card>
                           <Card.Body>
                              <div className="d-flex justify-content-between">
                                 <div>
                                    <span><b>Orders</b></span>
                                    <div className="mt-2">
                                       <h2 className="counter"><CountUp  start={754} end={2500} duration={3}/></h2>
                                    </div>
                                 </div>
                                 <div>
                                    <span className="badge bg-warning">Anual</span>
                                 </div>
                              </div>
                              <div className="d-flex justify-content-between mt-2">
                                 <div>
                                    <span>New Orders</span>
                                 </div>
                                 <div>
                                    <span>24%</span>
                                 </div>
                              </div>
                              <div className="mt-3">
                                 <Progress softcolors="warning" color="warning" className="shadow-none w-100" value={24} minvalue={0} maxvalue={100} style={{height: "6px"}} />
                              </div>
                           </Card.Body>
                        </Card>
                     </Col>
                  </Row>
                  <Row>
                     <Col md="6">
                        <Card>
                           <Card.Body>
                              <div className="d-flex justify-content-between">
                                 <div>
                                    <span><b>Leads</b></span>
                                    <div className="mt-2">
                                    <h2 className="counter">$<CountUp  start={12000} end={35000} duration={3}/></h2>
                                    </div>
                                 </div>
                                 <div>
                                    <span className="badge bg-danger">Today</span>
                                 </div>
                              </div>
                              <div className="d-flex justify-content-between mt-2">
                                 <div>
                                    <span>New Leads</span>
                                 </div>
                                 <div>
                                    <span>50%</span>
                                 </div>
                              </div>
                              <div className="mt-3">
                                 <Progress softcolors="danger" color="danger" className="shadow-none w-100" value={50} minvalue={0} maxvalue={100} style={{height: "6px"}} />
                              </div>
                           </Card.Body>
                        </Card>
                     </Col>
                     <Col md="6">
                        <Card>
                           <Card.Body>
                              <div className="d-flex justify-content-between">
                                 <div>
                                    <span><b>Conversion</b></span>
                                    <div className="mt-2">
                                       <h2 className="counter"><CountUp  start={4} end={35} duration={3}/>%</h2>
                                    </div>
                                 </div>
                                 <div>
                                    <span className="badge bg-info">This Month</span>
                                 </div>
                              </div>
                              <div className="d-flex justify-content-between mt-2">
                                 <div>
                                    <span>This Month</span>
                                 </div>
                                 <div>
                                    <span className="counter">30%</span>
                                 </div>
                              </div>
                              <div className="mt-3">
                                 <Progress softcolors="info" color="info" className="shadow-none w-100" value={30} minvalue={0} maxvalue={100} style={{height: "6px"}} />
                              </div>
                           </Card.Body>
                        </Card>
                     </Col>
                  </Row>
               </Col>
               <Col lg="6">
                  <Card>
                     <Card.Body>
                        <div className="border-bottom text-center pb-3">
                           {/*<Image src={avatars1} alt="profile" className="img-fluid avatar-80 mb-4"/>*/}
                           <div>
                              <h5 className="mb-3">Bini Jets</h5>
                           </div>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                           <button type="button" className="btn btn-info mb-2">Assign</button>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                           <div>
                                 <h2 className="counter"><CountUp  start={784} end={4500} duration={3}/></h2>
                              <div>Operations</div>
                           </div>
                           <div>
                                 <h2 className="mb-0">3.9</h2>
                              <div>Medical Rating</div>
                           </div>
                        </div>
                     </Card.Body>
                  </Card>
               </Col>

               {/* second section for charts of vicheals status and average of vicheals usage */}
               <Col md="12" xl="6">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between flex-wrap">
                                        <div className="header-title">
                                            <h4 className="card-title">Earnings</h4>            
                                        </div>   
                                        <Dropdown>
                                            <Dropdown.Toggle as={Button} href="#" variant=" text-secondary" id="dropdownMenuButton1" aria-expanded="false">
                                                This Week
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className=" dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                                <li><Dropdown.Item href="#">This Week</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#">This Month</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#">This Year</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                                            <Chart className="col-md-8 col-lg-8" options={chart2.options} series={chart2.series} type="radialBar"   height="250"  />
                                            <div className="d-grid gap col-md-4 col-lg-4">
                                                <div className="d-flex align-items-start">
                                                <svg className="mt-2" xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 24 24" fill="#3a57e8">
                                                    <g>
                                                        <circle cx="12" cy="12" r="8" fill="#3a57e8"></circle>
                                                    </g>
                                                </svg>
                                                <div className="ms-3">
                                                    <span className="text-secondary">Fashion</span>
                                                    <h6>251K</h6>
                                                </div>
                                                </div>
                                                <div className="d-flex align-items-start">
                                                <svg className="mt-2" xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 24 24" fill="#4bc7d2">
                                                    <g>
                                                        <circle cx="12" cy="12" r="8" fill="#4bc7d2"></circle>
                                                    </g>
                                                </svg>
                                                <div className="ms-3">
                                                    <span className="text-secondary">Accessories</span>
                                                    <h6>176K</h6>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md="12" xl="6">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between flex-wrap">
                                        <div className="header-title">
                                            <h4 className="card-title">Conversions</h4>            
                                        </div>
                                        <Dropdown>
                                            <Dropdown.Toggle as={Button} href="#" variant=" text-secondary" id="dropdownMenuButton3" aria-expanded="false">
                                                This Week
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton3">
                                                <li><Dropdown.Item href="#">This Week</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#">This Month</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#">This Year</Dropdown.Item></li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="card-body">
                                        <Chart className="d-activity" options={chart3.options} series={chart3.series} type="bar"   height="230"  />
                                    </div>
                                </div>
                            </Col>     
            </Row>
        
        </div>
    )
}
