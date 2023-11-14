import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import type { AuthOptions, User } from "next-auth";

export const authConfig: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET!
        }),
        Credentials({
            credentials: {
                email: {label: 'email', type: 'email', required: true},
                password: {label: 'password', type: 'password', required: true}
            },
            async authorize(credentials){
                if(!credentials?.email || !credentials.password){
                    return null;
                }
                return {} as User;
            } 
        })
    ],
    // callbacks: {
    //     async jwt({token}){
    //         console.log(token, 111111111);
    //         token.role = 'admin';
    //         return token;
    //     }
    // },
    pages:{
        signIn: '/login',
    }
};