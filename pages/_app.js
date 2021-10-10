import '../styles/globals.scss'
import store from '../store'
import {Provider} from 'react-redux'
import Layout from "../layout";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Loader from "../components/Loader";

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
    }, [router]);
    return (
            <Provider store={store}>
                <Loader loading={loading} />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
    )
}

export default MyApp
