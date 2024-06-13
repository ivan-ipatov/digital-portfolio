import * as React from 'react';
import {ReactNode} from 'react';
import styles from '@/components/Wrapper/WrapperComponents/Wrapper.module.scss';
import {Header} from '@/components/Header/Header';
import {Footer} from '@/components/Footer/Footer';
import block from 'bem-cn-lite';

type Props = {
    children: ReactNode;
};
const b = block('wrapper');

export default function MainLayout({children}: Props) {
    return (
        <div>
            <div className={styles[b('container')]}>
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    );
}
