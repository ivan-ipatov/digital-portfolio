'use client';

import {Card, Label, Link} from '@gravity-ui/uikit';
import styles from '@/components/Posts/PostCard.module.scss';
import Image from 'next/image';
import block from 'bem-cn-lite';
import NotFound from '../../../public/no-photo.png';

type Props = {
    id: string;
    title: string;
    thumbnail: string;
    published: string;
    author: string;
};
const b = block('post-cards');

export function HeroPostCards({id, title, thumbnail, published, author}: Props) {
    return (
        <Card className={styles[b('body-main-post')]}>
            <Link href={'/post/' + id} view="primary">
                <div className={styles[b('body-main-post-animation')]}>
                    <Image
                        src={thumbnail ?? NotFound}
                        width={200}
                        height={100}
                        alt={'Изображение'}
                        className={styles[b('hero-image')]}
                    />
                    <div className={styles[b('grid-hero-content')]}>
                        <div>
                            <p className={styles[b('title')]}>{title}</p>
                            <p className={styles[b('date')]}>{published}</p>
                        </div>
                        <div className={styles[b('hero-author')]}>
                            <Label theme="warning">{author}</Label>
                        </div>
                    </div>
                </div>
            </Link>
        </Card>
    );
}
