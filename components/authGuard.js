import React, {useState} from 'react'
import Layout from "../layout";
import useUser from "../lib/useUser";

const AuthGuard = ({children}) => {
    const { user } = useUser({ redirectTo: '/sginin' })

    const [state, setState] = useState(false);

   /* if (!user || user.isLoggedIn === false) {
        return <span>loading...</span>
    }*/
    return (user ? <Layout>{children}</Layout> : children)
}
/*
export const getServerSideProps = withSession(async function ({ req, res }) {
    const user = req.session.get('user')

    if (!user) {
        return {
            redirect: {
                destination: '/sginin',
                permanent: false,
            },
        }
    }

    return {
        props: { user: req.session.get('user') },
    }
})*/
export default AuthGuard
