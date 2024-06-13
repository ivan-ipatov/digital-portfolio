import {Card, Link} from '@gravity-ui/uikit';
import Image from 'next/image';
import styles from './Profile.module.scss';
import block from 'bem-cn-lite';

const b = block('cards');

interface IProps {
    title: string;
    date: string;
    id: string;
    thumbnail: string;
}

export default function UserPosts(props: IProps) {
    return (
        <Card className={styles[b('body')]}>
            <Link href={'/post/' + props.id} view="primary">
                <div className={styles[b('post')]}>
                    <Image
                        src={props.thumbnail}
                        width={1920}
                        height={1080}
                        alt={'Изображение'}
                        className={styles[b('image')]}
                    />
                    <div>
                        <p className={styles[b('title')]}>{props.title}</p>
                        <p className={styles[b('date')]}>{props.date}</p>
                    </div>
                </div>
            </Link>
        </Card>
    );
}
