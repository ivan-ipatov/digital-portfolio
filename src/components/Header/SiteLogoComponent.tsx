'use client';
import block from 'bem-cn-lite';
import './Header.scss';

interface IProps {
    isDark: boolean;
}

const b = block('header');

export function SiteLogoComponent(props: IProps) {
    return <div className={props.isDark ? b('site_logo_dark') : b('site_logo')}></div>;
}
