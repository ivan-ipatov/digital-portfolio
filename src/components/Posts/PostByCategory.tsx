'use client';
import * as React from 'react';
import {Card, Label, Link} from '@gravity-ui/uikit';
import styles from '@/components/Posts/PostCard.module.scss';
import Image from 'next/image';
import {TPost} from '@/app/types';
import block from 'bem-cn-lite';
import {formatDate} from '../../../utilities';

type Props = {
    postsByCategory: TPost[] | null;
};
const b = block('post-cards');

export function PostByCategory({postsByCategory}: Props): JSX.Element {
    return (
        <>
            {postsByCategory &&
                postsByCategory.slice(-8).map((post) => (
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
                                <p className={styles[b('title')]}>{post.title}</p>
                                <Label theme="warning">{post.author.name}</Label>
                                <p className={styles[b('date')]}>{formatDate(post.createdAt)}</p>
                            </div>
                        </Link>
                    </Card>
                ))}
        </>
    );
}
