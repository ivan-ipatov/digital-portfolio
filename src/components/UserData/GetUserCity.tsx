'use client';
import {useSession} from 'next-auth/react';

export default function GetUserCity() {
    const {data: session} = useSession();
    return session?.user?.city ?? 'Не указано';
}
