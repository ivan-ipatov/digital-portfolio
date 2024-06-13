import block from 'bem-cn-lite';
import styles from './PostCard.module.scss';
import {Text, UserLabel} from '@gravity-ui/uikit';
import Image from 'next/image';
import {Metadata} from 'next';
import {formatDate} from '../../../utilities';

type Props = {
    title: string;
    image: string;
    date: string;
    content: string;
    shortDescription: string;
    author: string;
};
const b = block('post-page');

export async function generateMetadata({title, shortDescription, image}: Props): Promise<Metadata> {
    return {
        title: title,
        description: shortDescription,
        openGraph: {
            images: image ?? '/no-photo.png',
        },
    };
}

export function PostPageChangeLog({title, content, date, author, image}: Props) {
    return (
        <div className={styles[b('grid')]}>
            <div className={styles[b('image-grid')]}>
                <div className={styles[b('meta-image')]}>
                    <Text variant="display-3" className={styles[b('title')]}>
                        {title}
                    </Text>
                    <div className={styles[b('meta-inside')]}>
                        <UserLabel type={'empty'}>{author}</UserLabel>
                        <UserLabel type={'empty'}>{formatDate(date)}</UserLabel>
                    </div>
                </div>
                <div className={styles[b('overlay')]}>
                    <Image
                        className={styles[b('image')]}
                        src={image}
                        alt={`Image of ${title}`}
                        width={1920}
                        height={1080}
                    ></Image>
                </div>
            </div>

            <Text variant="body-2" className={styles[b('markdown')]}>
                {content}
            </Text>
        </div>
    );
}
