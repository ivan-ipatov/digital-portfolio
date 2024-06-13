'use client';
import styles from '@/components/Posts/PostCard.module.scss';

import {Card, Label, Link} from '@gravity-ui/uikit';
import Image from 'next/image';
import block from 'bem-cn-lite';
import {formatDate} from '../../../utilities';

type Props = {
    postsData: {
        id: string;
        title: string;
        author: {
            name: string;
        };
        createdAt: string;

        thumbnail: string;
    }[];
};
const b = block('post-cards');

export function HeroSidePostCards({postsData}: Props) {
    return (
        <div className={styles[b('subpost-grid')]}>
            {postsData &&
                postsData.slice(1, 5).map(
                    (post: {
                        id: string;
                        thumbnail: string;
                        title: string | undefined;
                        createdAt: string;
                        author: {
                            name: string;
                        };
                    }) => (
                        <Card key={post.id}>
                            <Link
                                href={'/post/' + post.id}
                                view="primary"
                                className={styles[b('body-subpost')]}
                            >
                                <Image
                                    src={post.thumbnail}
                                    width={1920}
                                    height={1080}
                                    alt={'Изображение'}
                                    className={styles[b('image')]}
                                />
                                <div className={styles[b('subpost-content')]}>
                                    <p
                                        className={
                                            styles[b('title')] + ' ' + styles[b('hero-title')]
                                        }
                                    >
                                        {post.title}
                                    </p>
                                    <div className={styles[b('hero-author')]}>
                                        <Label theme="warning">{post.author.name}</Label>
                                    </div>
                                    <p className={styles[b('date')]}>
                                        {formatDate(post.createdAt)}
                                    </p>
                                </div>
                            </Link>
                        </Card>
                    ),
                )}
        </div>
    );
}
