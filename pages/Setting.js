import React, { useState } from "react";
import { Row, Col, Form, Card } from "react-bootstrap";
import Image from "next/image";
const Setting = () => {
    return (
        <>
            <div>
                <Row>
                    <Col sm="12" lg="12">
                        <Card>
                            <Card.Header className="d-flex justify-content-between"></Card.Header>
                            <Card.Body>
                                <Form id="form" className="text-center mt-3">
                                    <fieldset>
                                        <div className="form-card text-start">
                                            <h3 className="mb-4">image:</h3>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="row">
                                                        <div className="col-12 d-flex justify-content-center">
                                                            <div className="rounded-circle overflow-hidden">
                                                                <Image
                                                                    src="/assets/images/avatars/01.png"
                                                                    width="120"
                                                                    height="120px"
                                                                    alt="image"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        name="next"
                                                        className="btn btn-primary next action-button mt-5"
                                                        value="submit"
                                                    >
                                                        submit
                                                    </button>
                                                </div>
                                                <div className="col-6">
                                                    <h3 className="mb-4">
                                                        Password:
                                                    </h3>
                                                    <div className="row">
																												<div className="col-md-6">
                                                            <Form.Floating className="custom-form-floating custom-form-floating-sm form-group">
                                                                <Form.Control
                                                                    type="password"
                                                                    className=""
                                                                    id="floatingInput5"
                                                                    placeholder="Place Holder"
                                                                />
                                                                <label htmlFor="floatingInput">
                                                                    Old
                                                                </label>
                                                            </Form.Floating>
                                                        </div>
																												<div className="col-md-6">
                                                            <Form.Floating className="custom-form-floating custom-form-floating-sm form-group">
                                                                <Form.Control
                                                                    type="password"
                                                                    className=""
                                                                    id="floatingInput5"
                                                                    placeholder="Place Holder"
                                                                />
                                                                <label htmlFor="floatingInput">
                                                                    New
                                                                </label>
                                                            </Form.Floating>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <Form.Floating className="custom-form-floating custom-form-floating-sm form-group">
                                                                <Form.Control
                                                                    type="password"
                                                                    className=""
                                                                    id="floatingInput5"
                                                                    placeholder="Place Holder"
                                                                />
                                                                <label htmlFor="floatingInput">
                                                                    Confirm
                                                                    Password
                                                                </label>
                                                            </Form.Floating>
                                                        </div>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        name="next"
                                                        className="btn btn-primary next action-button float-end"
                                                        value="submit"
                                                    >
                                                        submit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Setting;

// translation ##################################
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["main"])),
        },
    };
}
// translation ##################################
