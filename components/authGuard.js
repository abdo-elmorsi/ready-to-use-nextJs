import React, {useEffect} from 'react'
import {useSession} from "next-auth/client";
import Router, {useRouter} from "next/router";
import Layout from "../layout";
import {Provider} from "next-auth/client";

const AuthGuard = ({children}) => {
    const [session, loading] = useSession();
    const hasUser = !!session?.user;
    const router = useRouter();
    useEffect(() => {
        if (!loading && !hasUser) {
            Router.push("/auth/signin");
        }
        return null;
    }, [loading, hasUser]);
    if ((loading || !hasUser) && router.pathname !== '/auth/signin') {
        return <div>Waiting for session...</div>;
    }
    return (
        <Provider
            options={{
                clientMaxAge: 0,
                keepAlive: 0
            }}
            session={session}
        >
            {!loading && hasUser && router.pathname !== '/auth/signin' ? <Layout>{children}</Layout> : children}


        </Provider>
            )
}
export default AuthGuard

