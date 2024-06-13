'use client';
import {ReactNode, useEffect, useState} from 'react';

type Props = {
    children: ReactNode;
};

export default function ThemeProviderComponent({children}: Props) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (mounted) {
        return <>{children}</>;
    }
    return <div></div>;
}
