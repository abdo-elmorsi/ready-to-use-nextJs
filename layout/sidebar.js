import React, { useEffect } from "react";
import VerticalNav from "./vertical-nav";
import Scrollbar from "smooth-scrollbar";
import { useSelector, useDispatch } from "react-redux";
import { sidebarMini, toggle } from "../lib/slices/toggleSidebar";
import { useRouter } from "next/router";

const Sidebar = () => {
    const isActiveSideBar = useSelector((state) => state.toggleMenu.value);
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        Scrollbar.init(document.getElementById("my-scrollbar"));
        router.events.on("routeChangeComplete", () => dispatch(sidebarMini()));
    }, [dispatch, router.events]);

    return (
        <>
            <aside
                className={`sidebar sidebar-default navs-rounded-all sidebar-hover {{ sidebarVariants }} ${
                    isActiveSideBar && "sidebar-mini"
                }`}
            >
                <div className="sidebar-header d-flex align-items-center justify-content-start">
                    <a className="navbar-brand">
                        <svg
                            width="30"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                        >
                            <defs>
                                <linearGradient
                                    id="linear-gradient"
                                    x1="5.72"
                                    y1="31.07"
                                    x2="24.28"
                                    y2="-1.07"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset="0" stopColor="#0994b8" />
                                    <stop offset="0.27" stopColor="#0d97b9" />
                                    <stop offset="0.53" stopColor="#189fbe" />
                                    <stop offset="0.78" stopColor="#2bacc5" />
                                    <stop offset="1" stopColor="#42bccd" />
                                </linearGradient>
                            </defs>
                            <rect
                                className="cls-1"
                                fill="url(#linear-gradient)"
                                width="30"
                                height="30"
                                rx="5.29"
                            />
                            <path
                                className="cls-2"
                                fill="#fff"
                                d="M21.27,11.13c.54,0,1,0,1.27,0l0,.22-1.21,6.3c-.75,3.89-4.93,6.71-8.89,6.71-2.49,0-5.26-1.79-5.7-4.06,9,0,15-4.55,13.9-6a4,4,0,0,0-1.63-1c-.55-.22-1.12-.4-1.56-.55l-.24-.09c-.66-.27-.9-.61-.2-.93A11.65,11.65,0,0,1,21.27,11.13Zm.59-5.53H10.35A1.45,1.45,0,0,0,8.93,6.77L7,16.7v0c7.39.6,9.06-1.74,7.65-2.19-.42-.14-.79-.27-1.11-.41-2.06-.85-2.07-1.7.46-2.64,2.75-1,7.63-1,8.65-1l.61-3.19A1.45,1.45,0,0,0,21.86,5.6Z"
                            />
                        </svg>
                        <span className="logo-title d-inline-block">
                            English Stu
                        </span>
                    </a>
                    <div
                        className="sidebar-toggle shadow-lg"
                        data-toggle="sidebar"
                        data-active="true"
                        onClick={() => dispatch(toggle())}
                    >
                        <i className="icon">
                            <svg
                                width="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.25 12.2744L19.25 12.2744"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </i>
                    </div>
                </div>
                <div
                    className="sidebar-body pt-0 data-scrollbar"
                    data-scroll="1"
                    id="my-scrollbar"
                >
                    <div className="navbar-collapse" id="sidebar">
                        <VerticalNav />
                    </div>
                    <div className="sidebar-footer">footer</div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
