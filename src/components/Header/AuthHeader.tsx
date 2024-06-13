'use client';
import * as React from 'react';
import styles from '@/components/Header/Header.module.scss';
import {Button, Icon, Skeleton} from '@gravity-ui/uikit';
import {ThemeChangeButton} from '@/components/Header/ThemeChangeButton';
import UserHeader from '@/components/Header/UserHeader';
import {signIn, useSession} from 'next-auth/react';
import {Person} from '@gravity-ui/icons';
import HeaderDrawer from '@/components/Header/HeaderDrawer';
import {usePathname} from 'next/navigation';
import block from 'bem-cn-lite';

const b = block('header');

export function AuthHeader() {
    const {status} = useSession();
    const path = usePathname();
    return (
        <div className={styles[b('account')]}>
            {status === 'loading' ? (
                // Устанавливаем width для скелетона
                <div className={styles[b('skeleton-container')]}>
                    <Skeleton className={styles[b('skeleton')]} style={{borderRadius: '50%'}} />
                </div>
            ) : status === 'authenticated' ? (
                // Если авторизован и не на странице /profile, то возвращаем аватарку, иначе изменение темы
                path === '/profile' ? (
                    <ThemeChangeButton />
                ) : (
                    <UserHeader />
                )
            ) : (
                // Если не авторизован
                <div className={styles[b('sign-in-mobile')]}>
                    <Button size="l" onClick={() => signIn()}>
                        <Icon data={Person} />
                        Войти
                    </Button>
                </div>
            )}
            <HeaderDrawer />
        </div>
    );
}
