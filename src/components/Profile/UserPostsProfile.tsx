import * as React from 'react';
import {TPost} from '@/app/types';
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
                <AddNewPost link={'portfolio'} />
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
    return <AddNewPost link={'portfolio'} />;
}
