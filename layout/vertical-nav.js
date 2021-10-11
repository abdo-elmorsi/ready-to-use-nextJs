import React, {useContext} from 'react'
import {Accordion, useAccordionButton, AccordionContext, OverlayTrigger, Tooltip} from 'react-bootstrap'
import Link from 'next/link'
import {useRouter} from "next/router";
import {useSelector} from "react-redux";

function CustomToggle({children, eventKey, onClick}) {

    const {activeEventKey} = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, (active) => onClick({state: !active, eventKey: eventKey}));

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <Link href="/" aria-expanded={isCurrentEventKey ? 'true' : 'false'} className="nav-link" role="button"
              onClick={(e) => {
                  decoratedOnClick(isCurrentEventKey)
              }}>
            {children}
        </Link>
    );
}

const VerticalNav = () => {
    let router = useRouter();
    const isActive = useSelector((state) => state.toggleMenu.value)

    return (
        <>
            <Accordion as="ul" className="navbar-nav iq-main-menu">
                <Accordion.Item as="li" eventKey="horizontal-menu" bsPrefix="nav-item">
                    <Link href="/">
                        <a>
                            <OverlayTrigger
                                placement="right"
                                overlay={<Tooltip style={{zIndex: 99999}} className={!isActive && 'd-none'}
                                                  id="tooltip-right">Dashboard</Tooltip>}>
                                <div className={`${router.pathname === '/' ? 'active' : ''} nav-link`}>
                                    <i className="icon">
                                        <svg width="20" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4"
                                                  d="M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z"
                                                  fill="currentColor"/>
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z"
                                                  fill="currentColor"/>
                                        </svg>
                                    </i>
                                    <span className="item-name">Dashboard</span>
                                </div>
                            </OverlayTrigger>
                        </a>
                    </Link>

                </Accordion.Item>
                <Accordion.Item as="li" eventKey="horizontal-menu" bsPrefix="nav-item">
                    <Link href="/track">
                        <a>
                            <OverlayTrigger
                                placement="right"
                                overlay={<Tooltip style={{zIndex: 99999}} className={!isActive && 'd-none'}
                                                  id="tooltip-right">Track</Tooltip>}>
                                <div className={`${router.pathname === '/track' ? 'active' : ''} nav-link`}>
                                    <i className="icon">
                                        <svg width="20" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.8496 4.25024V6.67024" stroke="currentColor" strokeWidth="1.5"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"/>
                                            <path d="M13.8496 17.76V19.784" stroke="currentColor" strokeWidth="1.5"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"/>
                                            <path d="M13.8496 14.3247V9.50366" stroke="currentColor" strokeWidth="1.5"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"/>
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M18.7021 20C20.5242 20 22 18.5426 22 16.7431V14.1506C20.7943 14.1506 19.8233 13.1917 19.8233 12.001C19.8233 10.8104 20.7943 9.85039 22 9.85039L21.999 7.25686C21.999 5.45745 20.5221 4 18.7011 4H5.29892C3.47789 4 2.00104 5.45745 2.00104 7.25686L2 9.93485C3.20567 9.93485 4.17668 10.8104 4.17668 12.001C4.17668 13.1917 3.20567 14.1506 2 14.1506V16.7431C2 18.5426 3.4758 20 5.29787 20H18.7021Z"
                                                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                                  strokeLinejoin="round"/>
                                        </svg>


                                    </i>
                                    <span className="item-name">Track</span>

                                </div>
                            </OverlayTrigger>
                        </a>
                    </Link>
                </Accordion.Item>
                <Accordion.Item as="li" eventKey="horizontal-menu" bsPrefix="nav-item">
                    <Link href="/preventiveMaintenance">
                        <a className={`${router.pathname === '/preventiveMaintenance' ? 'active' : ''} nav-link `}>
                            <i className="icon">
                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4"
                                          d="M10.0833 15.958H3.50777C2.67555 15.958 2 16.6217 2 17.4393C2 18.2559 2.67555 18.9207 3.50777 18.9207H10.0833C10.9155 18.9207 11.5911 18.2559 11.5911 17.4393C11.5911 16.6217 10.9155 15.958 10.0833 15.958Z"
                                          fill="currentColor"/>
                                    <path opacity="0.4"
                                          d="M22.0001 6.37867C22.0001 5.56214 21.3246 4.89844 20.4934 4.89844H13.9179C13.0857 4.89844 12.4102 5.56214 12.4102 6.37867C12.4102 7.1963 13.0857 7.86 13.9179 7.86H20.4934C21.3246 7.86 22.0001 7.1963 22.0001 6.37867Z"
                                          fill="currentColor"/>
                                    <path
                                        d="M8.87774 6.37856C8.87774 8.24523 7.33886 9.75821 5.43887 9.75821C3.53999 9.75821 2 8.24523 2 6.37856C2 4.51298 3.53999 3 5.43887 3C7.33886 3 8.87774 4.51298 8.87774 6.37856Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M21.9998 17.3992C21.9998 19.2648 20.4609 20.7777 18.5609 20.7777C16.6621 20.7777 15.1221 19.2648 15.1221 17.3992C15.1221 15.5325 16.6621 14.0195 18.5609 14.0195C20.4609 14.0195 21.9998 15.5325 21.9998 17.3992Z"
                                        fill="currentColor"/>
                                </svg>
                            </i>
                            <span className="item-name">Preventive Maintenance</span>
                        </a>
                    </Link>
                </Accordion.Item>
                <Accordion.Item as="li" eventKey="horizontal-menu" bsPrefix="nav-item">
                    <Link href="/scheduledReports">
                        <a className={`${router.pathname === '/scheduledReports' ? 'active' : ''} nav-link `}>
                            <i className="icon">
                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.8496 4.25024V6.67024" stroke="currentColor" strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M13.8496 17.76V19.784" stroke="currentColor" strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M13.8496 14.3247V9.50366" stroke="currentColor" strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M18.7021 20C20.5242 20 22 18.5426 22 16.7431V14.1506C20.7943 14.1506 19.8233 13.1917 19.8233 12.001C19.8233 10.8104 20.7943 9.85039 22 9.85039L21.999 7.25686C21.999 5.45745 20.5221 4 18.7011 4H5.29892C3.47789 4 2.00104 5.45745 2.00104 7.25686L2 9.93485C3.20567 9.93485 4.17668 10.8104 4.17668 12.001C4.17668 13.1917 3.20567 14.1506 2 14.1506V16.7431C2 18.5426 3.4758 20 5.29787 20H18.7021Z"
                                          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </svg>
                            </i>
                            <span className="item-name">scheduled Reports</span>

                        </a>
                    </Link>
                </Accordion.Item>
                <Accordion.Item as="li" eventKey="horizontal-menu" bsPrefix="nav-item">
                    <Link href="/Reports">
                        <a className={`${router.pathname === '/Reports' ? 'active' : ''} nav-link `}>
                            <i className="icon">
                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.8496 4.25024V6.67024" stroke="currentColor" strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M13.8496 17.76V19.784" stroke="currentColor" strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M13.8496 14.3247V9.50366" stroke="currentColor" strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M18.7021 20C20.5242 20 22 18.5426 22 16.7431V14.1506C20.7943 14.1506 19.8233 13.1917 19.8233 12.001C19.8233 10.8104 20.7943 9.85039 22 9.85039L21.999 7.25686C21.999 5.45745 20.5221 4 18.7011 4H5.29892C3.47789 4 2.00104 5.45745 2.00104 7.25686L2 9.93485C3.20567 9.93485 4.17668 10.8104 4.17668 12.001C4.17668 13.1917 3.20567 14.1506 2 14.1506V16.7431C2 18.5426 3.4758 20 5.29787 20H18.7021Z"
                                          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </svg>
                            </i>
                            <span className="item-name">Reports</span>

                        </a>
                    </Link>
                </Accordion.Item>
                <Accordion.Item as="li" eventKey="horizontal-menu" bsPrefix="nav-item">
                    <Link href="/DriversManagement">
                        <a className={`${router.pathname === '/DriversManagement' ? 'active' : ''} nav-link `}>
                            <i className="icon">
                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.8496 4.25024V6.67024" stroke="currentColor" strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M13.8496 17.76V19.784" stroke="currentColor" strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M13.8496 14.3247V9.50366" stroke="currentColor" strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M18.7021 20C20.5242 20 22 18.5426 22 16.7431V14.1506C20.7943 14.1506 19.8233 13.1917 19.8233 12.001C19.8233 10.8104 20.7943 9.85039 22 9.85039L21.999 7.25686C21.999 5.45745 20.5221 4 18.7011 4H5.29892C3.47789 4 2.00104 5.45745 2.00104 7.25686L2 9.93485C3.20567 9.93485 4.17668 10.8104 4.17668 12.001C4.17668 13.1917 3.20567 14.1506 2 14.1506V16.7431C2 18.5426 3.4758 20 5.29787 20H18.7021Z"
                                          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </svg>
                            </i>
                            <span className="item-name">Operate Driver</span>

                        </a>
                    </Link>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default VerticalNav
