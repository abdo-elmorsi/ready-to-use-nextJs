import React, {useEffect} from 'react'
import {Navbar, Container, Nav, Dropdown} from 'react-bootstrap'
import avatars1 from "../public/assets/images/saferoad_logo_icon.svg";
import Image from 'next/image'
import Link from 'next/link'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGlobe} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from "react-redux";
import {toggle} from "../store/reducer/toggleSidebar/toggle";
import {darkMode, changeLanguage} from "../store/reducer/config/config";

// translation
import {useTranslation} from 'next-i18next';

const Header = () => {
    const dispatch = useDispatch()
    const config = useSelector((state) => state.config);

    const {t} = useTranslation("main");
    useEffect(_ => {
            config.darkMode
                ? document.body.classList.add('dark')
                : document.body.classList.remove('dark')
        }, [config.darkMode]
    )
    ;
    const toggleDarkMode = () => {
        dispatch(darkMode())
        document.body.classList.toggle('dark')
    }
    const handleLanguage = (e) => {
        e.target.id === 'ar'
            ? dispatch(changeLanguage('ar'))
            : dispatch(changeLanguage('en'));
    }
    return (
        <>
            <Navbar expand="lg" variant="light" className="nav iq-navbar py-0 py-xl-2">
                <Container fluid className="navbar-inner">
                    <div className="navbar-brand mx-5">
                        {/*<Image src="/assets/images/saferoad_logo_dark.svg" width="150" height="80px"/>*/}

                        <svg xmlns="http://www.w3.org/2000/svg" width="130" height="45px"
                             viewBox="0 0 150 55.56">
                            <defs>
                                <linearGradient id="linear-gradient" x1="3.28" y1="26.49" x2="19.74" y2="-2.03"
                                                gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#0994b8"/>
                                    <stop offset="0.27" stopColor="#0d97b9"/>
                                    <stop offset="0.53" stopColor="#189fbe"/>
                                    <stop offset="0.78" stopColor="#2bacc5"/>
                                    <stop offset="1" stopColor="#42bccd"/>
                                </linearGradient>
                            </defs>
                            <path className="cls-logo-1"
                                  d="M21.81,8.27c.8,0,1.47,0,1.89.06l-.06.33-1.81,9.42c-1.11,5.83-7.37,10-13.3,10C4.81,28.12.66,25.45,0,22c13.44,0,22.46-6.8,20.8-8.9a6.13,6.13,0,0,0-2.44-1.53c-.82-.32-1.67-.59-2.34-.81l-.35-.13c-1-.41-1.35-.92-.29-1.39A17.22,17.22,0,0,1,21.81,8.27ZM22.68,0H5.46A2.16,2.16,0,0,0,3.34,1.75L.5,16.6l0,.07c11.06.88,13.55-2.61,11.44-3.29-.62-.2-1.18-.4-1.66-.6-3.07-1.28-3.08-2.55.7-3.95,4.11-1.52,11.4-1.51,12.93-1.49l.91-4.77A2.15,2.15,0,0,0,22.68,0Z"/>
                            <path className="cls-logo-2"
                                  d="M30.4,40.7a6.24,6.24,0,0,1-2,5.06,8.67,8.67,0,0,1-5.73,1.68,22.47,22.47,0,0,1-3.11-.24,10.84,10.84,0,0,1-2.83-.73l1-3.28a14.46,14.46,0,0,0,2.14.58,13.54,13.54,0,0,0,2.65.27,5.77,5.77,0,0,0,2.83-.52,2,2,0,0,0,.88-1.93,1.79,1.79,0,0,0-.69-1.44A9.1,9.1,0,0,0,22.51,39a6.37,6.37,0,0,1-3-1.54,4.11,4.11,0,0,1-.94-2.94,6.13,6.13,0,0,1,2.11-4.86,8.16,8.16,0,0,1,5.56-1.84,19.07,19.07,0,0,1,5.29.68l-.95,3.34a16,16,0,0,0-4.36-.62,4.79,4.79,0,0,0-2.65.6,2.17,2.17,0,0,0-.9,2A1.58,1.58,0,0,0,23.32,35a8.68,8.68,0,0,0,2.81,1.07,7.15,7.15,0,0,1,3.29,1.67A4.16,4.16,0,0,1,30.4,40.7Z"/>
                            <path className="cls-logo-2"
                                  d="M33.34,40,34,35.66a8.88,8.88,0,0,1,3.11-5.82,9.78,9.78,0,0,1,6.34-2.06,17.14,17.14,0,0,1,7.36,1.37L48.14,47.06H44.48l.06-1.92a15.71,15.71,0,0,1-3,1.68,7.82,7.82,0,0,1-3.06.62,4.86,4.86,0,0,1-3.18-1,5.43,5.43,0,0,1-1.8-2.65A8.5,8.5,0,0,1,33.34,40ZM40.4,43.7a6.89,6.89,0,0,0,4.16-1.56L46.08,32a10.31,10.31,0,0,0-3.23-.53,4.52,4.52,0,0,0-3,1,5,5,0,0,0-1.55,3.26l-.59,3.8Q37.12,43.69,40.4,43.7Z"/>
                            <path className="cls-logo-2"
                                  d="M53.21,31.56l.49-3.4h2.62l.36-2.43A7.66,7.66,0,0,1,59,21a6.64,6.64,0,0,1,4.69-1.73,12.25,12.25,0,0,1,3.38.42l-1,3.45A14.18,14.18,0,0,0,64,22.91a2.79,2.79,0,0,0-2,.73,4.27,4.27,0,0,0-1,2.45l-.3,2.07h4.46l-.51,3.4H60.12l-3.59,24H52.22l3.59-24Z"/>
                            <path className="cls-logo-2"
                                  d="M64.56,39.66l.6-4A11.35,11.35,0,0,1,66,32.88a8,8,0,0,1,1.72-2.52,9.13,9.13,0,0,1,2.77-1.85,9.35,9.35,0,0,1,3.77-.73A7.37,7.37,0,0,1,79,29.22a4.73,4.73,0,0,1,1.8,3.87,6.79,6.79,0,0,1-.7,3.17,5.19,5.19,0,0,1-2.54,2.23,13.13,13.13,0,0,1-5.41.87,22.12,22.12,0,0,1-3.25-.25l-.09.61a3.44,3.44,0,0,0,.67,3,4.15,4.15,0,0,0,3.16,1.05A24.29,24.29,0,0,0,78.28,43l-.14,3.47a23,23,0,0,1-6.5.95,9.67,9.67,0,0,1-3.22-.51A6.23,6.23,0,0,1,66,45.42,5.45,5.45,0,0,1,64.67,43,8.32,8.32,0,0,1,64.56,39.66Zm4.87-4.27-.15,1a16.62,16.62,0,0,0,2.77.26A6.81,6.81,0,0,0,75.4,36a2.57,2.57,0,0,0,1.11-2.42,2.08,2.08,0,0,0-.73-1.69,3.3,3.3,0,0,0-2.13-.61C71.26,31.27,69.85,32.65,69.43,35.39Z"/>
                            <path className="cls-logo-2"
                                  d="M85.56,28.16h1.67l-.3,3.3A15.72,15.72,0,0,1,90.45,29a9.5,9.5,0,0,1,3.65-1.21l-.28,2A9.87,9.87,0,0,0,90.32,31a15.83,15.83,0,0,0-3.51,2.42l-2,13.68h-2Z"/>
                            <path className="cls-logo-2"
                                  d="M94.61,40.19,95.37,35a10,10,0,0,1,.77-2.51,7.75,7.75,0,0,1,1.65-2.33,9,9,0,0,1,2.63-1.73,8.63,8.63,0,0,1,3.47-.68,8,8,0,0,1,2.81.49,5.72,5.72,0,0,1,2.16,1.43A5.37,5.37,0,0,1,110.11,32a7.63,7.63,0,0,1,.12,3l-.76,5.16a9.62,9.62,0,0,1-.77,2.51A7.41,7.41,0,0,1,107.05,45a8.9,8.9,0,0,1-2.63,1.73,8.59,8.59,0,0,1-3.47.68A8,8,0,0,1,98.14,47,5.72,5.72,0,0,1,96,45.52a5.25,5.25,0,0,1-1.24-2.29A7.44,7.44,0,0,1,94.61,40.19Zm2.79-5L96.66,40a5,5,0,0,0,.89,4.06,4.55,4.55,0,0,0,3.69,1.5,6,6,0,0,0,4.11-1.5A6.55,6.55,0,0,0,107.46,40l.72-4.86a4.93,4.93,0,0,0-.88-4.06,4.55,4.55,0,0,0-3.69-1.5,6,6,0,0,0-4.13,1.5A6.51,6.51,0,0,0,97.4,35.18Z"/>
                            <path className="cls-logo-2"
                                  d="M113.66,40.06l.73-4.88a8.46,8.46,0,0,1,2.88-5.39,8.6,8.6,0,0,1,5.75-2,14.69,14.69,0,0,1,3.6.42,10.13,10.13,0,0,1,2.77,1.08l-2.65,17.78H125l.23-2.43a13,13,0,0,1-3.14,2,8,8,0,0,1-3.33.78,4.83,4.83,0,0,1-4.18-2A7.21,7.21,0,0,1,113.66,40.06Zm5.85,5.5a7,7,0,0,0,3-.8,10.4,10.4,0,0,0,2.79-1.93l1.86-12.33a11.1,11.1,0,0,0-4.46-.88,6,6,0,0,0-4.28,1.55,6.82,6.82,0,0,0-2,4.14l-.69,4.6a6,6,0,0,0,.55,4.14A3.54,3.54,0,0,0,119.51,45.56Z"/>
                            <path className="cls-logo-2"
                                  d="M145.9,47.06h-1.71l.21-2.28a13.77,13.77,0,0,1-3.15,1.92,8.2,8.2,0,0,1-3.3.74,4.81,4.81,0,0,1-4.17-2,7.16,7.16,0,0,1-.95-5.37l.72-4.88a8.46,8.46,0,0,1,2.88-5.39,8.6,8.6,0,0,1,5.75-2,15.17,15.17,0,0,1,2.13.19,9.5,9.5,0,0,1,2.33.68l1.37-9h2Zm-7.23-1.5a7.18,7.18,0,0,0,3-.76,9.89,9.89,0,0,0,2.8-1.88l1.86-12.37a10.78,10.78,0,0,0-4.44-.93,6,6,0,0,0-4.29,1.55,6.93,6.93,0,0,0-2.05,4.14l-.68,4.6a6,6,0,0,0,.55,4.14A3.51,3.51,0,0,0,138.67,45.56Z"/>
                        </svg>
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
                        <Nav as="ul" className="ms-auto navbar-list my-2 my-lg-0 d-flex align-items-stretch">
                            <Dropdown as="li" className="nav-item d-flex align-items-center">
                                <button onClick={toggleDarkMode} className="bg-transparent border-0 mx-2">
                                    {config.darkMode ? (<div className="moon">
                                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 499.712 499.712" width="22">
                                                <path fill="#FFD93B" d="M146.88,375.528c126.272,0,228.624-102.368,228.624-228.64c0-55.952-20.16-107.136-53.52-146.88
	C425.056,33.096,499.696,129.64,499.696,243.704c0,141.392-114.608,256-256,256c-114.064,0-210.608-74.64-243.696-177.712
	C39.744,355.368,90.944,375.528,146.88,375.528z"/>
                                                <path fill="#F4C534" d="M401.92,42.776c34.24,43.504,54.816,98.272,54.816,157.952c0,141.392-114.608,256-256,256
	c-59.68,0-114.448-20.576-157.952-54.816c46.848,59.472,119.344,97.792,200.928,97.792c141.392,0,256-114.608,256-256
	C499.712,162.12,461.392,89.64,401.92,42.776z"/>
                                                <g>
                                                    <polygon fill="#FFD83B" points="128.128,99.944 154.496,153.4 213.472,161.96 170.8,203.56 180.864,262.296
		128.128,234.568 75.376,262.296 85.44,203.56 42.768,161.96 101.744,153.4 	"/>
                                                    <polygon fill="#FFD83B" points="276.864,82.84 290.528,110.552 321.104,114.984 298.976,136.552 304.208,166.984
		276.864,152.616 249.52,166.984 254.752,136.552 232.624,114.984 263.2,110.552 	"/>
                                                </g>
                                            </svg>
                                        </div>)
                                        : (<div className="sun">
                                            <svg version="1.1" id="Capa_1"
                                                 viewBox="0 0 512 512"
                                                 width="22">
                                                <g>
                                                    <circle fill="#FFD347" cx="255.997" cy="255.997"
                                                            r="144.824"/>
                                                    <path fill="#FFD347" d="M256,56.849c-4.273,0-7.737-3.463-7.737-7.737V7.737C248.263,3.463,251.727,0,256,0
		s7.737,3.463,7.737,7.737v41.376C263.737,53.386,260.273,56.849,256,56.849z"/>
                                                    <path fill="#FFD347" d="M152.563,84.568c-2.674,0-5.274-1.387-6.707-3.869l-20.687-35.832
		c-2.136-3.7-0.869-8.432,2.832-10.569c3.701-2.134,8.432-0.87,10.569,2.832l20.687,35.832c2.136,3.7,0.869,8.432-2.832,10.569
		C155.206,84.234,153.876,84.568,152.563,84.568z"/>
                                                    <path fill="#FFD347" d="M76.823,160.294c-1.312,0-2.643-0.334-3.861-1.038L37.13,138.569
		c-3.7-2.136-4.968-6.868-2.832-10.569c2.136-3.701,6.868-4.967,10.569-2.832l35.832,20.687c3.7,2.136,4.968,6.868,2.832,10.569
		C82.097,158.907,79.497,160.294,76.823,160.294z"/>
                                                    <path fill="#FFD347" d="M49.112,263.737H7.737C3.464,263.737,0,260.274,0,256s3.464-7.737,7.737-7.737h41.376
		c4.273,0,7.737,3.463,7.737,7.737S53.385,263.737,49.112,263.737z"/>
                                                    <path fill="#FFD347" d="M41.005,387.869c-2.674,0-5.274-1.387-6.707-3.869c-2.136-3.7-0.869-8.432,2.832-10.569
		l35.832-20.687c3.7-2.134,8.432-0.87,10.569,2.832c2.136,3.7,0.869,8.432-2.832,10.569l-35.832,20.687
		C43.648,387.535,42.317,387.869,41.005,387.869z"/>
                                                    <path fill="#FFD347" d="M131.862,478.74c-1.312,0-2.643-0.334-3.861-1.038c-3.7-2.136-4.968-6.868-2.832-10.569
		l20.687-35.832c2.136-3.701,6.868-4.967,10.569-2.832c3.7,2.136,4.968,6.868,2.832,10.569l-20.687,35.832
		C137.136,477.352,134.536,478.74,131.862,478.74z"/>
                                                    <path fill="#FFD347" d="M256,512c-4.273,0-7.737-3.463-7.737-7.737v-41.376c0-4.274,3.464-7.737,7.737-7.737
		s7.737,3.463,7.737,7.737v41.376C263.737,508.537,260.273,512,256,512z"/>
                                                    <path fill="#FFD347" d="M380.138,478.74c-2.674,0-5.274-1.387-6.707-3.869l-20.687-35.832
		c-2.136-3.7-0.869-8.432,2.832-10.569c3.7-2.134,8.432-0.87,10.569,2.832l20.687,35.832c2.136,3.7,0.869,8.432-2.832,10.569
		C382.781,478.406,381.451,478.74,380.138,478.74z"/>
                                                    <path fill="#FFD347" d="M470.995,387.869c-1.312,0-2.643-0.334-3.861-1.038l-35.832-20.687
		c-3.7-2.136-4.968-6.868-2.832-10.569c2.136-3.701,6.868-4.967,10.569-2.832l35.832,20.687c3.7,2.136,4.968,6.868,2.832,10.569
		C476.269,386.481,473.669,387.869,470.995,387.869z"/>
                                                    <path fill="#FFD347" d="M504.263,263.737h-41.376c-4.273,0-7.737-3.463-7.737-7.737s3.464-7.737,7.737-7.737h41.376
		c4.273,0,7.737,3.463,7.737,7.737S508.536,263.737,504.263,263.737z"/>
                                                    <path fill="#FFD347" d="M435.177,160.294c-2.674,0-5.274-1.387-6.707-3.869c-2.136-3.7-0.869-8.432,2.832-10.569
		l35.832-20.687c3.7-2.134,8.432-0.87,10.569,2.832c2.136,3.7,0.869,8.432-2.832,10.569l-35.832,20.687
		C437.82,159.96,436.489,160.294,435.177,160.294z"/>
                                                    <path fill="#FFD347" d="M359.437,84.568c-1.312,0-2.643-0.334-3.861-1.038c-3.7-2.136-4.968-6.868-2.832-10.569
		l20.687-35.832c2.136-3.701,6.868-4.967,10.569-2.832c3.7,2.136,4.968,6.868,2.832,10.569l-20.687,35.832
		C364.711,83.181,362.11,84.568,359.437,84.568z"/>
                                                </g>
                                                <path fill="#FFBE31" d="M256,111.18c-5.242,0-10.418,0.286-15.516,0.828c72.685,7.743,129.303,69.252,129.303,143.991
	s-56.619,136.249-129.303,143.992c5.098,0.544,10.273,0.828,15.516,0.828c79.982,0,144.82-64.838,144.82-144.82
	S335.983,111.18,256,111.18z"/>
                                            </svg>
                                        </div>)}
                                </button>
                            </Dropdown>
                            <Dropdown as="li" className="nav-item d-flex align-items-center">
                                <Dropdown.Toggle variant="nav-link py-0"
                                                 id="navbarDropdownLanguage"
                                                 role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FontAwesomeIcon icon={faGlobe} size="lg"/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu onClick={handleLanguage} className="dropdown-menu-end"
                                               aria-labelledby="navbarDropdownLanguage">
                                    <Dropdown.Item id="ar">{t("Arabic")}</Dropdown.Item>
                                    <Dropdown.Divider/>
                                    <Dropdown.Item id="en">{t('English')}</Dropdown.Item>
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
                                                <h5 className="mb-0 text-white">{t('All_Message')}</h5>
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
                                    <Image src={"/assets/images/avatars/01.png"} width={40} height={40}
                                           alt="User-Profile"
                                           className="img-fluid avatar avatar-rounded avatar-rounded"/>
                                    <div className="caption ms-3 d-none d-md-block text-start">
                                        <h6 className="mb-0 caption-title">ammar Hantash</h6>
                                        <p className="mb-0 caption-sub-title">Saferoad Team</p>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <Dropdown.Item href="/">{t('Settings')}</Dropdown.Item>
                                    <Dropdown.Divider/>
                                    <Dropdown.Item href="/">{t("Logout")}</Dropdown.Item>
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