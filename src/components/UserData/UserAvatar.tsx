import Image from 'next/image';
import AvatarPhoto from '../../../public/avatar.jpg';
import {useSession} from 'next-auth/react';
import block from 'bem-cn-lite';
import styles from './UserData.module.scss';
import clsx from 'clsx';

interface IProps {
    size: number;
    rounded?: boolean;
    className?: string;
}

const b = block('user-avatar');

export default function UserAvatar(props: IProps) {
    const {data: session} = useSession();
    return (
        <div className={styles[b()]}>
            <Image
                src={session?.user?.image ?? AvatarPhoto}
                width={props.size}
                height={props.size}
                className={clsx([props.className, props.rounded && styles[b('rounded')]])}
                alt="Фото пользователя"
            />
        </div>
    );
}
