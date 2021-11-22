import React from "react";
import { Row, Col, Card, Form, FormCheck } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarked,
  faHistory,
  faBell,
  faCar,
  faCalendarAlt,
  faClock,
  faTachometerAlt,
  faMapMarkerAlt,
  faCogs,
  faUsers,
  faUsersCog,
  faCertificate,
  faUsersSlash,
  faCog,
  faListUl,
  faClipboardList,
  faLaptop,
  faTools,
  faDollarSign,
  faArrowLeft,
  faArrowRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import AccountManagement from "./[id]/index";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const TrackData = [
  { icon: faMapMarked, title: "Track", price: 5 },
  { icon: faHistory, title: "History", price: 5 },
  { icon: faBell, title: "Alerts & Notifactions", price: 5 },
  { icon: faCar, title: "Operate Vehicle", price: 5 },
  { icon: faMapMarkerAlt, title: "Geofence", price: 4.9 },
  { icon: faMapMarkerAlt, title: "LandMarks", price: 4.2 },
];

const ManageData = [
  { icon: faCogs, title: "Management", price: 5 },
  { icon: faCar, title: "Manage Vehicle", price: 5 },
  { icon: faUsers, title: "Accounts Management", price: 5 },
  { icon: faUsersCog, title: "Users Management", price: 5 },
  { icon: faCog, title: "Manage Devices", price: 5 },
  { icon: faUsersCog, title: "Manage Drivers", price: 4.2 },
  { icon: faTools, title: "Preventive Maintenace", price: 5 },
  { icon: faUsersSlash, title: "Manage Driving Behavior", price: 5 },
  { icon: faCertificate, title: "Used Base Insurance", price: 5 },
];

const operateVihecleData = [
  { icon: faDollarSign, title: "Rental", price: 5 },
  { icon: faCar, title: "Taxi", price: 5 },
  { icon: faListUl, title: "Dispatch", price: 5 },
  { icon: faClipboardList, title: "Task", price: 5 },
];

const reportsData = [
  { icon: faCalendarAlt, title: "Scheduled", price: 5 },
  { icon: faClock, title: "OnDemand", price: 5 },
  { icon: faTachometerAlt, title: "Dashboard", price: 5 },
];

