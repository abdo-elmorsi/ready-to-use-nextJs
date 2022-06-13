import Head from "next/head";

const Meta = ({
    title = "English Stu",
    keywords = "English en",
    description = "Learn English With Us",
}) => {
    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1"
            />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    );
};
export default Meta;
