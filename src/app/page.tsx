'use client';

import styles from './Home.module.scss';
import block from 'bem-cn-lite';

const b = block('homepage-content');

export default function Home() {
    return (
        <main className={styles[b()]}>
            <h3>Site under development</h3>
            <p>by My favorite team</p>
        </main>
    );
}
