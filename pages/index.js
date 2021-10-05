<<<<<<< HEAD
import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Card from "../components/Card";

=======
import React from 'react'
import {Row, Col, Dropdown, Button} from 'react-bootstrap'
import Image from "next/image"
import Card from '../components/Card'
import Styles from '../styles/Dashboard.module.scss'
>>>>>>> 8b1f909329866d4c966cd1ab6ae52ad2051ffaa7
//progressbar
import Progress from "../components/progress.js";
//Count-up
import CountUp from "react-countup";
import Google from "../components/maps/google";
//Chart
import avatars1 from "../public/assets/images/saferoad_logo_icon.svg";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import('react-apexcharts'), {ssr: false});

// import Vector from "../components/maps/vector";

import avatars1 from "../public/assets/images/saferoad_logo_icon.svg";

const Data_table = [
  {
    icon: "edit",
    groupName: "WR Team",
    vName: "Ahmad Sirdah 5230 TGD",
    fixType: "Vehicle Wash",
    date: "2008/11/28",
  },
  {
    icon: "edit",
    groupName: "WR Team",
    vName: "Ahmad Sirdah 5230 TGD",
    fixType: "Vehicle Wash",
    date: "2008/11/28",
  },
  {
    icon: "edit",
    groupName: "WR Team",
    vName: "Ahmad Sirdah 5230 TGD",
    fixType: "Vehicle Wash",
    date: "2008/11/28",
  },
  {
    icon: "edit",
    groupName: "WR Team",
    vName: "Ahmad Sirdah 5230 TGD",
    fixType: "Battery",
    date: "2008/11/28",
  },
  {
    icon: "edit",
    groupName: "WR Team",
    vName: "Ahmad Sirdah 5230 TGD",
    fixType: "Suspen",
    date: "2008/11/28",
  },
];

