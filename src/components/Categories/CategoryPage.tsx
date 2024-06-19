'use client';
import {TPost} from '@/app/types';
import UserPosts from '@/components/Profile/UserPosts';
import {formatDate} from '../../../utilities';
import styles from '@/components/Profile/Profile.module.scss';
import block from 'bem-cn-lite';

type Props = {
    PostsData: TPost[] | null;
};

const b = block('tabs');

export function CategoryPage({PostsData}: Props) {
    return (
        <div className={styles[b('grid-post-cards')]}>
            {PostsData?.map((post) => (
                <UserPosts
                    key={post.id}
                    title={post.title}
                    date={formatDate(post.createdAt)}
                    id={post.id}
                    thumbnail={post.thumbnail}
                />
            ))}
        </div>
    );
}
