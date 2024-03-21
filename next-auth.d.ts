import _NextAuth from 'next-auth';
declare module 'next-auth' {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            id: string | int;
        } & DefaultSession['user'];
    }
    interface User {
        city?: {
            title: string;
        };
    }
    interface Account {
        email?: string;
    }
}
