import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Offcanvas, Nav, Accordion } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const MobildeOffcanvas = () => {
    const { config } = useSelector((state) => state);
    const { t } = useTranslation("main");
    //router
    let router = useRouter();

    const [show, setShow] = useState(false);
    const handleShow = () => setShow((prev) => !prev);
    const handleClose = () => setShow((prev) => !prev);
    return (
        <>
            <button
                data-trigger="navbar_main"
                className="d-lg-none btn btn-primary rounded-pill p-1 pt-0"
                type="button"
                onClick={handleShow}
            >
                <svg width="20px" height="20px" viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                    ></path>
                </svg>
            </button>
            <Offcanvas
                show={show}
                onHide={handleClose}
                className="mobile-offcanvas nav navbar navbar-expand-lg hover-nav horizontal-nav "
            >
                <Offcanvas.Header closeButton>
                    <div className="navbar-brand">
                        <svg
                            width="30"
                            className="text-primary"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="-0.757324"
                                y="19.2427"
                                width="28"
                                height="4"
                                rx="2"
                                transform="rotate(-45 -0.757324 19.2427)"
                                fill="currentColor"
                            />
                            <rect
                                x="7.72803"
                                y="27.728"
                                width="28"
                                height="4"
                                rx="2"
                                transform="rotate(-45 7.72803 27.728)"
                                fill="currentColor"
                            />
                            <rect
                                x="10.5366"
                                y="16.3945"
                                width="16"
                                height="4"
                                rx="2"
                                transform="rotate(45 10.5366 16.3945)"
                                fill="currentColor"
                            />
                            <rect
                                x="10.5562"
                                y="-0.556152"
                                width="28"
                                height="4"
                                rx="2"
                                transform="rotate(45 10.5562 -0.556152)"
                                fill="currentColor"
                            />
                        </svg>
                        <h4 className="logo-title">English Stu</h4>
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="navbar-nav">
                        <Accordion defaultActiveKey="0" bg="transparent">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Test One</Accordion.Header>
                                <Accordion.Body>
                                    <Nav.Item as="li">
                                        <Link href="/">
                                            <a
                                                className={`${
                                                    router.pathname === "/"
                                                        ? "active"
                                                        : ""
                                                } nav-link`}
                                            >
                                                {t("Home")}
                                            </a>
                                        </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link href="/about">
                                            <a
                                                className={`${
                                                    router.pathname === "/about"
                                                        ? "active"
                                                        : ""
                                                } nav-link `}
                                            >
                                                {t("About")}
                                            </a>
                                        </Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Link href="/reports">
                                            <a
                                                className={`${
                                                    router.pathname ===
                                                    "/reports"
                                                        ? "active"
                                                        : ""
                                                } nav-link `}
                                            >
                                                {t("Reports")}
                                            </a>
                                        </Link>
                                    </Nav.Item>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Test Two</Accordion.Header>
                                <Accordion.Body>
                                    <Nav className="navbar-nav">
                                        <Nav.Item as="li">
                                            <Link href="/">
                                                <a
                                                    className={`${
                                                        router.pathname === "/"
                                                            ? "active"
                                                            : ""
                                                    } nav-link`}
                                                >
                                                    {t("Home")}
                                                </a>
                                            </Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Link href="/about">
                                                <a
                                                    className={`${
                                                        router.pathname ===
                                                        "/about"
                                                            ? "active"
                                                            : ""
                                                    } nav-link `}
                                                >
                                                    {t("About")}
                                                </a>
                                            </Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Link href="/reports">
                                                <a
                                                    className={`${
                                                        router.pathname ===
                                                        "/reports"
                                                            ? "active"
                                                            : ""
                                                    } nav-link `}
                                                >
                                                    {t("Reports")}
                                                </a>
                                            </Link>
                                        </Nav.Item>
                                    </Nav>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default MobildeOffcanvas;
// // translation ##################################
// export async function getStaticProps({ locale }) {
//     return {
//         props: {
//             ...(await serverSideTranslations(locale, ["main"])),
//         },
//     };
// }
// // translation ##################################
