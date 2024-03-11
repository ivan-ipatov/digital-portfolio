'use client';
import {Button} from '@gravity-ui/uikit';
import styles from './Home.module.scss';
import {signIn, signOut, useSession} from 'next-auth/react';

export default function Home() {
    const {data: session} = useSession();
    if (session) {
        return (
            <main className={styles['homepage-content']}>
                <h3>Site under development</h3>
                <p>by My favorite team</p>
                <p>Signed in as {session.user?.email}</p>
                <Button onClick={() => signOut()}>Sign out</Button>
            </main>
        );
    } else {
        return (
            <main className={styles['homepage-content']}>
                <h3>Site under development</h3>
                <p>by My favorite team</p>
                <p>Not signed in</p>
                <Button onClick={() => signIn()}>Sign in</Button>
            </main>
        );
    }
}
