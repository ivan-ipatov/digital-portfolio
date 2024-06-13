import block from 'bem-cn-lite';
import {formatDate, getPosts} from '../../../utilities';
import {TPost} from '@/app/types';
import {HeroPostCards} from '@/components/Posts/HeroPostCards';
import {HeroSidePostCards} from '@/components/Posts/HeroSidePostCards';
import styles from './PostCard.module.scss';

const b = block('post-cards');

export async function PostCards() {
    const postsData: TPost[] = await getPosts();
    const PostsData = postsData.filter((post: TPost) => post.atGlance);

    const LatestGlance = PostsData[0];
    return (
        <div className={styles[b('grid-hero')]}>
            <HeroPostCards
                id={LatestGlance.id}
                links={LatestGlance.links}
                title={LatestGlance.title}
                thumbnail={LatestGlance.thumbnail}
                published={formatDate(LatestGlance.createdAt)}
                author={LatestGlance.author.name}
            />
            <HeroSidePostCards postsData={PostsData} />
        </div>
    );
}
