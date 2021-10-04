import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Image from "next/image"
import Card from '../components/Card'
//progressbar
import Progress from '../components/progress.js'
//Count-up
import CountUp from 'react-countup';
import Vector from "../components/maps/vector";
export default function Home() {

  return (
        <div>
            <Row>
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
                                {/*<Vector />*/}
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
            </Row>

        </div>
  )
}
