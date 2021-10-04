import '../styles/globals.scss'
import store from '../store'
import {Provider} from 'react-redux'
import Layout from "../layout";
import {useRouter} from "next/router";

function MyApp({Component, pageProps}) {
    // const router = useRouter();
    // const { locale } = router;
    // const { i18n } = useTranslation();
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

export default MyApp
