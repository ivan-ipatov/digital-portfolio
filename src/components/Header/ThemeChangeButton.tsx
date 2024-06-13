'use client';
import * as React from 'react';
import {useContext} from 'react';
import {Button, Icon} from '@gravity-ui/uikit';
import {Moon, Sun} from '@gravity-ui/icons';
import {ThemeContext} from '@/components/Wrapper/WrapperComponents/ThemeContextComponent';

export function ThemeChangeButton() {
    const {theme, toggle} = useContext(ThemeContext);

    return (
        <Button onClick={toggle} size="l" view="outlined">
            <Icon data={theme === 'dark' ? Sun : Moon} />
        </Button>
    );
}
