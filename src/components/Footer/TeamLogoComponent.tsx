'use client';

interface IProps {
    isDark: boolean;
}

import Image from 'next/image';
import FavTeam from '../../../public/my-fav-team.svg';
import FavTeamDark from '../../../public/my-fav-team-dark.svg';
import block from 'bem-cn-lite';
import styles from './Footer.module.scss';

const b = block('footer');

export function TeamLogoComponent(props: IProps) {
    return (
        <Image
            priority={true}
            src={props.isDark ? FavTeamDark : FavTeam}
            alt="Логотип нашей команды"
            className={styles[b('team-logo')]}
        />
    );
}
