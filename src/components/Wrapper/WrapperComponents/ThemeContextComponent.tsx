'use client';

import {Context, createContext, useEffect, useState} from 'react';

function pass() {}

export const ThemeContext: Context<{theme: string; toggle: () => void}> = createContext({
    theme: 'dark',
    toggle: () => pass(),
});

const getFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
        const value = localStorage.getItem('theme');
        return value || 'dark';
    }
    return 'dark';
};

export const ThemeContextComponent = ({children}: {children: React.ReactNode}) => {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage();
    });

    const toggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>;
};
