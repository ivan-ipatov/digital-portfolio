'use client';
import block from 'bem-cn-lite';
import styles from './Header.module.scss';

interface IProps {
    isDark: boolean;
}

const b = block('header');

export function SiteLogoComponent(props: IProps) {
    return (
        <div className={props.isDark ? styles[b('site_logo_dark')] : styles[b('site_logo')]}></div>
    );
}
