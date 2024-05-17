'use client';
import block from 'bem-cn-lite';
import styles from './Header.module.scss';
import {useRouter} from 'next/navigation';
import Image from 'next/image';

const b = block('header');

export function SiteLogoComponent() {
    const router = useRouter();
    return (
        <div className={styles[b('marking-site-logo')]}>
            {/*<h1 className={styles[b('site_logo')]} onClick={() => router.push('/')}>*/}
            {/*    Valise*/}
            {/*</h1>*/}
            <Image
                className={styles[b('site_logo')]}
                src={'valise.svg'}
                alt="Logo"
                width={100}
                height={50}
                onClick={() => router.push('/')}
            />
        </div>
    );
}
