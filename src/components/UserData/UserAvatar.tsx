import Image from 'next/image';
import AvatarPhoto from '../../../public/avatar.jpg';
import {useSession} from 'next-auth/react';
import block from 'bem-cn-lite';
import styles from './UserData.module.scss';

const b = block('user-avatar');

export default function UserAvatar() {
    const {data: session} = useSession();
    return (
        <div>
            <Image
                src={session?.user?.image ?? AvatarPhoto}
                width={50}
                className={styles[b()]}
                alt="Фото пользователя"
            />
        </div>
    );
}
