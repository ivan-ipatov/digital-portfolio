import styles from './Home.module.scss';
import block from 'bem-cn-lite';
import {PostCards} from '@/components/Posts/PostCards';
import {PostsByCategory} from '@/components/Posts/PostsByCategory';
import {ChangeLog} from '@/components/Posts/ChangeLog';

const b = block('homepage-content');

export default function Home() {
    return (
        <main className={styles[b()]}>
            <PostCards />
            <ChangeLog />
            <PostsByCategory name={'Наука'} category={'science'} />
            <PostsByCategory name={'Программирование'} category={'programming'} />
            <PostsByCategory name={'ИИ'} category={'ai'} />
            <PostsByCategory name={'Дизайн'} category={'design'} />
        </main>
    );
}
