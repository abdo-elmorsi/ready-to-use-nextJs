import React, { useContext } from "react";
import {
    Accordion,
    useAccordionButton,
    AccordionContext,
    OverlayTrigger,
    Tooltip,
} from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
// translation
import { useTranslation } from "next-i18next";

// function CustomToggle({ children, eventKey, onClick }) {
//     const { activeEventKey } = useContext(AccordionContext);

//     const decoratedOnClick = useAccordionButton(eventKey, (active) =>
//         onClick({ state: !active, eventKey: eventKey })
//     );

//     const isCurrentEventKey = activeEventKey === eventKey;

//     return (
//         <Link
//             href="/"
//             aria-expanded={isCurrentEventKey ? "true" : "false"}
//             className="nav-link"
//             role="button"
//             onClick={(e) => {
//                 decoratedOnClick(isCurrentEventKey);
//             }}
//         >
//             {children}
//         </Link>
//     );
// }

const VerticalNav = () => {
    console.log("abdo");
    let router = useRouter();
    const { t } = useTranslation("main");
    return (
        <Accordion as="ul" className="navbar-nav iq-main-menu">
            <Accordion.Item
                as="li"
                eventKey="horizontal-menu"
                bsPrefix="nav-item"
            >
                <Link href="/">
                    <a>
                        <div
                            className={`${
                                router.pathname === "/" ? "active" : ""
                            } nav-link`}
                        >
                            <i className="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    viewBox="0 0 64 56.01"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M63.63,24.65,56,18.42V8.74A.76.76,0,0,0,55.25,8h-2.5a.76.76,0,0,0-.75.75v6.42L34.52.89a4,4,0,0,0-5.05,0L.37,24.65a1,1,0,0,0-.15,1.4L1.49,27.6a1,1,0,0,0,1.4.15L8,23.58V54a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V38l8,0V54a2,2,0,0,0,2,2l16,0a2,2,0,0,0,2-2V23.58l5.11,4.17a1,1,0,0,0,1.4-.14l1.27-1.55a1,1,0,0,0-.15-1.41ZM52,52h0L40,52V36a2,2,0,0,0-2-2L26,34a2,2,0,0,0-2,2h0V52H12V20.31L32,4,52,20.31Z"
                                    />
                                </svg>
                            </i>
                            <span className="item-name">{t("Dashboard")}</span>
                        </div>
                    </a>
                </Link>
            </Accordion.Item>
            <Accordion.Item
                as="li"
                eventKey="horizontal-menu"
                bsPrefix="nav-item"
            >
                <Link href="/reports">
                    <a>
                        <div
                            className={`${
                                router.pathname === "/Reports" ? "active" : ""
                            } nav-link `}
                        >
                            <i className="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="23"
                                    viewBox="0 0 48 64"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M17,40H15a1,1,0,0,0-1,1V53a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V41A1,1,0,0,0,17,40Zm8-12H23a1,1,0,0,0-1,1V53a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V29A1,1,0,0,0,25,28Zm5,9V53a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V37a1,1,0,0,0-1-1H31A1,1,0,0,0,30,37ZM46.24,12.25,35.75,1.76A6,6,0,0,0,31.52,0H6A6,6,0,0,0,0,6V58a6,6,0,0,0,6,6H42a6,6,0,0,0,6-6V16.5a6,6,0,0,0-1.76-4.25ZM32,4.07a2,2,0,0,1,.93.53L43.41,15.08a2,2,0,0,1,.53.93H32ZM44,58a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2V6A2,2,0,0,1,6,4H28V17a3,3,0,0,0,3,3H44Z"
                                    />
                                </svg>
                            </i>
                            <span className="item-name">{t("Reports")}</span>
                        </div>
                    </a>
                </Link>
            </Accordion.Item>
        </Accordion>
    );
};

export default VerticalNav;
