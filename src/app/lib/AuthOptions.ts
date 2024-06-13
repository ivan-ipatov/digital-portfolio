import {AuthOptions} from 'next-auth';
import {PrismaAdapter} from '@auth/prisma-adapter';
import prisma from '@/app/lib/prismadb';
import {Adapter} from 'next-auth/adapters';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
};
