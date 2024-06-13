'use client';
import {Card, Icon, Skeleton} from '@gravity-ui/uikit';
import GetUserName from '../UserData/GetUserName';
import UserAvatar from '../UserData/UserAvatar';
import {Envelope} from '@gravity-ui/icons';
import GetUserEmail from '../UserData/GetUserEmail';
import block from 'bem-cn-lite';
import styles from './Profile.module.scss';
import {useSession} from 'next-auth/react';

const b = block('user-card');
export default function UserCard() {
    const {status} = useSession();

    if (status === 'loading') {
        return (
            <div className={styles[b('skeleton-container')]}>
                <Skeleton className={styles[b('skeleton')]} />
            </div>
        );
    }
    return (
        <div className={styles[b('user-data')]}>
            <div className={styles[b()]}>
                <Card className={styles[b('body')]}>
                    <UserAvatar size={120} rounded />
                    <div className={styles[b('data')]}>
                        <h2 className={styles[b('username')]}>
                            <GetUserName />
                        </h2>
                        <h2 className={styles[b('with-icon')]}>
                            <Icon data={Envelope} />
                            <GetUserEmail />
                        </h2>
                    </div>
                </Card>
            </div>
        </div>
    );
}
