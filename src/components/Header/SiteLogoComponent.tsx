import block from 'bem-cn-lite';
import styles from './Header.module.scss';
import Image from 'next/image';
import Logo from '../../../public/valise.svg';
import Link from 'next/link';

const b = block('header');

export function SiteLogoComponent() {
    return (
        <Link href={'/'}>
            <div className={styles[b('marking-site-logo')]}>
                <Image
                    className={styles[b('site_logo')]}
                    src={Logo}
                    alt="Logo"
                    width={100}
                    height={50}
                />
            </div>
        </Link>
    );
}
