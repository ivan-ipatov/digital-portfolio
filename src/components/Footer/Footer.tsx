'use client';

interface IProps {
    isDark: boolean;
}

import {TeamLogoComponent} from './TeamLogoComponent';
import block from 'bem-cn-lite';
import './Footer.scss';

const b = block('footer');

export function Footer(props: IProps) {
    return (
        <div className={b('marking')}>
            <TeamLogoComponent isDark={props.isDark} />
            <p className={b('copyright')}>
                Copyright © {new Date().getFullYear()} Все права защищены
            </p>
        </div>
    );
}
