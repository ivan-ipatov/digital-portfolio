'use client';
import * as React from 'react';
import {useState} from 'react';
import {Tabs, Text} from '@gravity-ui/uikit';
import styles from './Profile.module.scss';
import {File} from '@gravity-ui/icons';
import block from 'bem-cn-lite';
import {TPost} from '@/app/types';
import UserPosts from '@/components/Profile/UserPosts';
import {formatDate} from '../../../utilities';
import PortfolioAttachments from '@/components/Posts/PortfolioAttachments';

const b = block('tabs');

type Props = {
    UserPostsData: TPost[] | null;
    UserDiplomas: TPost[] | null;
};

export function OtherProfileTabs({UserPostsData, UserDiplomas}: Props) {
    const [tab, setTab] = useState('first');

    return (
        <>
            <Tabs activeTab={tab} size="l" className={styles[b()]}>
                <Tabs.Item id="first" title="Работы" onClick={() => setTab('first')} />
                <Tabs.Item
                    id="second"
                    title="Грамоты"
                    onClick={() => setTab('second')}
                    icon={<File />}
                />
            </Tabs>
            {tab === 'first' ? (
                <div className={styles[b('grid-post-cards')]}>
                    {UserPostsData && UserPostsData?.length > 0 ? (
                        UserPostsData?.map((post) => (
                            <UserPosts
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                date={formatDate(post.createdAt)}
                                thumbnail={post.thumbnail}
                            />
                        ))
                    ) : (
                        <Text variant={'body-2'}>Пользователь не написал ни одного поста</Text>
                    )}
                </div>
            ) : (
                <div className={styles[b('grid-diploma-cards')]}>
                    {UserDiplomas && UserDiplomas?.length > 0 ? (
                        <PortfolioAttachments
                            attachments={UserDiplomas?.map((data) => data.attachments[0]) ?? []}
                        />
                    ) : (
                        <Text variant={'body-2'}>Пользователь не написал ни одного поста</Text>
                    )}
                </div>
            )}
        </>
    );
}
