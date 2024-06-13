import * as React from 'react';
import {TPost} from '@/app/types';
import {Link, Text} from '@gravity-ui/uikit';
import {formatDate} from '../../../utilities';
import UserPosts from '@/components/Profile/UserPosts';
import {AddNewPost} from '@/components/Profile/AddNewPost';

type Props = {
    UserPostsData: TPost[] | null;
};

export function UserPostsProfile(props: Props) {
    if (props.UserPostsData?.length !== 0) {
        return (
            <>
                <AddNewPost />
                {props.UserPostsData?.map((post) => (
                    <UserPosts
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        date={formatDate(post.createdAt)}
                        thumbnail={post.thumbnail}
                    />
                ))}
            </>
        );
    }
    return (
        <Text variant="body-2">
            Вы ещё не опубликовали ни одного поста. <Link href={'/create/portfolio'}>Создать?</Link>
        </Text>
    );
}
