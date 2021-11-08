import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }


    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="shortcut icon"
                        href="/favicon.ico"
                    />
                    <link href="https://fonts.googleapis.com"/>
                    <link href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
                    {/* Google Tag Manager */}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-PDQ89V3');`,
                        }}
                    />
                    {/* End Google Tag Manager */}
                </Head>
                <body>
                <Main/>
                {/* Google Tag Manager (noscript) */}
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PDQ89V3" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                    }}
                />
                {/* End Google Tag Manager (noscript) */}
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
