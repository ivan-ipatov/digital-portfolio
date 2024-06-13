'use client';
import styles from '@/components/Posts/PostCard.module.scss';

import {Card, Label, Link} from '@gravity-ui/uikit';
import block from 'bem-cn-lite';
import {formatDate} from '../../../utilities';

const b = block('post-cards');

interface PostProps {
    ChangelogPosts: {
        id: string;
        title: string;
        author: {
            name: string;
        };
        createdAt: string;
        categoryName: string;
        links: string[];
    }[];
}

export function ChangeLogPostCard({ChangelogPosts}: PostProps) {
    let increment = 0;

    function RequiredData(post: {
        id: string;
        title: string;
        author: {
            name: string;
        };
        createdAt: string;
        categoryName: string;
        links: string[];
    }) {
        if (post.categoryName.toLowerCase() === 'changelog' && increment < 5) {
            increment++;
            return true;
        }
        return false;
    }

    return (
        <div className={styles[b('subpost-grid-changelog')]}>
            {ChangelogPosts &&
                ChangelogPosts.map(
                    (post) =>
                        RequiredData(post) && (
                            <Card key={post.id} className={styles[b('body-subpost')]}>
                                <Link href={'/post/' + post.id} view="primary">
                                    <div className={styles[b('subpost-content')]}>
                                        <p className={styles[b('title')]}>{post.title}</p>
                                        <Label theme="warning">{post.author.name}</Label>
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
