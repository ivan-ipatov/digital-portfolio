import {Card} from '@gravity-ui/uikit';
import Image from 'next/image';
import styles from './Profile.module.scss';
import block from 'bem-cn-lite';
const b = block('cards');

interface IProps {
    title: string;
    date: string;
    src: string;
}

export default function UserPosts(props: IProps) {
    return (
        <div className={styles[b()]}>
            <Card className={styles[b('body')]}>
                <div>
                    <Image
                        src={props.src}
                        width={200}
                        height={100}
                        alt={'Изображение'}
                        className={styles[b('image')]}
                    />
                    <div>
                        <p className={styles[b('title')]}>{props.title}</p>
                        <p className={styles[b('date')]}>{props.date}</p>
                    </div>
                </div>
            </Card>
        </div>
    );
}
