'use client';
import {useSession} from 'next-auth/react';

export default function GetUserEmail() {
    const {data: session} = useSession();
    return session?.user?.email;
}
