'use client';
import {TeamLogoComponent} from './TeamLogoComponent';
import block from 'bem-cn-lite';
import styles from './Footer.module.scss';
import {useContext} from 'react';
import {ThemeContext} from '@/components/Wrapper/WrapperComponents/ThemeContextComponent';

const b = block('footer');

export function Footer() {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={styles[b('marking')]}>
            <TeamLogoComponent isDark={theme === 'dark'} />
            <p className={styles[b('copyright')]}>
                Copyright © {new Date().getFullYear()} Все права защищены
            </p>
        </div>
    );
}
