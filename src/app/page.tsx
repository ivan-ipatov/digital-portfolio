'use client';

import styles from './Home.module.scss';
import block from 'bem-cn-lite';
import {PostCards} from '@/components/Posts/PostCards';
import {PostScience} from '@/components/Posts/PostScience';
import {ChangeLog} from '@/components/Posts/ChangeLog';

const b = block('homepage-content');

export default function Home() {
    return (
        <main className={styles[b()]}>
            <PostCards />
            <ChangeLog />
            <PostScience />
        </main>
    );
}
