import type {Metadata} from 'next';
import {Wrapper} from '@/components/Wrapper';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import '../styles/globals.scss';
// import function to register Swiper custom elements
import {register} from 'swiper/element/bundle';
import {ReactNode} from 'react';
import {DEFAULT_BODY_CLASSNAME} from '@/components/Wrapper/WrapperComponents/ThemeComponent';
// register Swiper custom elements
register();

export const metadata: Metadata = {
    title: 'Valise - Digital Portfolio for Your Best Projects',
    description: 'Digital Portfolio',
};

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <html lang="ru">
            <body className={DEFAULT_BODY_CLASSNAME}>
                <Wrapper>{children}</Wrapper>
            </body>
        </html>
    );
}
