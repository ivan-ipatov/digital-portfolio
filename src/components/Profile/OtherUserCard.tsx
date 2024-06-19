// @flow
import * as React from 'react';
import styles from '@/components/Profile/Profile.module.scss';
import {Card, Icon} from '@gravity-ui/uikit';
import {Envelope} from '@gravity-ui/icons';
import block from 'bem-cn-lite';
import Image from 'next/image';

type Props = {
    username: string;
    image: string;
    email: string;
};
const b = block('user-card');

export function OtherUserCard({email, image, username}: Props) {
    return (
        <div>
            <div className={styles[b('user-data')]}>
                <div className={styles[b()]}>
                    <Card className={styles[b('body')]}>
                        <div className={styles[b()]}>
                            <Image
                                src={image}
                                width={120}
                                height={120}
                                style={{borderRadius: '50%'}}
                                alt="Фото пользователя"
                            />
                        </div>
                        <div className={styles[b('data')]}>
                            <h2 className={styles[b('username')]}>{username}</h2>
                            <h2 className={styles[b('with-icon')]}>
                                <Icon data={Envelope} />
                                {email}
                            </h2>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
