import {useSession} from 'next-auth/react';

export function GetUserName() {
    const {data: session} = useSession();
    return session?.user?.name;
}
