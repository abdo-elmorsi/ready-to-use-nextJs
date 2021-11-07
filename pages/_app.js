import '../styles/globals.scss'
import store from '../lib'
import {Provider} from 'react-redux'
import React, {useEffect, useState} from "react";
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
                    <AuthGuard>

                        <Component {...pageProps} />

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

