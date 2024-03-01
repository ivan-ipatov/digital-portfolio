'use client';

interface IProps {
    isDark: boolean;
    onClickButton: MouseEventHandler;
}

import {SiteLogoComponent} from './SiteLogoComponent';
import block from 'bem-cn-lite';
import './Header.scss';
import {Button, Icon} from '@gravity-ui/uikit';
import {MouseEventHandler} from 'react';
import {Moon, Sun} from '@gravity-ui/icons';

const b = block('header');

export function Header(props: IProps) {
    return (
        <div className={b('marking')}>
            <SiteLogoComponent isDark={props.isDark} />

            <div className={b('account')}>
                <p className={b('name')}>Digital-портфолио</p>
                <Button onClick={props.onClickButton} size="l" view="outlined">
                    <Icon data={props.isDark ? Sun : Moon} />
                </Button>
            </div>
        </div>
    );
}
