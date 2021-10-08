import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";

import Card from "../components/Card";

export default function Reports() {
    return (
        <>
            <Row>
                <Col sm="12">
                    <Card>
                        <Card.Header className="d-flex justify-content-between bg-primary">
                            <div className="header-title mx-auto pb-3">
                                <h4 className="card-title bg-primary text-white">
                                    Reports
                                </h4>
                            </div>
                        </Card.Header>
                        <Card.Body>body</Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}
