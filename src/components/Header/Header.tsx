import {CategoriesList} from '@/components/Categories/CategoriesList';
import {SiteLogoComponent} from './SiteLogoComponent';
import block from 'bem-cn-lite';
import styles from './Header.module.scss';
import {AuthHeader} from '@/components/Header/AuthHeader';

const b = block('header');

export function Header() {
    return (
        <div className={styles[b('marking')]}>
            <div className={styles[b('left-side')]}>
                <SiteLogoComponent />
                <div className={styles[b('categories')]}>
                    <CategoriesList />
                </div>
            </div>
            <AuthHeader />
        </div>
    );
}
