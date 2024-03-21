'use client';

interface IProps {
    isDark: boolean;
    onClickButton: MouseEventHandler;
}

import {SiteLogoComponent} from './SiteLogoComponent';
import block from 'bem-cn-lite';
import styles from './Header.module.scss';
import {Button, Icon, Skeleton} from '@gravity-ui/uikit';
import {MouseEventHandler, useState} from 'react';
import {Bars, Moon, Person, Sun} from '@gravity-ui/icons';
import {signIn, useSession} from 'next-auth/react';
import {usePathname} from 'next/navigation';
import UserHeader from './UserHeader';
import HeaderDrawer from './HeaderDrawer';
const b = block('header');

export function Header(props: IProps) {
    const [state, setState] = useState(false);
    const {status} = useSession();
    const path = usePathname();
    return (
        <div className={styles[b('marking')]}>
            <SiteLogoComponent />

            <div className={styles[b('account')]}>
                {status === 'loading' ? (
                    // Устанавливаем width для скелетона
                    <div className={styles[b('skeleton-container')]}>
                        <Skeleton className={styles[b('skeleton')]} style={{borderRadius: '50%'}} />
                    </div>
                ) : status === 'authenticated' ? (
                    // Если авторизован и не на странице /profile, то возвращаем аватарку, иначе изменение темы
                    path === '/profile' ? (
                        <Button onClick={props.onClickButton} size="l" view="outlined">
                            <Icon data={props.isDark ? Sun : Moon} />
                        </Button>
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
                <div className={styles[b('drawer')]}>
                    <Button size="l" view="outlined" onClick={() => setState(true)}>
                        <Icon data={Bars} />
                    </Button>
                </div>
                <HeaderDrawer setState={() => setState(false)} state={state} />
            </div>
        </div>
    );
}
