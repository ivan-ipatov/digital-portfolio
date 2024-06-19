'use client';
import {useState} from 'react';
import {Tabs} from '@gravity-ui/uikit';
import styles from './Profile.module.scss';
import {File} from '@gravity-ui/icons';
import block from 'bem-cn-lite';
import {TPost} from '@/app/types';
import {UserPostsProfile} from '@/components/Profile/UserPostsProfile';
import {UserDiplomasProfile} from '@/components/Profile/UserDiplomasProfile';

const b = block('tabs');

type Props = {
    UserPostsData: TPost[] | null;
    UserDiplomas: TPost[] | null;
};

export function ProfileTabs({UserPostsData, UserDiplomas}: Props) {
    const [tab, setTab] = useState('first');

    return (
        <>
            <Tabs activeTab={tab} size="l" className={styles[b()]}>
                <Tabs.Item id="first" title="Мои работы" onClick={() => setTab('first')} />
                <Tabs.Item
                    id="second"
                    title="Грамоты"
                    onClick={() => setTab('second')}
                    icon={<File />}
                />
            </Tabs>
            {tab === 'first' ? (
                <div className={styles[b('grid-post-cards')]}>
                    <UserPostsProfile UserPostsData={UserPostsData} />
                </div>
            ) : (
                <div className={styles[b('grid-diploma-cards')]}>
                    <UserDiplomasProfile DiplomaData={UserDiplomas} />
                </div>
            )}
        </>
    );
}
