import React from 'react'
import {Navbar, Container, Nav, Dropdown} from 'react-bootstrap'
import avatars1 from "../public/assets/images/saferoad_logo_icon.svg";
import Image from 'next/image'
import Link from 'next/link'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGlobe} from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from "react-redux";
import {toggle} from "../store/reducer/toggleSidebar/toggle";

const Header = () => {
    const dispatch = useDispatch()

    return (
        <>
            <Navbar expand="lg" variant="light" className="nav iq-navbar">
                <Container fluid className="navbar-inner">
                    <div className="navbar-brand mx-5">
                        <Image src="/assets/images/saferoad_logo_dark.svg" width="150" height="80px"/>
                        {/*<h4 className="logo-title">Safe road</h4>*/}
                    </div>
                    <div className="sidebar-toggle" data-toggle="sidebar" data-active="true"
                         onClick={() => dispatch(toggle())}>
                        <i className="icon">
                            <svg width="20px" height="20px" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                      d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/>
                            </svg>
                        </i>
                    </div>
                    <Navbar.Toggle aria-controls="navbarSupportedContent">
                        <span className="navbar-toggler-icon">
                            <span className="navbar-toggler-bar bar1 mt-2"/>
                            <span className="navbar-toggler-bar bar2"/>
                            <span className="navbar-toggler-bar bar3"/>
                        </span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav as="ul" className="ms-auto navbar-list mb-2 mb-lg-0 d-flex align-items-stretch">
                            <Dropdown as="li" className="nav-item d-flex align-items-center">
                                <Dropdown.Toggle variant="nav-link py-0"
                                                 id="navbarDropdownLanguage"
                                                 role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FontAwesomeIcon icon={faGlobe} size="lg"/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="navbarDropdownLanguage">
                                    <Dropdown.Item href="/">Arabic</Dropdown.Item>
                                    <Dropdown.Divider/>
                                    <Dropdown.Item href="/">English</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown as="li" className="nav-item d-flex align-items-center">
                                <Dropdown.Toggle variant="nav-link d-flex align-items-center" id="mail-drop"
                                                 data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4"
                                              d="M22 15.94C22 18.73 19.76 20.99 16.97 21H16.96H7.05C4.27 21 2 18.75 2 15.96V15.95C2 15.95 2.006 11.524 2.014 9.298C2.015 8.88 2.495 8.646 2.822 8.906C5.198 10.791 9.447 14.228 9.5 14.273C10.21 14.842 11.11 15.163 12.03 15.163C12.95 15.163 13.85 14.842 14.56 14.262C14.613 14.227 18.767 10.893 21.179 8.977C21.507 8.716 21.989 8.95 21.99 9.367C22 11.576 22 15.94 22 15.94Z"
                                              fill="currentColor"/>
                                        <path
                                            d="M21.4759 5.67351C20.6099 4.04151 18.9059 2.99951 17.0299 2.99951H7.04988C5.17388 2.99951 3.46988 4.04151 2.60388 5.67351C2.40988 6.03851 2.50188 6.49351 2.82488 6.75151L10.2499 12.6905C10.7699 13.1105 11.3999 13.3195 12.0299 13.3195C12.0339 13.3195 12.0369 13.3195 12.0399 13.3195C12.0429 13.3195 12.0469 13.3195 12.0499 13.3195C12.6799 13.3195 13.3099 13.1105 13.8299 12.6905L21.2549 6.75151C21.5779 6.49351 21.6699 6.03851 21.4759 5.67351Z"
                                            fill="currentColor"/>
                                    </svg>
                                    {/*<span className="bg-primary count-mail">1</span>*/}
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="sub-drop dropdown-menu-end p-0" aria-labelledby="mail-drop">
                                    <div className="card shadow-none m-0">
                                        <div className="card-header d-flex justify-content-between bg-primary py-3">
                                            <div className="header-title">
                                                <h5 className="mb-0 text-white">All Message</h5>
                                            </div>
                                        </div>
                                        <div className="card-body p-0 ">
                                            <Link href='/'>
                                                <a className="iq-sub-card">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <Image
                                                                className="avatar-40 rounded-pill bg-soft-primary p-1"
                                                                src={avatars1} alt=""/>
                                                        </div>
                                                        <div className=" w-100 ms-3">
                                                            <h6 className="mb-0 ">Bni Emma Watson</h6>
                                                            <small className="float-left font-size-12">13 Jun</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown as="li" className="nav-item d-flex align-items-center">
                                <Link href="/">
                                    <a className="nav-link">
                                        <svg width="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" fillRule="evenodd" clipRule="evenodd"
                                                  d="M5.91064 20.5886C5.91064 19.7486 6.59064 19.0686 7.43064 19.0686C8.26064 19.0686 8.94064 19.7486 8.94064 20.5886C8.94064 21.4186 8.26064 22.0986 7.43064 22.0986C6.59064 22.0986 5.91064 21.4186 5.91064 20.5886ZM17.1606 20.5886C17.1606 19.7486 17.8406 19.0686 18.6806 19.0686C19.5106 19.0686 20.1906 19.7486 20.1906 20.5886C20.1906 21.4186 19.5106 22.0986 18.6806 22.0986C17.8406 22.0986 17.1606 21.4186 17.1606 20.5886Z"
                                                  fill="currentColor"/>
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M20.1907 6.34909C20.8007 6.34909 21.2007 6.55909 21.6007 7.01909C22.0007 7.47909 22.0707 8.13909 21.9807 8.73809L21.0307 15.2981C20.8507 16.5591 19.7707 17.4881 18.5007 17.4881H7.59074C6.26074 17.4881 5.16074 16.4681 5.05074 15.1491L4.13074 4.24809L2.62074 3.98809C2.22074 3.91809 1.94074 3.52809 2.01074 3.12809C2.08074 2.71809 2.47074 2.44809 2.88074 2.50809L5.26574 2.86809C5.60574 2.92909 5.85574 3.20809 5.88574 3.54809L6.07574 5.78809C6.10574 6.10909 6.36574 6.34909 6.68574 6.34909H20.1907ZM14.1307 11.5481H16.9007C17.3207 11.5481 17.6507 11.2081 17.6507 10.7981C17.6507 10.3781 17.3207 10.0481 16.9007 10.0481H14.1307C13.7107 10.0481 13.3807 10.3781 13.3807 10.7981C13.3807 11.2081 13.7107 11.5481 14.1307 11.5481Z"
                                                  fill="currentColor"/>
                                        </svg>
                                    </a>
                                </Link>
                            </Dropdown>
                            <Dropdown as="li" className="nav-item">
                                <Dropdown.Toggle variant="nav-link py-0 d-flex align-items-center" id="navbarDropdown"
                                                 role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <Image src={"/assets/images/avatars/01.png"} width={50} height={50}
                                           alt="User-Profile" className="img-fluid avatar avatar-50 avatar-rounded"/>
                                    <div className="caption ms-3 d-none d-md-block text-start">
                                        <h6 className="mb-0 caption-title">ammar Hantash</h6>
                                        <p className="mb-0 caption-sub-title">Saferoad Team</p>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <Dropdown.Item href="/">Settings</Dropdown.Item>
                                    <Dropdown.Divider/>
                                    <Dropdown.Item href="/">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
