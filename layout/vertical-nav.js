import React, {useState, useContext} from 'react'
import {Accordion, useAccordionButton, AccordionContext} from 'react-bootstrap'
import Link from 'next/link'
import {useRouter} from "next/router";

function CustomToggle({ children, eventKey, onClick }) {

    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, (active) => onClick({state: !active, eventKey: eventKey}));

    const isCurrentEventKey = activeEventKey === eventKey;
  
    return (
      <Link href="/" aria-expanded={isCurrentEventKey ? 'true' : 'false'} className="nav-link" role="button" onClick={(e) => {
        decoratedOnClick(isCurrentEventKey)
      }}>
        {children}
      </Link>
    );
  }

const VerticalNav = () => {
    let router = useRouter();
    return (
       <>
            <Accordion as="ul" className="navbar-nav iq-main-menu">
                <Accordion.Item as="li" eventKey="horizontal-menu" bsPrefix="nav-item" >
                    <Link href="/">
                        <a className={`${router.pathname === '/' ? 'active' : ''} nav-link `}>
                            <i className="icon">
                                 <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.4" d="M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z" fill="currentColor"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z" fill="currentColor"></path>
                            </svg>
                            </i>
                            <span className="item-name">Dashboard</span>

                        </a>
                    </Link>
                </Accordion.Item>
                <Accordion.Item as="li" eventKey="horizontal-menu" bsPrefix="nav-item" >
                    <Link href="/track">
                        <a className={`${router.pathname === '/track' ? 'active' : ''} nav-link `}>
                            <i className="icon">
                                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.8496 4.25024V6.67024" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                          strokeLinejoin="round" />
                                    <path d="M13.8496 17.76V19.784" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                          strokeLinejoin="round" />
                                    <path d="M13.8496 14.3247V9.50366" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                          strokeLinejoin="round" />
                                    <path fillRule  ="evenodd" clipRule="evenodd"
                                          d="M18.7021 20C20.5242 20 22 18.5426 22 16.7431V14.1506C20.7943 14.1506 19.8233 13.1917 19.8233 12.001C19.8233 10.8104 20.7943 9.85039 22 9.85039L21.999 7.25686C21.999 5.45745 20.5221 4 18.7011 4H5.29892C3.47789 4 2.00104 5.45745 2.00104 7.25686L2 9.93485C3.20567 9.93485 4.17668 10.8104 4.17668 12.001C4.17668 13.1917 3.20567 14.1506 2 14.1506V16.7431C2 18.5426 3.4758 20 5.29787 20H18.7021Z"
                                          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>


                            </i>
                            <span className="item-name">Track</span>

                        </a>
                    </Link>
                </Accordion.Item>
              </Accordion>
       </>
    )
}

export default VerticalNav
