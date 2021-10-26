import {Row, Col, Card, Form, FormCheck} from "react-bootstrap"
import React from "react";

// translation
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const SelectUserRole = () => {
    const {t} = useTranslation("Management")
    return (
        <>
            <Row>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col lg="4" md="6" className="mb-3">
                                <Card className="border-bottom border-4 border-0 border-primary">
                                    <Card.Body className="d-flex justify-content-start align-items-center">
                                        <div>
                                            <Form.Check className="mb-3 form-check">
                                                <FormCheck.Input type="checkbox" className="me-3 p-2"
                                                                 id="exampleCheck1"/>
                                                <FormCheck.Label className="h4"
                                                                 htmlFor="exampleCheck1">{t("Admin")}</FormCheck.Label>
                                            </Form.Check>
                                            <span>text deisciption here...</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg="4" md="6" className="mb-3">
                                <Card className="border-bottom border-4 border-0 border-primary">
                                    <Card.Body className="d-flex justify-content-start align-items-center">
                                        <div>
                                            <Form.Check className="mb-3 form-check">
                                                <FormCheck.Input type="checkbox" className="me-3 p-2"
                                                                 id="exampleCheck1"/>
                                                <FormCheck.Label className="h4"
                                                                 htmlFor="exampleCheck1">{t("Account_Manager")}</FormCheck.Label>
                                            </Form.Check>
                                            <span>text deisciption here...</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg="4" md="6" className="mb-3">
                                <Card className="border-bottom border-4 border-0 border-primary">
                                    <Card.Body className="d-flex justify-content-start align-items-center">
                                        <div>
                                            <Form.Check className="mb-3 form-check">
                                                <FormCheck.Input type="checkbox" className="me-3 p-2"
                                                                 id="exampleCheck1"/>
                                                <FormCheck.Label className="h4"
                                                                 htmlFor="exampleCheck1">{t("User")}</FormCheck.Label>
                                            </Form.Check>
                                            <span>text deisciption here...</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg="4" md="6" className="mb-3">
                                <Card className="border-bottom border-4 border-0 border-primary">
                                    <Card.Body className="d-flex justify-content-start align-items-center">
                                        <div>
                                            <Form.Check className="mb-3 form-check">
                                                <FormCheck.Input type="checkbox" className="me-3 p-2"
                                                                 id="exampleCheck1"/>
                                                <FormCheck.Label className="h4"
                                                                 htmlFor="exampleCheck1">{t("Sales")}</FormCheck.Label>
                                            </Form.Check>
                                            <span>text deisciption here...</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg="4" md="6" className="mb-3">
                                <Card className="border-bottom border-4 border-0 border-primary">
                                    <Card.Body className="d-flex justify-content-start align-items-center">
                                        <div>
                                            <Form.Check className="mb-3 form-check">
                                                <FormCheck.Input type="checkbox" className="me-3 p-2"
                                                                 id="exampleCheck1"/>
                                                <FormCheck.Label className="h4" htmlFor="exampleCheck1">
                                                    {t("Account_Admin")}
                                                </FormCheck.Label>
                                            </Form.Check>
                                            <span>text deisciption here...</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg="4" md="6" className="mb-3">
                                <Card className="border-bottom border-4 border-0 border-primary">
                                    <Card.Body className="d-flex justify-content-start align-items-center">
                                        <div>
                                            <Form.Check className="mb-3 form-check">
                                                <FormCheck.Input type="checkbox" className="me-3 p-2"
                                                                 id="exampleCheck1"/>
                                                <FormCheck.Label className="h4"
                                                                 htmlFor="exampleCheck1">{t("Reporting")}</FormCheck.Label>
                                            </Form.Check>
                                            <span>text deisciption here...</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                        <Row>
                            <div className="mt-5 d-flex justify-content-end">
                                <button className="btn btn-primary px-3 py-2 ms-3">{t("Back")}</button>
                                <button className="btn btn-primary px-3 py-2 ms-3">{t("Next")}</button>
                                <button className="btn btn-primary px-3 py-2 ms-3">{t("Cancel")}</button>
                            </div>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
        </>
    )
}

export default SelectUserRole

// translation ##################################
export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["Management", "main"])),
        },
    };
}

// translation ##################################