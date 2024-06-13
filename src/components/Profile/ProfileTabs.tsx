'use client';
import {useState} from 'react';
import {Tabs} from '@gravity-ui/uikit';
import styles from './Profile.module.scss';
import {File} from '@gravity-ui/icons';
import UserPosts from '@/components/Profile/UserPosts';
import block from 'bem-cn-lite';
import {TPost} from '@/app/types';
import {UserPostsProfile} from '@/components/Profile/UserPostsProfile';

const b = block('tabs');

export function ProfileTabs({UserPostsData}: {UserPostsData: TPost[] | null}) {
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
            <div className={styles[b('grid-cards')]}>
                {tab === 'first' ? (
                    <UserPostsProfile UserPostsData={UserPostsData} />
                ) : (
                    <UserPosts
                        id={'1'}
                        title="Цветочки"
                        date="12"
                        thumbnail="https://images.unsplash.com/photo-1709349669569-a0d0df064451?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                )}
            </div>
        </>
    );
}
