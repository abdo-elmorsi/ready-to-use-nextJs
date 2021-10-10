import '../styles/globals.scss'
import store from '../store'
import {Provider} from 'react-redux'
import Layout from "../layout";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Loader from "../components/Loader";
import {SSRProvider} from '@react-aria/ssr'

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
        console.error(window.innerWidth)
        setSize();
        window.addEventListener('resize', setSize);
        window.addEventListener('orientationchange', setSize);

    }, [router]);
    return (
        <SSRProvider>
            <Provider store={store}>
                <Loader loading={loading}/>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </SSRProvider>
    )
}

export default MyApp
