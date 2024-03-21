import {DropdownMenu} from '@gravity-ui/uikit';
import UserAvatar from '../UserData/UserAvatar';
import {useRouter} from 'next/navigation';
import {signOut} from 'next-auth/react';
import styles from './Header.module.scss';
import block from 'bem-cn-lite';

const b = block('user-avatar');
export default function UserHeader() {
    const router = useRouter();
    return (
        <>
            <DropdownMenu
                renderSwitcher={(props) => (
                    <div {...props} style={{cursor: 'pointer'}}>
                        <UserAvatar size={35} className={styles[b()]} />
                    </div>
                )}
                size="l"
                items={[
                    {
                        action: () => router.push('/profile'),
                        text: 'Профиль',
                    },
                    {
                        action: () => signOut(),
                        text: 'Выйти',
                        theme: 'danger',
                    },
                ]}
            />
        </>
    );
}
