'use client';

import {Skeleton, Tabs} from '@gravity-ui/uikit';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import {Heart, Lock} from '@gravity-ui/icons';
import {ComponentType, Suspense, lazy, useState} from 'react';
import UserCard from '@/components/Profile/UserCard';
import {ChangeUserDataModal} from '@/components/Profile/ChangeUserDataModal';
import styles from './Profile.module.scss';
import block from 'bem-cn-lite';
// import UserPosts from '@/components/Profile/UserPosts';
import SkeletonCards from './SkeletonCards';

const UserPosts = lazy(() => delayForDemo(import('@/components/Profile/UserPosts')));
const b = block('profile-page');

export default function ProfilePage() {
    const {status} = useSession();
    const [open, setOpen] = useState(false);
    const [tab, setTab] = useState('first');
    const router = useRouter();
    if (status === 'unauthenticated') {
        router.push('/api/auth/signin');
    }
    function addZero(num: number) {
        if (num >= 0 && num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    }
    return (
        <>
            {status === 'loading' ? (
                <div className={styles[b('skeleton-container')]}>
                    <Skeleton className={styles[b('skeleton')]} />
                </div>
            ) : (
                <div className={styles[b('user-data')]}>
                    <UserCard onClickProps={() => setOpen(true)} />
                    <ChangeUserDataModal openProps={open} onClickProps={() => setOpen(false)} />
                </div>
            )}

            <Tabs activeTab={tab} size="l" className={styles[b('tabs')]}>
                <Tabs.Item id="first" title="Мои работы" onClick={() => setTab('first')} />
                <Tabs.Item
                    id="second"
                    title="Сохранённые"
                    onClick={() => setTab('second')}
                    icon={<Heart />}
                />
                <Tabs.Item id="third" title="Секрет" disabled onClick={() => {}} icon={<Lock />} />
            </Tabs>
            <div className={styles[b('skeleton-cards-container')]}>
                {tab === 'first' ? (
                    <Suspense fallback={<SkeletonCards />}>
                        <UserPosts
                            title="Зелёные волны"
                            date={`${addZero(new Date().getDate())}.${addZero(new Date().getMonth() + 1)}.${addZero(new Date().getFullYear())}`}
                            src="https://images.unsplash.com/photo-1710438399422-2fca27686bcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </Suspense>
                ) : (
                    <Suspense fallback={<SkeletonCards />}>
                        <UserPosts
                            title="Цветочки"
                            date={`${addZero(new Date().getDate() + 1)}.${addZero(new Date().getMonth() + 1)}.${addZero(new Date().getFullYear())}`}
                            src="https://images.unsplash.com/photo-1709349669569-a0d0df064451?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </Suspense>
                )}
            </div>
        </>
    );
}
function delayForDemo(promise: Promise<{default: ComponentType<any>}>) {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    }).then(() => promise);
}
