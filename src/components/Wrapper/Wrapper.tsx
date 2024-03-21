'use client';

import block from 'bem-cn-lite';
import {Theme, ThemeProvider} from '@gravity-ui/uikit';
import styles from './Wrapper.module.scss';
import {Footer} from '../Footer/Footer';
import {Header} from '../Header/Header';
import {useState} from 'react';
import {SessionProvider} from 'next-auth/react';
import {getCookie, setCookie} from './getThemeCookie';
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
    const toggleTheme = () => {
        if (isDark) {
            setCookie(LIGHT);
        } else {
            setCookie(DARK);
        }
        getCookie().then((cookie) => {
            setTheme(cookie ?? DEFAULT_THEME);
        });
    };
    return (
        <SessionProvider>
            <ThemeProvider theme={theme}>
                <div className={styles[b('container')]}>
                    <Header isDark={isDark} onClickButton={() => toggleTheme()} />
                    {children}
                    <Footer isDark={isDark} />
                </div>
            </ThemeProvider>
        </SessionProvider>
    );
};
