import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useTranslation } from "next-i18next";

export default function Reports() {
    const { t } = useTranslation("common");

    return (
        <>
            <Row>
                <Col sm="12">
                    <Card>
                        <Card.Body>Reports {t("test")}</Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}
