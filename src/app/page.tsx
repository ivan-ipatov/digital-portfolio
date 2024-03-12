'use client';
import {Button, Skeleton} from '@gravity-ui/uikit';
import styles from './Home.module.scss';
import {signIn, signOut, useSession} from 'next-auth/react';
import block from 'bem-cn-lite';
import GetUserName from '@/components/UserData/GetUserName';
import UserAvatar from '@/components/UserData/UserAvatar';
import GetUserEmail from '@/components/UserData/GetUserEmail';

const b = block('homepage-content');

export default function Home() {
    const {status} = useSession();
    return (
        <main className={styles[b()]}>
            <h3>Site under development</h3>
            <p>by My favorite team</p>
            {status === 'loading' ? (
                <Skeleton className={styles[b('skeleton')]} />
            ) : status === 'authenticated' ? (
                <>
                    <UserAvatar />
                    <p>Привет, {<GetUserName />}</p>
                    {<GetUserEmail /> !== null || undefined ? (
                        <p>
                            Твой email: <GetUserEmail />
                        </p>
                    ) : null}
                    <Button onClick={() => signOut()}>Выйти</Button>
                </>
            ) : (
                <Button onClick={() => signIn()}>Войти</Button>
            )}
        </main>
    );
}
