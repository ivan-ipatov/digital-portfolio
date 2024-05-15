import {postsData} from '../../../data';
import Image from 'next/image';
import {Card, Label, Link} from '@gravity-ui/uikit';
import block from 'bem-cn-lite';
import styles from './PostCard.module.scss';

const b = block('post-cards');

export function PostCards() {
    return (
        <div className={styles[b('grid-hero')]}>
            <Card className={styles[b('body-main-post')]}>
                <Link href={postsData[0].links[0]} view="primary">
                    <div className={styles[b('body-main-post-animation')]}>
                        <Image
                            src={postsData[0].thumbnail}
                            width={200}
                            height={100}
                            alt={'Изображение'}
                            className={styles[b('hero-image')]}
                        />
                        <div className={styles[b('grid-hero-content')]}>
                            <div>
                                <p className={styles[b('title')]}>{postsData[0].title}</p>
                                <p className={styles[b('date')]}>{postsData[0].published}</p>
                            </div>
                            <div className={styles[b('hero-author')]}>
                                <Label theme="warning">{postsData[0].author}</Label>
                            </div>
                        </div>
                    </div>
                </Link>
            </Card>

            <div className={styles[b('subpost-grid')]}>
                {postsData &&
                    postsData.slice(1, 5).map((post) => (
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
                                    <p
                                        className={
                                            styles[b('title')] + ' ' + styles[b('hero-title')]
                                        }
                                    >
                                        {post.title}
                                    </p>
                                    <Label theme="warning">{post.author}</Label>
                                    <p className={styles[b('date')]}>{post.published}</p>
                                </div>
                            </Link>
                        </Card>
                    ))}
            </div>
        </div>
    );
}
