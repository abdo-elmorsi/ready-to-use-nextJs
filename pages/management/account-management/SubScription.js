import React from "react";
import { Row, Col, Card, Form, FormCheck} from "react-bootstrap";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapMarked, faHistory, faBell,faCar,faCalendarAlt ,faClock ,  faTachometerAlt, faMapMarkerAlt, faCogs, faUsers, faUsersCog, faCertificate,faUsersSlash,faCog,faListUl,faClipboardList, faLaptop, faTools, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import AccountManagement from './[id]/index';


const subScription = ()=> {
  return(
    <>
      <Row>
      <Col>
               <Card>
                  <Card.Body>
                      <div className="header-title">
                      </div>
                      <Row>
                        <Col md="12">
                          {/* ================ Track Features Section */}
                          <div className="border border-light rounded p-4 my-3">
                            <h4>Track</h4>
                            <hr className="my-3"/>
                            <Row>
                              {/* ============ feature box ============ */}
                              <Col  md="12" lg="6">
                                <Card className="border border-light">
                                  <Card.Body>
                                    <div className="d-flex justify-content-between align-itmes-center">
                                      <div className="d-flex ">
                                        <div className="d-flex justify-content-center align-items-center">
                                          <div className="p-3 rounded bg-soft-success">
                                          <FontAwesomeIcon className="fa-2x" icon={faMapMarked} size="lg"/>
                                          </div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center p-3">
                                          <h5>Track</h5>
                                        <p className="mb-0">5 SAR/Month</p>
                                        </div>
                                      
                                      </div>
                                      <div className="d-flex flex-column justify-content-between">
                                        <button className="btn btn-outline-primary p-2 m-1 active">Active</button>
                                        <button className="btn btn-outline-primary p-2 m-1">suspend</button>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              {/* ============ feature box ============ */}
                              <Col  md="12" lg="6">
                                <Card className="border border-light">
                                  <Card.Body>
                                    <div className="d-flex justify-content-between align-itmes-center">
                                      <div className="d-flex ">
                                        <div className="d-flex justify-content-center align-items-center">
                                          <div className="p-3 rounded bg-soft-success">
                                          <FontAwesomeIcon className="fa-2x" icon={faHistory} size="lg"/>
                                          </div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center p-3">
                                          <h5>History</h5>
                                          <p className="mb-0">5 SAR/Month</p>
                                        </div>
                                      
                                      </div>
                                      <div className="d-flex flex-column justify-content-between">
                                        <button className="btn btn-outline-primary p-2 m-1 active">Active</button>
                                        <button className="btn btn-outline-primary p-2 m-1">suspend</button>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              {/* ============ feature box ============ */}
                              <Col  md="12" lg="6">
                                <Card className="border border-light">
                                  <Card.Body>
                                    <div className="d-flex justify-content-between align-itmes-center">
                                      <div className="d-flex ">
                                        <div className="d-flex justify-content-center align-items-center">
                                          <div className="p-3 rounded bg-soft-success">
                                          <FontAwesomeIcon className="fa-2x" icon={faBell} size="lg"/>
                                          </div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center p-3">
                                          <h5>Alerts & Notifactions</h5>
                                          <p className="mb-0">5 SAR/Month</p>
                                        </div>
                                      
                                      </div>
                                      <div className="d-flex flex-column justify-content-between">
                                        <button className="btn btn-outline-primary p-2 m-1 active">Active</button>
                                        <button className="btn btn-outline-primary p-2 m-1">suspend</button>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              {/* ============ feature box ============ */}
                              <Col  md="12" lg="6">
                                <Card className="border border-light">
                                  <Card.Body>
                                    <div className="d-flex justify-content-between align-itmes-center">
                                      <div className="d-flex ">
                                        <div className="d-flex justify-content-center align-items-center">
                                          <div className="p-3 rounded bg-soft-success">
                                          <FontAwesomeIcon className="fa-2x" icon={faCar} size="lg"/>
                                          </div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center p-3">
                                          <h5>Operate Vehicle</h5>
                                          <p className="mb-0">5 SAR/Month</p>
                                        </div>
                                      
                                      </div>
                                      <div className="d-flex flex-column justify-content-between">
                                        <button className="btn btn-outline-primary p-2 m-1 active">Active</button>
                                        <button className="btn btn-outline-primary p-2 m-1">suspend</button>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              {/* ============ feature box ============ */}
                              <Col  md="12" lg="6">
                                <Card className="border border-light">
                                  <Card.Body>
                                    <div className="d-flex justify-content-between align-itmes-center">
                                      <div className="d-flex ">
                                        <div className="d-flex justify-content-center align-items-center">
                                          <div className="p-3 rounded bg-soft-success">
                                          <FontAwesomeIcon className="fa-2x" icon={faMapMarkerAlt} size="lg"/>
                                          </div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center p-3">
                                          <h5>Geofence</h5>
                                          <p className="mb-0">4.9 SAR/Month</p>
                                        </div>
                                      
                                      </div>
                                      <div className="d-flex flex-column justify-content-between">
                                        <button className="btn btn-outline-primary p-2 m-1 active">Active</button>
                                        <button className="btn btn-outline-primary p-2 m-1">suspend</button>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              {/* ============ feature box ============ */}
                              <Col  md="12" lg="6">
                                <Card className="border border-light">
                                  <Card.Body>
                                    <div className="d-flex justify-content-between align-itmes-center">
                                      <div className="d-flex ">
                                        <div className="d-flex justify-content-center align-items-center">
                                          <div className="p-3 rounded bg-soft-success">
                                          <FontAwesomeIcon className="fa-2x" icon={faMapMarkerAlt} size="lg"/>
                                          </div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center p-3">
                                          <h5>LandMarks</h5>
                                          <p className="mb-0">4.2 SAR/Month</p>
                                        </div>
                                      
                                      </div>
                                      <div className="d-flex flex-column justify-content-between">
                                        <button className="btn btn-outline-primary p-2 m-1 active">Active</button>
                                        <button className="btn btn-outline-primary p-2 m-1">suspend</button>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                            </Row>
                          </div>
                          
                          {/* ================ Manage Features Section */}
                          <div className="border border-light rounded p-4 my-3">
                            <h4>Manage</h4>
                            <hr className="my-3"/>
                            <Row>
                              {/* ============ feature box ============ */}
                              <Col  md="12" lg="6">
                                <Card className="border border-light">
                                  <Card.Body>
                                    <div className="d-flex justify-content-between align-itmes-center">
                                      <div className="d-flex ">
                                        <div className="d-flex justify-content-center align-items-center">
                                          <div className="p-3 rounded bg-soft-info">
                                          <FontAwesomeIcon className="fa-2x" icon={faCogs} size="lg"/>
                                          </div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center p-3">
                                          <h5>Management</h5>
                                        <p className="mb-0">5 SAR/Month</p>
                                        </div>
                                      
                                      </div>
                                      <div className="d-flex flex-column justify-content-between">
                                        <button className="btn btn-outline-primary p-2 m-1 active">Active</button>
                                        <button className="btn btn-outline-primary p-2 m-1">suspend</button>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              {/* ============ feature box ============ */}
                              <Col  md="12" lg="6">
                                <Card className="border border-light">
                                  <Card.Body>
                                    <div className="d-flex justify-content-between align-itmes-center">
                                      <div className="d-flex ">
                                        <div className="d-flex justify-content-center align-items-center">
                                          <div className="p-3 rounded bg-soft-info">
                                          <FontAwesomeIcon className="fa-2x" icon={faCar} size="lg"/>
                                          </div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center p-3">
                                          <h5>Manage Vehicle</h5>
                                          <p className="mb-0">5 SAR/Month</p>
                                        </div>
                                      
                                      </div>
                                      <div className="d-flex flex-column justify-content-between">
                                        <button className="btn btn-outline-primary p-2 m-1 active">Active</button>
                                        <button className="btn btn-outline-primary p-2 m-1">suspend</button>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              {/* ============ feature box ============ */}
                              <Col  md="12" lg="6">
                                <Card className="border border-light">
                                  <Card.Body>
                                    <div className="d-flex justify-content-between align-itmes-center">
                                      <div className="d-flex ">
                                        <div className="d-flex justify-content-center align-items-center">
                                          <div className="p-3 rounded bg-soft-info">
                                          <FontAwesomeIcon className="fa-2x" icon={faUsers} size="lg"/>
                                          </div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center p-3">
                                          <h5>Accounts Management</h5>
                                          <p className="mb-0">5 SAR/Month</p>
                                        </div>
                                      
                                      </div>
                                      <div className="d-flex flex-column justify-content-between">
                                        <button className="btn btn-outline-primary p-2 m-1 active">Active</button>
                                        <button className="btn btn-outline-primary p-2 m-1">suspend</button>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              {/* ============ feature box ============ */}
                              <Col  md="12" lg="6">
                                <Card className="border border-light">
                                  <Card.Body>
                                    <div className="d-flex justify-content-between align-itmes-center">
                                      <div className="d-flex ">
                                        <div className="d-flex justify-content-center align-items-center">
                                          <div className="p-3 rounded bg-soft-info">
                                          <FontAwesomeIcon className="fa-2x" icon={faUsersCog} size="lg"/>
                                          </div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center p-3">
                                          <h5>Users Management</h5>
                                          <p className="mb-0">5 SAR/Month</p>
                                        </div>
                                      
                                      </div>
                                      <div className="d-flex flex-column justify-content-between">
                                        <button className="btn btn-outline-primary p-2 m-1 active">Active</button>
                                        <button className="btn btn-outline-primary p-2 m-1">suspend</button>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              {/* ============ feature box ============ */}
                              <Col  md="12" lg="6">
                                <Card className="border border-light">
                                  <Card.Body>
                                    <div className="d-flex justify-content-between align-itmes-center">
                                      <div className="d-flex ">
                                        <div className="d-flex justify-content-center align-items-center">
                                          <div className="p-3 rounded bg-soft-info">
                                          <FontAwesomeIcon className="fa-2x" icon={faCog} size="lg"/>
                                          </div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center p-3">
                                          <h5>Manage Devices</h5>
                                          <p className="mb-0">5 SAR/Month</p>
                                        </div>
                                      
                                      </div>
                                      <div className="d-flex flex-column justify-content-between">
                                        <button className="btn btn-outline-primary p-2 m-1 active">Active</button>
                                        <button className="btn btn-outline-primary p-2 m-1">suspend</button>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              {/* ============ feature box ============ */}
                              <Col  md="12" lg="6">
                                <Card className="border border-light">
                                  <Card.Body>
                                    <div className="d-flex justify-content-between align-itmes-center">
                                      <div className="d-flex ">
                                        <div className="d-flex justify-content-center align-items-center">
                                          <div className="p-3 rounded bg-soft-info">
                                          <FontAwesomeIcon className="fa-2x" icon={faUsersCog} size="lg"/>
                                          </div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center p-3">
                                          <h5>Manage Drivers</h5>
                                          <p className="mb-0">4.2 SAR/Month</p>
                                        </div>
                                      
                                      </div>
                                      <div className="d-flex flex-column justify-content-between">
                                        <button className="btn btn-outline-primary p-2 m-1 active">Active</button>
                                        <button className="btn btn-outline-primary p-2 m-1">suspend</button>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              {/* ============ feature box ============ */}
                              <Col  md="12" lg="6">
                                <Card className="border border-light">
                                  <Card.Body>
                                    <div className="d-flex justify-content-between align-itmes-center">
                                      <div className="d-flex ">
                                        <div className="d-flex justify-content-center align-items-center">
                                          <div className="p-3 rounded bg-soft-info">
                                          <FontAwesomeIcon className="fa-2x" icon={faTools} size="lg"/>
                                          </div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center p-3">
                                          <h5>Preventive Maintenace</h5>
                                          <p className="mb-0">5 SAR/Month</p>
                                        </div>
                                      
                                      </div>
                                      <div className="d-flex flex-column justify-content-between">
                                        <button className="btn btn-outline-primary p-2 m-1 active">Active</button>
                                        <button className="btn btn-outline-primary p-2 m-1">suspend</button>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              {/* ============ feature box ============ */}
                              <Col  md="12" lg="6">
                                <Card className="border border-light">
                                  <Card.Body>
                                    <div className="d-flex justify-content-between align-itmes-center">
                                      <div className="d-flex ">
                                        <div className="d-flex justify-content-center align-items-center">
                                          <div className="p-3 rounded bg-soft-info">
                                          <FontAwesomeIcon className="fa-2x" icon={faUsersSlash} size="lg"/>
                                          </div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center p-3">
                                          <h5>Manage Driving Behavior</h5>
                                          <p className="mb-0">5 SAR/Month</p>
                                        </div>
                                      
                                      </div>
                                      <div className="d-flex flex-column justify-content-between">
                                        <button className="btn btn-outline-primary p-2 m-1 active">Active</button>
                                        <button className="btn btn-outline-primary p-2 m-1">suspend</button>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              {/* ============ feature box ============ */}
                              <Col  md="12" lg="6">
                                <Card className="border border-light">
                                  <Card.Body>
                                    <div className="d-flex justify-content-between align-itmes-center">
                                      <div className="d-flex ">
                                        <div className="d-flex justify-content-center align-items-center">
                                          <div className="p-3 rounded bg-soft-info">
                                          <FontAwesomeIcon className="fa-2x" icon={faCertificate} size="lg"/>
                                          </div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center p-3">
                                          <h5>Used Base Insurance</h5>
                                          <p className="mb-0">5 SAR/Month</p>
                                        </div>
                                      
                                      </div>
                                      <div className="d-flex flex-column justify-content-between">
                                        <button className="btn btn-outline-primary p-2 m-1 active">Active</button>
                                        <button className="btn btn-outline-primary p-2 m-1">suspend</button>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                            </Row>
                          </div>
                          {/* ================ Manage Features Section */}
                          <div className="border border-light rounded p-4 my-3">
                            <h4>Operate Vehicle</h4>
                            <hr className="my-3"/>
                            <Row>
                              {/* ============ feature box ============ */}
                              <Col  md="12" lg="6">
                                <Card className="border border-light">
                                  <Card.Body>
                                    <div className="d-flex justify-content-between align-itmes-center">
                                      <div className="d-flex ">
                                        <div className="d-flex justify-content-center align-items-center">
                                          <div className="p-3 rounded bg-soft-primary">
                                          <FontAwesomeIcon className="fa-2x" icon={faDollarSign} size="lg"/>
                                          </div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center p-3">
                                          <h5>Rental</h5>
                                          <p className="mb-0">5 SAR/Month</p>
                                        </div>
                                      
                                      </div>
                                      <div className="d-flex flex-column justify-content-between">
                                        <button className="btn btn-outline-primary p-2 m-1 active">Active</button>
                                        <button className="btn btn-outline-primary p-2 m-1">suspend</button>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              {/* ============ feature box ============ */}
                              <Col  md="12" lg="6">
                                <Card className="border border-light">
                                  <Card.Body>
                                    <div className="d-flex justify-content-between align-itmes-center">
                                      <div className="d-flex ">
                                        <div className="d-flex justify-content-center align-items-center">
                                          <div className="p-3 rounded bg-soft-primary">
                                          <FontAwesomeIcon className="fa-2x" icon={faCar} size="lg"/>
                                          </div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center p-3">
                                          <h5>Taxi</h5>
                                          <p className="mb-0">5 SAR/Month</p>
                                        </div>
                                      
                                      </div>
                                      <div className="d-flex flex-column justify-content-between">
                                        <button className="btn btn-outline-primary p-2 m-1 active">Active</button>
                                        <button className="btn btn-outline-primary p-2 m-1">suspend</button>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              {/* ============ feature box ============ */}
                              <Col  md="12" lg="6">
                                <Card className="border border-light">
                                  <Card.Body>
                                    <div className="d-flex justify-content-between align-itmes-center">
                                      <div className="d-flex ">
                                        <div className="d-flex justify-content-center align-items-center">
                                          <div className="p-3 rounded bg-soft-primary">
                                          <FontAwesomeIcon className="fa-2x" icon={faListUl} size="lg"/>
                                          </div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center p-3">
                                          <h5>Dispatch</h5>
                                          <p className="mb-0">5 SAR/Month</p>
                                        </div>
                                      
                                      </div>
                                      <div className="d-flex flex-column justify-content-between">
                                        <button className="btn btn-outline-primary p-2 m-1 active">Active</button>
                                        <button className="btn btn-outline-primary p-2 m-1">suspend</button>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              {/* ============ feature box ============ */}
                              <Col  md="12" lg="6">
                                <Card className="border border-light">
                                  <Card.Body>
                                    <div className="d-flex justify-content-between align-itmes-center">
                                      <div className="d-flex ">
                                        <div className="d-flex justify-content-center align-items-center">
                                          <div className="p-3 rounded bg-soft-primary">
                                          <FontAwesomeIcon className="fa-2x" icon={faClipboardList} size="lg"/>
                                          </div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center p-3">
                                          <h5>Task</h5>
                                          <p className="mb-0">5 SAR/Month</p>
                                        </div>
                                      
                                      </div>
                                      <div className="d-flex flex-column justify-content-between">
                                        <button className="btn btn-outline-primary p-2 m-1 active">Active</button>
                                        <button className="btn btn-outline-primary p-2 m-1">suspend</button>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              
                              
                            </Row>
                          </div>
                          {/* ================ Reports Features Section */}
                          <div className="border border-light rounded p-4 my-3">
                            <h4>Reports</h4>
                            <hr className="my-3"/>
                            <Row>
                              {/* ============ feature box ============ */}
                              <Col  md="12" lg="6">
                                <Card className="border border-light">
                                  <Card.Body>
                                    <div className="d-flex justify-content-between align-itmes-center">
                                      <div className="d-flex ">
                                        <div className="d-flex justify-content-center align-items-center">
                                          <div className="p-3 rounded bg-soft-warning">
                                          <FontAwesomeIcon className="fa-2x" icon={faCalendarAlt} size="lg"/>
                                          </div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center p-3">
                                          <h5>Scheduled</h5>
                                          <p className="mb-0">5 SAR/Month</p>
                                        </div>
                                      
                                      </div>
                                      <div className="d-flex flex-column justify-content-between">
                                        <button className="btn btn-outline-primary p-2 m-1 active">Active</button>
                                        <button className="btn btn-outline-primary p-2 m-1">suspend</button>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              {/* ============ feature box ============ */}
                              <Col  md="12" lg="6">
                                <Card className="border border-light">
                                  <Card.Body>
                                    <div className="d-flex justify-content-between align-itmes-center">
                                      <div className="d-flex ">
                                        <div className="d-flex justify-content-center align-items-center">
                                          <div className="p-3 rounded bg-soft-warning">
                                          <FontAwesomeIcon className="fa-2x" icon={faClock} size="lg"/>
                                          </div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center p-3">
                                          <h5>OnDemand</h5>
                                          <p className="mb-0">5 SAR/Month</p>
                                        </div>
                                      
                                      </div>
                                      <div className="d-flex flex-column justify-content-between">
                                        <button className="btn btn-outline-primary p-2 m-1 active">Active</button>
                                        <button className="btn btn-outline-primary p-2 m-1">suspend</button>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              {/* ============ feature box ============ */}
                              <Col  md="12" lg="6">
                                <Card className="border border-light">
                                  <Card.Body>
                                    <div className="d-flex justify-content-between align-itmes-center">
                                      <div className="d-flex ">
                                        <div className="d-flex justify-content-center align-items-center">
                                          <div className="p-3 rounded bg-soft-warning">
                                          <FontAwesomeIcon className="fa-2x" icon={faTachometerAlt} size="lg"/>
                                          </div>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center p-3">
                                          <h5>Dashboard</h5>
                                          <p className="mb-0">5 SAR/Month</p>
                                        </div>
                                      
                                      </div>
                                      <div className="d-flex flex-column justify-content-between">
                                        <button className="btn btn-outline-primary p-2 m-1 active">Active</button>
                                        <button className="btn btn-outline-primary p-2 m-1">suspend</button>
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              
                            </Row>
                          </div>
                        </Col>

                        <Col md="12" className="border border-light rounded p-3">
                          <h4>Subscriptions List</h4>
                          <hr className="my-3"/>
                          
                        </Col>
                      
                      </Row>
                      <div className="mt-5 d-flex justify-content-end">
                            <button className="btn btn-primary px-3 py-2 ms-3">Back</button>
                            <button className="btn btn-primary px-3 py-2 ms-3">Next</button>
                            <button className="btn btn-primary px-3 py-2 ms-3">Cancel</button>
                          </div>
                      
                  </Card.Body>
                </Card>
            </Col>
      </Row>
    </>
  )
}
export default  subScription
  