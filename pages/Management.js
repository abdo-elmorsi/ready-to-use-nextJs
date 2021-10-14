import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faCar,
  faUsersCog,
  faSimCard,
  faRouter,
} from "@fortawesome/free-solid-svg-icons";

// import Card from "../components/Card";
export default function Reports() {
  return (
    <>
      <Row className="">
        <Col lg="6" className="mb-3">
          <Card className="h-100">
            <Card.Body className="pb-0">
              <Row>
                <Col
                  xs="3"
                  className="d-flex align-items-center justify-item-center"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="users"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="svg-inline--fa fa-users fa-w-20 fa-4x m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M544 224c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM320 256c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm0-192c44.1 0 80 35.9 80 80s-35.9 80-80 80-80-35.9-80-80 35.9-80 80-80zm244 192h-40c-15.2 0-29.3 4.8-41.1 12.9 9.4 6.4 17.9 13.9 25.4 22.4 4.9-2.1 10.2-3.3 15.7-3.3h40c24.2 0 44 21.5 44 48 0 8.8 7.2 16 16 16s16-7.2 16-16c0-44.1-34.1-80-76-80zM96 224c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm304.1 180c-33.4 0-41.7 12-80.1 12-38.4 0-46.7-12-80.1-12-36.3 0-71.6 16.2-92.3 46.9-12.4 18.4-19.6 40.5-19.6 64.3V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-44.8c0-23.8-7.2-45.9-19.6-64.3-20.7-30.7-56-46.9-92.3-46.9zM480 432c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16v-44.8c0-16.6 4.9-32.7 14.1-46.4 13.8-20.5 38.4-32.8 65.7-32.8 27.4 0 37.2 12 80.2 12s52.8-12 80.1-12c27.3 0 51.9 12.3 65.7 32.8 9.2 13.7 14.1 29.8 14.1 46.4V432zM157.1 268.9c-11.9-8.1-26-12.9-41.1-12.9H76c-41.9 0-76 35.9-76 80 0 8.8 7.2 16 16 16s16-7.2 16-16c0-26.5 19.8-48 44-48h40c5.5 0 10.8 1.2 15.7 3.3 7.5-8.5 16.1-16 25.4-22.4z"
                    ></path>
                  </svg>
                </Col>

                <Col xs="9">
                  <h4 className="mb-3">Manage Your Accounts</h4>
                  <p className="mb-3">
                    To manage your Accounts and add new accounts click here.
                  </p>
                  <Button variant="primary" className="p-2 shadow-none">
                    Manage Accounts
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col lg="6" className="mb-3">
          <Card className="h-100">
            <Card.Body className="pb-0">
              <Row>
                <Col
                  xs="3"
                  className="d-flex align-items-center justify-item-center"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="users-cog"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="svg-inline--fa fa-users-cog fa-w-20 fa-4x m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M287.4 250.6c2.9-10.4 6.5-20.4 10.9-30-33.6-9.5-58.4-40.1-58.4-76.7 0-44.1 35.9-80 80-80 36.6 0 67.1 24.8 76.7 58.4 9.6-4.4 19.6-8.1 30-10.9C412.6 65.6 370.4 32 320 32c-61.9 0-112 50.1-112 112 0 50.4 33.6 92.6 79.4 106.6zM96 224c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm61.1 172.9c-11.9-8.1-26-12.9-41.1-12.9H76c-41.9 0-76 35.9-76 80 0 8.8 7.2 16 16 16s16-7.2 16-16c0-26.5 19.8-48 44-48h40c5.5 0 10.8 1.2 15.7 3.3 7.5-8.5 16.1-16 25.4-22.4zM176 448c-8.8 0-16-7.2-16-16v-44.8c0-16.6 4.9-32.7 14.1-46.4 13.8-20.5 38.4-32.8 65.7-32.8 14.3 0 18.8 2.4 40.7 7.2-.2-3.8-1.4-13.4.6-32.6-16.3-4.3-26.4-6.6-41.3-6.6-36.3 0-71.6 16.2-92.3 46.9-12.4 18.4-19.6 40.5-19.6 64.3V432c0 26.5 21.5 48 48 48h209c-16-8.6-30.6-19.5-43.5-32H176zm304-208.5c-35.6 0-64.5 29-64.5 64.5s28.9 64.5 64.5 64.5 64.5-29 64.5-64.5-28.9-64.5-64.5-64.5zm0 97c-17.9 0-32.5-14.6-32.5-32.5s14.6-32.5 32.5-32.5 32.5 14.6 32.5 32.5-14.6 32.5-32.5 32.5zm148.3-10.2l-16.5-9.5c.8-8.5.8-17.1 0-25.6l16.6-9.5c9.5-5.5 13.8-16.7 10.5-27-7.2-23.4-19.9-45.4-36.7-63.5-7.4-8.1-19.3-9.9-28.8-4.4l-16.5 9.5c-7-5-14.4-9.3-22.2-12.8v-19c0-11-7.5-20.3-18.2-22.7-23.9-5.4-49.3-5.4-73.3 0-10.7 2.4-18.2 11.8-18.2 22.7v19c-7.8 3.5-15.3 7.8-22.2 12.8l-16.5-9.5c-9.5-5.5-21.3-3.7-28.7 4.4-16.8 18.1-29.4 40.1-36.7 63.4-3.3 10.4 1.2 21.8 10.6 27.2l16.5 9.5c-.8 8.5-.8 17.1 0 25.6l-16.6 9.5c-9.3 5.4-13.8 16.9-10.5 27.1 7.3 23.4 19.9 45.4 36.7 63.5 7.4 8 19.2 9.8 28.8 4.4l16.5-9.5c7 5 14.4 9.3 22.2 12.8v19c0 11 7.5 20.3 18.2 22.7 12 2.7 24.3 4 36.6 4s24.7-1.3 36.6-4c10.7-2.4 18.2-11.8 18.2-22.7v-19c7.8-3.5 15.2-7.8 22.2-12.8l16.5 9.5c9.4 5.4 21.3 3.6 28.7-4.4 16.8-18.1 29.4-40.1 36.7-63.4 3.4-10.4-1.1-21.9-10.5-27.3zm-51.6 7.2l29.4 17c-5.3 14.3-13 27.8-22.8 39.5l-29.4-17c-21.4 18.3-24.5 20.1-51.1 29.5v34c-15.1 2.6-30.6 2.6-45.6 0v-34c-26.9-9.5-30.2-11.7-51.1-29.5l-29.4 17c-9.8-11.8-17.6-25.2-22.8-39.5l29.4-17c-4.9-26.8-5.2-30.6 0-59l-29.4-17c5.2-14.3 13-27.7 22.8-39.5l29.4 17c21.4-18.3 24.5-20.1 51.1-29.5v-34c15.1-2.5 30.7-2.5 45.6 0v34c26.8 9.5 30.2 11.6 51.1 29.5l29.4-17c9.8 11.8 17.6 25.2 22.8 39.5l-29.4 17c4.9 26.8 5.2 30.6 0 59z"
                    ></path>
                  </svg>
                </Col>

                <Col xs="9">
                  <h4 className="mb-3">Manage Your Users</h4>
                  <p className="mb-3">
                    To manage your Users, Add new Users, Manage User&#39;s Vehicles
                    and Edit Users Role please click here.
                  </p>
                  <Button variant="primary" className="p-2 shadow-none">
                    Manage Users
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col lg="6" className="mb-3">
          <Card className="h-100">
            <Card.Body className="pb-0">
              <Row>
                <Col
                  xs="3"
                  className="d-flex align-items-center justify-item-center"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="car"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="svg-inline--fa fa-car fa-w-16 fa-4x m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M120.81 248c-25.96 0-44.8 16.8-44.8 39.95 0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08-.01-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95s8.32-15.95 20.8-15.95 31.2 14.36 31.2 23.93c0 7.17-10.54 8.07-21.06 8.07zm260.24-56c-24.1 0-55.19 23.24-55.19 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95-.01-23.16-18.85-39.96-44.81-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95zm114.8-140.94c-7.34-11.88-20.06-18.97-34.03-18.97H422.3l-8.07-24.76C403.5 86.29 372.8 64 338.17 64H173.83c-34.64 0-65.33 22.29-76.06 55.22l-8.07 24.76H40.04c-13.97 0-26.69 7.09-34.03 18.97s-8 26.42-1.75 38.91l5.78 11.61c3.96 7.88 9.92 14.09 17 18.55-6.91 11.74-11.03 25.32-11.03 39.97V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16H384v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-14.66-4.12-28.23-11.03-39.98 7.09-4.46 13.04-10.68 17-18.57l5.78-11.56c6.24-12.5 5.58-27.05-1.76-38.92zM128.2 129.14C134.66 109.32 153 96 173.84 96h164.33c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H107.73l20.47-62.84zm-89.53 70.02l-5.78-11.59c-1.81-3.59-.34-6.64.34-7.78.87-1.42 2.94-3.8 6.81-3.8h39.24l-6.45 19.82a80.69 80.69 0 0 0-23.01 11.29c-4.71-1-8.94-3.52-11.15-7.94zM96.01 400c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm367.98 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H48.01v-80c0-26.47 21.53-48 48-48h319.98c26.47 0 48 21.53 48 48v48zm15.12-132.41l-5.78 11.55c-2.21 4.44-6.44 6.97-11.15 7.97-6.94-4.9-14.69-8.76-23.01-11.29l-6.45-19.82h39.24c3.87 0 5.94 2.38 6.81 3.8.69 1.14 2.16 4.18.34 7.79z"
                    ></path>
                  </svg>{" "}
                </Col>

                <Col xs="9">
                  <h4 className="mb-3">Manage Your Vehicles</h4>
                  <p className="mb-3">
                    To manage your Vehicles please click here.
                  </p>
                  <Button variant="primary" className="p-2 shadow-none">
                    Manage Vehicle
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col lg="6" className="mb-3">
          <Card className="h-100">
            <Card.Body className="pb-0">
              <Row>
                <Col
                  xs="3"
                  className="d-flex align-items-center justify-item-center"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="router"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="svg-inline--fa fa-router fa-w-18 fa-4x m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M173.93 96.81a8.12 8.12 0 0 0 11.23.07C230.55 55 289.48 32 352 32s121.45 23 166.83 64.88a8.12 8.12 0 0 0 11.23-.07l11.53-11.34a8 8 0 0 0-.11-11.56C490 26.18 423 0 352 0S214 26.18 162.52 73.91a8 8 0 0 0-.11 11.56zM352 112a179.26 179.26 0 0 0-120.38 45.8 8 8 0 0 0-.15 11.64l11.53 11.3a8.21 8.21 0 0 0 11.22.14 148.17 148.17 0 0 1 195.64 0 8.21 8.21 0 0 0 11.22-.14l11.49-11.3a8 8 0 0 0-.15-11.64A179.26 179.26 0 0 0 352 112zm176 208H368v-88a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v88H48a48 48 0 0 0-48 48v96a48 48 0 0 0 48 48h480a48 48 0 0 0 48-48v-96a48 48 0 0 0-48-48zm16 144a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-96a16 16 0 0 1 16-16h480a16 16 0 0 1 16 16zm-360-72a24 24 0 1 0 24 24 24 24 0 0 0-24-24zm-80 0a24 24 0 1 0 24 24 24 24 0 0 0-24-24z"
                    ></path>
                  </svg>
                </Col>

                <Col xs="9">
                  <h4 className="mb-3">Manage Your Devices</h4>
                  <p className="mb-3">
                    To manage your devices and assign devices to your vehicle
                    please click here.
                  </p>
                  <Button variant="primary" className="p-2 shadow-none">
                    Manage Device
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col lg="6" className="mb-3">
          <Card className="h-100">
            <Card.Body className="pb-0">
              <Row>
                <Col
                  xs="3"
                  className="d-flex align-items-center justify-item-center"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="sim-card"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="svg-inline--fa fa-sim-card fa-w-12 fa-4x m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M64 240v160c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H112c-26.5 0-48 21.5-48 48zm152 24h-48v-40h48v40zm72 0h-40v-40h24c8.8 0 16 7.2 16 16v24zm-40 112h40v24c0 8.8-7.2 16-16 16h-24v-40zm-80 0h48v40h-48v-40zm-72 0h40v40h-24c-8.8 0-16-7.2-16-16v-24zm0-80h192v48H96v-48zm0-56c0-8.8 7.2-16 16-16h24v40H96v-24zM0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128L256 0H64C28.7 0 0 28.7 0 64zm32 0c0-17.6 14.4-32 32-32h178.7L352 141.3V448c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V64z"
                    ></path>
                  </svg>{" "}
                </Col>

                <Col xs="9">
                  <h4 className="mb-3">Manage Your SIM Cards</h4>
                  <p className="mb-3">
                    To manage your SIMCards please click here.
                  </p>
                  <Button variant="primary" className="p-2 shadow-none">
                    Manage SIM Cards
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col lg="6" className="mb-3">
          <Card className="h-100">
            <Card.Body className="pb-0">
              <Row>
                <Col
                  xs="3"
                  className="d-flex align-items-center justify-item-center m-auto"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="user-edit"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="svg-inline--fa fa-user-edit fa-w-20 fa-4x m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96zm406.6 204.1l-34.7-34.7c-6.3-6.3-14.5-9.4-22.8-9.4-8.2 0-16.5 3.1-22.8 9.4L327.8 424l-7.6 68.2c-1.2 10.7 7.2 19.8 17.7 19.8.7 0 1.3 0 2-.1l68.2-7.6 222.5-222.5c12.5-12.7 12.5-33.1 0-45.7zM393.3 473.7l-39.4 4.5 4.4-39.5 156.9-156.9 35 35-156.9 156.9zm179.5-179.5l-35-35L573 224h.1l.2.1 34.7 35-35.2 35.1zM134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 20.7 0 39.9 6.3 56 16.9l22.8-22.8c-22.2-16.2-49.3-26-78.8-26-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h243.5c-2.8-7.4-4.1-15.4-3.2-23.4l1-8.6H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320z"
                    ></path>
                  </svg>{" "}
                </Col>

                <Col xs="9">
                  <h4 className="mb-3">Manage Your Drivers</h4>
                  <p className="mb-3">
                    To manage your drivers and assign drivers to your vehicle
                    please click here.
                  </p>
                  <Button variant="primary" className="p-2 shadow-none">
                    Manage Drivers
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col lg="6" className="mb-3">
          <Card className="h-100">
            <Card.Body className="pb-0">
              <Row>
                <Col
                  xs="3"
                  className="d-flex align-items-center justify-item-center"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="users-class"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="svg-inline--fa fa-users-class fa-w-20 fa-4x m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M544 224c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 128c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm-304-48c0 44.2 35.8 80 80 80s80-35.8 80-80-35.8-80-80-80-80 35.8-80 80zm128 0c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zM96 384c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm468 160h-40c-41.9 0-76 35.9-76 80 0 8.8 7.2 16 16 16s16-7.2 16-16c0-26.5 19.8-48 44-48h40c24.2 0 44 21.5 44 48 0 8.8 7.2 16 16 16s16-7.2 16-16c0-44.1-34.1-80-76-80zm-448 0H76c-41.9 0-76 35.9-76 80 0 8.8 7.2 16 16 16s16-7.2 16-16c0-26.5 19.8-48 44-48h40c24.2 0 44 21.5 44 48 0 8.8 7.2 16 16 16s16-7.2 16-16c0-44.1-34.1-80-76-80zm224 0h-40c-41.9 0-76 35.9-76 80 0 8.8 7.2 16 16 16s16-7.2 16-16c0-26.5 19.8-48 44-48h40c24.2 0 44 21.5 44 48 0 8.8 7.2 16 16 16s16-7.2 16-16c0-44.1-34.1-80-76-80zM64 48c0-8.83 7.19-16 16-16h480c8.81 0 16 7.17 16 16v149.22c11.51 3.46 22.37 8.36 32 15.11V48c0-26.47-21.53-48-48-48H80C53.53 0 32 21.53 32 48v164.33c9.63-6.75 20.49-11.64 32-15.11V48z"
                    ></path>
                  </svg>
                </Col>

                <Col xs="9">
                  <h4 className="mb-3">Manage Your Groups</h4>
                  <p className="mb-3">
                    To manage your drivers and assign drivers to your vehicle
                    please click here.
                  </p>
                  <Button variant="primary" className="p-2 shadow-none">
                    Manage Groups
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col lg="6" className="mb-3">
          <Card className="h-100">
            <Card.Body className="pb-0">
              <Row>
                <Col
                  xs="3"
                  className="d-flex align-items-center justify-item-center"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="user-cog"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="svg-inline--fa fa-users-class fa-w-20 fa-4x m-auto"
                  >
                    <path
                      fill="currentColor"
                      d="M628.3 358.3l-16.5-9.5c.8-8.5.8-17.1 0-25.6l16.6-9.5c9.5-5.5 13.8-16.7 10.5-27-7.2-23.4-19.9-45.4-36.7-63.5-7.4-8.1-19.3-9.9-28.7-4.4l-16.5 9.5c-7-5-14.4-9.3-22.2-12.8v-19c0-11-7.5-20.3-18.2-22.7-23.9-5.4-49.3-5.4-73.2 0-10.7 2.4-18.2 11.8-18.2 22.7v19c-7.8 3.5-15.2 7.8-22.2 12.8l-16.5-9.5c-9.5-5.5-21.3-3.7-28.7 4.4-16.7 18.1-29.4 40.1-36.7 63.4-3.3 10.4 1.2 21.8 10.6 27.2l16.5 9.5c-.8 8.5-.8 17.1 0 25.6l-16.6 9.5c-9.3 5.4-13.8 16.9-10.5 27.1 7.2 23.4 19.9 45.4 36.7 63.5 7.4 8 19.2 9.8 28.7 4.4l16.5-9.5c7 5 14.4 9.3 22.2 12.8v19c0 11 7.5 20.3 18.2 22.7 12 2.7 24.3 4 36.6 4s24.7-1.3 36.6-4c10.7-2.4 18.2-11.8 18.2-22.7v-19c7.8-3.5 15.2-7.8 22.2-12.8l16.5 9.5c9.4 5.4 21.3 3.6 28.7-4.4 16.7-18.1 29.4-40.1 36.7-63.4 3.3-10.4-1.2-21.9-10.6-27.3zm-51.6 7.2l29.4 17c-5.2 14.3-13 27.8-22.8 39.5l-29.4-17c-21.4 18.3-24.5 20.1-51.1 29.5v34c-15.1 2.6-30.6 2.6-45.6 0v-34c-26.9-9.5-30.2-11.7-51.1-29.5l-29.4 17c-9.8-11.8-17.6-25.2-22.8-39.5l29.4-17c-4.9-26.8-5.2-30.6 0-59l-29.4-17c5.2-14.3 13-27.7 22.8-39.5l29.4 17c21.4-18.3 24.5-20.1 51.1-29.5v-34c15.1-2.5 30.7-2.5 45.6 0v34c26.8 9.5 30.2 11.6 51.1 29.5l29.4-17c9.8 11.8 17.6 25.2 22.8 39.5l-29.4 17c4.9 26.8 5.2 30.6 0 59zm-96.7-94c-35.6 0-64.5 29-64.5 64.5s28.9 64.5 64.5 64.5 64.5-29 64.5-64.5-28.9-64.5-64.5-64.5zm0 97c-17.9 0-32.5-14.6-32.5-32.5s14.6-32.5 32.5-32.5 32.5 14.6 32.5 32.5-14.6 32.5-32.5 32.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96zM48 480c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 19.2 0 38-3.3 56.5-8.7.5-11.6 1.8-23 4.2-34-8.9 2.7-30.1 10.7-60.7 10.7-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h337c-16-8.6-30.6-19.5-43.5-32H48z"
                    ></path>
                  </svg>
                </Col>

                <Col xs="9">
                  <h4 className="mb-3">Manage Your Send Commands</h4>
                  <p className="mb-3">
                    To manage your Commands please click here.
                  </p>
                  <Button variant="primary" className="p-2 shadow-none">
                    Manage Commands
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
// translation ##################################
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['main'])),
        },
    };
}
// translation ##################################