import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const SubHeader = ({ pageName = "" }) => {
    const { t } = useTranslation("main");

    const [state, setState] = useState("");
    useEffect(
        (_) => {
            switch (pageName) {
                case "/":
                    setState("English Stu");
                    break;
                case "/reports":
                    setState("Reports");
                    break;
                default:
                    setState("");
                    break;
            }
        },
        [pageName]
    );
    return (
        <>
            <div className="iq-navbar-header" style={{ height: "153px" }}>
                <Container fluid className=" iq-container">
                    <Row>
                        <Col md="12">
                            <div className="d-flex justify-content-between flex-wrap">
                                <div>
                                    <h1>{t(state)}</h1>
                                    {/*<p>We are on a mission to help developers like you build successful projects for FREE.</p>*/}
                                </div>
                                <div className="d-flex align-items-center">
                                    <span>{`${new Date().toDateString()}`}</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {/* {{!-- rounded-bottom if not using animation --}} */}
                <div className="iq-header-img">
                    <img
                        src="/assets/images/top-header.jpg"
                        alt="header"
                        className="img-fluid w-100 h-100 animated-scaleX"
                    />
                </div>
            </div>
        </>
    );
};

export default SubHeader;
