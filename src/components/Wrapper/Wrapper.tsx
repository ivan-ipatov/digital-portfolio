'use client';

import block from 'bem-cn-lite';
import {Theme, ThemeProvider} from '@gravity-ui/uikit';

import './Wrapper.scss';
import {Footer} from '../Footer/Footer';
import {Header} from '../Header/Header';
import {useState} from 'react';

const b = block('wrapper');

const DARK = 'dark';
const LIGHT = 'light';
const DEFAULT_THEME = DARK;

export const DEFAULT_BODY_CLASSNAME = `g-root g-root_theme_${DEFAULT_THEME}`;

export type AppProps = {
    children: React.ReactNode;
};

export const Wrapper: React.FC<AppProps> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);
    const isDark = theme === DARK;
    return (
        <ThemeProvider theme={theme}>
            <div className={b('container')}>
                <Header
                    isDark={isDark}
                    onClickButton={() => (isDark ? setTheme(LIGHT) : setTheme(DARK))}
                />
                {children}
                <Footer isDark={isDark} />
            </div>
        </ThemeProvider>
    );
};
