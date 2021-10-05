import React from 'react'

//header
import Header from './header'
//subheader
import SubHeader from './sub-header'
//sidebar
import Sidebar from './sidebar'
//footer
// import Footer from './footer'
//default 
// import DefaultRouter from '../../router/default-router'

import Loader from '../components/Loader'

const Layout = ({children}) => {

    return (
        <>
            <Loader/>
            <Sidebar/>
            <main className="main-content">
                <div className="position-relative">
                    <Header/>
                    <SubHeader/>
                </div>
                <div className="conatiner-fluid content-inner mt-n5 py-0">
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
