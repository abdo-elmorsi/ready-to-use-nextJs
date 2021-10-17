import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

//Count-up
import CountUp from "react-countup";

const AccountManagement = () => {
  return (
    <>
      <Row>
        <Col lg="3">
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between">
                <div className="p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="counter"><CountUp  start={0} end={115} duration={2} /></h3>
                  <h1>Total Accounts</h1>
                  <p className=" mb-0">Total accounts found on system.</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AccountManagement;
