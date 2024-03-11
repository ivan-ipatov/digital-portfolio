'use client';
import {Button} from '@gravity-ui/uikit';
import styles from './Home.module.scss';
import {signIn, signOut, useSession} from 'next-auth/react';
import block from 'bem-cn-lite';

const b = block('homepage-content');

export default function Home() {
    const {data: session} = useSession();
    if (session) {
        return (
            <main className={styles[b()]}>
                <h3>Site under development</h3>
                <p>by My favorite team</p>
                <div>
                    <img
                        src={
                            session.user?.image ??
                            'https://vsegda-pomnim.com/uploads/posts/2022-04/thumbs/1649232741_8-vsegda-pomnim-com-p-pustoe-litso-foto-10.jpg'
                        }
                        width={50}
                        className={styles[b('user-image')]}
                        alt="Фото пользователя"
                    />
                </div>
                <p>Привет, {session.user?.name}</p>
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
