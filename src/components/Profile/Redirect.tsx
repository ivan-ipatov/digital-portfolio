'use client';
import {useRouter} from 'next/navigation';
import {useSession} from 'next-auth/react';

export function Redirect() {
    const router = useRouter();
    const {status} = useSession();
    if (status === 'unauthenticated') {
        router.push('/api/auth/signin');
    }
    return null;
}
