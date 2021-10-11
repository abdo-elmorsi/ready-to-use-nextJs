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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" viewBox="0 0 64 56.01">
                                            <path fill="#246c66"
                                                  d="M63.63,24.65,56,18.42V8.74A.76.76,0,0,0,55.25,8h-2.5a.76.76,0,0,0-.75.75v6.42L34.52.89a4,4,0,0,0-5.05,0L.37,24.65a1,1,0,0,0-.15,1.4L1.49,27.6a1,1,0,0,0,1.4.15L8,23.58V54a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V38l8,0V54a2,2,0,0,0,2,2l16,0a2,2,0,0,0,2-2V23.58l5.11,4.17a1,1,0,0,0,1.4-.14l1.27-1.55a1,1,0,0,0-.15-1.41ZM52,52h0L40,52V36a2,2,0,0,0-2-2L26,34a2,2,0,0,0-2,2h0V52H12V20.31L32,4,52,20.31Z"/>
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
