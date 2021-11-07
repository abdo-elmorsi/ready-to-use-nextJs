import React, {useEffect} from 'react'

//header
import Header from './header'
//subheader
import SubHeader from './sub-header'
//sidebar
import Sidebar from './sidebar'
//footer
// import Footer from './footer'

import Router, {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {encryptName} from "../helpers/encryptions";
import {setConfig} from "../lib/slices/config";

const Layout = ({children}) => {
    let router = useRouter();
    const config = useSelector((state) => state.config);
    const dispatch = useDispatch();

    useEffect(_ => {
        const getConfig = sessionStorage.getItem(encryptName('config'))
        if (getConfig) {
            dispatch(setConfig(JSON.parse(getConfig)));
        }
    }, [config, dispatch]);


    return (
        <>
            <Sidebar/>
            <main className="main-content">
                <div className="position-relative">
                    <Header/>
                    {!router.pathname.includes('track') && (<SubHeader pageName={router.pathname}/>)}
                </div>
                <div
                    className={"position-relative mt-n5 py-0 " + (!router.pathname.includes('track') && "content-inner")}>
                    {children}
                    {/*<DefaultRouter />*/}
                </div>
                {/*<Footer/>*/}
            </main>
        </>
    )
}

export default Layout