export default function Home() {
<<<<<<< HEAD
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
                      <span>
                        <b>Revenue</b>
                      </span>
                      <div className="mt-2">
                        <h2 className="counter">
                          $<CountUp start={12163} end={35000} duration={3} />
                        </h2>
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
                    <Progress
                      softcolors="primary"
                      color="primary"
                      className="shadow-none w-100"
                      value={70}
                      minvalue={0}
                      maxvalue={100}
                      style={{ height: "6px" }}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>
                        <b>Orders</b>
                      </span>
                      <div className="mt-2">
                        <h2 className="counter">
                          <CountUp start={754} end={2500} duration={3} />
                        </h2>
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
                    <Progress
                      softcolors="warning"
                      color="warning"
                      className="shadow-none w-100"
                      value={24}
                      minvalue={0}
                      maxvalue={100}
                      style={{ height: "6px" }}
                    />
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
                      <span>
                        <b>Leads</b>
                      </span>
                      <div className="mt-2">
                        <h2 className="counter">
                          $<CountUp start={12000} end={35000} duration={3} />
                        </h2>
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
                    <Progress
                      softcolors="danger"
                      color="danger"
                      className="shadow-none w-100"
                      value={50}
                      minvalue={0}
                      maxvalue={100}
                      style={{ height: "6px" }}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>
                        <b>Conversion</b>
                      </span>
                      <div className="mt-2">
                        <h2 className="counter">
                          <CountUp start={4} end={35} duration={3} />%
                        </h2>
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
                    <Progress
                      softcolors="info"
                      color="info"
                      className="shadow-none w-100"
                      value={30}
                      minvalue={0}
                      maxvalue={100}
                      style={{ height: "6px" }}
                    />
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
                <Google />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* cards for rates */}
      <Row>
        <Col lg="3">
          <Card>
            <Card.Header className="d-flex justify-content-center align-items-center">
              <div className="header-title text-center">
                <h4 className="card-title ">Top Drivers</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-start align-items-center border border-1 border-light rounded-1  mb-3 p-2">
                <div className="pe-3">
                  <Image
                    src={avatars1}
                    className="rounded-circle bg-soft-primary p-1"
                    width="50"
                    height="50"
                    alt="1"
                  />
                </div>
                <div>
                  <h6 className="mb-1">Firas Saleh</h6>
                  <div className="text-black-50 text-warning">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="gary"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="gary"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-start align-items-center border border-1 border-light rounded-1  mb-3 p-2">
                <div className="pe-3">
                  <Image
                    src={avatars1}
                    className="rounded-circle bg-soft-primary p-1"
                    width="50"
                    height="50"
                    alt="1"
                  />
                </div>
                <div>
                  <h6 className="mb-1">Maaz FMB120</h6>
                  <div className="text-black-50 text-warning">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="gary"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="gary"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="3">
          <Card>
            <Card.Header className="d-flex justify-content-center align-items-center">
              <div className="header-title text-center">
                <h4 className="card-title ">Worst Drivers</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-start align-items-center border border-1 border-light rounded-1  mb-3 p-2">
                <div className="pe-3">
                  <Image
                    src={avatars1}
                    className="rounded-circle bg-soft-primary p-1"
                    width="50"
                    height="50"
                    alt="1"
                  />
                </div>
                <div>
                  <h6 className="mb-1">Maaz FMB120</h6>
                  <div className="text-black-50 text-warning">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="gary"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="gary"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-start align-items-center border border-1 border-light rounded-1  mb-3 p-2">
                <div className="pe-3">
                  <Image
                    src={avatars1}
                    className="rounded-circle bg-soft-primary p-1"
                    width="50"
                    height="50"
                    alt="1"
                  />
                </div>
                <div>
                  <h6 className="mb-1">Firas Saleh</h6>
                  <div className="text-black-50 text-warning">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="gary"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="gary"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="3">
          <Card>
            <Card.Header className="d-flex justify-content-center align-items-center">
              <div className="header-title text-center">
                <h4 className="card-title ">Top Utilized Vehicles</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-start align-items-center border border-1 border-light rounded-1  mb-3 p-2">
                <div className="pe-3">
                  <Image
                    src={avatars1}
                    className="rounded-circle bg-soft-primary p-1"
                    width="50"
                    height="50"
                    alt="1"
                  />
                </div>
                <div>
                  <h6 className="mb-1">Driver name 1</h6>
                  <div className="text-black-50 text-warning">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="gary"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="gary"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-start align-items-center border border-1 border-light rounded-1  mb-3 p-2">
                <div className="pe-3">
                  <Image
                    src={avatars1}
                    className="rounded-circle bg-soft-primary p-1"
                    width="50"
                    height="50"
                    alt="1"
                  />
                </div>
                <div>
                  <h6 className="mb-1">Driver name 2</h6>
                  <div className="text-black-50 text-warning">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="gary"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="gary"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="3">
          <Card>
            <Card.Header className="d-flex justify-content-center align-items-center">
              <div className="header-title text-center">
                <h4 className="card-title ">Worst Utilized Vehicles</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-start align-items-center border border-1 border-light rounded-1  mb-3 p-2">
                <div className="pe-3">
                  <Image
                    src={avatars1}
                    className="rounded-circle bg-soft-primary p-1"
                    width="50"
                    height="50"
                    alt="1"
                  />
                </div>
                <div>
                  <h6 className="mb-1">Driver name 1</h6>
                  <div className="text-black-50 text-warning">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="gary"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="gary"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-start align-items-center border border-1 border-light rounded-1  mb-3 p-2">
                <div className="pe-3">
                  <Image
                    src={avatars1}
                    className="rounded-circle bg-soft-primary p-1"
                    width="50"
                    height="50"
                    alt="1"
                  />
                </div>
                <div>
                  <h6 className="mb-1">Driver name 2</h6>
                  <div className="text-black-50 text-warning">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="gary"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      fill="gary"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* table */}
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Next repair plans</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <table
                  id="datatable"
                  className="table table-striped table-hover"
                  data-toggle="data-table"
                >
                  <thead>
                    <tr>
                      <th className="text-center">#</th>
                      <th className="text-center">Group name</th>
                      <th className="text-center">Vehicles name</th>
                      <th className="text-center">Maintenance Type</th>
                      <th className="text-center">Next value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Data_table.map((item) => (
                      <tr key={item.age}>
                        <td className="text-center">{item.icon}</td>
                        <td className="text-center">{item.groupName}</td>
                        <td className="text-center">{item.vName}</td>
                        <td className="text-center">{item.fixType}</td>
                        <td className="text-center">{item.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
=======
    const chart1 = {
        series: [{
            name: 'Fuel Consumption',
            type: 'column',
            data: [1702, 131, 942, 852, 648, 835, 932, 1231, 1386, 84]
        }, {
            name: 'Mileage',
            type: 'line',
            data: [26391, 2034, 14608, 13219, 10085, 12955, 14478, 19081, 21490, 1303]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: false,
                }
            },
            stroke: {
                width: [0, 4]
            },
            dataLabels: {
                enabled: true,
                enabledOnSeries: [1]
            },
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
            /* xaxis: {
                 type: 'datetime'
             },*/
            colors: ["#246c66", "#3e84b8"],

            yaxis: [{
                title: {
                    text: 'Fuel Consumption',
                },
                labels: {
                    show: true,
                    minWidth: 10,
                    maxWidth: 10,
                    style: {
                        colors: "#8A92A6",
                    },
                    offsetX: 0,
                },
            }, {
                opposite: true,
                title: {
                    text: 'Mileage'
                }
            }]
        },


    }
    const chart2 = {
        options: {
            colors: ["#c1c1c1", "#7668f2", "#272727", "#f05959", "#f2bf59", "#70ea6b"],
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 2,
                        size: "10%",
                    },
                    track: {
                        margin: 5,
                        strokeWidth: '50%',
                    },
                    dataLabels: {
                        show: true,
                    }
                }
            },
            labels: ['Apples', 'Oranges1', 'Oranges2', 'Oranges3', 'Oranges4', 'Oranges5'],
        },
        series: [55, 75, 33, 78, 65, 52],
    }
    const chart3 = {
        options: {
            chart: {
                stacked: true,
                toolbar: {
                    show: false
                }
            },
            colors: ["#246c66", "#4bc7d2"],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '28%',
                    endingShape: 'rounded',
                    borderRadius: 5,
                },
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['2021-10-04', '2021-10-03', '2021-10-02', '2021-10-01', '2021-09-30'],
                labels: {
                    minHeight: 20,
                    maxHeight: 20,
                    style: {
                        colors: "#8A92A6",
                    },
                }
            },
            yaxis: {
                title: {
                    text: ''
                },
                labels: {
                    minWidth: 19,
                    maxWidth: 19,
                    style: {
                        colors: "#8A92A6",
                    },
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        },
        series: [{
            name: 'Successful deals',
            data: [30, 50, 35, 60, 40]
        }, {
            name: 'Failed deals',
            data: [40, 50, 55, 50, 30]
        }]
    }
    const chart4 = {
        options: {
            chart: {
                fontFamily: '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: false,
                }
            },
            colors: ["#3a84b8"],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 3,
            },
            yaxis: {
                show: true,
                labels: {
                    show: true,
                    minWidth: 19,
                    maxWidth: 19,
                    style: {
                        colors: "#8A92A6",
                    },
                    offsetX: -5,
                },
            },
            legend: {
                show: false,
            },
            xaxis: {
                labels: {
                    show: true,
                    style: {
                        colors: "#8A92A6",
                        rotate: -45,
                    },
                },
                lines: {
                    show: false  //or just here to disable only x axis grids
                },
                categories: ["Change Engine Oil",
                    "Change Vehicle Breaks",
                    "Renew Vehicle License",
                    "Vehicle Wash",
                    "Change type",
                    "Change Gear Oil",
                    "Filter Change"]
            },
            grid: {
                show: false,
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: "vertical",
                    shadeIntensity: 0,
                    gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                    inverseColors: true,
                    opacityFrom: .4,
                    opacityTo: .1,
                    stops: [0, 50, 80],
                    colors: ["#3a84b8", "#246c66"]
                }
            },
            tooltip: {
                enabled: true,
            },
        },
        series: [{
            name: 'total',
            data: [94, 80, 94, 80, 94, 80, 94]
        }]
    }

    const Data_table = [
        {
            icon: 'edit',
            groupName: 'WR Team',
            vName: 'Ahmad Sirdah 5230 TGD',
            fixType: 'Vehicle Wash',
            date: '2008/11/28',
        },
        {
            icon: 'edit',
            groupName: 'WR Team',
            vName: 'Ahmad Sirdah 5230 TGD',
            fixType: 'Vehicle Wash',
            date: '2008/11/28',
        },
        {
            icon: 'edit',
            groupName: 'WR Team',
            vName: 'Ahmad Sirdah 5230 TGD',
            fixType: 'Vehicle Wash',
            date: '2008/11/28',
        },
        {
            icon: 'edit',
            groupName: 'WR Team',
            vName: 'Ahmad Sirdah 5230 TGD',
            fixType: 'Battery',
            date: '2008/11/28',
        },
        {
            icon: 'edit',
            groupName: 'WR Team',
            vName: 'Ahmad Sirdah 5230 TGD',
            fixType: 'Suspen',
            date: '2008/11/28',
        },
    ];

    return (
        <div>
            <Row>
                <Col lg="6">
                    <Row>
                        <Col md="12">
                            <Card>
                                <Card.Body>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <span><b>Active Vehicles</b></span>
                                            <div className="mt-2">
                                                <h2 className="counter"><CountUp start={0} end={12}
                                                                                 duration={1}/></h2>
                                            </div>
                                        </div>
                                        <div>
                                            <span><b>Total Vehicles</b></span>
                                            <div className="mt-2">
                                                <h2 className="counter"><CountUp start={0} end={15}
                                                                                 duration={1}/></h2>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="badge bg-primary">Monthly</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2">
                                        <div>
                                            <span>Percentage</span>
                                        </div>
                                        <div>
                                            <span>35%</span>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <Progress softcolors="primary" color="primary" className="shadow-none w-100"
                                                  value={70} minvalue={0} maxvalue={100} style={{height: "6px"}}/>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="12">
                            <Card>
                                <Card.Body>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <span><b>Offline Vehicles</b></span>
                                            <div className="mt-2">
                                                <h2 className="counter"><CountUp start={0} end={10} duration={1}/>
                                                </h2>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="badge bg-warning">Anual</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2">
                                        <div>
                                            <span>Percentage</span>
                                        </div>
                                        <div>
                                            <span>24%</span>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <Progress softcolors="warning" color="warning" className="shadow-none w-100"
                                                  value={24} minvalue={0} maxvalue={100} style={{height: "6px"}}/>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="12">
                            <Card>
                                <Card.Body>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <span><b>Active Drivers</b></span>
                                            <div className="mt-2">
                                                <h2 className="counter"><CountUp start={0} end={15}
                                                                                 duration={1}/></h2>
                                            </div>
                                        </div>
                                        <div>
                                            <span><b>Total Drivers</b></span>
                                            <div className="mt-2">
                                                <h2 className="counter"><CountUp
                                                    start={0}
                                                    end={40}
                                                    duration={1}/></h2>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="badge bg-danger">Today</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2">
                                        <div>
                                            <span>Percentage</span>
                                        </div>
                                        <div>
                                            <span>50%</span>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <Progress softcolors="danger" color="danger" className="shadow-none w-100"
                                                  value={50} minvalue={0} maxvalue={100} style={{height: "6px"}}/>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col lg="6">
                    <Card>
                        <Card.Body>
                            <div className="text-center pb-3">
                                <Google/>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md="12" xl="7">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between flex-wrap">
                            <div className="header-title">
                                <h4 className={"card-title " + Styles.head_title}>Vehicles Status</h4>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <Chart className="col-md-8 col-lg-8" options={chart2.options} series={chart2.series}
                                       type="radialBar" height="250"/>
                                <div className="d-grid gap col-md-4 col-lg-4">
                                    <div className="d-flex align-items-start">
                                        <svg className="mt-2" xmlns="http://www.w3.org/2000/svg" width="14"
                                             viewBox="0 0 24 24" fill="#c1c1c1">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="#c1c1c1"/>
                                            </g>
                                        </svg>
                                        <div className="ms-3">
                                            <span className={"text-secondary " + Styles.label_sm}>Offline</span>
                                            {/*<h6>251K</h6>*/}
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start">
                                        <svg className="mt-2" xmlns="http://www.w3.org/2000/svg" width="14"
                                             viewBox="0 0 24 24" fill="#7668f2">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="#7668f2"/>
                                            </g>
                                        </svg>
                                        <div className="ms-3">
                                            <span className={"text-secondary " + Styles.label_sm}>Idling</span>
                                            {/*<h6>176K</h6>*/}
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start">
                                        <svg className="mt-2" xmlns="http://www.w3.org/2000/svg" width="14"
                                             viewBox="0 0 24 24" fill="#272727">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="#272727"/>
                                            </g>
                                        </svg>
                                        <div className="ms-3">
                                            <span className={"text-secondary " + Styles.label_sm}>Running</span>
                                            {/*<h6>176K</h6>*/}
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start">
                                        <svg className="mt-2" xmlns="http://www.w3.org/2000/svg" width="14"
                                             viewBox="0 0 24 24" fill="#f05959">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="#f05959"/>
                                            </g>
                                        </svg>
                                        <div className="ms-3">
                                            <span
                                                className={"text-secondary " + Styles.label_sm}>Over Street Speed</span>
                                            {/*<h6>176K</h6>*/}
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start">
                                        <svg className="mt-2" xmlns="http://www.w3.org/2000/svg" width="14"
                                             viewBox="0 0 24 24" fill="#f2bf59">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="#f2bf59"/>
                                            </g>
                                        </svg>
                                        <div className="ms-3">
                                            <span
                                                className={"text-secondary " + Styles.label_sm}>Vehicle Disabled</span>
                                            {/*<h6>176K</h6>*/}
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start">
                                        <svg className="mt-2" xmlns="http://www.w3.org/2000/svg" width="14"
                                             viewBox="0 0 24 24" fill="#70ea6b">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="#70ea6b"/>
                                            </g>
                                        </svg>
                                        <div className="ms-3">
                                            <span className={"text-secondary " + Styles.label_sm}>Vehicle Enabled</span>
                                            {/*<h6>176K</h6>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md="12" xl="5">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between flex-wrap">
                            <div className="header-title">
                                <h4 className={"card-title " + Styles.head_title}>Average Utilization</h4>
                            </div>
                        </div>
                        <div className="card-body">
                            <Chart className="d-activity" options={chart3.options} series={chart3.series} type="bar"
                                   height="245"/>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md="6">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between flex-wrap">
                            <div className="header-title">
                                <h4 className={"card-title " + Styles.head_title}>Overall Fuel Consumption</h4>
                            </div>
                        </div>
                        <div className="card-body">
                            <Chart options={chart1.options} series={chart1.series} type="line" height="245"/>
                        </div>
                    </div>
                </Col>
                <Col md="6">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between flex-wrap">
                            <div className="header-title">
                                <h4 className={"card-title " + Styles.head_title}>Monthly Preventive Maintenance</h4>
                            </div>
                        </div>
                        <div className="card-body">
                            <Chart options={chart4.options} series={chart4.series} type="area" height="245"/>
                        </div>
                    </div>
                </Col>
            </Row>


            {/* cards for rates */}
            <Row>
                <Col lg="3">
                    <Card>
                        <Card.Header className="d-flex justify-content-center align-items-center">
                            <div className="header-title text-center">
                                <h4 className={"card-title " + Styles.head_title}>Top Drivers</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div
                                className="d-flex justify-content-start align-items-center border border-1 border-light rounded-1  mb-3 p-2">
                                <div className="pe-3">
                                    <Image src={avatars1} className="rounded-circle bg-soft-primary p-1" width="50"
                                           height="50" alt="1"/>
                                </div>
                                <div>
                                    <h6 className={"mb-1 " + Styles.name_size}>Firas Saleh</h6>
                                    <div className="text-black-50 text-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="d-flex justify-content-start align-items-center border border-1 border-light rounded-1  mb-3 p-2">
                                <div className="pe-3">
                                    <Image src={avatars1} className="rounded-circle bg-soft-primary p-1" width="50"
                                           height="50" alt="1"/>
                                </div>
                                <div>
                                    <h6 className={"mb-1 " + Styles.name_size}>Maaz FMB120</h6>
                                    <div className="text-black-50 text-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card>
                        <Card.Header className="d-flex justify-content-center align-items-center">
                            <div className="header-title text-center">
                                <h4 className={"card-title " + Styles.head_title}>Worst Drivers</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div
                                className="d-flex justify-content-start align-items-center border border-1 border-light rounded-1  mb-3 p-2">
                                <div className="pe-3">
                                    <Image src={avatars1} className="rounded-circle bg-soft-primary p-1" width="50"
                                           height="50" alt="1"/>
                                </div>
                                <div>
                                    <h6 className={"mb-1 " + Styles.name_size}>Maaz FMB120</h6>
                                    <div className="text-black-50 text-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="d-flex justify-content-start align-items-center border border-1 border-light rounded-1  mb-3 p-2">
                                <div className="pe-3">
                                    <Image src={avatars1} className="rounded-circle bg-soft-primary p-1" width="50"
                                           height="50" alt="1"/>
                                </div>
                                <div>
                                    <h6 className={"mb-1 " + Styles.name_size}>Firas Saleh</h6>
                                    <div className="text-black-50 text-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card>
                        <Card.Header className="d-flex justify-content-center align-items-center">
                            <div className="header-title text-center">
                                <h4 className={"card-title " + Styles.head_title}>Top Utilized Vehicles</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div
                                className="d-flex justify-content-start align-items-center border border-1 border-light rounded-1  mb-3 p-2">
                                <div className="pe-3">
                                    <Image src={avatars1} className="rounded-circle bg-soft-primary p-1" width="50"
                                           height="50" alt="1"/>
                                </div>
                                <div>
                                    <h6 className={"mb-1 " + Styles.name_size}>Driver name 1</h6>
                                    <div className="text-black-50 text-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="d-flex justify-content-start align-items-center border border-1 border-light rounded-1  mb-3 p-2">
                                <div className="pe-3">
                                    <Image src={avatars1} className="rounded-circle bg-soft-primary p-1" width="50"
                                           height="50" alt="1"/>
                                </div>
                                <div>
                                    <h6 className={"mb-1 " + Styles.name_size}>Driver name 2</h6>
                                    <div className="text-black-50 text-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="3">
                    <Card>
                        <Card.Header className="d-flex justify-content-center align-items-center">
                            <div className="header-title text-center">
                                <h4 className={"card-title " + Styles.head_title}>Worst Utilized Vehicles</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div
                                className="d-flex justify-content-start align-items-center border border-1 border-light rounded-1  mb-3 p-2">
                                <div className="pe-3">
                                    <Image src={avatars1} className="rounded-circle bg-soft-primary p-1" width="50"
                                           height="50" alt="1"/>
                                </div>
                                <div>
                                    <h6 className={"mb-1 " + Styles.name_size}>Driver name 1</h6>
                                    <div className="text-black-50 text-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="d-flex justify-content-start align-items-center border border-1 border-light rounded-1  mb-3 p-2">
                                <div className="pe-3">
                                    <Image src={avatars1} className="rounded-circle bg-soft-primary p-1" width="50"
                                           height="50" alt="1"/>
                                </div>
                                <div>
                                    <h6 className={"mb-1 " + Styles.name_size}>Driver name 2</h6>
                                    <div className="text-black-50 text-warning">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="orange">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                             viewBox="0 0 20 20" fill="gary">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* table */}
            <Row>
                <Col sm="12">
                    <Card>
                        <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className={"card-title " + Styles.head_title}>Next repair plans</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <table id="datatable" className="table table-striped table-hover"
                                       data-toggle="data-table">
                                    <thead>
                                    <tr>
                                        <th className="text-center">#</th>
                                        <th className="text-center">Group name</th>
                                        <th className="text-center">Vehicles name</th>
                                        <th className="text-center">Maintenance Type</th>
                                        <th className="text-center">Next value</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        Data_table.map((item, index) => (
                                            <tr key={item.vName + index}>
                                                <td className="text-center">{item.icon}</td>
                                                <td className="text-center">{item.groupName}</td>
                                                <td className="text-center">{item.vName}</td>
                                                <td className="text-center">{item.fixType}</td>
                                                <td className="text-center">{item.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
>>>>>>> 8b1f909329866d4c966cd1ab6ae52ad2051ffaa7
}
