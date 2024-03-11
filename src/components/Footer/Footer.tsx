'use client';

interface IProps {
    isDark: boolean;
}

import {TeamLogoComponent} from './TeamLogoComponent';
import block from 'bem-cn-lite';
import styles from './Footer.module.scss';

const b = block('footer');

export function Footer(props: IProps) {
    return (
        <div className={styles[b('marking')]}>
            <TeamLogoComponent isDark={props.isDark} />
            <p className={styles[b('copyright')]}>
                Copyright © {new Date().getFullYear()} Все права защищены
            </p>
        </div>
    );
}