const subScription = () => {
  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="header-title"></div>
              <Row>
                <Col md="12">
                  {/* ================ Track Features Section */}
                  <div className="border border-light rounded p-4 my-3">
                    <h4>Track</h4>
                    <hr className="my-3" />
                    <Row>
                      {TrackData.map((el) => {
                        return (
                          <>
                            <Col md="12" lg="6" key={el.icon}>
                              <Card className="border border-light">
                                <Card.Body>
                                  <div className="d-flex justify-content-between align-itmes-center">
                                    <div className="d-flex ">
                                      <div className="d-flex justify-content-center align-items-center">
                                        <div className="p-3 rounded bg-soft-success">
                                          <FontAwesomeIcon
                                            className="fa-2x"
                                            icon={el.icon}
                                            size="lg"
                                          />
                                        </div>
                                      </div>
                                      <div className="d-flex flex-column justify-content-center p-3">
                                        <h5>{el.title}</h5>
                                        <p className="mb-0">
                                          {el.price} SAR/Month
                                        </p>
                                      </div>
                                    </div>
                                    <div className="d-flex flex-column justify-content-between">
                                      <button className="btn btn-outline-primary p-2 m-1 active">
                                        Active
                                      </button>
                                      <button className="btn btn-outline-primary p-2 m-1">
                                        suspend
                                      </button>
                                    </div>
                                  </div>
                                </Card.Body>
                              </Card>
                            </Col>
                          </>
                        );
                      })}
                    </Row>
                  </div>

                  {/* ================ Manage Features Section */}
                  <div className="border border-light rounded p-4 my-3">
                    <h4>Manage</h4>
                    <hr className="my-3" />
                    <Row>
                      {ManageData.map((el) => {
                        return (
                          <>
                            <Col md="12" lg="6" key={el.icon}>
                              <Card className="border border-light">
                                <Card.Body>
                                  <div className="d-flex justify-content-between align-itmes-center">
                                    <div className="d-flex ">
                                      <div className="d-flex justify-content-center align-items-center">
                                        <div className="p-3 rounded bg-soft-info">
                                          <FontAwesomeIcon
                                            className="fa-2x"
                                            icon={el.icon}
                                            size="lg"
                                          />
                                        </div>
                                      </div>
                                      <div className="d-flex flex-column justify-content-center p-3">
                                        <h5>{el.title}</h5>
                                        <p className="mb-0">
                                          {el.price} SAR/Month
                                        </p>
                                      </div>
                                    </div>
                                    <div className="d-flex flex-column justify-content-between">
                                      <button className="btn btn-outline-primary p-2 m-1 active">
                                        Active
                                      </button>
                                      <button className="btn btn-outline-primary p-2 m-1">
                                        suspend
                                      </button>
                                    </div>
                                  </div>
                                </Card.Body>
                              </Card>
                            </Col>
                          </>
                        );
                      })}
                    </Row>
                  </div>
                  {/* ================ Manage Features Section */}
                  <div className="border border-light rounded p-4 my-3">
                    <h4>Operate Vehicle</h4>
                    <hr className="my-3" />
                    <Row>
                      {operateVihecleData.map((el) => {
                        return (
                          <>
                            <Col md="12" lg="6" key={el.icon}>
                              <Card className="border border-light">
                                <Card.Body>
                                  <div className="d-flex justify-content-between align-itmes-center">
                                    <div className="d-flex ">
                                      <div className="d-flex justify-content-center align-items-center">
                                        <div className="p-3 rounded bg-soft-primary">
                                          <FontAwesomeIcon
                                            className="fa-2x"
                                            icon={el.icon}
                                            size="lg"
                                          />
                                        </div>
                                      </div>
                                      <div className="d-flex flex-column justify-content-center p-3">
                                        <h5>{el.title}</h5>
                                        <p className="mb-0">
                                          {el.price} SAR/Month
                                        </p>
                                      </div>
                                    </div>
                                    <div className="d-flex flex-column justify-content-between">
                                      <button className="btn btn-outline-primary p-2 m-1 active">
                                        Active
                                      </button>
                                      <button className="btn btn-outline-primary p-2 m-1">
                                        suspend
                                      </button>
                                    </div>
                                  </div>
                                </Card.Body>
                              </Card>
                            </Col>
                          </>
                        );
                      })}
                    </Row>
                  </div>
                  {/* ================ Reports Features Section */}
                  <div className="border border-light rounded p-4 my-3">
                    <h4>Reports</h4>
                    <hr className="my-3" />
                    <Row>
                      {reportsData.map((el) => {
                        return (
                          <>
                            <Col md="12" lg="6" key={el.icon}>
                              <Card className="border border-light">
                                <Card.Body>
                                  <div className="d-flex justify-content-between align-itmes-center">
                                    <div className="d-flex ">
                                      <div className="d-flex justify-content-center align-items-center">
                                        <div className="p-3 rounded bg-soft-warning">
                                          <FontAwesomeIcon
                                            className="fa-2x"
                                            icon={el.icon}
                                            size="lg"
                                          />
                                        </div>
                                      </div>
                                      <div className="d-flex flex-column justify-content-center p-3">
                                        <h5>{el.title}</h5>
                                        <p className="mb-0">
                                          {el.price} SAR/Month
                                        </p>
                                      </div>
                                    </div>
                                    <div className="d-flex flex-column justify-content-between">
                                      <button className="btn btn-outline-primary p-2 m-1 active">
                                        Active
                                      </button>
                                      <button className="btn btn-outline-primary p-2 m-1">
                                        suspend
                                      </button>
                                    </div>
                                  </div>
                                </Card.Body>
                              </Card>
                            </Col>
                          </>
                        );
                      })}
                    </Row>
                  </div>
                </Col>

                <Col md="12" className="border border-light rounded p-3">
                  <h4>Subscriptions List</h4>
                  <hr className="my-3" />
                </Col>
              </Row>
              <div className="mt-5 d-flex justify-content-end">
                <button className="btn btn-primary px-3 py-2 ms-3">
                  <FontAwesomeIcon
                    className="me-2"
                    icon={faArrowLeft}
                    size="sm"
                  />
                  Back
                </button>
                <button className="btn btn-primary px-3 py-2 ms-3">
                  <FontAwesomeIcon
                    className="me-2"
                    icon={faArrowRight}
                    size="sm"
                  />
                  Next
                </button>
                <button className="btn btn-primary px-3 py-2 ms-3">
                  <FontAwesomeIcon className="me-2" icon={faTimes} size="sm" />
                  Cancel
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default subScription;

// translation ##################################
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["main"])),
    },
  };
}
// translation ##################################
