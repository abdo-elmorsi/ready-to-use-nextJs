import React from 'react'

//header
import Header from './header'
//subheader
import SubHeader from './sub-header'
//sidebar
import Sidebar from './sidebar'
//footer
// import Footer from './footer'

import {useRouter} from "next/router";

const Layout = ({children}) => {
    let router = useRouter();
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