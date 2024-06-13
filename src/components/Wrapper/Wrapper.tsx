import React from 'react';

import SessionComponent from '@/components/Wrapper/WrapperComponents/SessionComponent';
import {ThemeComponent} from '@/components/Wrapper/WrapperComponents/ThemeComponent';
import MainLayout from '@/components/Wrapper/WrapperComponents/MainLayout';

export type AppProps = {
    children: React.ReactNode;
};

export const Wrapper: React.FC<AppProps> = ({children}) => {
    return (
        <SessionComponent>
            <ThemeComponent>
                <MainLayout>{children}</MainLayout>
            </ThemeComponent>
        </SessionComponent>
    );
};
