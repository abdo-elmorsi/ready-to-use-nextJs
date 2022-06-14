import "../styles/globals.scss";
import store from "../lib";
import { Provider } from "react-redux";
import React, { useEffect, useState } from "react";
import Router from "next/router";
import SSRProvider from "react-bootstrap/SSRProvider";
import NextNprogress from "nextjs-progressbar";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "react-bootstrap";

import { SessionProvider } from "next-auth/react";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../layout";
import Meta from "../components/meta";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
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
                ? (docStyle.fontSize = `${(
                      (window.innerWidth * 0.1122) /
                      3
                  ).toFixed(1)}px`)
                : (docStyle.fontSize = "16px");
        };
        setSize();
        window.addEventListener("resize", setSize);
        window.addEventListener("orientationchange", setSize);
    }, []);
    return (
        <SessionProvider session={session}>
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
                        <Meta title="English Stu" />
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </Provider>
                </SSRProvider>
            </ThemeProvider>
        </SessionProvider>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["main"])),
        },
    };
}
// export default MyApp
export default appWithTranslation(MyApp);

