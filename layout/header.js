import React from 'react'
import {Navbar, Container, Nav, Dropdown} from 'react-bootstrap'
// import CustomToggle from '../components/dropdowns'
import Image from 'next/image'
import Link from 'next/link'


const Header = () => {

    const minisidebar = () => {
        document.getElementsByTagName('ASIDE')[0].classList.toggle('sidebar-mini')
    }

    return (
        <>
            <Navbar expand="lg" variant="light" className="nav iq-navbar">
                <Container fluid className="navbar-inner">
                    <Link href='/'>
                        <a className="navbar-brand">
                            <Image src="/assets/images/saferoad_logo_dark.svg" width="150" height="80px"/>
                            {/*<h4 className="logo-title">Safe road</h4>*/}
                        </a>
                    </Link>
                    <div className="sidebar-toggle" data-toggle="sidebar" data-active="true" onClick={minisidebar}>
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
                        <Nav as="ul" className="ms-auto navbar-list mb-2 mb-lg-0">
                            <Dropdown as="li" className="nav-item">
                                <Link href="/">
                                    <a className="nav-link">
                                        <svg width="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d='M14.1213 11.2331H16.8891C17.3088 11.2331 17.6386 10.8861 17.6386 10.4677C17.6386 10.0391 17.3088 9.70236 16.8891 9.70236H14.1213C13.7016 9.70236 13.3719 10.0391 13.3719 10.4677C13.3719 10.8861 13.7016 11.2331 14.1213 11.2331ZM20.1766 5.92749C20.7861 5.92749 21.1858 6.1418 21.5855 6.61123C21.9852 7.08067 22.0551 7.7542 21.9652 8.36549L21.0159 15.06C20.8361 16.3469 19.7569 17.2949 18.4879 17.2949H7.58639C6.25742 17.2949 5.15828 16.255 5.04837 14.908L4.12908 3.7834L2.62026 3.51807C2.22057 3.44664 1.94079 3.04864 2.01073 2.64043C2.08068 2.22305 2.47038 1.94649 2.88006 2.00874L5.2632 2.3751C5.60293 2.43735 5.85274 2.72207 5.88272 3.06905L6.07257 5.35499C6.10254 5.68257 6.36234 5.92749 6.68209 5.92749H20.1766ZM7.42631 18.9079C6.58697 18.9079 5.9075 19.6018 5.9075 20.459C5.9075 21.3061 6.58697 22 7.42631 22C8.25567 22 8.93514 21.3061 8.93514 20.459C8.93514 19.6018 8.25567 18.9079 7.42631 18.9079ZM18.6676 18.9079C17.8282 18.9079 17.1487 19.6018 17.1487 20.459C17.1487 21.3061 17.8282 22 18.6676 22C19.4969 22 20.1764 21.3061 20.1764 20.459C20.1764 19.6018 19.4969 18.9079 18.6676 18.9079Z'
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
                                        <h6 className="mb-0 caption-title">Austin Robertson</h6>
                                        <p className="mb-0 caption-sub-title">Marketing Administrator</p>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <Dropdown.Item
                                        href="https://templates.iqonic.design/hope-ui/react/build/dashboard/app/user-profile">Profile</Dropdown.Item>
                                    <Dropdown.Item
                                        href="https://templates.iqonic.design/hope-ui/react/build/dashboard/app/user-privacy-setting">Privacy
                                        Setting</Dropdown.Item>
                                    <Dropdown.Divider/>
                                    <Dropdown.Item
                                        href="https://templates.iqonic.design/hope-ui/react/build/auth/sign-in">Logout</Dropdown.Item>
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
