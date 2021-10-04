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
            <Navbar expand="lg" variant="dark" className="nav iq-navbar">
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
                    <Navbar.Collapse  id="navbarSupportedContent">
                        <Nav as="ul" className="ms-auto navbar-list mb-2 mb-lg-0">
                            <Dropdown as="li" className="nav-item">
                                <Dropdown.Toggle variant="search-toggle nav-link">
                                    {/*<img src={flag1} className="img-fluid rounded-circle" alt="user" style={{height: "30px", minWidth: "30px", width: "30px",}}/>*/}
                                    <span className="bg-primary"/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="sub-drop  dropdown-menu-end p-0">
                                    <div className="card shadow-none m-0 border-0">
                                        <div className=" p-0 ">
                                            <ul className="list-group list-group-flush">
                                                {/*<li className="iq-sub-card list-group-item"><Link className="p-0" href="/">/!*<img src={flag3} alt="img-flaf" className="img-fluid me-2" style={{width: "15px", height: "15px", minWidth: "15px",}}/>*!/Italian</Link></li>*/}
                                                {/*<li className="iq-sub-card list-group-item"><Link className="p-0" href="/">/!*<img src={flag4} alt="img-flaf" className="img-fluid me-2" style={{width: "15px", height: "15px", minWidth: "15px",}}/>*!/French</Link></li>*/}
                                                {/*<li className="iq-sub-card list-group-item"><Link className="p-0" href="/">/!*<img src={flag2} alt="img-flaf" className="img-fluid me-2" style={{width: "15px", height: "15px", minWidth: "15px",}}/>*!/German</Link></li>*/}
                                                {/*<li className="iq-sub-card list-group-item"><Link className="p-0" href="/">/!*<img src={flag5} alt="img-flaf" className="img-fluid me-2" style={{width: "15px", height: "15px", minWidth: "15px",}}/>*!/Spanish</Link></li>*/}
                                                {/*<li className="iq-sub-card list-group-item"><Link className="p-0" href="/">/!*<img src={flag6} alt="img-flaf" className="img-fluid me-2" style={{width: "15px", height: "15px", minWidth: "15px",}}/>*!/Japanese</Link></li>*/}
                                            </ul>
                                        </div>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown as="li" className="nav-item">
                                <Dropdown.Toggle variant=" nav-link" id="notification-drop" data-bs-toggle="dropdown" >
                                    <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.7695 11.6453C19.039 10.7923 18.7071 10.0531 18.7071 8.79716V8.37013C18.7071 6.73354 18.3304 5.67907 17.5115 4.62459C16.2493 2.98699 14.1244 2 12.0442 2H11.9558C9.91935 2 7.86106 2.94167 6.577 4.5128C5.71333 5.58842 5.29293 6.68822 5.29293 8.37013V8.79716C5.29293 10.0531 4.98284 10.7923 4.23049 11.6453C3.67691 12.2738 3.5 13.0815 3.5 13.9557C3.5 14.8309 3.78723 15.6598 4.36367 16.3336C5.11602 17.1413 6.17846 17.6569 7.26375 17.7466C8.83505 17.9258 10.4063 17.9933 12.0005 17.9933C13.5937 17.9933 15.165 17.8805 16.7372 17.7466C17.8215 17.6569 18.884 17.1413 19.6363 16.3336C20.2118 15.6598 20.5 14.8309 20.5 13.9557C20.5 13.0815 20.3231 12.2738 19.7695 11.6453Z" fill="currentColor"/>
                                        <path opacity="0.4" d="M14.0088 19.2283C13.5088 19.1215 10.4627 19.1215 9.96275 19.2283C9.53539 19.327 9.07324 19.5566 9.07324 20.0602C9.09809 20.5406 9.37935 20.9646 9.76895 21.2335L9.76795 21.2345C10.2718 21.6273 10.8632 21.877 11.4824 21.9667C11.8123 22.012 12.1482 22.01 12.4901 21.9667C13.1083 21.877 13.6997 21.6273 14.2036 21.2345L14.2026 21.2335C14.5922 20.9646 14.8734 20.5406 14.8983 20.0602C14.8983 19.5566 14.4361 19.327 14.0088 19.2283Z" fill="currentColor"/>
                                    </svg>
                                    <span className="bg-danger dots"/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="sub-drop  dropdown-menu-end p-0" aria-labelledby="notification-drop">
                                    <div className="card shadow-none m-0">
                                        <div className="card-header d-flex justify-content-between bg-primary py-3">
                                            <div className="header-title">
                                            <h5 className="mb-0 text-white">All Notifications</h5>
                                            </div>
                                        </div>
                                        <div className="card-body p-0">
                                            <Link href="/g" className="iq-sub-card">
                                                <a className="d-flex align-items-center">
                                                    {/*<img className="avatar-40 rounded-pill bg-soft-primary p-1" src={shapes1} alt=""/>*/}
                                                    <div className="ms-3 w-100">
                                                        <h6 className="mb-0 ">Emma Watson Bni</h6>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <p className="mb-0">95 MB</p>
                                                            <small className="float-right font-size-12">Just Now</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Link>
                                            <Link href="/" className="iq-sub-card">
                                                <a className="d-flex align-items-center">
                                                    <div className="">
                                                        {/*<img className="avatar-40 rounded-pill bg-soft-primary p-1" src={shapes2} alt=""/>*/}
                                                    </div>
                                                    <div className="ms-3 w-100">
                                                        <h6 className="mb-0 ">New customer is join</h6>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <p className="mb-0">Cyst Bni</p>
                                                            <small className="float-right font-size-12">5 days ago</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Link>
                                            <Link href="/y" className="iq-sub-card">
                                                <a className="d-flex align-items-center">
                                                    {/*<img className="avatar-40 rounded-pill bg-soft-primary p-1" src={shapes3} alt=""/>*/}
                                                    <div className="ms-3 w-100">
                                                        <h6 className="mb-0 ">Two customer is left</h6>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <p className="mb-0">Cyst Bni</p>
                                                            <small className="float-right font-size-12">2 days ago</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Link>
                                            <Link href="/j" className="iq-sub-card">
                                                <a className="d-flex align-items-center">
                                                    {/*<img className="avatar-40 rounded-pill bg-soft-primary p-1" src={shapes4} alt=""/>*/}
                                                    <div className="w-100 ms-3">
                                                        <h6 className="mb-0 ">New Mail from Fenny</h6>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <p className="mb-0">Cyst Bni</p>
                                                            <small className="float-right font-size-12">3 days ago</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown as="li" className="nav-item">
                                <Dropdown.Toggle  variant="nav-link" id="mail-drop" data-bs-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">
                                    <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M22 15.94C22 18.73 19.76 20.99 16.97 21H16.96H7.05C4.27 21 2 18.75 2 15.96V15.95C2 15.95 2.006 11.524 2.014 9.298C2.015 8.88 2.495 8.646 2.822 8.906C5.198 10.791 9.447 14.228 9.5 14.273C10.21 14.842 11.11 15.163 12.03 15.163C12.95 15.163 13.85 14.842 14.56 14.262C14.613 14.227 18.767 10.893 21.179 8.977C21.507 8.716 21.989 8.95 21.99 9.367C22 11.576 22 15.94 22 15.94Z" fill="currentColor"/>
                                        <path d="M21.4759 5.67351C20.6099 4.04151 18.9059 2.99951 17.0299 2.99951H7.04988C5.17388 2.99951 3.46988 4.04151 2.60388 5.67351C2.40988 6.03851 2.50188 6.49351 2.82488 6.75151L10.2499 12.6905C10.7699 13.1105 11.3999 13.3195 12.0299 13.3195C12.0339 13.3195 12.0369 13.3195 12.0399 13.3195C12.0429 13.3195 12.0469 13.3195 12.0499 13.3195C12.6799 13.3195 13.3099 13.1105 13.8299 12.6905L21.2549 6.75151C21.5779 6.49351 21.6699 6.03851 21.4759 5.67351Z" fill="currentColor"/>
                                    </svg>
                                    <span className="bg-primary count-mail"/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="sub-drop dropdown-menu-end p-0" aria-labelledby="mail-drop">
                                    <div className="card shadow-none m-0">
                                        <div className="card-header d-flex justify-content-between bg-primary py-3">
                                            <div className="header-title">
                                            <h5 className="mb-0 text-white">All Message</h5>
                                            </div>
                                        </div>
                                        <div className="card-body p-0 ">
                                            <Link href="/q" className="iq-sub-card">
                                                <a className="d-flex  align-items-center">
                                                    <div>
                                                        {/*<img className="avatar-40 rounded-pill bg-soft-primary p-1" src={shapes1} alt=""/>*/}
                                                    </div>
                                                    <div className=" w-100 ms-3">
                                                        <h6 className="mb-0 ">Bni Emma Watson</h6>
                                                        <small className="float-left font-size-12">13 Jun</small>
                                                    </div>
                                                </a>
                                            </Link>
                                            <Link href="/w" className="iq-sub-card">
                                                <a className="d-flex align-items-center">
                                                    <div>
                                                        {/*<img className="avatar-40 rounded-pill bg-soft-primary p-1" src={shapes2} alt=""/>*/}
                                                    </div>
                                                    <div className="ms-3">
                                                        <h6 className="mb-0 ">Lorem Ipsum Watson</h6>
                                                        <small className="float-left font-size-12">20 Apr</small>
                                                    </div>
                                                </a>
                                            </Link>
                                            <Link href="/e" className="iq-sub-card">
                                                <a className="d-flex align-items-center">
                                                    <div>
                                                        {/*<img className="avatar-40 rounded-pill bg-soft-primary p-1" src={shapes3} alt=""/>*/}
                                                    </div>
                                                    <div className="ms-3">
                                                        <h6 className="mb-0 ">Why do we use it?</h6>
                                                        <small className="float-left font-size-12">30 Jun</small>
                                                    </div>
                                                </a>
                                            </Link>
                                            <Link href="/r" className="iq-sub-card">
                                                <a className="d-flex align-items-center">
                                                    <div>
                                                        {/*<img className="avatar-40 rounded-pill bg-soft-primary p-1" src={shapes4} alt=""/>*/}
                                                    </div>
                                                    <div className="ms-3">
                                                        <h6 className="mb-0 ">Variations Passages</h6>
                                                        <small className="float-left font-size-12">12 Sep</small>
                                                    </div>
                                                </a>
                                            </Link>
                                            <Link href="/t" className="iq-sub-card">
                                                <a className="d-flex align-items-center">
                                                    <div>
                                                        {/*<img className="avatar-40 rounded-pill bg-soft-primary p-1" src={shapes5} alt=""/>*/}
                                                    </div>
                                                    <div className="ms-3">
                                                        <h6 className="mb-0 ">Lorem Ipsum generators</h6>
                                                        <small className="float-left font-size-12">5 Dec</small>
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown as="li" className="nav-item">
                                <Dropdown.Toggle variant=" nav-link py-0 d-flex align-items-center" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {/*<Image src={avatars1} alt="User-Profile" className="img-fluid avatar avatar-50 avatar-rounded"/>*/}
                                    <div className="caption ms-3 d-none d-md-block ">
                                        <h6 className="mb-0 caption-title">Austin Robertson</h6>
                                        <p className="mb-0 caption-sub-title">Marketing Administrator</p>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu  className="dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <Dropdown.Item href="https://templates.iqonic.design/hope-ui/react/build/dashboard/app/user-profile">Profile</Dropdown.Item>
                                    <Dropdown.Item href="https://templates.iqonic.design/hope-ui/react/build/dashboard/app/user-privacy-setting">Privacy Setting</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="https://templates.iqonic.design/hope-ui/react/build/auth/sign-in">Logout</Dropdown.Item>
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
