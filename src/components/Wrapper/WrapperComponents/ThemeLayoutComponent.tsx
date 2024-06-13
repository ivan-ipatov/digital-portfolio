'use client';
import {ThemeProvider} from '@gravity-ui/uikit';
import React, {useContext} from 'react';
import {ThemeContext} from '@/components/Wrapper/WrapperComponents/ThemeContextComponent';

export function ThemeLayoutComponent({children}: {children: React.ReactNode}) {
    const {theme} = useContext(ThemeContext);
    return <ThemeProvider theme={theme ?? 'dark'}>{children}</ThemeProvider>;
}
