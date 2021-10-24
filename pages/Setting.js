import React from "react";
import { Row, Col, Form, Card, Button } from "react-bootstrap";
import Image from "next/image";
// translation
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Setting = () => {
    const { t } = useTranslation("setting");
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
                                            <div className="row px-5 ">
                                                <div className="col-md-6 d-flex justify-content-between flex-column">
                                                    <h3 className="mb-4">
                                                        {t("image")}
                                                    </h3>
                                                    <div className="row">
                                                        <div className="col-12 d-flex justify-content-center">
                                                            <div
                                                                className="rounded-circle overflow-hidden mb-2"
                                                                style={{
                                                                    width: "120px",
                                                                    height: "120px",
                                                                    position:
                                                                        "relative",
                                                                }}
                                                            >
                                                                <label
                                                                    htmlFor="upload"
                                                                    style={{
                                                                        cursor: "pointer",
                                                                    }}
                                                                >
                                                                    <Image
                                                                        src="/assets/images/avatars/01.png"
                                                                        width="120"
                                                                        height="120"
                                                                        alt="image"
                                                                    />
                                                                </label>
                                                                <input
                                                                    id="upload"
                                                                    type="file"
                                                                    style={{
                                                                        display:
                                                                            "none",
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Button
                                                        type="button"
                                                        name="next"
                                                        className="btn btn-primary next action-button float-start px-4 py-1 shadow-none"
                                                        value="submit"
                                                    >
                                                        {t("change image")}
                                                    </Button>
                                                </div>
                                                <div className="col-md-6 mt-5 mt-md-0  d-flex justify-content-between flex-column">
                                                    <h3 className="mb-4">
                                                        {t("Password")}
                                                    </h3>
                                                    <div className="row ">
                                                        <div className="col-12">
                                                            <Form.Floating className="custom-form-floating custom-form-floating-sm form-group">
                                                                <Form.Control
                                                                    className="py-2 mb-4 mb-md-0"
                                                                    type="password"
                                                                    id="old"
                                                                    placeholder="Place Holder"
                                                                />
                                                                <label
                                                                    htmlFor="floatingInput"
                                                                    style={{
                                                                        fontSize:
                                                                            "13px",
                                                                        background:
                                                                            "transparent",
                                                                    }}
                                                                >
                                                                    {t("Old")}
                                                                </label>
                                                            </Form.Floating>
                                                        </div>
                                                        <div className="col-12">
                                                            <Form.Floating className="custom-form-floating custom-form-floating-sm form-group">
                                                                <Form.Control
                                                                    className="py-2 mb-4 mb-md-0"
                                                                    type="password"
                                                                    id="floatingInput5"
                                                                    placeholder="Place Holder"
                                                                />
                                                                <label
                                                                    htmlFor="floatingInput"
                                                                    style={{
                                                                        fontSize:
                                                                            "13px",
                                                                        background:
                                                                            "transparent",
                                                                    }}
                                                                >
                                                                    {t("New")}
                                                                </label>
                                                            </Form.Floating>
                                                        </div>
                                                        <div className="col-12">
                                                            <Form.Floating className="custom-form-floating custom-form-floating-sm form-group">
                                                                <Form.Control
                                                                    className="py-2 mb-4 mb-md-0"
                                                                    type="password"
                                                                    id="confirm new"
                                                                    placeholder="Place Holder"
                                                                />
                                                                <label
                                                                    htmlFor="floatingInput"
                                                                    style={{
                                                                        fontSize:
                                                                            "13px",
                                                                        background:
                                                                            "transparent",
                                                                    }}
                                                                >
                                                                    {t(
                                                                        "Confirm_Password"
                                                                    )}
                                                                </label>
                                                            </Form.Floating>
                                                        </div>
                                                    </div>
                                                    <Button
                                                        type="button"
                                                        name="next"
                                                        className="btn btn-primary next action-button float-start px-4 py-1 shadow-none"
                                                        value="submit"
                                                    >
                                                        {t("change password")}
                                                    </Button>
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
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["setting", "main"])),
        },
    };
}
// translation ##################################
