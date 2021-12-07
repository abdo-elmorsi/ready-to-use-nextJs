import '../styles/globals.scss'
import store from '../lib'
import {Provider} from 'react-redux'
import React, {useEffect, useState} from "react";
import Script from 'next/script'
import Router from "next/router";
import SSRProvider from 'react-bootstrap/SSRProvider';
import NextNprogress from 'nextjs-progressbar';
import {appWithTranslation} from 'next-i18next';
import {ThemeProvider} from "react-bootstrap";
import AuthGuard from "../components/authGuard";
import {GTMPageView} from "../utils/gtm.ts";
import {library} from '@fortawesome/fontawesome-svg-core';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {
    faCheckSquare,
    faChevronDown,
    faChevronRight,
    faFile,
    faFolder,
    faFolderOpen,
    faMinusSquare,
    faPlusSquare,
    faSquare
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faCheckSquare,
    faSquare,
    faChevronRight,
    faChevronDown,
    faPlusSquare,
    faMinusSquare,
    faFolder,
    faFolderOpen,
    faFile
);

function MyApp({Component, pageProps}) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = (url) => {
            url !== Router.pathname ? setLoading(true) : setLoading(false);
        };
        const handleComplete = (url) => setLoading(false);

        Router.events.on("routeChangeStart", handleStart);
        Router.events.on("routeChangeComplete", handleComplete);
        Router.events.on("routeChangeError", handleComplete);
        const setSize = function () {
            const docStyle = document.documentElement.style;
            window.innerWidth < 425
                ? docStyle.fontSize = `${(window.innerWidth * 0.1122 / 3).toFixed(1)}px`
                : docStyle.fontSize = '16px';
        }
        setSize();
        window.addEventListener('resize', setSize);
        window.addEventListener('orientationchange', setSize);

        const handleRouteChange = (url) => GTMPageView(url);
        Router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);
    return (
        <ThemeProvider>
            <SSRProvider>
                <Provider store={store}>
                    <NextNprogress
                        color="#246c66"
                        startPosition={0.3}
                        stopDelayMs={200}
                        height={3}
                        showOnShallow={true}
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
         (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-PDQ89V3');
        `}
                    </Script>
                    <Script
                        src="https://www.google-analytics.com/analytics.js"
                        strategy="afterInteractive"
                    />
                    <AuthGuard>

                        <Component {...pageProps} />
                        {process.env.NODE_ENV === 'production' && <div id="development">{`You may find some mistakes because it's still under development`}</div>}
                    </AuthGuard>
                </Provider>
            </SSRProvider>
        </ThemeProvider>
    )
}

export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['main']))
        },
    };
}
// export default MyApp
export default appWithTranslation(MyApp);

