import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
    providers: [
        Providers.Credentials({
            name: "credentials",
            async authorize(credentials, req) {
                const {username, password} = credentials

                const response = await fetch('https://saferoad-web.herokuapp.com/signin',
                    {
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify({username, password})
                    })
                const user = await response.json()

                // If no error and we have user data, return it
                if (response.ok && user) {
                    // req.headers.Authorization =  `Bearer ${user.token}`
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            },
        }),
    ],
    callbacks: {
        redirect: async (url, baseUrl) => {
            return baseUrl
        },
        async session(session, token) {
            session.user = token.user
            return {...session};
        },
        async jwt(token, user) {
            if (user) token.user = user;
            return token;
        },
    },
    secret: "test",
    jwt: {
        secret: "test",
        encryption: true,
    },
    pages: {
        signIn: '/auth/signin',
    },
});
