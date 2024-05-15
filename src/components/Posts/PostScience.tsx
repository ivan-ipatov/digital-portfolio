import styles from '@/components/Posts/PostCard.module.scss';
import {postsData} from '../../../data';
import {Card, Label, Link, Text} from '@gravity-ui/uikit';
import Image from 'next/image';
import block from 'bem-cn-lite';

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

const b = block('post-cards');

export function PostScience() {
    let increment = 0;

    function RequiredData(post: PostProps) {
        if (post.category === 'Science' && increment < 8) {
            increment++;
            return true;
        }
        return false;
    }

    return (
        <div style={{paddingTop: '100px'}}>
            <Text variant="display-3">Наука</Text>
            <div className={styles[b('subpost-grid-science')]}>
                {postsData &&
                    postsData.map(
                        (post) =>
                            RequiredData(post) && (
                                <Card key={post.id}>
                                    <Link
                                        href={post.links[0]}
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
                                            <Label theme="warning">{post.author}</Label>
                                            <p className={styles[b('date')]}>{post.published}</p>
                                        </div>
                                    </Link>
                                </Card>
                            ),
                    )}
            </div>
        </div>
    );
}
