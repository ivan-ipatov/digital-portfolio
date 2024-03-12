'use client';
import {Button, Skeleton} from '@gravity-ui/uikit';
import styles from './Home.module.scss';
import {signIn, signOut, useSession} from 'next-auth/react';
import block from 'bem-cn-lite';
import GetUserName from '@/components/UserData/GetUserName';
import UserAvatar from '@/components/UserData/UserAvatar';
import {Suspense} from 'react';

const b = block('homepage-content');

export default function Home() {
    const {data: session} = useSession();
    return (
        <main className={styles[b()]}>
            <h3>Site under development</h3>
            <p>by My favorite team</p>
            <Suspense fallback={<Skeleton className={styles[b('skeleton')]} />}>
                {session ? (
                    [
                        <div key={1}>
                            <UserAvatar />
                            <p>Привет, {<GetUserName />}</p>
                            <Button onClick={() => signOut()}>Выйти</Button>
                        </div>,
                    ]
                ) : (
                    <Button onClick={() => signIn()}>Войти</Button>
                )}
            </Suspense>
        </main>
    );
    // if (session) {
    //     return (
    //         <main className={styles[b()]}>
    //             <h3>Site under development</h3>
    //             <p>by My favorite team</p>
    //             <Suspense fallback={<Skeleton className={styles[b('skeleton')]} />}>
    //                 <UserAvatar />
    //                 <p>Привет, {<GetUserName />}</p>
    //             </Suspense>

    //             <Button onClick={() => signOut()}>Выйти</Button>
    //         </main>
    //     );
    // } else {
    //     return (
    //         <main className={styles[b()]}>
    //             <h3>Site under development</h3>
    //             <p>by My favorite team</p>
    //             <Button onClick={() => signIn()}>Войти</Button>
    //         </main>
    //     );
    // }
}
