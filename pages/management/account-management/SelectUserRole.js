import {Row, Col, Card, Form, FormCheck} from "react-bootstrap"
import React from "react";

// translation
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const SelectUserRole = () => {
    const {t} = useTranslation("Management")
    return (
        <>
                <Card>
                    <Card.Body>
                        <Row className=" d-flex justify-content-center my-5"> 
                            <Col md="8">
                                <Row>
                                    <Col  md="6" className="mb-3">
                                        <Card className="border-bottom border-4 border-0 border-primary">
                                            <Card.Body className="d-flex justify-content-start align-items-center">
                                                <div>
                                                    <Form.Check className="mb-3 form-check">
                                                        <FormCheck.Input type="radio" name="userRole" className="me-3 p-2" id="admin"/>
                                                        <FormCheck.Label className="h4" htmlFor="admin">{t("Admin")}</FormCheck.Label>
                                                    </Form.Check>
                                                    <span>text deisciption here...</span>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col  md="6" className="mb-3">
                                        <Card className="border-bottom border-4 border-0 border-primary">
                                            <Card.Body className="d-flex justify-content-start align-items-center">
                                                <div>
                                                    <Form.Check className="mb-3 form-check">
                                                        <FormCheck.Input type="radio" name="userRole" className="me-3 p-2" id="accountManager"/>
                                                        <FormCheck.Label className="h4" htmlFor="accountManager">{t("Account_Manager")}</FormCheck.Label>
                                                    </Form.Check>
                                                    <span>text deisciption here...</span>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col  md="6" className="mb-3">
                                        <Card className="border-bottom border-4 border-0 border-primary">
                                            <Card.Body className="d-flex justify-content-start align-items-center">
                                                <div>
                                                    <Form.Check className="mb-3 form-check">
                                                        <FormCheck.Input type="radio" name="userRole" className="me-3 p-2" id="user"/>
                                                        <FormCheck.Label className="h4" htmlFor="user">{t("User")}</FormCheck.Label>
                                                    </Form.Check>
                                                    <span>text deisciption here...</span>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col  md="6" className="mb-3">
                                        <Card className="border-bottom border-4 border-0 border-primary">
                                            <Card.Body className="d-flex justify-content-start align-items-center">
                                                <div>
                                                    <Form.Check className="mb-3 form-check">
                                                        <FormCheck.Input type="radio" name="userRole" className="me-3 p-2" id="sales"/>
                                                        <FormCheck.Label className="h4" htmlFor="sales">{t("Sales")}</FormCheck.Label>
                                                    </Form.Check>
                                                    <span>text deisciption here...</span>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col  md="6" className="mb-3">
                                        <Card className="border-bottom border-4 border-0 border-primary">
                                            <Card.Body className="d-flex justify-content-start align-items-center">
                                                <div>
                                                    <Form.Check className="mb-3 form-check">
                                                        <FormCheck.Input type="radio" name="userRole" className="me-3 p-2" id="accountAdmin"/>
                                                        <FormCheck.Label className="h4" htmlFor="accountAdmin">
                                                            {t("Account_Admin")}
                                                        </FormCheck.Label>
                                                    </Form.Check>
                                                    <span>text deisciption here...</span>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col  md="6" className="mb-3">
                                        <Card className="border-bottom border-4 border-0 border-primary">
                                            <Card.Body className="d-flex justify-content-start align-items-center">
                                                <div>
                                                    <Form.Check className="mb-3 form-check">
                                                        <FormCheck.Input type="radio" name="userRole" className="me-3 p-2" id="reporting"/>
                                                        <FormCheck.Label className="h4" htmlFor="reporting">{t("Reporting")}</FormCheck.Label>
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
                        </Col>
                    </Row>
                    </Card.Body>
                </Card>
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