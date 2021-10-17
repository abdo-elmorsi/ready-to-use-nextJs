import React from "react";
import {Row, Col, Card, Tabs, Tab} from "react-bootstrap";

export default function Reports() {
    return (
        <>
            <Row>
                <Col sm="12">
                    <Card>
                        <Card.Body>Reports</Card.Body>
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