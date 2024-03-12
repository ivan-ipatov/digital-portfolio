'use client';
import {Button} from '@gravity-ui/uikit';
import styles from './Home.module.scss';
import {signIn, signOut, useSession} from 'next-auth/react';
import block from 'bem-cn-lite';
import GetUserName from '@/components/UserData/GetUserName';
import UserAvatar from '@/components/UserData/UserAvatar';
import GetUserEmail from '@/components/UserData/GetUserEmail';

const b = block('homepage-content');

export default function Home() {
    const {status} = useSession();

    if (status === 'authenticated') {
        return (
            <main className={styles[b()]}>
                <h3>Site under development</h3>
                <p>by My favorite team</p>
                <UserAvatar />
                <p>Привет, {<GetUserName />}</p>
                {<GetUserEmail /> !== null ? (
                    <p>
                        Твой email: <GetUserEmail />
                    </p>
                ) : null}
                <Button onClick={() => signOut()}>Выйти</Button>
            </main>
        );
    } else {
        return (
            <main className={styles[b()]}>
                <h3>Site under development</h3>
                <p>by My favorite team</p>
                <Button onClick={() => signIn()}>Войти</Button>
            </main>
        );
    }
}
