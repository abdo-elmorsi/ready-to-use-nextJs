import React from "react";
<<<<<<< HEAD
import {Row, Col, Card, Tabs, Tab} from "react-bootstrap";

=======
import { Row, Col, Card } from "react-bootstrap";
// translation
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
>>>>>>> 28a427898b7f76f45bead968530fbb8d6e564b57
export default function Reports() {
    const { t } = useTranslation("main");

    return (
        <>
            <Row>
                <Col sm="12">
                    <Card>
                        <Card.Body>{t("Reports")}</Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}
// translation ##################################
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['main'])),
        },
    };
}
// translation ##################################