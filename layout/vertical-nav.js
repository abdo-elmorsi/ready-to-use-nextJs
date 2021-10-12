import React, {useContext} from 'react'
import {Accordion, useAccordionButton, AccordionContext, OverlayTrigger, Tooltip} from 'react-bootstrap'
import Link from 'next/link'
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
// translation
import { useTranslation } from 'react-i18next'

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
    const { t } = useTranslation();

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
                                                  id="tooltip-right">{t("main:Dashboard")}</Tooltip>}>
                                <div className={`${router.pathname === '/' ? 'active' : ''} nav-link`}>
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" viewBox="0 0 64 56.01">
                                            <path fill="currentColor"
                                                  d="M63.63,24.65,56,18.42V8.74A.76.76,0,0,0,55.25,8h-2.5a.76.76,0,0,0-.75.75v6.42L34.52.89a4,4,0,0,0-5.05,0L.37,24.65a1,1,0,0,0-.15,1.4L1.49,27.6a1,1,0,0,0,1.4.15L8,23.58V54a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V38l8,0V54a2,2,0,0,0,2,2l16,0a2,2,0,0,0,2-2V23.58l5.11,4.17a1,1,0,0,0,1.4-.14l1.27-1.55a1,1,0,0,0-.15-1.41ZM52,52h0L40,52V36a2,2,0,0,0-2-2L26,34a2,2,0,0,0-2,2h0V52H12V20.31L32,4,52,20.31Z"/>
                                        </svg>
                                    </i>
                                    <span className="item-name">{t("main:Dashboard")}</span>
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
                                                  id="tooltip-right">{t("main:Track")}</Tooltip>}>
                                <div className={`${router.pathname === '/track' ? 'active' : ''} nav-link`}>
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" viewBox="0 0 64 56.89">
                                            <path fill="currentColor"
                                                  d="M62.22,17.78a1.76,1.76,0,0,0-.66.13l-18.89,7h0l-1.14-.4c2.58-3.88,4.69-7.91,4.69-10.82C46.22,6.12,39.85,0,32,0S17.78,6.12,17.78,13.67a12.08,12.08,0,0,0,1.15,4.52L2.24,24A3.54,3.54,0,0,0,0,27.3V55.11a1.78,1.78,0,0,0,1.78,1.78,1.76,1.76,0,0,0,.66-.13l18.89-7,19.11,6.74a7.13,7.13,0,0,0,4.45,0l16.87-5.87A3.55,3.55,0,0,0,64,47.37V19.56A1.78,1.78,0,0,0,62.22,17.78ZM19.56,46.64l-16,5.92L3.4,27.35l16.16-5.62ZM32,3.56c5.88,0,10.67,4.53,10.67,10.11,0,3-4.24,9.88-10.67,17.42-6.43-7.54-10.67-14.42-10.67-17.42C21.33,8.09,26.12,3.56,32,3.56Zm8.89,49.35L23.11,46.63V25.42a108.18,108.18,0,0,0,7.52,9.52,1.82,1.82,0,0,0,2.74,0c1.41-1.61,3.74-4.34,6-7.44l1.49.53V52.91Zm3.55,0V28l16-5.91.15,25.2Z"/>
                                        </svg>
                                    </i>
                                    <span className="item-name">{t("main:Track")}</span>
                                </div>
                            </OverlayTrigger>
                        </a>
                    </Link>
                </Accordion.Item>
                <Accordion.Item as="li" eventKey="horizontal-menu" bsPrefix="nav-item">
                    <Link href="/preventiveMaintenance">
                        <a>
                            <OverlayTrigger
                                placement="right"
                                overlay={<Tooltip style={{zIndex: 99999}} className={!isActive && 'd-none'}
                                                  id="tooltip-right">{t("main:Preventive_Maintenance")}</Tooltip>}>
                                <div
                                    className={`${router.pathname === '/preventiveMaintenance' ? 'active' : ''} nav-link `}>
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" viewBox="0 0 64 64.01">
                                            <path fill="currentColor"
                                                  d="M62.82,48.69,47.27,33.12a10,10,0,0,0-12.58-1.26L24,21.17V12L8,0,0,8,12,24h9.17L31.86,34.69a10,10,0,0,0,1.28,12.58L48.7,62.84a4,4,0,0,0,5.65,0l8.49-8.49a4,4,0,0,0,0-5.66ZM20,19.76V20H14L5.29,8.37,8.37,5.29,20,14ZM51.51,60,36,44.44A6,6,0,1,1,44.44,36L60,51.51ZM8,54a2,2,0,1,0,2-2A2,2,0,0,0,8,54ZM34.6,8.36A14.72,14.72,0,0,1,45.07,4a15,15,0,0,1,2.59.22L39,12.9l1.72,10.37L51.11,25l8.66-8.66a14.7,14.7,0,0,1-7.88,15.75l3,2.95a18,18,0,0,0,3.62-2.82,18.68,18.68,0,0,0,5-17.91A3.37,3.37,0,0,0,61,11.86a3.43,3.43,0,0,0-3.34.88l-8,8-5.52-.92-.93-5.53,8-8A3.41,3.41,0,0,0,49.66.57a18.74,18.74,0,0,0-17.9,5A18.25,18.25,0,0,0,28,11v8.47l2.76,2.76A14.72,14.72,0,0,1,34.6,8.36Zm-21.23,50a5.64,5.64,0,0,1-7.77,0,5.52,5.52,0,0,1,0-7.78L23.86,32.35,21,29.52,2.77,47.79A9.5,9.5,0,0,0,9.49,64a9.41,9.41,0,0,0,6.71-2.79L28.92,48.5A14.53,14.53,0,0,1,27,44.77Z"/>
                                        </svg>
                                    </i>
                                    <span className="item-name">{t("main:Preventive_Maintenance")}</span>
                                </div>
                            </OverlayTrigger>
                        </a>
                    </Link>
                </Accordion.Item>
                <Accordion.Item as="li" eventKey="horizontal-menu" bsPrefix="nav-item">
                    <Link href="/Reports">
                        <a>
                            <OverlayTrigger
                                placement="right"
                                overlay={<Tooltip style={{zIndex: 99999}} className={!isActive && 'd-none'}
                                                  id="tooltip-right">{t("main:Reports")}</Tooltip>}>
                                <div className={`${router.pathname === '/Reports' ? 'active' : ''} nav-link `}>
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23"
                                             viewBox="0 0 48 64">
                                            <path fill="currentColor"
                                                  d="M17,40H15a1,1,0,0,0-1,1V53a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V41A1,1,0,0,0,17,40Zm8-12H23a1,1,0,0,0-1,1V53a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V29A1,1,0,0,0,25,28Zm5,9V53a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V37a1,1,0,0,0-1-1H31A1,1,0,0,0,30,37ZM46.24,12.25,35.75,1.76A6,6,0,0,0,31.52,0H6A6,6,0,0,0,0,6V58a6,6,0,0,0,6,6H42a6,6,0,0,0,6-6V16.5a6,6,0,0,0-1.76-4.25ZM32,4.07a2,2,0,0,1,.93.53L43.41,15.08a2,2,0,0,1,.53.93H32ZM44,58a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V6A2,2,0,0,1,6,4H28V17a3,3,0,0,0,3,3H44Z"/>
                                        </svg>
                                    </i>
                                    <span className="item-name">{t("main:Reports")}</span>
                                </div>
                            </OverlayTrigger>
                        </a>
                    </Link>
                </Accordion.Item>
                <Accordion.Item as="li" eventKey="horizontal-menu" bsPrefix="nav-item">
                    <Link href="/scheduledReports">
                        <a>
                            <OverlayTrigger
                                placement="right"
                                overlay={<Tooltip style={{zIndex: 99999}} className={!isActive && 'd-none'}
                                                  id="tooltip-right">{t("main:Scheduled_Reports")}</Tooltip>}>
                                <div className={`${router.pathname === '/scheduledReports' ? 'active' : ''} nav-link `}>
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23"
                                             viewBox="0 0 48 64">
                                            <path fill="currentColor"
                                                  d="M42,8H30.92A6.53,6.53,0,0,0,31,7,7,7,0,0,0,17,7a5.47,5.47,0,0,0,.08,1H6a6,6,0,0,0-6,6V58a6,6,0,0,0,6,6H42a6,6,0,0,0,6-6V14A6,6,0,0,0,42,8ZM24,4a3,3,0,1,1-3,3A3,3,0,0,1,24,4ZM44,58a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V14a2,2,0,0,1,2-2h6v2.5A1.51,1.51,0,0,0,13.5,16h21A1.5,1.5,0,0,0,36,14.5V12h6a2,2,0,0,1,2,2ZM14,41a3,3,0,1,0,3,3A3,3,0,0,0,14,41Zm21,1H21a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H35a1,1,0,0,0,1-1V43A1,1,0,0,0,35,42ZM15.77,33.8l8-7.95a.68.68,0,0,0,0-1l-1.58-1.59a.68.68,0,0,0-.95,0l-5.95,5.9L12.75,26.6a.68.68,0,0,0-.95,0l-1.59,1.57a.69.69,0,0,0,0,1l4.64,4.67A.64.64,0,0,0,15.77,33.8ZM35,30H25.3l-4,4H35a1,1,0,0,0,1-1V31A1,1,0,0,0,35,30Z"/>

                                        </svg>
                                    </i>
                                    <span className="item-name">{t("main:Scheduled_Reports")}</span>
                                </div>
                            </OverlayTrigger>
                        </a>
                    </Link>
                </Accordion.Item>
                <Accordion.Item as="li" eventKey="horizontal-menu" bsPrefix="nav-item">
                    <Link href="/driversManagement">
                        <a>
                            <OverlayTrigger
                                placement="right"
                                overlay={<Tooltip style={{zIndex: 99999}} className={!isActive && 'd-none'}
                                                  id="tooltip-right">{t("main:Operate_Driver")}</Tooltip>}>
                                <div
                                    className={`${router.pathname === '/driversManagement' ? 'active' : ''} nav-link `}>
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 64 51.2">
                                            <path fill="currentColor"
                                                  d="M62.83,35.83l-1.65-.95a13.68,13.68,0,0,0,0-2.56l1.66-.95a2.3,2.3,0,0,0,1-2.7,16.56,16.56,0,0,0-3.67-6.35,2.3,2.3,0,0,0-2.87-.44l-1.65.95a12.91,12.91,0,0,0-2.22-1.28v-1.9a2.31,2.31,0,0,0-1.82-2.27,16.74,16.74,0,0,0-7.32,0,2.32,2.32,0,0,0-1.82,2.27v1.9a12.91,12.91,0,0,0-2.22,1.28l-1.65-.95a2.3,2.3,0,0,0-2.87.44,16.86,16.86,0,0,0-3.67,6.34,2.34,2.34,0,0,0,1.06,2.72l1.65.95a13.68,13.68,0,0,0,0,2.56l-1.66,1a2.34,2.34,0,0,0-1,2.71,16.56,16.56,0,0,0,3.67,6.35,2.33,2.33,0,0,0,2.87.44l1.65-1a12.91,12.91,0,0,0,2.22,1.28v1.9a2.31,2.31,0,0,0,1.82,2.27,16.94,16.94,0,0,0,7.32,0,2.32,2.32,0,0,0,1.82-2.27v-1.9a12.91,12.91,0,0,0,2.22-1.28l1.65,1a2.33,2.33,0,0,0,2.87-.44,16.86,16.86,0,0,0,3.67-6.34,2.35,2.35,0,0,0-1.06-2.73Zm-5.16.72,2.94,1.7a13.22,13.22,0,0,1-2.28,4l-2.94-1.7a11.45,11.45,0,0,1-5.11,3v3.4a13.43,13.43,0,0,1-4.56,0v-3.4a11.58,11.58,0,0,1-5.11-3l-2.94,1.7a13.35,13.35,0,0,1-2.28-4l2.94-1.7a11.67,11.67,0,0,1,0-5.9L35.39,29A13.35,13.35,0,0,1,37.67,25l2.94,1.7a11.45,11.45,0,0,1,5.11-2.95v-3.4a14,14,0,0,1,4.56,0v3.4a11.54,11.54,0,0,1,5.11,2.95L58.33,25A13.35,13.35,0,0,1,60.61,29l-2.94,1.7A11.67,11.67,0,0,1,57.67,36.55ZM48,27.15a6.45,6.45,0,1,0,6.45,6.45A6.46,6.46,0,0,0,48,27.15Zm0,9.7a3.25,3.25,0,1,1,3.25-3.25A3.26,3.26,0,0,1,48,36.85ZM22.4,25.6A12.8,12.8,0,1,0,9.6,12.8,12.8,12.8,0,0,0,22.4,25.6Zm0-22.4a9.6,9.6,0,1,1-9.6,9.6A9.62,9.62,0,0,1,22.4,3.2ZM4.8,48a1.6,1.6,0,0,1-1.6-1.6V42.24A10.25,10.25,0,0,1,13.44,32c2,0,3.91,1.6,9,1.6a20.11,20.11,0,0,0,5.65-.87,20,20,0,0,1,.42-3.4A18.57,18.57,0,0,1,22.4,30.4c-4.71,0-6.08-1.6-9-1.6A13.44,13.44,0,0,0,0,42.24V46.4a4.8,4.8,0,0,0,4.8,4.8H38.5A19.62,19.62,0,0,1,34.15,48Z"/>

                                        </svg>
                                    </i>
                                    <span className="item-name">{t("main:Operate_Driver")}</span>
                                </div>
                            </OverlayTrigger>
                        </a>
                    </Link>
                </Accordion.Item>
                <Accordion.Item as="li" eventKey="horizontal-menu" bsPrefix="nav-item">
                    <Link href="/Management">
                        <a>
                            <OverlayTrigger
                                placement="right"
                                overlay={<Tooltip style={{zIndex: 99999}} className={!isActive && 'd-none'}
                                                  id="tooltip-right">{t("main:Management")}</Tooltip>}>
                                <div className={`${router.pathname === '/Management' ? 'active' : ''} nav-link `}>
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 64 51.21">
                                            <path fill="currentColor"
                                                  d="M53.85,19.65l-.25-.39a8.28,8.28,0,0,1-1.22,0l-.25.4a2.4,2.4,0,0,1-2.75,1A9.11,9.11,0,0,1,46,18.86a2.39,2.39,0,0,1-.54-3l.25-.43a8.56,8.56,0,0,1-.61-1.06h-.91a2.4,2.4,0,0,1-2.36-2,9.25,9.25,0,0,1,0-3.85,2.4,2.4,0,0,1,2.36-1.95h.9a8.56,8.56,0,0,1,.61-1.06l-.26-.45a2.41,2.41,0,0,1,.52-3A9.29,9.29,0,0,1,49.27.13a2.4,2.4,0,0,1,2.85,1.06l.26.44a8.28,8.28,0,0,1,1.22,0l.26-.44a2.39,2.39,0,0,1,2.86-1,9.31,9.31,0,0,1,3.35,1.91,2.39,2.39,0,0,1,.51,3l-.26.44a8.56,8.56,0,0,1,.61,1.06h.51a2.4,2.4,0,0,1,2.36,2,9.25,9.25,0,0,1,0,3.85,2.4,2.4,0,0,1-2.36,1.95h-.5a8.56,8.56,0,0,1-.61,1.06l.25.43A2.4,2.4,0,0,1,60,18.87a9.23,9.23,0,0,1-3.4,1.79,2.41,2.41,0,0,1-2.77-1Zm1.22-3.45L56.13,18A8.5,8.5,0,0,0,58,17l-1.06-1.83.64-.75a6,6,0,0,0,1.1-1.91l.33-.93h2.11a8.59,8.59,0,0,0,0-2.15H59l-.33-.93a6.18,6.18,0,0,0-1.1-1.91l-.64-.75L58,4a8.28,8.28,0,0,0-1.87-1.08L55.06,4.7l-1-.18a5.87,5.87,0,0,0-2.21,0l-1,.18L49.85,2.87A7.79,7.79,0,0,0,48,4l1,1.83-.64.75a6.15,6.15,0,0,0-1.09,1.91L47,9.37H44.88a8.59,8.59,0,0,0,0,2.15H47l.33.93a6.36,6.36,0,0,0,1.09,1.91l.64.75L48,17A8,8,0,0,0,49.86,18l1.06-1.83,1,.18a5.87,5.87,0,0,0,2.21,0ZM14.53,45.44V42.28a17.43,17.43,0,0,1-3.64-2.11L8.14,41.76a2.4,2.4,0,0,1-3-.46A21,21,0,0,1,.11,32.49,2.4,2.4,0,0,1,1.19,29.7l2.73-1.59a17.44,17.44,0,0,1,0-4.21L1.19,22.32a2.4,2.4,0,0,1-1.08-2.8,21,21,0,0,1,5.06-8.81,2.41,2.41,0,0,1,3-.46l2.74,1.59a17.88,17.88,0,0,1,3.64-2.11V6.57A2.39,2.39,0,0,1,16.4,4.23a21.18,21.18,0,0,1,10.17,0,2.41,2.41,0,0,1,1.89,2.34V9.73a17.84,17.84,0,0,1,3.64,2.1l2.74-1.58a2.42,2.42,0,0,1,3,.46A22.84,22.84,0,0,1,43,19.56a2.39,2.39,0,0,1-1,2.77l-2.5,1.58a17.44,17.44,0,0,1,0,4.21l2.81,1.75a2.4,2.4,0,0,1,1.08,2.54c-.69,3.13-3.3,6.46-5.59,8.92a2.4,2.4,0,0,1-3,.44L32.1,40.18a17.88,17.88,0,0,1-3.64,2.11v3.16a2.4,2.4,0,0,1-1.88,2.34,21.29,21.29,0,0,1-10.19,0,2.42,2.42,0,0,1-1.86-2.35Zm3.2-.62a19.09,19.09,0,0,0,7.53,0V40.05l1.07-.38A14.45,14.45,0,0,0,30.92,37l.86-.74,4.14,2.39a20.44,20.44,0,0,0,4.21-6.52L36,29.77l.21-1.11a14.81,14.81,0,0,0,0-5.31L36,22.24l4.14-2.39a20.33,20.33,0,0,0-4.21-6.52l-4.14,2.39L30.92,15a14.16,14.16,0,0,0-4.59-2.65L25.26,12V7.19a19.09,19.09,0,0,0-7.53,0V12l-1.07.38A14.45,14.45,0,0,0,12.07,15l-.86.74L7.07,13.34A19.36,19.36,0,0,0,3.3,19.86l4.14,2.39-.21,1.11a14.81,14.81,0,0,0,0,5.31l.21,1.11L3.3,32.16a19.12,19.12,0,0,0,3.77,6.52l4.14-2.39.86.74a14.16,14.16,0,0,0,4.59,2.65l1.07.38Zm3.84-10.53A8.29,8.29,0,1,1,29.86,26,8.29,8.29,0,0,1,21.57,34.29Zm0-13.37A5.09,5.09,0,1,0,26.66,26a5.1,5.1,0,0,0-5.09-5.09ZM53.85,50.08l-.25-.39a8.28,8.28,0,0,1-1.22,0l-.25.4a2.4,2.4,0,0,1-2.75,1A9.11,9.11,0,0,1,46,49.29a2.39,2.39,0,0,1-.54-3l.25-.43a8.56,8.56,0,0,1-.61-1.06h-.91a2.4,2.4,0,0,1-2.36-2,9.25,9.25,0,0,1,0-3.85,2.4,2.4,0,0,1,2.36-2h.9a8.56,8.56,0,0,1,.61-1.06l-.26-.45a2.41,2.41,0,0,1,.52-3,9.41,9.41,0,0,1,3.34-1.89,2.4,2.4,0,0,1,2.85,1.06l.26.43a8.28,8.28,0,0,1,1.22,0l.26-.43a2.39,2.39,0,0,1,2.86-1.05,9.43,9.43,0,0,1,3.35,1.9,2.39,2.39,0,0,1,.51,3l-.26.44A8.56,8.56,0,0,1,60.93,37h.51a2.4,2.4,0,0,1,2.36,2,9.25,9.25,0,0,1,0,3.85,2.4,2.4,0,0,1-2.36,1.95h-.5a8.56,8.56,0,0,1-.61,1.06l.25.43a2.4,2.4,0,0,1-.55,3,9.23,9.23,0,0,1-3.4,1.79,2.43,2.43,0,0,1-2.77-1Zm1.22-3.46,1.06,1.83A8.5,8.5,0,0,0,58,47.37l-1.06-1.83.64-.75a6,6,0,0,0,1.1-1.91L59,42h2.11a8.59,8.59,0,0,0,0-2.15H59l-.33-.93A6.18,6.18,0,0,0,57.58,37l-.64-.75L58,34.38a8.28,8.28,0,0,0-1.87-1.08l-1.06,1.83-1-.18a5.87,5.87,0,0,0-2.21,0l-1,.18L49.86,33.3A8.21,8.21,0,0,0,48,34.38l1,1.83-.64.75a6.15,6.15,0,0,0-1.09,1.91L47,39.8H44.88a8.59,8.59,0,0,0,0,2.15H47l.33.93a6.36,6.36,0,0,0,1.09,1.91l.64.75-1,1.83a8,8,0,0,0,1.86,1.08l1.06-1.83,1,.18a5.87,5.87,0,0,0,2.21,0ZM56,40.8a3.2,3.2,0,1,0-3.2,3.2A3.2,3.2,0,0,0,56,40.8Zm0-30.42a3.2,3.2,0,1,0-3.2,3.2A3.2,3.2,0,0,0,56,10.38Z"/>

                                        </svg>
                                    </i>
                                    <span className="item-name">{t("main:Management")}</span>
                                </div>
                            </OverlayTrigger>
                        </a>
                    </Link>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default VerticalNav
