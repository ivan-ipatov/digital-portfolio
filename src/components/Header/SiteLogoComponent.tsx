'use client';
import block from 'bem-cn-lite';
import styles from './Header.module.scss';
import {useRouter} from 'next/navigation';

const b = block('header');

export function SiteLogoComponent() {
    const router = useRouter();
    return (
        <div className={styles[b('marking-site-logo')]}>
            <h1 className={styles[b('site_logo')]} onClick={() => router.push('/')}>
                Valise
            </h1>
        </div>
    );
}
