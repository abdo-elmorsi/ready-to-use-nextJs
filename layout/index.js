import React from 'react'

//header
import Header from './header'
//subheader
import SubHeader from './sub-header'
//sidebar
import Sidebar from './sidebar'
//footer
// import Footer from './footer'

import Loader from '../components/Loader'
import {useRouter} from "next/router";

const Layout = ({children}) => {
    let router = useRouter();
    return (
        <>
            <Loader/>
            <Sidebar/>
            <main className="main-content">
                <div className="position-relative">
                    <Header/>
                    {!router.pathname.includes('track') && (<SubHeader/>)}
                </div>
                <div className={"conatiner-fluid mt-n5 py-0 " + (!router.pathname.includes('track') && "content-inner")}>
                    {children}
                    {/*<DefaultRouter />*/}
                </div>
                {/*<Footer/>*/}
            </main>
            {/*<SettingOffcanvas/>*/}
        </>
    )
}

export default Layout
