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
                            <span className="item-name">{t("Home")}</span>
                        </div>
                    </a>
                </Link>
            </Accordion.Item>
            <Accordion.Item
                as="li"
                eventKey="horizontal-menu"
                bsPrefix="nav-item"
            >
                <Link href="/about">
                    <a>
                        <div
                            className={`${
                                router.pathname === "/about" ? "active" : ""
                            } nav-link`}
                        >
                            <i className="icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    viewBox="0 0 64 56.89"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M62.22,17.78a1.76,1.76,0,0,0-.66.13l-18.89,7h0l-1.14-.4c2.58-3.88,4.69-7.91,4.69-10.82C46.22,6.12,39.85,0,32,0S17.78,6.12,17.78,13.67a12.08,12.08,0,0,0,1.15,4.52L2.24,24A3.54,3.54,0,0,0,0,27.3V55.11a1.78,1.78,0,0,0,1.78,1.78,1.76,1.76,0,0,0,.66-.13l18.89-7,19.11,6.74a7.13,7.13,0,0,0,4.45,0l16.87-5.87A3.55,3.55,0,0,0,64,47.37V19.56A1.78,1.78,0,0,0,62.22,17.78ZM19.56,46.64l-16,5.92L3.4,27.35l16.16-5.62ZM32,3.56c5.88,0,10.67,4.53,10.67,10.11,0,3-4.24,9.88-10.67,17.42-6.43-7.54-10.67-14.42-10.67-17.42C21.33,8.09,26.12,3.56,32,3.56Zm8.89,49.35L23.11,46.63V25.42a108.18,108.18,0,0,0,7.52,9.52,1.82,1.82,0,0,0,2.74,0c1.41-1.61,3.74-4.34,6-7.44l1.49.53V52.91Zm3.55,0V28l16-5.91.15,25.2Z"
                                    />
                                </svg>
                            </i>
                            <span className="item-name">{t("About")}</span>
                        </div>
                    </a>
                </Link>
            </Accordion.Item>
        </Accordion>
    );
};

export default VerticalNav;
