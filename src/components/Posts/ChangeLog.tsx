import {ChangeLogPostCard} from '@/components/Posts/ChangeLogPostCard';
import {getPosts} from '../../../utilities';

export async function ChangeLog() {
    const changeLogPosts = await getPosts();
    return <ChangeLogPostCard ChangelogPosts={changeLogPosts} />;
}
