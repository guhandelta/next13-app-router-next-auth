import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github'

// Options to be sent to NEXT_AUTH to initialize the auth0 provider
export const auth0Options = {
    providers:[
        GitHubProvider({
            clientId: process.env.GIHUB_CLIENT_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? '',
        }),
    ],
};

// Handler to handle GET & POST requests to /api/auth/[...nextauth]
export const handler = NextAuth(auth0Options);

// export the handler as both GET and POST
export { handler as GET, handler as POST };