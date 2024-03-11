'use client';

interface IProps {
    isDark: boolean;
    onClickButton: MouseEventHandler;
}

import {SiteLogoComponent} from './SiteLogoComponent';
import block from 'bem-cn-lite';
import styles from './Header.module.scss';
import {Button, Icon} from '@gravity-ui/uikit';
import {MouseEventHandler, useState} from 'react';
import {Bars, Moon, Sun} from '@gravity-ui/icons';
import {Drawer, DrawerItem} from '@gravity-ui/navigation';
const b = block('header');

export function Header(props: IProps) {
    const [state, setState] = useState(false);
    return (
        <div className={styles[b('marking')]}>
            <SiteLogoComponent isDark={props.isDark} />

            <div className={styles[b('account')]}>
                <p className={styles[b('name')]}>Digital-портфолио</p>
                <Button onClick={props.onClickButton} size="l" view="outlined">
                    <Icon data={props.isDark ? Sun : Moon} />
                </Button>
                <Button
                    size="l"
                    view="outlined"
                    onClick={() => setState(true)}
                    className={styles[b('drawer')]}
                >
                    <Icon data={Bars} />
                </Button>
                <Drawer
                    onEscape={() => setState(false)}
                    onVeilClick={() => setState(false)}
                    className={styles[b('drawer')]}
                >
                    <DrawerItem
                        id="item-1"
                        content={<p>Привет</p>}
                        visible={state}
                        direction="right"
                    />
                </Drawer>
            </div>
        </div>
    );
}
