import React, { useState } from "react";
import {
    Offcanvas,
    Navbar,
    Container,
    Nav,
    Dropdown,
    Button,
} from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const HorizontalNav = () => {
    const { t } = useTranslation("main");
    //router
    let router = useRouter();
    const { pathname } = router;

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <>
            <Navbar
                expand="lg"
                id="navbar_main"
                className="mobile-offcanvas  hover-nav horizontal-nav mx-md-auto"
            >
                <Container fluid>
                    <Offcanvas.Header closeButton>
                        <Navbar.Brand>
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
                            <h4 className="logo-title d-inline-block">
                                English Stu
                            </h4>
                        </Navbar.Brand>
                        <button className="btn-close float-end"></button>
                    </Offcanvas.Header>

                    <Nav>
                        <Nav.Item as="li">
                            <Link href="/">
                                <a
                                    className={`${
                                        router.pathname === "/" ? "active" : ""
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
                                        router.pathname === "/reports"
                                            ? "active"
                                            : ""
                                    } nav-link`}
                                >
                                    {t("Reports")}
                                </a>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Dropdown>
                                <Dropdown.Toggle
                                    as={"a"}
                                    variant="primary"
                                    size="sm"
                                    type="button"
                                    id="dropdownMenuButtonSM"
                                    className="nav-link"
                                >
                                    Test One
                                </Dropdown.Toggle>
                                <Dropdown.Menu
                                    as="ul"
                                    aria-labelledby="dropdownMenuButtonSM"
                                >
                                    {/* <li>
                                        <h6 className="dropdown-header">
                                            Dropdown header
                                        </h6>
                                    </li> */}
                                    <Dropdown.Item as="li">
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
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li">
                                        <Link href="/about">
                                            <a
                                                className={`${
                                                    router.pathname === "/about"
                                                        ? "active"
                                                        : ""
                                                } nav-link`}
                                            >
                                                {t("About")}
                                            </a>
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li">
                                        <Link href="/reports">
                                            <a
                                                className={`${
                                                    router.pathname ===
                                                    "/reports"
                                                        ? "active"
                                                        : ""
                                                } nav-link`}
                                            >
                                                {t("Reports")}
                                            </a>
                                        </Link>
                                    </Dropdown.Item>
                                    {/* <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <Dropdown.Item
                                        className="dropdown-item"
                                        href="#"
                                    >
                                        Separated link
                                    </Dropdown.Item> */}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
            {/* <button
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
                className=" mobile-offcanvas nav navbar navbar-expand-lg hover-nav horizontal-nav mx-md-auto"
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
                        <h4 className="logo-title">Hope UI</h4>
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                href="/"
                            >
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link "
                                href="/reports"
                            >
                                <a>Reports</a>
                            </Link>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas> */}
        </>
    );
};

export default HorizontalNav;
