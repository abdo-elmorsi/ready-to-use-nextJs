import React from "react";
import {Row, Col, Card, Form, FormCheck} from "react-bootstrap";

// translation
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const CreateAdminUser = () => {
    const { t } = useTranslation("Management");

    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Form className="mt-5">
                                <Row className="border border-light rounded p-3 mb-3">
                                    <Col lg="6">
                                        <Form.Group className="form-group">
                                            <Form.Label htmlFor="firstName">{t("First_Name")}</Form.Label>
                                            <Form.Control type="text" id="firstName"/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg="6">
                                        <Form.Group className="form-group">
                                            <Form.Label htmlFor="LastName">{t("Last_Name")}</Form.Label>
                                            <Form.Control type="text" id="LastName"/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="border border-light rounded p-3 mb-3">
                                    <Col lg="6">
                                        <Form.Group className="form-group">
                                            <Form.Label htmlFor="userName">{t("User_Name")}</Form.Label>
                                            <Form.Control type="text" id="userName"/>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="border border-light rounded p-3 mb-3">
                                    <Col lg="6">
                                        <Form.Group className="form-group">
                                            <Form.Label htmlFor="emailAddress">{t("Email")}</Form.Label>
                                            <Form.Control type="email" id="emailAddress"/>
                                        </Form.Group>
                                    </Col>

                                    <Col lg="6">
                                        <Form.Group className="form-group">
                                            <Form.Label htmlFor="PhoneNum">{t("Phone_Number")}</Form.Label>
                                            <Form.Control type="number" id="PhoneNum"/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg="6">
                                        <Form.Group className="form-group">
                                            <Form.Label htmlFor="passowrd">{t("setting:Password")}</Form.Label>
                                            <Form.Control type="password" id="password"/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg="6">
                                        <Form.Group className="form-group">
                                            <Form.Label htmlFor="confirmpassword">{t("setting:Confirm_Password")}</Form.Label>
                                            <Form.Control type="password" id="confirmpassword"/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                            <div className="mt-5 d-flex justify-content-end">
                                <button className="btn btn-primary px-3 py-2 ms-3">{t("Back")}</button>
                                <button className="btn btn-primary px-3 py-2 ms-3">{t("Next")}</button>
                                <button className="btn btn-primary px-3 py-2 ms-3">{t("Cancel")}</button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default CreateAdminUser

// translation ##################################
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["Management","setting", "main"])),
        },
    };
}
// translation ##################################