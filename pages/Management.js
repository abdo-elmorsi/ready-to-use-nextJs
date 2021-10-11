import React  from "react";
import { Row, Col } from "react-bootstrap";

import Card from "../components/Card";

export default function Reports() {
    return (
        <>
            <Row>
                <Col sm="12">
                    <Card>
                        <Card.Body>Management</Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}
