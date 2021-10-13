import '../styles/globals.scss'
import store from '../store'
import {Provider} from 'react-redux'
import Layout from "../layout";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import SSRProvider from 'react-bootstrap/SSRProvider';
import NextNprogress from 'nextjs-progressbar';
import { appWithTranslation } from 'next-i18next';
import {ThemeProvider} from "react-bootstrap";

function MyApp({Component, pageProps}) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = (url) => {
            url !== router.pathname ? setLoading(true) : setLoading(false);
        };
        const handleComplete = (url) => setLoading(false);

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);
        const setSize = function () {
            const docStyle = document.documentElement.style;
            window.innerWidth < 766
                ? docStyle.fontSize = `${(window.innerWidth * 0.0205).toFixed(1)}px`
                : docStyle.fontSize = '16px';
        }
        setSize();
        window.addEventListener('resize', setSize);
        window.addEventListener('orientationchange', setSize);

    }, [router]);
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
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </SSRProvider>
        </ThemeProvider>
    )
}

// export default MyApp
export default appWithTranslation(MyApp);
