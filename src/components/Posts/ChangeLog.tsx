import styles from '@/components/Posts/PostCard.module.scss';
import {postsData} from '../../../data';
import {Card, Label, Link} from '@gravity-ui/uikit';
import block from 'bem-cn-lite';

const b = block('post-cards');

interface PostProps {
    id: number;
    title: string;
    content: string;
    author: string;
    published: string;
    category: string;
    links: string[];
    thumbnail: string;
}

export function ChangeLog() {
    let increment = 0;

    function RequiredData(post: PostProps) {
        if (post.category === 'ChangeLog' && increment < 5) {
            increment++;
            return true;
        }
        return false;
    }

    return (
        <div className={styles[b('subpost-grid-changelog')]}>
            {postsData &&
                postsData.map(
                    (post: PostProps) =>
                        RequiredData(post) && (
                            <Card key={post.id} className={styles[b('body-subpost')]}>
                                <Link href={post.links[0]} view="primary">
                                    <div className={styles[b('subpost-content')]}>
                                        <p className={styles[b('title')]}>{post.title}</p>
                                        <Label theme="warning">{post.author}</Label>
                                        <p className={styles[b('date')]}>{post.published}</p>
                                    </div>
                                </Link>
                            </Card>
                        ),
                )}
        </div>
    );
}
